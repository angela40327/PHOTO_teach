import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/curriculumData';
import { Clock, Coins, Flame, Landmark, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export const HistorySection: React.FC = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number>(0);

  const selectedEvent = TIMELINE_DATA[selectedEventIndex];

  return (
    <section id="history" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-sm font-semibold mb-3 border border-amber-200">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>H - History 歷史時空 · 千年興衰與末法救贖</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            這裡發生過什麼？從西元 1052 末法元年到世界遺產
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            平安貴族為何面臨末世危機？藤原賴通如何將父親的度假別莊改建為人間西方淨土？這座木造佛殿又如何逃過戰火，最終躍上現代日本的 10 元硬幣與萬元鈔票？
          </p>
        </div>

        {/* Currency Semiotics Spotlight Banner */}
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/60 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-14 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-bold">
                <Coins className="w-4 h-4" />
                <span>現代貨幣符號學密碼</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                口袋裡的國寶：為什麼日本貨幣印有平等院？
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                拿出你的日圓零錢：<strong className="text-amber-900">10 圓日幣正面</strong> 正是平等院鳳凰堂的全景浮雕；而日本流通面額最高的 <strong className="text-amber-900">10,000 圓紙鈔背面</strong>，印製的則是鳳凰堂屋脊上的國寶「金銅鳳凰」！
                一個千年前貴族的私人淨土佛堂，如今成為全日本國民日常交易中最普及、最崇高的文化身分認同符號。
              </p>
            </div>
            <div className="md:col-span-4 bg-white/90 backdrop-blur-xs rounded-xl p-5 border border-amber-200/80 text-center space-y-3 shadow-xs">
              <div className="text-4xl">🪙 💴</div>
              <p className="text-xs font-bold text-slate-800">
                10 日圓硬幣 (鳳凰堂全景)
                <br />
                10,000 日圓紙鈔 (屋頂金銅鳳凰)
              </p>
              <span className="inline-block text-xs text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md font-medium">
                日本最高文明象徵
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Chronological Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Navigation Strip (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              點擊歷史節點切換詳細考證：
            </span>
            {TIMELINE_DATA.map((evt, idx) => {
              const isSelected = idx === selectedEventIndex;
              return (
                <button
                  key={evt.year}
                  onClick={() => setSelectedEventIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-600 shadow-md translate-x-1'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                        isSelected ? 'bg-amber-700 text-amber-100' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {evt.year}
                    </span>
                    <span
                      className={`text-xs ${
                        isSelected ? 'text-amber-200' : 'text-slate-500'
                      }`}
                    >
                      {evt.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-base mt-2 font-serif">{evt.title}</h4>
                  <p
                    className={`text-xs mt-1 truncate ${
                      isSelected ? 'text-amber-100' : 'text-slate-500'
                    }`}
                  >
                    {evt.era} · {evt.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Event Historical Deep-Dive Card (Right Column) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider font-mono">
                  {selectedEvent.era} · {selectedEvent.tag}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 font-serif">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm font-semibold text-amber-600 font-mono mt-0.5">
                  年代紀錄：{selectedEvent.year}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
            </div>

            {/* Event Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>歷史事件脈絡與背後動機</span>
              </h4>
              <p className="text-base text-slate-700 leading-relaxed text-justify">
                {selectedEvent.description}
              </p>
            </div>

            {/* Significance Callout */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 space-y-1.5">
              <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>文明史與文化遺產指標意義</span>
              </h4>
              <p className="text-sm text-amber-950 font-medium leading-relaxed">
                {selectedEvent.significance}
              </p>
            </div>

            {/* Historical Inquiry Question for High School Students */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-1.5">
              <h4 className="text-xs font-bold text-slate-700">歷史思維探究提問</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedEventIndex === 0
                  ? '試比較古代西方千禧年末日預言與日本平安時代末法思想在社會心態與藝術創作上的異同。'
                  : selectedEventIndex === 2
                  ? '宇治川在古代常作為京都的天然南面屏障，地理要塞如何左右日本中世武家內戰的勝敗走向？'
                  : '古蹟修復時應該「還原千年前剛完工時的光鮮亮麗（丹土朱紅）」，還是保留「歷經風吹雨打的滄桑古樸（深褐黑漆）」？為什麼？'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
