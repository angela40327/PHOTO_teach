import React, { useState } from 'react';
import { PHOTO_HOTSPOTS } from '../data/curriculumData';
import { Search, Eye, Sparkles, Check, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const ObservationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showComparison, setShowComparison] = useState<boolean>(true);

  const filteredHotspots =
    activeCategory === 'all'
      ? PHOTO_HOTSPOTS
      : PHOTO_HOTSPOTS.filter((h) => h.category === activeCategory);

  return (
    <section id="observation" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-sm font-semibold mb-3 border border-emerald-200">
            <Search className="w-4 h-4 text-emerald-700" />
            <span>O - Observation 圖像觀察 · 視覺線索與符號學解讀</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            照片中看到什麼？從構件細節辨析建築語彙
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            優秀的地理與歷史研究者，第一步就是「細心觀察」。學會從照片中的屋瓦、翼廊比例、水岸卵石與借景山稜中，讀出千年前建築師傳遞的視覺密碼。
          </p>
        </div>

        {/* Shinto vs Buddhist Architecture Comparative Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-14">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                高中跨科素養重點對照
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-1">
                日本宗教地景大解密：神道神社 vs. 佛教寺院
              </h3>
            </div>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              {showComparison ? '收合對照表' : '展開對照表'}
            </button>
          </div>

          {showComparison && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900">
                    <th className="p-3.5 border border-slate-200 font-bold w-1/4">比較維度</th>
                    <th className="p-3.5 border border-slate-200 font-bold w-3/8 text-red-900 bg-red-50/60">
                      ⛩️ 神道神社（如宇治神社／宇治上神社）
                    </th>
                    <th className="p-3.5 border border-slate-200 font-bold w-3/8 text-emerald-900 bg-emerald-50/60">
                      🛕 佛教寺院（如宇治平等院鳳凰堂）
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3.5 border border-slate-200 font-semibold bg-slate-50">入口界標</td>
                    <td className="p-3.5 border border-slate-200">
                      <strong>鳥居（Torii）</strong>：劃分神域與凡間之結界，橫木貫穿兩柱。
                    </td>
                    <td className="p-3.5 border border-slate-200">
                      <strong>山門／三門（Sanmon）</strong>：宏偉重樓木構門，象徵空、無相、無願三解脫門。
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 border border-slate-200 font-semibold bg-slate-50">主要供奉</td>
                    <td className="p-3.5 border border-slate-200">
                      <strong>自然神／御祭神</strong>（如八幡神、皇子菟道稚郎子命），神體常為神鏡、劍或巨木。
                    </td>
                    <td className="p-3.5 border border-slate-200">
                      <strong>佛陀菩薩像</strong>（如定朝造阿彌陀如來坐像、五十二尊雲中供養菩薩）。
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 border border-slate-200 font-semibold bg-slate-50">參拜儀軌</td>
                    <td className="p-3.5 border border-slate-200 text-red-800 font-semibold">
                      「二禮、二拍手、一禮」：拍手出聲喚醒神明祈福。
                    </td>
                    <td className="p-3.5 border border-slate-200 text-emerald-800 font-semibold">
                      「合掌靜禱」：雙手合十默念，<strong>絕對不可拍手出聲！</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 border border-slate-200 font-semibold bg-slate-50">建築特徵</td>
                    <td className="p-3.5 border border-slate-200">
                      本殿、拜殿、注連繩結界、手水舍、神明造或流造。
                    </td>
                    <td className="p-3.5 border border-slate-200">
                      重簷入母屋造中堂、左右翼廊、阿字池倒影、鐘樓、石燈籠。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 8 Hotspots Grid Cards with Category Filters */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              平等院核心照片 8 大觀察熱點圖鑑
            </h3>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                全部熱點 ({PHOTO_HOTSPOTS.length})
              </button>
              <button
                onClick={() => setActiveCategory('architecture')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === 'architecture'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                木構建築
              </button>
              <button
                onClick={() => setActiveCategory('scenery')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === 'scenery'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                庭園造景
              </button>
              <button
                onClick={() => setActiveCategory('symbol')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === 'symbol'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                符號象徵
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredHotspots.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {h.category === 'architecture'
                        ? '建築木構'
                        : h.category === 'symbol'
                        ? '文化符號'
                        : h.category === 'religion'
                        ? '宗教通道'
                        : '自然景觀'}
                    </span>
                    <Eye className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 font-serif leading-snug">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify line-clamp-4">
                    {h.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs font-medium text-emerald-800 bg-emerald-50/80 p-2 rounded-lg">
                    💡 思考點：{h.inquiryPrompt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
