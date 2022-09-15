import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreadAdBanner'
import './styles/main.css'
import logo from './assets/Logo.svg'
import { GameController } from 'phosphor-react'
import { Input } from './components/Input'
interface Game {
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
        console.log(game)
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
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
        <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                  Qual o game?
              </label>
                <Input 
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor='name'>Seu nome (ou nickname)</label>
                <Input id='name' type="text" placeholder='Como te chamam dentro do game?'/>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                  <Input id='yearPlaying' type='number' placeholder='Tudo bem ser ZERO' />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual o seu Discord?</label>
                  <Input id="discord" type="text" placeholder="Usuário#000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor='weekDays'>Quando costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-1">
                      <button 
                        title="Domingo"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >D</button>
                      <button 
                        title="Segunda-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >S</button>
                      <button 
                        title="Terça-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >T</button>
                      <button 
                        title="Quarta-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >Q</button>
                      <button 
                        title="Quinta-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >Q</button>
                      <button 
                        title="Sábado"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >S</button>        
                      <button 
                        title="Sexta-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >S</button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="houreStart">Qual horario do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="houreStart" type="time" placeholder="De"/>
                    <Input id="houreEnd" type="time" placeholder="Até"/>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2"> 
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz.
              </div>

              <footer className="mt-4 flex justify-end gap-4"> 
                <Dialog.Close 
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold  hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button 
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size={24}/>
                  Encontrar duo
                </button>
              </footer>
              
            </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
  )
}

export default App
