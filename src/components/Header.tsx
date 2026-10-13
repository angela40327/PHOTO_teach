import React from 'react';
import { AppMode, FontSize } from '../types';
import { FileDown, Compass, GraduationCap, BookOpen, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { exportCurriculumGuideWord } from '../utils/exportWord';

interface HeaderProps {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  completedUnits: string[];
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  setMode,
  fontSize,
  setFontSize,
  completedUnits,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      {/* Primary Top Bar (Three-Zone Top Bar Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Brand Title */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight font-serif">
                旅行照片會說話
              </span>
              <span className="text-xs text-slate-500 hidden sm:block">
                用 Google 地圖探索日本平等院 · PHOTO 探究模型
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Navigation Links (single-line, clean text) */}
          <nav className="hidden lg:flex items-center gap-7 text-base font-medium text-slate-600">
            <a href="#place" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
              P 地點探秘
            </a>
            <a href="#history" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
              H 歷史時空
            </a>
            <a href="#observation" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
              O 圖像觀察
            </a>
            <a href="#thinking" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
              T 跨科思辨
            </a>
            <a href="#output" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
              O 多元產出
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Download Word Document) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => exportCurriculumGuideWord()}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 rounded-xl shadow-md shadow-emerald-900/20 active:scale-98 transition-all whitespace-nowrap shrink-0 cursor-pointer"
              title="下載完整教案、教材手冊與評量規準 Word 檔案"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>下載 Word 手冊</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-bar: Modes, Accessibility Font Controls, and Progress Tracker */}
      <div className="bg-slate-50/90 border-t border-slate-200/80 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
            <button
              onClick={() => setMode('student')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                mode === 'student'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>🧑‍🎓 學生自學模式</span>
            </button>
            <button
              onClick={() => setMode('teacher')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                mode === 'teacher'
                  ? 'bg-white text-amber-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>👨‍🏫 教師教學模式</span>
            </button>
          </div>

          {/* PHOTO Progress Indicators */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-600">
            <span className="text-slate-400">探究進度：</span>
            {['P', 'H', 'O', 'T', 'O2'].map((key) => {
              const label = key === 'O2' ? 'O產出' : key;
              const isDone = completedUnits.includes(key);
              return (
                <span
                  key={key}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                    isDone
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-200/60 text-slate-500'
                  }`}
                >
                  {label}
                </span>
              );
            })}
          </div>

          {/* Font Size Accessibility Adjuster */}
          <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
            <span className="text-slate-500 mr-1 hidden md:inline">字級閱讀：</span>
            <div className="inline-flex items-center rounded-lg bg-slate-200/80 p-0.5">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  fontSize === 'normal' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
                title="標準字體 (16px)"
              >
                A 標準
              </button>
              <button
                onClick={() => setFontSize('medium')}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  fontSize === 'medium' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
                title="適中字體 (18px)"
              >
                A+ 適中
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  fontSize === 'large' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
                title="大字舒適 (20px)"
              >
                A++ 特大
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
