import Link from "next/link";

export function BecomeMemberHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#032a0d]/10 bg-[#032a0d] text-white">
      <div className="absolute inset-0 opacity-30 bg-[url('https://applyarchershub.dlsu.edu.ph/UpdatedAssets/SCSS/ApplicationLandingPage/images/hero-bg.png')] bg-cover bg-center" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <p className="text-xs sm:text-sm text-white/70 mb-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>{" "}
          <span className="mx-1 sm:mx-2 text-white/50">/</span>{" "}
          <span className="font-medium text-white">Become a Member</span>
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
          Become a Member
        </h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/80 leading-relaxed">
          Begin your chaplaincy journey with Pearl of the Orient International
          Auxiliary Chaplain Values Educators Inc. Complete the application form
          in a few guided steps.
        </p>
      </div>
    </section>
  );
}

