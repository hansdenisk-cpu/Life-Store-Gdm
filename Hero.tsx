export default function Hero(){
  return(
    <section className="px-6 py-20 md:flex justify-between items-center">
      <div className="max-w-2xl">
        <span className="bg-cyan-500 text-black px-4 py-2 rounded-full font-bold">
          Premium Electronic Store
        </span>

        <h1 className="text-6xl font-black mt-8 leading-tight">
          Découvrez la technologie du futur
        </h1>

        <p className="mt-6 text-slate-300 text-lg">
          Smartphones, consoles, PC gaming et accessoires premium
          disponibles au meilleur prix au Cameroun.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold">
            Acheter maintenant
          </button>

          <button className="border border-slate-600 px-8 py-4 rounded-2xl">
            Explorer
          </button>
        </div>
      </div>

      <div className="mt-14 md:mt-0">
        <img src="/logo.jpeg" className="w-[420px] rounded-3xl border border-slate-700 shadow-2xl"/>
      </div>
    </section>
  )
}