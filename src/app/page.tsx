export default function Home() {
  return (
    <div className="relative overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="absolute inset-0 grid-bg -z-10 opacity-40"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-surface-container-highest rounded-full border border-outline-variant/15">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">
                🟢 Available for Select Projects
              </span>
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white">
              I Build Scalable
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}Systems{" "}
              </span>
              That Drive Business Growth
            </h1>
            <div className="space-y-4">
              <p className="font-body text-xl text-on-surface-variant max-w-xl">
                I design and develop high-performance backend systems, web
                applications, and automation tools that help businesses move
                faster, scale efficiently, and operate reliably.
              </p>
              <p className="font-label text-sm text-primary uppercase tracking-[0.1em] font-bold">
                Helping founders and businesses turn ideas into production-ready
                systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(105,218,255,0.4)] transition-all">
                Start a Project
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-lg border border-outline-variant/30 hover:bg-white/5 transition-all">
                View Work
              </button>
            </div>
          </div>
          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-700"></div>
            <div className="relative z-10 p-8">
              <img
                alt="Professional Portrait"
                className="w-full h-auto rounded-3xl group-hover:brightness-110 transition-all duration-700 shadow-2xl aspect-square object-cover"
                src="/kamesh-prof-webp.webp"
              />
              <div className="absolute -top-4 -right-4 bg-surface-container-high/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                  terminal
                </span>
              </div>
              <div className="absolute bottom-12 -left-8 bg-surface-container-high/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                  memory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] -rotate-3"></div>
            <img
              alt="Developer at work"
              className="relative z-10 w-full rounded-[2rem] shadow-2xl aspect-square object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0uh2Fzs6P_kDpp-TSdrtTIvR9B_0TgGqNCRLgLMw5oN4QVM62gqGC7EyRwDApZEnMJVnbAPU6sxHlG0SLz2ZggY6iFZMm6kgbqErMMBc2PNqi359lNJTm0fS2Mm1V4lo4GPi37ESpQgd_P1QY9MI9PeXj-jFFOv3hpOsOJNjF9hZzWL5tL7F0eiHb5X-MSHhV003lFTn2M0cmE2TdW-uxjF7093w9DlT2tG78a2E_wZ9TdKCfxtbn6VQDSoRYRwUr-a8kfC5GWe_Dw"
            />
            <div className="absolute -bottom-8 -right-8 bg-surface-container p-8 rounded-3xl border border-outline-variant/15 shadow-2xl z-20">
              <div className="font-headline text-4xl font-bold text-primary">5+</div>
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Systems Designed
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-label text-sm uppercase tracking-widest text-primary font-bold">
                Engineering Philosophy
              </span>
              <h2 className="font-headline text-4xl font-bold text-white tracking-tight">
                I Don&apos;t Just Code — I Build Systems That Solve Real Problems
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Most developers focus on writing code. I focus on understanding
                the problem first — then building systems that actually solve
                it. I work on backend-heavy applications, scalable
                architectures, and business-driven solutions using Java, Spring
                Boot, React, and modern technologies.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg italic border-l-2 border-primary pl-6">
                My approach is simple: Understand the business, Design the
                system, Build for scale from day one.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="font-headline text-3xl font-bold text-white">10+</div>
                <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  Technologies Used
                </div>
              </div>
              <div className="col-span-2 space-y-2">
                <div className="font-headline text-3xl font-bold text-white">
                  AI &amp; System Design
                </div>
                <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  Specialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto border-y border-white/5">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">insights</span>
            </div>
            <h3 className="font-bold text-white">Business First</h3>
            <p className="text-sm text-on-surface-variant">
              I think like a business owner, not just a developer.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">bolt</span>
            </div>
            <h3 className="font-bold text-white">Scalable DNA</h3>
            <p className="text-sm text-on-surface-variant">
              Build for scale from the start of every project.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">data_object</span>
            </div>
            <h3 className="font-bold text-white">Clean Architecture</h3>
            <p className="text-sm text-on-surface-variant">
              Maintainable code that doesn't become technical debt.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">psychology</span>
            </div>
            <h3 className="font-bold text-white">Problem Focused</h3>
            <p className="text-sm text-on-surface-variant">
              Deep focus on solving the core business problem.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-32 px-8 lg:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold">
                Showcase
              </span>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                Selected Work &amp; Systems
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                Real-world inspired systems designed to solve complex problems
                and scale efficiently.
              </p>
            </div>
            <a className="text-primary font-label text-sm uppercase tracking-widest border-b border-primary/40 pb-1 hover:border-primary transition-all" href="#">
              Explore All Projects
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative bg-surface-container-highest p-1 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-xl">
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">Java</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">Spring Boot</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">Python (AI)</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">React</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">AI-Based Student Engagement System</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  A comprehensive platform tracking engagement metrics through AI analysis.
                  <span className="text-primary font-semibold block mt-2 italic">Impact: Improved visibility into student behavior and learning patterns.</span>
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group relative bg-surface-container-highest p-1 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-xl">
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">Java</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">REST APIs</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">React</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">SQL</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">Business Automation Dashboard</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Centralized command center for managing complex business workflows and reporting.
                  <span className="text-primary font-semibold block mt-2 italic">Impact: Reduced manual effort by automating recurring data entry and sync tasks.</span>
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group relative bg-surface-container-highest p-1 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-xl">
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">Java</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">Spring Boot</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">APIs</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">EV Charging Management System</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Scalable infrastructure management for electric vehicle charging stations and energy distribution.
                  <span className="text-primary font-semibold block mt-2 italic">Impact: Enabled efficient real-time management of regional charging infrastructure.</span>
                </p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="group relative bg-surface-container-highest p-1 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-xl">
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">Java</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">SQL</span>
                  <span className="bg-surface-container-high text-secondary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest">React</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">SaaS Analytics Platform</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  High-throughput analytics engine processing subscription and usage data for multi-tenant SaaS.
                  <span className="text-primary font-semibold block mt-2 italic">Impact: Provided actionable insights through real-time data visualization.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 lg:px-16 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-label text-sm uppercase tracking-widest text-primary font-bold">Capabilities</span>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white tracking-tighter">How I Can Help</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">dns</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">Build Scalable Backend Systems</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Designing robust server-side architectures that handle growth without compromising performance or stability.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">web</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">Develop Web Applications</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Creating responsive, high-performance frontends that connect seamlessly with complex backend logic.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">api</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">API Development &amp; Integration</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Bridging disparate systems through clean, well-documented, and secure RESTful or GraphQL APIs.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">automation</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">Business Process Automation</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Turning manual workflows into autonomous code-driven processes to save time and reduce errors.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-colors group lg:col-span-2">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-white mb-2">AI Integration</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Leveraging LLMs and machine learning to build intelligent features that add real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[2rem] bg-surface-container-low border border-outline-variant/10 italic text-lg text-on-surface-variant relative">
            <span className="absolute -top-6 left-10 text-6xl text-primary/20 font-serif">&ldquo;</span>
            &quot;Delivered exactly what we needed — a system that works reliably and scales.&quot;
            <div className="mt-8 not-italic flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20"></div>
              <span className="font-bold text-white text-sm">Founder, Tech Startup</span>
            </div>
          </div>
          <div className="p-10 rounded-[2rem] bg-surface-container-low border border-outline-variant/10 italic text-lg text-on-surface-variant relative">
            <span className="absolute -top-6 left-10 text-6xl text-primary/20 font-serif">&ldquo;</span>
            &quot;Understands both technical and business aspects. Great to work with.&quot;
            <div className="mt-8 not-italic flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20"></div>
              <span className="font-bold text-white text-sm">Product Manager</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto glass-panel rounded-[3rem] p-12 lg:p-24 text-center space-y-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-xs font-label uppercase tracking-widest text-primary mb-4">
              Limited availability for new projects.
            </div>
            <h2 className="font-headline text-4xl lg:text-6xl font-extrabold text-white tracking-tighter">
              Let&apos;s Build Something That Actually Works &amp; Scales
            </h2>
            <p className="text-on-surface-variant text-lg lg:text-xl">
              If you&apos;re looking for someone who understands both business and technology — let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-white text-surface px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary transition-colors flex items-center gap-2">
              Start a Project
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
            <button className="px-10 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all">
              Schedule a Call
            </button>
          </div>
          <div className="pt-12 flex flex-wrap justify-center gap-12 border-t border-white/5 mt-12">
            <a className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span>Send Message</span>
            </a>
            <a className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-green-400">chat</span>
              <span>Quick Chat on WhatsApp</span>
            </a>
          </div>
          {/* Floating Decorative Elements */}
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
        </div>
      </section>
    </div>
  );
}