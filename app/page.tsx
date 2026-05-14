export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">

            <p className="uppercase tracking-[0.35em] text-zinc-400 text-sm mb-6">
              AI Cinematic Visuals
            </p>

            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none mb-8">
              Cinematic AI
              <br />
              for Brands
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Atmospheric AI-driven commercials, fashion visuals,
              luxury storytelling, and cinematic social content.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#work"
                className="px-6 py-3 rounded-2xl bg-white text-black font-medium"
              >
                View Work
              </a>

              <a
                href="https://ai-portfolio-seven-sigma.vercel.app/"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-white/20"
              >
                Full Portfolio
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-28">

        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
          About
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-10">
          AI-native cinematic storytelling
          for modern brands and visual campaigns.
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          I create atmospheric AI-driven visuals focused on cinematic
          realism, luxury aesthetics, emotional storytelling,
          and modern social-first campaigns.
        </p>

      </section>

{/* SHOWCASE */}
<section id="work" className="max-w-6xl mx-auto px-6 pb-28">

  <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
    Selected Work
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* VERTICAL VIDEO */}
    <div className="md:row-span-2 rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/videos/persiandreamsfix.mp4" type="video/mp4" />
      </video>
    </div>

    {/* TOP RIGHT */}
    <div className="md:col-span-2 rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/videos/editorial2.mp4" type="video/mp4" />
      </video>
    </div>

    {/* BOTTOM RIGHT */}
    <div className="md:col-span-2 rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/videos/editorial1.mp4" type="video/mp4" />
      </video>
    </div>

  </div>
</section>

      {/* PRICING */}
 export default function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-white">
      <div className="text-center mb-20">
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
          Pricing
        </p>

        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          Cinematic AI Videos
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          AI-driven cinematic visuals for brands, businesses,
          fashion campaigns and luxury storytelling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* BASIC */}
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-10">
          <div className="mb-12">
            <h3 className="text-2xl tracking-[0.2em] uppercase mb-6">
              Basic
            </h3>

            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              From
            </p>

            <h4 className="text-6xl font-semibold tracking-tight mb-4">
              €90
            </h4>

            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              Up to 20 Seconds
            </p>
          </div>

          <div className="space-y-4 text-zinc-300">
            <p>• 1 concept</p>
            <p>• Cinematic AI video
            <p>• Logo integration</p></p>
            <p>• Professional editing</p>
            <p>• Basic sound design</p>
            <p>• 1 revision</p>
          </div>
        </div>

        {/* STANDARD */}
        <div className="rounded-[2rem] border border-white/20 bg-zinc-900 p-10">
          <div className="mb-12">
            <h3 className="text-2xl tracking-[0.2em] uppercase mb-6">
              Standard
            </h3>

            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              From
            </p>

            <h4 className="text-6xl font-semibold tracking-tight mb-4">
              €150
            </h4>

            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              Up to 30 Seconds
            </p>
          </div>

          <div className="space-y-4 text-zinc-300">
            <p>• 1–2 concepts</p>
            <p>• Multiple cinematic shots</p>
            <p>• Professional editing & pacing</p>
            <p>• Sound design / music
            <p>• Logo integration</p></p>
            <p>• 2 revisions</p>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-10">
          <div className="mb-12">
            <h3 className="text-2xl tracking-[0.2em] uppercase mb-6">
              Premium
            </h3>

            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              From
            </p>

            <h4 className="text-6xl font-semibold tracking-tight mb-4">
              €250
            </h4>

            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              30+ Seconds
            </p>
          </div>

          <div className="space-y-4 text-zinc-300">
            <p>• Advanced cinematic storytelling</p>
            <p>• Color grading & sound design</p>
            <p>• Branding & logo integration</p>
            <p>• Multiple formats</p>
            <p>• 3 revisions</p>
          </div>
        </div>

      </div>

      <div className="mt-10 rounded-[2rem] border border-white/10 bg-zinc-950 px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-zinc-400">

        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-zinc-500 mb-2">
            Please Note
          </p>

          <p>
            Additional revisions or advanced requests may affect final pricing.
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-zinc-500 mb-2">
            Delivery Time
          </p>

          <p>
            Usually 3–7 working days depending on project complexity.
          </p>
        </div>

      </div>
    </section>
  )
}

      {/* CONTACT */}
      <section className="border-t border-white/10">

        <div className="max-w-5xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-10">
            Let’s create
            <br />
            something cinematic.
          </h2>

          <div className="space-y-4 text-zinc-400 text-lg">

            <p>
              alexei.pertsev2@email.com
            </p>

            <p>
              Instagram: @a_pertsev_
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}