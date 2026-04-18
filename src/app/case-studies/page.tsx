export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label text-[10px] uppercase tracking-widest text-secondary">Technical Insights</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-slate-50">
          Insights on Building <span className="text-primary text-glow">Scalable Systems</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-body leading-relaxed">
          Deep dives into Java backend architecture, cloud-native patterns, and engineering high-throughput distributed environments.
        </p>
      </header>

      {/* Featured Post */}
      <section className="mb-24">
        <div className="group relative grid md:grid-cols-12 gap-0 overflow-hidden rounded-2xl bg-surface-container-low ghost-border hover:outline-primary/40 transition-all duration-500">
          <div className="md:col-span-7 relative h-[400px] md:h-auto overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Abstract cinematic visualization of digital data flow and neural networks with glowing blue and violet connections in deep space"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWekvYmIa0TIkw6yKB3vW3SdBVWTEI9FyS2fdX1LSnV9ND1mikS3FEG-7StjmUbw0KtWfRzELiokVxYjL1rstq4C2NJYmh2R0fKsJBqovcc0vaOtMUcJm999smCxqF8Pghs-E22GHz7O8t7XSI8M7E65JoeK7CKX5xsApOX0YFe_xw3mbwZ6M3-b3RMjomCuVuAmIUA0WibtejQZ3xCIZJ-nOTvQZejqvb0ABel0yvdEDPouZu1ZtB1uO8zFCeIoYYEzO1o-0WlTq7"
              alt="Digital data flow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low md:hidden"></div>
          </div>
          <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-label text-xs uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">Featured Guide</span>
              <span className="text-on-surface-variant text-xs font-label">12 MIN READ</span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-50 mb-6 leading-tight group-hover:text-primary transition-colors">
              The Anatomy of Ultra-Low Latency Java Systems
            </h2>
            <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
              Exploring mechanical sympathy, LMAX Disruptor patterns, and Garbage Collection tuning for high-frequency trading platforms built on the JVM.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center ghost-border">
                <span className="material-symbols-outlined text-primary text-xl">architecture</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-200">System Design</p>
                <p className="text-xs text-on-surface-variant">March 14, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <article className="group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden ghost-border hover:translate-y-[-4px] transition-all duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Server room with rows of racks and glowing blue indicator lights representing high performance backend infrastructure"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeuXM0OfQax_l0slsoXb1B9E1hGReHL2AqXpHre8odWe6Z1N7cr7R2bGDTZrQfA8PRbuUH4GQv2psw1ooZlYS2cSPuPLnAaydosiqq-UFacPSetMd0aPSWrGfNP7KwaUa0EPK6myN05emJNbc7fpneFK7WBOb_anNvw0o_n79LtHclInAcEhUAhloP986AVAJ1XFr9_BnqJF2KOsoqavNHrARfpBtq36OxEJUiEO_lYXCqx-HwmsiqLY8SlsRveXg9Z0F_6pGeB5yh"
              alt="Server room"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-label font-bold text-secondary tracking-widest uppercase">Java</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-label text-on-surface-variant tracking-widest mb-4">8 MIN READ</span>
            <h3 className="font-headline text-xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">How to Design Scalable Backend Systems</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
              Moving beyond monolithic thinking. A practical guide to horizontal scaling, statelessness, and effective caching strategies.
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-xs font-label text-on-surface-variant">MAR 10, 2024</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Card 2 */}
        <article className="group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden ghost-border hover:translate-y-[-4px] transition-all duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Extreme close up of a microchip with glowing circuit traces reflecting blue and pink neon light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-tUPLcrcMHD-XEhnUE-1bnaD2_FV_ChtvSAgSY8RSSQD4yb27s309EqTQvyxidNNtk9eXmWHXArdojXPuTgs0ERa7ATr-bJCH8xnT1MjVoJIlIv2dz5XJsqLMPz8-GTD915e2m-zrhHv-xT5TF_4Fsoh5USZ9alN-IMPzk2QpeCCEYAFpBNStSbCLoWMS4bZIoErCjF6spJ6jaynM__UPRAWZ9uPxHZgl57r_KCZNMcrxhaVux1x3LFrhp9xtpc8UOoabQQeNGJ4O"
              alt="Microchip"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-label font-bold text-secondary tracking-widest uppercase">Spring Boot</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-label text-on-surface-variant tracking-widest mb-4">15 MIN READ</span>
            <h3 className="font-headline text-xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">Spring Boot for Production Systems</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
              Hardening your Spring Boot microservices. Security, observability, and containerization best practices for the modern enterprise.
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-xs font-label text-on-surface-variant">FEB 28, 2024</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Card 3 */}
        <article className="group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden ghost-border hover:translate-y-[-4px] transition-all duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Symmetric visualization of AI nodes and interconnected mesh networks in a dark digital void"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATa89n0lZs9HImRd1kn5uFnodMSR0i4Tw0r2kttAx1V9_PTKJ6XPEZFmeAzOxf0GTP0R0o8Y7Xrr_QUnKhVEsuMXVtSeNqxtnPXhJlKy4E3fr6bFbYNyHmV5v-TzMp7wf4OWDSl4LQM5cMt50wYTb0FIaJJ_24-Jn7z3B8f4lR3FfmoT0zvhqAFLnb3EaDP5J9TLGmwr6WZcW4x5AAUdDfgJwyysVi-hBmvStj_Scg-nDpdiIRdK2WSjR68Fm5-3WXcFFvVqL1HRX1"
              alt="AI nodes"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-label font-bold text-secondary tracking-widest uppercase">AI</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-label text-on-surface-variant tracking-widest mb-4">10 MIN READ</span>
            <h3 className="font-headline text-xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">Integrating LLMs into Java Ecosystems</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
              Leveraging LangChain4j and Spring AI to build robust generative AI features within your existing Java applications.
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-xs font-label text-on-surface-variant">FEB 15, 2024</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Card 4 */}
        <article className="group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden ghost-border hover:translate-y-[-4px] transition-all duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Digital dashboard showing complex data visualization with neon graphs and analytical metrics on a dark background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZneNiBlauYf4FaF0G4h7WYgzAwJDcHGafowaliFhHwmx2ohlRlQbmFEykum0wWfX_X_TIiwl06dJRUwuHYfapGdmeq6EoS_K3BFoSKXR_BgSfvoch5dPk_0Arpbm_Ae6ElKH71ehrZCDHKUdfffBEb8hhkp_KIcJ-P7FUD82WgX2na995lpMFI8tYMTaCns5dTq1jM1tV36gzc0c5e86z5t3Aua5wVYMQzeETdSkWBeguz_JbZtxBfUNozYO-jVozACKwkINKvtvk"
              alt="Digital dashboard"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-label font-bold text-secondary tracking-widest uppercase">DevOps</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-label text-on-surface-variant tracking-widest mb-4">6 MIN READ</span>
            <h3 className="font-headline text-xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">Monitoring Distributed Traces</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
              Using OpenTelemetry and Micrometer to gain visibility into complex call chains in a microservices architecture.
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-xs font-label text-on-surface-variant">JAN 22, 2024</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Card 5 */}
        <article className="group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden ghost-border hover:translate-y-[-4px] transition-all duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="High tech architectural blueprints with digital glowing lines indicating structure and depth"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqWCKeHaUOmeTEULfN9oWgu8VEu1iKVOF7_PGUcyG3xKLmU3Y1KJvgfMzqBAb69hGi6mu1HUE9p5DqffK0yDeG4lxsKOUOijTud6fBCs-4seuQ9cG_I0DnZghjFgUCoYmR2fXL8yYgYnwJn9Tbq_fhAqAqfYPwAP2cfzyyiEKlcwOPnSpXrDaLap_XuZlzVDKWAIIvCIhEOMjLlrbEcE0YBEiNEpd-_fXj5ZQGxKV9vWKkYSVPu5AQnyyQbPoY1V_i6a_D2WByjUB0"
              alt="High tech architectural blueprints"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-label font-bold text-secondary tracking-widest uppercase">Database</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-label text-on-surface-variant tracking-widest mb-4">20 MIN READ</span>
            <h3 className="font-headline text-xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">Postgres vs. NoSQL for Large Data</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
              When to stick with ACID and when to embrace eventual consistency. A comprehensive comparison for system architects.
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-xs font-label text-on-surface-variant">JAN 05, 2024</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Card 6 */}
        <article className="group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden ghost-border hover:translate-y-[-4px] transition-all duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Minimalist desk setup with laptop screen showing clean code and a cup of coffee in a low-lit technical workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2QnHenNfKKNbD0oHI_s18VrDM3N_S2NxDJ7tQmdSIiw8DcusvW6ezxYnuK4ZvfCLoD6AGpu4AGpV3j7SvIzFHb2kJuaQ8HGWss8pP897N8xxoNn-32dKAUQtYeT50lpjsTYJ0BdxWCgKFFDRYvMHoBS2BPBr6nSR0W0BRWlp5SKmz6qNiGZpiY04n0-eVaCJlAqYhEMZdib41e7kvCvKuqS50wpeq0pVuiCDSV08tVX5n4CQDzqaPhR5Zq9KZho1X5SL42NXIjZDT"
              alt="Minimalist desk setup"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-label font-bold text-secondary tracking-widest uppercase">Career</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-label text-on-surface-variant tracking-widest mb-4">5 MIN READ</span>
            <h3 className="font-headline text-xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">Beyond Code: Technical Leadership</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
              Transitioning from a Senior Engineer to a System Architect. Focus on decision-making, mentorship, and high-level strategy.
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-xs font-label text-on-surface-variant">DEC 20, 2023</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </article>
      </div>

      {/* Pagination / Load More */}
      <div className="mt-20 flex justify-center">
        <button className="px-8 py-3 rounded-full border border-primary/20 text-primary font-label text-xs uppercase tracking-[0.2em] hover:bg-primary/5 transition-all duration-300">
          Load More Insights
        </button>
      </div>

      {/* Newsletter Section */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12 border-y border-white/5 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-slate-50 mb-6">Stay Architecturally Sound</h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
            Join 5,000+ engineers receiving bi-weekly deep dives into system design and advanced Java techniques.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              className="flex-grow bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-6 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-primary text-on-primary font-bold px-8 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
