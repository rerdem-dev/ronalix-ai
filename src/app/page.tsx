import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,102,0.05)_0%,rgba(5,5,5,1)_60%))]"></div>
        <div 
          className="absolute inset-0 z-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"
          style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/grid.svg')` }}
        ></div>
        
        {/* Hero Content */}
        <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[var(--color-ronalix-neon)]/30 bg-[var(--color-ronalix-neon)]/10 text-[var(--color-ronalix-neon)] text-xs font-semibold tracking-wider animate-fade-in delay-100">
            INTRODUCING LUMA INSIGHT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up delay-200">
            <span className="text-white">RONALIX</span> <span className="text-[var(--color-ronalix-neon)] drop-shadow-[0_0_15px_rgba(0,255,102,0.5)]">AI</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white font-medium mb-4 animate-slide-up delay-300">
            Intelligence, engineered.
          </p>
          
          <p className="text-lg md:text-xl text-[var(--color-ronalix-muted)] mb-10 max-w-2xl mx-auto animate-slide-up delay-400">
            Small models. Serious reasoning. Fast, local-friendly, and built for complex problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up delay-500">
            <Link 
              href="/models/luma" 
              className="px-8 py-3 rounded-md bg-[var(--color-ronalix-neon)] text-black font-semibold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.6)] transition-all duration-300"
            >
              Explore Luma
            </Link>
            <Link 
              href="/models" 
              className="px-8 py-3 rounded-md bg-[var(--color-ronalix-gray)] text-white font-semibold border border-white/10 hover:border-[var(--color-ronalix-neon)]/50 hover:bg-[var(--color-ronalix-gray)]/80 transition-all duration-300"
            >
              View Models
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in delay-500">
          <span className="text-[var(--color-ronalix-muted)] text-xs mb-2">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-[var(--color-ronalix-muted)] rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[var(--color-ronalix-neon)] rounded-full animate-float"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-24 bg-[var(--background)] border-t border-[var(--color-ronalix-gray)]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Philosophy</h2>
            <p className="text-[var(--color-ronalix-muted)] text-lg">
              We believe in capable, efficient models that you can run anywhere. True intelligence shouldn't require massive clusters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-ronalix-gray)]/40 border border-white/5 rounded-xl p-8 hover:border-[var(--color-ronalix-neon)]/30 transition-colors">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 border border-white/10 text-[var(--color-ronalix-neon)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Efficiency First</h3>
              <p className="text-[var(--color-ronalix-muted)] text-sm">
                Maximized intelligence per parameter. Our models are trained to punch above their weight class.
              </p>
            </div>
            
            <div className="bg-[var(--color-ronalix-gray)]/40 border border-white/5 rounded-xl p-8 hover:border-[var(--color-ronalix-neon)]/30 transition-colors">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 border border-white/10 text-[var(--color-ronalix-neon)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Local & Private</h3>
              <p className="text-[var(--color-ronalix-muted)] text-sm">
                Designed to run on consumer hardware. Keep your data private by running models entirely locally.
              </p>
            </div>
            
            <div className="bg-[var(--color-ronalix-gray)]/40 border border-white/5 rounded-xl p-8 hover:border-[var(--color-ronalix-neon)]/30 transition-colors">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 border border-white/10 text-[var(--color-ronalix-neon)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Reasoning Focused</h3>
              <p className="text-[var(--color-ronalix-muted)] text-sm">
                Built specifically for coding, mathematics, and logical deduction. Not just another chatbot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--color-ronalix-gray)]/50 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to experience the future?</h2>
          <p className="text-[var(--color-ronalix-muted)] mb-8 text-lg">
            Download our models or try them in the upcoming API platform.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/rerdem-dev/ronalix-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
