import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreadAdBanner'
import './styles/main.css'
import logo from './assets/Logo.svg'
import { CreateAdModal } from './components/CreateAdModal'
export interface Game {
  id: string 
  title: string
  bannerURL: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(()=> {
    fetch('http://localhost:3333/games')
    .then(res => res.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
  <div className="max-w-[1344px] mx-auto flex items-center flex-col">
    <img src={logo} alt='Logo' className='w-52'/>
    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">
      {games.map( game => {
        return (
          <GameBanner 
            key={game.id}
            bannerUrl={game.bannerURL}
            title={game.title}
            adsCount={game._count.ads}
          />    
        )
      })}  
    </div>
    <Dialog.Root>
      <CreateAdBanner />
      <CreateAdModal />
    </Dialog.Root>
  </div>
  )
}

export default App
