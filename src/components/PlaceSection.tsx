import React, { useState } from 'react';
import { MAP_EXPLORATION_POINTS } from '../data/curriculumData';
import { MapPoint } from '../types';
import {
  MapPin,
  ExternalLink,
  Compass,
  Footprints,
  Droplets,
  CloudSun,
  Navigation,
  Layers,
  Sparkles,
  TreePine,
  Search,
} from 'lucide-react';

const RIVER_LANDSCAPE_URL = '/src/assets/images/uji_river_bridge_landscape_1791862651030.jpg';

export const PlaceSection: React.FC = () => {
  const [selectedPointId, setSelectedPointId] = useState<string>('byodoin');
  const [mapLayer, setMapLayer] = useState<'svg' | 'scenic'>('svg');

  const selectedPoint =
    MAP_EXPLORATION_POINTS.find((p) => p.id === selectedPointId) || MAP_EXPLORATION_POINTS[0];

  return (
    <section id="place" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-3 border border-blue-200">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>P - Place 地點探秘 · 空間坐標與水文地景</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            照片在哪裡？從宇治川水系到世界遺產聚落
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            透過 GIS 空間思維解構宇治地理環境：琵琶湖活水、千古宇治橋、朝霧橋雙岸連動，以及為何清晨的水氣晨霧能孕育出頂級宇治抹茶？
          </p>
        </div>

        {/* 2-Zone Sandbox: Interactive GIS Map on Left, Point Intelligence on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Canvas: Interactive GIS Vector Map Simulator */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Top Toolbar */}
            <div className="px-5 py-3.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-700" />
                <span className="font-bold text-sm text-slate-800">
                  宇治水陸文化空間 GIS 互動模擬器
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMapLayer('svg')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    mapLayer === 'svg'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  GIS 水系節點地圖
                </button>
                <button
                  onClick={() => setMapLayer('scenic')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    mapLayer === 'scenic'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  宇治川全景航拍視角
                </button>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=34.889167,135.807778"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google 地圖實景</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Map Canvas */}
            <div className="relative w-full aspect-[16/10] bg-slate-100 select-none overflow-hidden">
              {mapLayer === 'svg' ? (
                <svg
                  viewBox="0 0 1000 625"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background: Land masses */}
                  <rect width="1000" height="625" fill="#f1f5f9" />

                  {/* Western bank (Byodoin side) */}
                  <path
                    d="M 0,0 L 460,0 Q 430,200 470,350 T 420,625 L 0,625 Z"
                    fill="#e2e8f0"
                  />

                  {/* Eastern bank (Shrine side & Mt. Asahi) */}
                  <path
                    d="M 590,0 Q 560,220 610,380 T 560,625 L 1000,625 L 1000,0 Z"
                    fill="#dcfce7"
                  />

                  {/* Uji River main flow (Blue ribbon) */}
                  <path
                    d="M 460,0 C 430,200 480,360 420,625 L 560,625 C 610,380 560,220 590,0 Z"
                    fill="#bae6fd"
                  />

                  {/* Nakanoshima / Tachibana Island sandbar */}
                  <ellipse cx="505" cy="330" rx="42" ry="120" fill="#fef08a" opacity="0.9" />
                  <ellipse cx="505" cy="330" rx="36" ry="110" fill="#e2e8f0" />

                  {/* Water flow ripples */}
                  <path d="M 490,100 Q 515,110 540,100" stroke="#0284c7" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M 470,220 Q 495,230 520,220" stroke="#0284c7" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M 460,480 Q 490,490 520,480" stroke="#0284c7" strokeWidth="2" fill="none" opacity="0.6" />

                  {/* Uji Bridge (Northern major bridge) */}
                  <line x1="390" y1="130" x2="630" y2="120" stroke="#b45309" strokeWidth="12" strokeLinecap="round" />
                  <text x="510" y="105" textAnchor="middle" fill="#78350f" fontSize="16" fontWeight="bold">
                    宇治橋（西元 646 年創設）
                  </text>

                  {/* Asagiri Bridge (Vermilion bridge to Nakanoshima & East Bank) */}
                  <line x1="490" y1="260" x2="610" y2="230" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
                  <text x="575" y="215" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="bold">
                    朝霧橋
                  </text>

                  {/* Byodoin Lotus Pond (Aji-ike) representation */}
                  <ellipse cx="320" cy="410" rx="75" ry="50" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" />
                  <rect x="290" y="390" width="60" height="30" fill="#dc2626" rx="4" />
                  <text x="320" y="445" textAnchor="middle" fill="#0c4a6e" fontSize="14" fontWeight="bold">
                    阿字池
                  </text>

                  {/* Mount Asahi on East */}
                  <path d="M 800,100 Q 880,40 960,110 L 1000,300 L 750,300 Z" fill="#86efac" opacity="0.5" />
                  <text x="890" y="110" fill="#166534" fontSize="14" fontWeight="bold">
                    朝日山（借景名山）
                  </text>

                  {/* Interactive Point Markers */}
                  {MAP_EXPLORATION_POINTS.map((pt) => {
                    const isSelected = pt.id === selectedPointId;
                    const cx = (pt.x / 100) * 1000;
                    const cy = (pt.y / 100) * 625;
                    return (
                      <g
                        key={pt.id}
                        onClick={() => setSelectedPointId(pt.id)}
                        className="cursor-pointer group"
                      >
                        {isSelected && (
                          <circle cx={cx} cy={cy} r="26" fill="#3b82f6" opacity="0.3">
                            <animate
                              attributeName="r"
                              values="20;30;20"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? 16 : 12}
                          fill={
                            pt.type === 'heritage'
                              ? '#dc2626'
                              : pt.type === 'bridge'
                              ? '#d97706'
                              : pt.type === 'nature'
                              ? '#0284c7'
                              : '#7c3aed'
                          }
                          stroke="#ffffff"
                          strokeWidth="3"
                          className="transition-all"
                        />
                        <text
                          x={cx}
                          y={cy - 20}
                          textAnchor="middle"
                          fill="#0f172a"
                          fontSize="13"
                          fontWeight="bold"
                          className="pointer-events-none drop-shadow-xs"
                        >
                          {pt.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={RIVER_LANDSCAPE_URL}
                    alt="宇治川與朝霧橋山水風光"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-5">
                    <p className="text-white text-sm font-semibold">
                      宇治川實景：橫跨朝霧橋，遠方為茶園丘陵與朝日山脈
                    </p>
                  </div>
                </div>
              )}

              {/* Legend overlay */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 text-xs shadow-md space-y-1">
                <span className="font-bold text-slate-800 block mb-1">圖例分類</span>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-slate-700">
                    <span className="w-3 h-3 rounded-full bg-red-600 inline-block" /> 世界文化資產
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-700">
                    <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" /> 歷史名橋
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-700">
                    <span className="w-3 h-3 rounded-full bg-sky-600 inline-block" /> 水系自然
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-700">
                    <span className="w-3 h-3 rounded-full bg-purple-600 inline-block" /> 文學雕塑
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Concept Deck: Selected Point Information Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-md space-y-5">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {selectedPoint.type === 'heritage'
                    ? '🏛️ 世界文化遺產'
                    : selectedPoint.type === 'bridge'
                    ? '🌉 交通樞紐古橋'
                    : selectedPoint.type === 'nature'
                    ? '🌊 水文自然地景'
                    : '📖 文學歷史地標'}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  距平等院 {selectedPoint.distanceFromByodoin}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-2 font-serif">
                {selectedPoint.name}
              </h3>
              <p className="text-xs text-slate-500 font-serif italic">{selectedPoint.japanese}</p>
            </div>

            {/* Walking Metric */}
            <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-blue-900 font-semibold">
                <Footprints className="w-5 h-5 text-blue-600" />
                <span>散步走讀耗時</span>
              </div>
              <span className="text-base font-bold text-blue-700 font-mono">
                約 {selectedPoint.walkMinutes} 分鐘
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
              {selectedPoint.description}
            </p>

            {/* Google Map Link Button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                selectedPoint.googleMapQuery
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>在 Google 地圖中開啟實地座標</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Quick point list for selection */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500 block mb-2">快速選擇其他地標：</span>
              <div className="grid grid-cols-2 gap-1.5">
                {MAP_EXPLORATION_POINTS.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setSelectedPointId(pt.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left truncate transition-colors ${
                      selectedPointId === pt.id
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {pt.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deep Hydrology & Tea Climate Knowledge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Hydrology & River Engineering */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              水文地理：琵琶湖活水與阿字池的千年造園工藝
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              宇治川源自日本第一大淡水湖「琵琶湖」（在滋賀縣稱瀨田川，流至京都稱宇治川）。其水流湍急，河心有橘島等沙洲分流。千年前藤原賴通在此建造阿字池時，引宇治川活水入池，並藉由池岸曲折的「洲濱」卵石灘減緩流速沉澱泥沙，讓阿彌陀佛閣長年倒映在平靜澄澈的池面上。
            </p>
          </div>

          {/* Card 2: Microclimate & Uji Green Tea */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CloudSun className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              茶鄉微氣候：為何宇治能孕育出日本頂級抹茶？
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              宇治川兩側受朝日山與周邊丘陵環抱，川面蒸散的水氣在清晨極易凝結為厚重的「朝霧」。這層晨霧能自然遮蔽過強的日光直射，使茶樹葉片在溫潤高濕度環境中慢速生長，大幅減少苦澀茶多酚生成並保留高濃度茶氨酸，奠定了宇治茶「甘醇清甜」的世界名茶地位。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
