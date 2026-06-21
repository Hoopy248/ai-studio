export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[75%]">

  <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-full px-8 py-3 flex items-center justify-between shadow-2xl">

    {/* LOGO */}
    <div className="flex items-center gap-5">

      <img
        src="/logo.png"
        alt="Novyth"
        className="h-20 w-auto object-contain"
      />

    </div>

    {/* NAV LINKS */}
    <div className="hidden md:flex items-center gap-10">

  <a
    href="#work"
    className="text-sm text-zinc-300 hover:text-white transition-colors"
  >
    Work
  </a>

  <a
    href="#pricing"
    className="text-sm text-zinc-300 hover:text-white transition-colors"
  >
    Pricing
  </a>

  <a
    href="#contact"
    className="text-sm text-zinc-300 hover:text-white transition-colors"
  >
    Contact
  </a>

  <a
    href="https://ai-portfolio-seven-sigma.vercel.app/"
    target="_blank"
    className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all duration-300"
  >
    Portfolio
  </a>

</div>

  </div>

</nav>
      {/* HERO */}
<section className="relative min-h-screen overflow-hidden">

  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px]"
  >
    <source src="/videos/Surreal dreamlike.mp4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-10 min-h-screen flex items-center">

    <div className="max-w-2xl">
<img
  src="/novythlogo2.png"
  alt="Novyth"
  className="h-24 w-auto mb-8 opacity-90"
/>
      <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
        AI CREATIVE STUDIO
      </p>

      <h1 className="text-7xl md:text-8xl font-semibold leading-[0.95] tracking-tight mb-8">
        Cinematic AI
        <br />
        for Brands
      </h1>

      <p className="text-zinc-300 text-xl leading-relaxed max-w-xl mb-10">
        Atmospheric AI-driven commercials, fashion visuals,
        luxury storytelling and cinematic social content.
      </p>

      <div className="flex gap-5">

        <a
          href="#work"
          className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all"
        >
          Explore Campaigns
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
        >
          Contact
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
          AI-native visual storytelling
          for modern brands and visual campaigns.
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          NOVYTH creates cinematic commercials, product advertisements and social-first content powered by modern AI workflows.
        </p>

      </section>

{/* FEATURED CAMPAIGNS */}
<section id="work" className="max-w-7xl mx-auto px-6 pb-28">

  <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
    Selected Concepts
  </p>


  <div
  id="campaigns"
  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
>

    {/* RITA ROW */}
    <div className="relative shrink-0 w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 snap-start">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/ritarow.mp4" type="video/mp4" />
      </video>
<div className="absolute top-4 left-4 z-10">
  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] uppercase tracking-wider border border-white/10">
    Concept
  </span>
</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold">Rita Row</h3>
        <p className="text-zinc-400 text-sm">
          AI Fashion Campaign
        </p>
      </div>

    </div>

    {/* CASTLERY */}
    <div className="relative shrink-0 w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 snap-start">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/castlery.mp4" type="video/mp4" />
      </video>
<div className="absolute top-4 left-4 z-10">
  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] uppercase tracking-wider border border-white/10">
    Concept
  </span>
</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold">Castlery</h3>
        <p className="text-zinc-400 text-sm">
          AI Commercial Concept
        </p>
      </div>

    </div>

    {/* THE MINERS */}
    <div className="relative shrink-0 w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 snap-start">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/miners.mp4" type="video/mp4" />
      </video>
<div className="absolute top-4 left-4 z-10">
  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] uppercase tracking-wider border border-white/10">
    Concept
  </span>
</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold">The Miners Coffee</h3>
        <p className="text-zinc-400 text-sm">
          AI Lifestyle Campaign
        </p>
      </div>

    </div>
{/* Rahava Raamat */}
    <div className="relative shrink-0 w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 snap-start">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/rahva.mp4" type="video/mp4" />
      </video>
<div className="absolute top-4 left-4 z-10">
  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] uppercase tracking-wider border border-white/10">
    Concept
  </span>
</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold">Rahva Raamat</h3>
        <p className="text-zinc-400 text-sm">
          AI Commercial Concept
        </p>
      </div>

    </div>
    {/* Huckberry */}
    <div className="relative shrink-0 w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 snap-start">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/huckberry.mp4" type="video/mp4" />
      </video>
<div className="absolute top-4 left-4 z-10">
  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] uppercase tracking-wider border border-white/10">
    Concept
  </span>
</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold">Huckberry</h3>
        <p className="text-zinc-400 text-sm">
          AI Summer Campaign
        </p>
      </div>

    </div>
  </div>
<div className="flex justify-center mt-10">
  <a
    href="https://www.instagram.com/novyth.studio/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-full border border-white/10 bg-zinc-950 hover:bg-zinc-900 transition-all duration-300"
  >
    View All Campaigns →
  </a>
</div>
</section>

      {/* PRICING */}
<section id="pricing" className="max-w-7xl mx-auto px-6 py-32 text-white">

  <div className="text-center mb-20">
    <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
      Pricing
    </p>

    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
      Cinematic AI Videos
    </h2>

    <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
      AI-generated visuals for brands, 
      fashion campaigns and modern storytelling.
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
        <p>• Cinematic AI video</p>
        <p>• Logo integration</p>
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
        <p>• Logo integration</p>
        <p>• Sound design / music</p>
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
        <p>• Advanced visual direction</p>
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
      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10">

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
              novyth.studio@gmail.com
            </p>

            <p>
              Instagram: @novyth.studio
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}