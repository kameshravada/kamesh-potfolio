export default function TechPage() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="mb-32 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/15 font-label text-xs uppercase tracking-[0.2em] text-secondary">
          Technological Foundation
        </div>
        <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95]">
          Technology That Powers <span className="text-primary">Scalable Systems</span>.
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-body leading-relaxed">
          Engineering robust digital architectures with Java at the core, augmented by modern frontend frameworks and intelligent AI integrations.
        </p>
      </section>

      {/* Tech Categories Grid (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        {/* Backend / Java (The Anchor) */}
        <div className="md:col-span-8 glass-card rounded-2xl p-10 flex flex-col justify-between group hover:bg-surface-variant/80 transition-all duration-500">
          <div>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl" data-icon="terminal">terminal</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4">
              Core Infrastructure &amp; Backend
            </h3>
            <p className="text-on-surface-variant text-lg max-w-xl mb-8">
              The engine room. Leveraging <span className="text-on-surface font-semibold">Java 21</span> and <span className="text-on-surface font-semibold">Spring Boot 3</span> to create thread-safe, resilient, and highly available enterprise-grade microservices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-secondary font-label text-xs uppercase tracking-widest border border-outline-variant/10">Spring Boot</span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-secondary font-label text-xs uppercase tracking-widest border border-outline-variant/10">JVM Tuning</span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-secondary font-label text-xs uppercase tracking-widest border border-outline-variant/10">Hibernate</span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-secondary font-label text-xs uppercase tracking-widest border border-outline-variant/10">Kafka</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="md:col-span-4 glass-card rounded-2xl p-8 group hover:bg-surface-variant/80 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary text-2xl" data-icon="layers">layers</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-3">Fluid Interface</h3>
          <p className="text-on-surface-variant font-body mb-6">
            React ecosystems with Next.js for server-side rendering, ensuring ultra-fast LCP and SEO-friendly single-page applications.
          </p>
          <div className="h-24 bg-surface-container-lowest rounded-xl flex items-center justify-center overflow-hidden border border-outline-variant/10">
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40"></div>
              <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30"></div>
              <div className="w-8 h-8 rounded-full bg-secondary/5 border border-secondary/20"></div>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="md:col-span-4 glass-card rounded-2xl p-8 group hover:bg-surface-variant/80 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-2xl" data-icon="database">database</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-3">Data Integrity</h3>
          <p className="text-on-surface-variant font-body mb-6">
            SQL mastery with PostgreSQL and high-performance NoSQL clusters for large-scale data ingestion and consistency.
          </p>
          <div className="font-label text-xs text-primary/60 tracking-tighter">
            SELECT * FROM architecture;
          </div>
        </div>

        {/* APIs & AI Integration */}
        <div className="md:col-span-8 glass-card rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center group hover:bg-surface-variant/80 transition-all duration-500">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(105,218,255,0.4)] relative">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                <span className="material-symbols-outlined text-on-primary text-xl" data-icon="hub">hub</span>
              </div>
              <h3 className="font-headline text-2xl font-bold">
                API &amp; AI Orchestration
              </h3>
            </div>
            <p className="text-on-surface-variant text-lg">
              Developing RESTful and GraphQL interfaces integrated with LLM agents (OpenAI/Anthropic) to automate complex decision-making workflows.
            </p>
          </div>
          <div className="w-full md:w-64 aspect-square rounded-2xl bg-surface-container-lowest relative overflow-hidden border border-outline-variant/10 p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 blur-3xl"></div>
            <div className="relative h-full border border-dashed border-outline-variant/20 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary/40 text-4xl" data-icon="neurology">neurology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Flow Diagram */}
      <section className="mb-32">
        <h2 className="font-headline text-3xl font-bold text-center mb-16">
          The Request Lifecycle
        </h2>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">
            {/* Step 1: Client */}
            <div className="flex flex-col items-center z-10">
              <div className="w-20 h-20 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center mb-4 neon-glow">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="devices">devices</span>
              </div>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Client</span>
            </div>
            <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 mx-4"></div>

            {/* Step 2: API */}
            <div className="flex flex-col items-center z-10">
              <div className="w-20 h-20 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center mb-4 neon-glow">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="api">api</span>
              </div>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">API Gateway</span>
            </div>
            <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 mx-4"></div>

            {/* Step 3: Services */}
            <div className="flex flex-col items-center z-10">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 neon-glow relative">
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="account_tree">account_tree</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full blur-[2px]"></div>
              </div>
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Services</span>
            </div>
            <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 mx-4"></div>

            {/* Step 4: Database */}
            <div className="flex flex-col items-center z-10">
              <div className="w-20 h-20 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center mb-4 neon-glow">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="storage">storage</span>
              </div>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Database</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-32">
        <div className="bg-gradient-to-r from-surface-container-low to-surface-container-high rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-outline-variant/10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Build the Core?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-10 font-body">
            Let&apos;s architect a system that scales with your ambition. Built with precision, deployed with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-lg tracking-tight hover:brightness-110 transition-all shadow-xl shadow-primary/10">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-headline font-bold text-lg tracking-tight hover:bg-white/5 transition-all">
              View Architecture Docs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
