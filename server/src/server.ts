import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHouresStringToMInutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHouresString} from './utils/convert-minutes-to-houres-string'

const app = express()
const prisma = new PrismaClient({
    log: ['query']
})

app.use(express.json())
app.use(cors())

// HTTP methodes / API RESTFull / HTTP Codes

/**
 * Query: Disponível na URL quando precisamos de percistencia (filtros, página);
 * Route: Disponpivel da URL mas não identificado (quando é obvio, tipo ../post/5 )
 * Body: quando há muita informação, esta informação não fica visível
 */


app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return res.status(200).json(games)
})

app.post('/game/:id/ads', async (req, res) => {
    const gameId: string = req.params.id
    const body: any = req.body

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            houreStart: convertHouresStringToMInutes(body.houreStart),
            houreEnd: convertHouresStringToMInutes(body.houreEnd),
            useVoiceChanel: body.useVoiceChanel
        }
    })

    return res.status(201).json(ad)
})

app.get('/game/:id/ads', async (req, res) => {
    const gameId: string = req.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChanel: true,
            yearsPlaying: true,
            houreStart: true,
            houreEnd: true,
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return res.status(200).send(ads.map((ad) => {
        return {
            ...ad,
            wedays: ad.weekDays.split(','),
            houreStart: convertMinutesToHouresString(ad.houreStart),
            houreEnd: convertMinutesToHouresString(ad.houreEnd)
        }
    }))
})

app.get('/ad/:id/discord', async (req, res) => {
    const adId = req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        }, where: {
            id: adId
        }
    })

    return res.status(200).send({
        discord: ad.discord
    })
})

app.listen(3333)