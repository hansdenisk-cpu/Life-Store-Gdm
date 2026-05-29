import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home(){
  return(
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar/>
      <Hero/>

      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Produits populaires
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((item)=>(
            <div key={item} className="bg-slate-900 rounded-3xl p-5 border border-slate-800 hover:scale-105 transition">
              <div className="bg-slate-800 h-52 rounded-2xl flex items-center justify-center">
                <img src="/logo.jpeg" className="w-24 opacity-70"/>
              </div>

              <h3 className="text-xl font-bold mt-5">
                iPhone 15 Pro Max
              </h3>

              <p className="text-cyan-400 text-2xl font-bold mt-2">
                950 000 FCFA
              </p>

              <button className="mt-5 w-full bg-cyan-500 text-black py-3 rounded-2xl font-bold">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-900">
        <h2 className="text-4xl font-bold mb-6">
          Pourquoi choisir Life Store GDM ?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-950 p-6 rounded-3xl">
            <h3 className="text-xl font-bold">Produits Premium</h3>
            <p className="text-slate-400 mt-4">
              Une sélection des meilleurs appareils électroniques.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-3xl">
            <h3 className="text-xl font-bold">Livraison Rapide</h3>
            <p className="text-slate-400 mt-4">
              Livraison fiable partout au Cameroun.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-3xl">
            <h3 className="text-xl font-bold">Support 24/7</h3>
            <p className="text-slate-400 mt-4">
              Assistance WhatsApp, SMS et appel direct.
            </p>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}