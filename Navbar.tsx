export default function Navbar(){
  return(
    <nav className="flex justify-between items-center px-6 py-5 border-b border-slate-800">
      <div className="flex items-center gap-3">
        <img src="/logo.jpeg" className="w-12 h-12 rounded-full object-cover"/>
        <h1 className="text-2xl font-bold text-cyan-400">
          Life Store GDM
        </h1>
      </div>

      <div className="hidden md:flex gap-8 text-slate-300">
        <a href="#">Accueil</a>
        <a href="#">Boutique</a>
        <a href="#">Gaming</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-cyan-500 px-5 py-2 rounded-xl text-black font-bold">
        Panier
      </button>
    </nav>
  )
}