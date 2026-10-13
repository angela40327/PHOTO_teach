import React from 'react';
import { PHOTO_MODEL_STEPS } from '../data/curriculumData';
import { Sparkles, MapPin, Eye, Compass, ArrowRight, Download, Award } from 'lucide-react';
import { exportCurriculumGuideWord } from '../utils/exportWord';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-teal-950 to-slate-900 text-white pt-12 pb-16 lg:pt-16 lg:pb-20">
      {/* Decorative background glow & traditional wave motifs */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Topic Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>高中 108 課綱 · 跨領域探究與實作</span>
              <span className="text-emerald-400/50">·</span>
              <span>地理 × 歷史 × 公民 × 科技</span>
            </div>

            {/* Title with balanced line wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-serif" style={{ textWrap: 'balance' }}>
              旅行照片會說話：
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent">
                用 Google 地圖探索日本平等院
              </span>
            </h1>

            {/* Core Hook Narrative */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              當你在京都宇治拍下這座華麗的朱紅佛殿，你看到的是單純的風景，還是藏在 10 元日幣背後的千年密碼？
              透過本站互動式 <strong className="text-amber-300 font-semibold">PHOTO 探究教學模型</strong>，結合 Google 地圖 GIS 空間分析，一起從一張旅行照片出發，解構水文、歷史、信仰與世界遺產的跨領域故事！
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#photo-viewer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/25 transition-all active:scale-98 text-base"
              >
                <Eye className="w-5 h-5 text-slate-950" />
                <span>立即深度觀察照片</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
              <a
                href="#place"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm transition-all text-base"
              >
                <Compass className="w-5 h-5 text-emerald-400" />
                <span>開啟 GIS 空間地圖</span>
              </a>
            </div>

            {/* Trust / Curriculum Badges */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>聯合國教科文組織世界文化遺產</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>日本 10 圓硬幣 & 10,000 圓紙鈔象徵</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>宇治川水系活水庭園</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metric Strip & PHOTO Model Quick Nav */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-800/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <h2 className="text-base font-bold text-amber-300 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>PHOTO 探究模型五步驟導覽</span>
                <span className="text-xs font-normal text-slate-400">點擊直達單元</span>
              </h2>

              <div className="space-y-2.5">
                {PHOTO_MODEL_STEPS.map((step) => {
                  const targetId =
                    step.key === 'P'
                      ? 'place'
                      : step.key === 'H'
                      ? 'history'
                      : step.key === 'O'
                      ? 'observation'
                      : step.key === 'T'
                      ? 'thinking'
                      : 'output';
                  return (
                    <a
                      key={step.key}
                      href={`#${targetId}`}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/40 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-white text-sm shadow-xs group-hover:scale-105 transition-transform">
                          {step.letter}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                            {step.title}
                          </p>
                          <p className="text-xs text-slate-400">{step.question}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                    </a>
                  );
                })}
              </div>

              {/* Instant Word download banner in hero */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-slate-300">
                  <p className="font-semibold text-white">需要離線學習單或教案？</p>
                  <p className="text-slate-400">支援一鍵下載完整 Word 檔案</p>
                </div>
                <button
                  onClick={() => exportCurriculumGuideWord()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/30 text-emerald-200 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>下載手冊 (.doc)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
