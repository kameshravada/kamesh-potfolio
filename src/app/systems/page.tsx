export default function SystemsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 mb-32 relative">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(105,218,255,1)]"></span>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Systems Engineering v2.4</span>
          </div>
          <h1 className="font-headline text-7xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            Real Systems.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Real Impact.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl font-body leading-relaxed">
            Building robust, AI-optimized Java ecosystems that transform operational latency into competitive advantage. Expert-level full stack architecture for high-stakes business environments.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project Card 1 */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden ghost-border neon-glow transition-all duration-500 hover:-translate-y-2">
            <div className="h-80 w-full bg-surface-variant overflow-hidden">
              <img
                alt="Digital system visualization"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                data-alt="abstract 3d render of glowing circuit paths and data flowing through a dark metallic architectural structure with blue light highlights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuna_824NQySX6yy8L2yPGEV4-nOVWtv9HMI6UT4oARKBe2vaTfo1hXz0xhiee0nnfeCnJIf5kqHLDK2SyI2UFSStYPm934cGUmfJezzBgnkfMGYq3t_Edw3VldlXTjvk1BtY8Wlw_xAjsk-tbzEUlgAR1wBvQh1OVJzHI5JkuLDFvhFjUeraorwnlqcD2vWjSUuvUO9utIy62aigjdJlGUoFVjGwDPyPMqMLSkSYsz7QRkEotIPGcxb3QKLuqkW_6_jxZs6-O3Y8b"
              />
            </div>
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="font-headline text-2xl font-bold leading-tight max-w-[70%]">Reduced Delivery Time by 40% Using AI Optimization</h3>
                <div className="font-label text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-bold uppercase tracking-widest">
                  Case Study 01
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-outline-variant/10">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Problem</span>
                  <p className="text-sm text-on-surface leading-relaxed">Fragmented supply chain logistics causing 120-hour average processing delays in legacy Java monoliths.</p>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Solution</span>
                  <p className="text-sm text-on-surface leading-relaxed">Microservices rewrite with Spring Boot and custom Genetic Algorithms for real-time route optimization.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Java Spring Boot</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">TensorFlow JNI</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Kafka Streams</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">PostgreSQL</span>
              </div>
              <div className="pt-4 flex items-center gap-4 group/btn">
                <span className="text-primary font-headline font-bold text-sm tracking-tight">View Full Architecture</span>
                <span className="material-symbols-outlined text-primary text-lg transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden ghost-border neon-glow transition-all duration-500 hover:-translate-y-2">
            <div className="h-80 w-full bg-surface-variant overflow-hidden">
              <img
                alt="Global network nodes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                data-alt="cinematic visualization of global data networks with glowing violet nodes and connections over a dark earth surface 8k photorealistic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Pt5zxOsmz0pX4ttSKPwr2q6rErxX9eyw8XDFDxxDB31wisBljYghHJOdHVmlHdILAX-_8xjJ2FzC2L_O5QSr93AcBYyVJXXKOu3N_Mw_Rha7umX1aZzu9IXbcGbLHRJ1pF8zdyin12tqjAAXXaxMNfyfRa7M1rA2CrLGZNr956pb7M8jIama14n2E5CmaQPG_9jWMvooXIK56k1rfXSXqgvkJ7FrCd6iusZgICpgmoF_s9uXqziU2uw9IE2ntx8XFm-tLEVNOomf"
              />
            </div>
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="font-headline text-2xl font-bold leading-tight max-w-[70%]">Real-time Financial Throughput Scaled to 10M RPM</h3>
                <div className="font-label text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-bold uppercase tracking-widest">
                  Case Study 02
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-outline-variant/10">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Problem</span>
                  <p className="text-sm text-on-surface leading-relaxed">Severe bottlenecking during high-volume trading windows resulting in 15% transaction drop rates.</p>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Solution</span>
                  <p className="text-sm text-on-surface leading-relaxed">Event-driven Reactive architecture using Project Reactor and distributed Redis caching for sub-ms latency.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Project Reactor</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Redis Cluster</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Kubernetes</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Docker</span>
              </div>
              <div className="pt-4 flex items-center gap-4 group/btn">
                <span className="text-primary font-headline font-bold text-sm tracking-tight">View Full Architecture</span>
                <span className="material-symbols-outlined text-primary text-lg transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden ghost-border neon-glow transition-all duration-500 hover:-translate-y-2">
            <div className="h-80 w-full bg-surface-variant overflow-hidden">
              <img
                alt="Server clusters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                data-alt="highly detailed server room racks with blue status lights and cable management clean technical perspective dark mood"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA9jgzKsDjJ23JJ-LWLDlzILTXoKkihCni9QrqkLNFHyT5GpFpR69stOJ-9-rEtq5l961681f66lYUSAlaQi9BYQQ6gCttIc1NiW4-j7XgrNKLNllYgGz-Cs5_UWj8Y06LdFZicYZDpxiXueAz8OsghTrQIMfUeH9U96N057TsFXRk2lqqDPY256m6mtfd6KkSJ3af_UbbPeWt7-KRs8hlBoXXj7-vXDpILjcNRhI3NrkOeapI8s0lRjxy728EN0sQaiWlmdq-UAMW"
              />
            </div>
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="font-headline text-2xl font-bold leading-tight max-w-[70%]">Automated Code Quality Auditing for Fortune 500</h3>
                <div className="font-label text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-bold uppercase tracking-widest">
                  Case Study 03
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-outline-variant/10">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Problem</span>
                  <p className="text-sm text-on-surface leading-relaxed">Manual PR reviews delaying production pushes by 3 days. High incidence of security vulnerabilities.</p>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Solution</span>
                  <p className="text-sm text-on-surface leading-relaxed">Custom static analysis engine integrated into Jenkins CI/CD pipeline using LLM-based pattern detection.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Jenkins DSL</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Groovy</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">OpenAI API</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">SonarQube</span>
              </div>
              <div className="pt-4 flex items-center gap-4 group/btn">
                <span className="text-primary font-headline font-bold text-sm tracking-tight">View Full Architecture</span>
                <span className="material-symbols-outlined text-primary text-lg transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden ghost-border neon-glow transition-all duration-500 hover:-translate-y-2">
            <div className="h-80 w-full bg-surface-variant overflow-hidden">
              <img
                alt="Neural network chip"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                data-alt="extreme close up of a semiconductor chip glowing with internal neural network patterns soft macro photography lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Nj8vIOVOdbiszLC94cM-hpSdC9S5RebyNQ5xTvY-3CdIu2ZVFeb2QRT5_mfbwh5n2xk5zmOKo3lDkAcAdQFXvZJVbnv2nrrAejxKYmjHDMOqx_qlz-zYjJh9JiKg9zlNYZwZTbzz9U04jkW2808ppvRODUys0TGO0h3jL1VOG3CgZnTr6pzL61bZTKlqnFqafEWnDA7bDpJlkXeW0cKHxyOs3WOigVCsl5WVtB7lgpGdNI-zMCcRSZy1LAVf9Sb1puP273tlzvPo"
              />
            </div>
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="font-headline text-2xl font-bold leading-tight max-w-[70%]">Self-Healing Infrastructure for Edge Computing</h3>
                <div className="font-label text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-bold uppercase tracking-widest">
                  Case Study 04
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-outline-variant/10">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Problem</span>
                  <p className="text-sm text-on-surface leading-relaxed">Edge nodes in remote locations requiring 48h travel time for physical manual intervention upon failure.</p>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 font-bold">The Solution</span>
                  <p className="text-sm text-on-surface leading-relaxed">Autonomous recovery system using Prometheus alerts and Ansible dynamic playbooks to auto-provision nodes.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Ansible</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Prometheus</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Go</span>
                <span className="bg-surface-container-high text-secondary font-label text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Terraform</span>
              </div>
              <div className="pt-4 flex items-center gap-4 group/btn">
                <span className="text-primary font-headline font-bold text-sm tracking-tight">View Full Architecture</span>
                <span className="material-symbols-outlined text-primary text-lg transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="mt-40 max-w-screen-2xl mx-auto px-8">
        <div className="bg-surface-container rounded-3xl p-16 relative overflow-hidden ghost-border">
          <div className="absolute top-0 right-0 p-8">
            <span className="material-symbols-outlined text-outline-variant text-9xl opacity-10" data-icon="account_tree">account_tree</span>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-extrabold mb-8">Architectural Standards</h2>
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="font-headline font-bold">Domain Driven Design</span>
                </div>
                <p className="text-on-surface-variant text-sm">Aligning system architecture with core business domains for long-term scalability and maintainability.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="font-headline font-bold">Zero Trust Security</span>
                </div>
                <p className="text-on-surface-variant text-sm">Implementing identity-aware proxying and micro-segmentation at the application layer.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="font-headline font-bold">Cloud Native Readiness</span>
                </div>
                <p className="text-on-surface-variant text-sm">Twelve-factor app principles baked into every service for seamless cloud-agnostic deployment.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="font-headline font-bold">AI Native Workflows</span>
                </div>
                <p className="text-on-surface-variant text-sm">Leveraging predictive analytics and neural engines to optimize system resource allocation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
