import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className="bg-zinc-800 flex justify-center py-5">
      <img src={igniteLogo} className='size-8' />
      <h1 className='text-white ml-1'>Ignite Feed</h1>
    </header>
  )
}