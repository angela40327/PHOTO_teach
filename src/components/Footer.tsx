import React from 'react';
import { Compass, FileDown, ExternalLink } from 'lucide-react';
import { exportCurriculumGuideWord } from '../utils/exportWord';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center text-white">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-white font-serif block">
                旅行照片會說話：用 Google 地圖探索日本平等院
              </span>
              <span className="text-xs text-slate-500">
                高中 108 課綱跨領域探究與實作互動式教材
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => exportCurriculumGuideWord()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>下載完整 Word 教學手冊</span>
            </button>
            <a
              href="https://www.byodoin.or.jp/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>平等院官方網站</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 日本京都平等院探究教學工作坊 · 專為高中生與教師設計之開源自學資源</p>
          <div className="flex items-center gap-4">
            <a href="#place" className="hover:text-slate-300">P 地點</a>
            <a href="#history" className="hover:text-slate-300">H 歷史</a>
            <a href="#observation" className="hover:text-slate-300">O 觀察</a>
            <a href="#thinking" className="hover:text-slate-300">T 思考</a>
            <a href="#output" className="hover:text-slate-300">O 產出</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
