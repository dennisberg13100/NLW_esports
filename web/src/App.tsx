import './styles/main.css'
import logo from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'


function App() {
  return (
  <div className="max-w-[1344px] mx-auto flex items-center flex-col">
    <img src={logo} alt='Logo' className='w-52'/>
    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
    </h1>
    <div className="grid grid-cols-6 gap-6 mt-16">
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/img1.png" alt="" className="w-full"/>
        <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
          <strong className="text-white block">Leage of Legends</strong>
          <span  className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/img2.png" alt="" className="w-full"/>
        <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
          <strong className="text-white block">Dota 2</strong>
          <span  className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/img3.png" alt="" className="w-full"/>
        <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
          <strong className="text-white block">Counter Strike</strong>
          <span  className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/img4.png" alt="" className="w-full"/>
        <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
          <strong className="text-white block">Apex</strong>
          <span  className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/img5.png" alt="" className="w-full"/>
        <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
          <strong className="text-white block">Fortnite</strong>
          <span  className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/img6.png" alt="" className="w-full"/>
        <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
          <strong className="text-white block">World Of Warcraft</strong>
          <span  className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
        </div>
      </a>
      
    </div>
    <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 self-stretch flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">Não encontrou o seu duo?</strong>
          <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size="24" />Publicar anúncio
        </button>
      </div>
    </div>
  </div>
  )
}

export default App
