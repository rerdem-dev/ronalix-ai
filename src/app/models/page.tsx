import Link from "next/link";

export default function ModelsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Models</h1>
        <p className="text-xl text-[var(--color-ronalix-muted)] max-w-2xl mx-auto">
          Explore our family of intelligence. Designed for performance, built for reasoning.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Luma Insight - Featured */}
        <div className="relative group bg-[var(--color-ronalix-gray)]/30 border border-[var(--color-ronalix-neon)]/30 rounded-2xl p-8 overflow-hidden animate-slide-up delay-100">
          <div className="absolute top-0 right-0 p-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-ronalix-neon)]/10 text-[var(--color-ronalix-neon)] border border-[var(--color-ronalix-neon)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ronalix-neon)] animate-pulse"></span>
              AVAILABLE
            </span>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ronalix-neon)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
              <h2 className="text-4xl font-bold text-white">Luma Insight</h2>
              <span className="text-2xl font-semibold text-[var(--color-ronalix-neon)]">4B</span>
            </div>
            
            <p className="text-xl text-[var(--color-ronalix-muted)] mb-8 max-w-3xl">
              Fast, local and reasoning-focused. Luma Insight brings advanced logical capabilities to consumer hardware without compromising on intelligence.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-[var(--color-ronalix-muted)] uppercase tracking-wider mb-1">Architecture</div>
                <div className="font-semibold text-white">Dense</div>
              </div>
              <div className="bg-black/50 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-[var(--color-ronalix-muted)] uppercase tracking-wider mb-1">Parameters</div>
                <div className="font-semibold text-white">4 Billion</div>
              </div>
              <div className="bg-black/50 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-[var(--color-ronalix-muted)] uppercase tracking-wider mb-1">Focus</div>
                <div className="font-semibold text-white">Reasoning</div>
              </div>
              <div className="bg-black/50 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-[var(--color-ronalix-muted)] uppercase tracking-wider mb-1">Platform</div>
                <div className="font-semibold text-white">Local Friendly</div>
              </div>
            </div>
            
            <Link 
              href="/models/luma"
              className="inline-flex items-center gap-2 bg-[var(--color-ronalix-neon)] text-black px-6 py-2.5 rounded-md font-semibold hover:bg-white transition-colors"
            >
              Explore Luma Insight
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kairo */}
          <div className="bg-[var(--color-ronalix-gray)]/20 border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 animate-slide-up delay-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-white">Kairo</h2>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
                COMING SOON
              </span>
            </div>
            
            <div className="text-lg font-medium text-[var(--color-ronalix-muted)] mb-2">~12B MoE</div>
            
            <p className="text-gray-400 mb-8 min-h-[60px]">
              Balanced intelligence for coding, reasoning and everyday AI.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 opacity-60">
              <div className="bg-black/30 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Architecture</div>
                <div className="font-semibold text-gray-300">MoE</div>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Focus</div>
                <div className="font-semibold text-gray-300">General & Coding</div>
              </div>
            </div>
            
            <button disabled className="w-full py-2.5 rounded-md bg-white/5 text-gray-500 font-medium cursor-not-allowed border border-white/5">
              Details Coming Soon
            </button>
          </div>

          {/* Veyra */}
          <div className="bg-[var(--color-ronalix-gray)]/20 border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 animate-slide-up delay-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-white">Veyra</h2>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
                COMING SOON
              </span>
            </div>
            
            <div className="text-lg font-medium text-[var(--color-ronalix-muted)] mb-2">~24B MoE</div>
            
            <p className="text-gray-400 mb-8 min-h-[60px]">
              Ronalix's high-capacity reasoning model for complex, multi-step problem solving.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 opacity-60">
              <div className="bg-black/30 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Architecture</div>
                <div className="font-semibold text-gray-300">MoE</div>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-lg p-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Focus</div>
                <div className="font-semibold text-gray-300">High-capacity Reasoning</div>
              </div>
            </div>
            
            <button disabled className="w-full py-2.5 rounded-md bg-white/5 text-gray-500 font-medium cursor-not-allowed border border-white/5">
              Details Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
