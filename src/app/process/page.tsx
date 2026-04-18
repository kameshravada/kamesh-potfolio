export default function ProcessPage() {
  return (
    <div className="relative pt-32 pb-40 overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>

      <section className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 font-label text-secondary tracking-widest text-xs font-bold uppercase bg-secondary/10 px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Methodology &amp; Workflow
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-12">
            How I Build Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">Work &amp; Scale.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-16">
            A disciplined engineering approach focused on structural integrity, performance optimization, and future-proof Java architectures.
          </p>
        </div>

        <div className="mt-24 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            <div className="group">
              <div className="relative z-20 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 neon-glow-primary">
                  <span className="material-symbols-outlined text-3xl" data-icon="lightbulb">lightbulb</span>
                </div>
                <div className="absolute -top-4 -right-4 text-4xl font-headline font-black text-surface-variant/40 group-hover:text-primary/20 transition-colors">01</div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Understand</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Deep diving into the business logic. Identifying bottleneck constraints before a single line of code is committed.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">Requirement Analysis</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">Logic Mapping</span>
              </div>
            </div>

            <div className="group">
              <div className="relative z-20 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 neon-glow-primary">
                  <span className="material-symbols-outlined text-3xl" data-icon="architecture">architecture</span>
                </div>
                <div className="absolute -top-4 -right-4 text-4xl font-headline font-black text-surface-variant/40 group-hover:text-primary/20 transition-colors">02</div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Design</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Modeling entities, defining API contracts, and selecting the right design patterns for scalability and maintenance.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">UML Modeling</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">Schema Design</span>
              </div>
            </div>

            <div className="group">
              <div className="relative z-20 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 neon-glow-primary">
                  <span className="material-symbols-outlined text-3xl" data-icon="terminal">terminal</span>
                </div>
                <div className="absolute -top-4 -right-4 text-4xl font-headline font-black text-surface-variant/40 group-hover:text-primary/20 transition-colors">03</div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Build</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Clean, test-driven implementation using Spring Boot. Focus on modularity and high-concurrency handling.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">TDD Workflow</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">Microservices</span>
              </div>
            </div>

            <div className="group">
              <div className="relative z-20 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 neon-glow-primary">
                  <span className="material-symbols-outlined text-3xl" data-icon="rocket_launch">rocket_launch</span>
                </div>
                <div className="absolute -top-4 -right-4 text-4xl font-headline font-black text-surface-variant/40 group-hover:text-primary/20 transition-colors">04</div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Scale</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Containerization, cloud deployment, and performance monitoring. Ensuring the system thrives under load.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">Docker &amp; K8s</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-secondary px-2 py-1 bg-surface-container-high rounded-lg">Prometheus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-low rounded-[2rem] overflow-hidden border border-outline-variant/10">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
              <span className="font-label text-primary tracking-widest text-xs font-bold uppercase mb-6">Philosophy</span>
              <h2 className="font-headline text-5xl font-bold mb-8 leading-tight text-on-surface">
                My Approach:<br/>I don&apos;t jump into code.
              </h2>
              <div className="space-y-8">
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Experience has taught me that the most expensive bugs are those found at the architectural level after deployment.
                </p>
                <div className="flex items-start gap-6">
                  <div className="mt-1 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface mb-2 text-xl">I Think First</h4>
                    <p className="text-on-surface-variant text-sm">Identifying edge cases and system constraints before defining the tech stack.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="mt-1 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined" data-icon="draw">draw</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface mb-2 text-xl">I Design Next</h4>
                    <p className="text-on-surface-variant text-sm">Drafting structural blueprints that prioritize decoupled logic and high visibility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="mt-1 w-12 h-12 rounded-full bg-primary-dim/10 flex items-center justify-center text-primary-dim flex-shrink-0">
                    <span className="material-symbols-outlined" data-icon="code">code</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface mb-2 text-xl">Then I Build</h4>
                    <p className="text-on-surface-variant text-sm">Execution with precision, ensuring every component is unit-tested and documented.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative bg-surface-container-highest min-h-[400px]">
              <img
                alt="Engineering Process"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                data-alt="Modern architectural blueprint on a screen with blue light tracing and technical schematics for a backend system"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDikrw0eDvnzIb3tDG_0AlocM1X53lE7CuzdSpXP870e0uHNf1GG2rcnATbHK_9P45U_MkqZF86KnJICwqWQ6cvdMbSGuceEGE-CHlX7XQWJDH_oIOTdDoiAR9bT_pVxZfF13DWBRMfDkQcD0WCIoqidtAjz1aa79n82k9tXCW3XbqRU04mNcMmQLPp59e-j5aQfTZEV6RHqawF_N77SXWefTGZq6Vnv1N46IsvdFV0VBbuWaIDwuNBSX5GsD5tUzaKQFrFu18vQmM7"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 glass-card p-8 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg" data-icon="verified">verified</span>
                  </div>
                  <span className="font-label text-sm text-on-surface font-bold">Standard of Excellence</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant italic">
                  &quot;The goal is not to write code that works; it&apos;s to design a system that cannot fail under pressure.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 max-w-7xl mx-auto px-8 text-center">
        <h2 className="font-headline text-4xl font-bold mb-16 text-on-surface">The Stack Behind the Process</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-8 py-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl font-label text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all cursor-default">
            Java 21 / Spring Boot 3
          </div>
          <div className="px-8 py-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl font-label text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all cursor-default">
            PostgreSQL / Redis
          </div>
          <div className="px-8 py-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl font-label text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all cursor-default">
            Kafka / RabbitMQ
          </div>
          <div className="px-8 py-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl font-label text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all cursor-default">
            AWS / Azure
          </div>
          <div className="px-8 py-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl font-label text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all cursor-default">
            Kubernetes / Docker
          </div>
          <div className="px-8 py-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl font-label text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all cursor-default">
            JUnit 5 / Mockito
          </div>
        </div>
      </section>
    </div>
  );
}
