import React, { useState } from 'react';
import { PHOTO_HOTSPOTS } from '../data/curriculumData';
import { Hotspot } from '../types';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Info,
  Maximize2,
  HelpCircle,
  BookOpen,
  Camera,
  Layers,
  UploadCloud,
  CheckCircle2,
  X,
} from 'lucide-react';

import heroPhotoUrl from '../assets/images/hero_byodoin_phoenix_hall_1791862651086.jpg';
import gardenPhotoUrl from '../assets/images/byodoin_pure_land_garden_1791862650855.jpg';

const HERO_PHOTO_URL = heroPhotoUrl;
const GARDEN_PHOTO_URL = gardenPhotoUrl;

export const PhotoViewer: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('phoenix');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [photoMode, setPhotoMode] = useState<'main' | 'garden' | 'custom'>('main');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);

  const activeHotspot = PHOTO_HOTSPOTS.find((h) => h.id === activeHotspotId) || PHOTO_HOTSPOTS[0];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  const handleResetZoom = () => setZoomLevel(1);

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
      setPhotoMode('custom');
    }
  };

  const currentDisplayPhoto =
    photoMode === 'custom' && customPhotoUrl
      ? customPhotoUrl
      : photoMode === 'garden'
      ? GARDEN_PHOTO_URL
      : HERO_PHOTO_URL;

  return (
    <section id="photo-viewer" className="py-14 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-3 border border-emerald-500/30">
            <Camera className="w-4 h-4" />
            <span>核心照片深度觀察鏡頭 · Interactive Photo Inspection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-serif">
            京都宇治平等院鳳凰堂 · 實景解密
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            點擊照片中的 <span className="text-amber-400 font-bold">閃爍熱點標記</span>，透視平安時代工匠如何運用屋脊鳳凰、非實用翼廊、阿字池倒影與洲濱卵石，在人間具象化西方極樂淨土！
          </p>
        </div>

        {/* View Mode & Utility Toolbar */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-3 sm:p-4 mb-6 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          {/* Switch Photo Perspectives */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl">
            <button
              onClick={() => setPhotoMode('main')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                photoMode === 'main'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              鳳凰堂正視全景（核心照片）
            </button>
            <button
              onClick={() => setPhotoMode('garden')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                photoMode === 'garden'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              阿字池舟遊庭園視角
            </button>
            {customPhotoUrl && (
              <button
                onClick={() => setPhotoMode('custom')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  photoMode === 'custom'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                自選比對照片
              </button>
            )}
          </div>

          {/* Photo Actions: Upload Custom, Toggle Hotspots, Zoom */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs sm:text-sm font-medium cursor-pointer transition-colors">
              <UploadCloud className="w-4 h-4 text-emerald-400" />
              <span>上傳照片比對</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCustomUpload}
              />
            </label>

            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                showHotspots
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{showHotspots ? '隱藏標註熱點' : '顯示標註熱點'}</span>
            </button>

            <div className="flex items-center gap-1 bg-slate-900/90 rounded-lg p-1 border border-slate-700">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1.5 rounded text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                title="縮小"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-1.5 text-slate-400">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="p-1.5 rounded text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                title="放大"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded text-slate-300 hover:text-white"
                title="重設大小"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Stage: Two-Zone Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left / Top Canvas: Interactive Photo Display */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <div className="relative overflow-hidden w-full aspect-[16/9] select-none bg-slate-950">
              <div
                className="w-full h-full transition-transform duration-300 ease-out origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={currentDisplayPhoto}
                  alt="日本京都宇治平等院鳳凰堂實景照片"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Hotspot Markers Overlay (only on main photo) */}
                {photoMode === 'main' && showHotspots && (
                  <>
                    {PHOTO_HOTSPOTS.map((hotspot) => {
                      const isActive = hotspot.id === activeHotspotId;
                      return (
                        <button
                          key={hotspot.id}
                          onClick={() => setActiveHotspotId(hotspot.id)}
                          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full transition-transform ${
                            isActive ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                          }`}
                          title={hotspot.title}
                          aria-label={hotspot.title}
                        >
                          {/* Pulsing halo ring */}
                          <span
                            className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                              isActive ? 'bg-amber-400' : 'bg-emerald-400'
                            }`}
                          />
                          {/* Inner glowing badge */}
                          <span
                            className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg font-bold text-xs text-white border-2 border-white ${
                              isActive
                                ? 'bg-amber-500 shadow-amber-500/50'
                                : 'bg-emerald-600 shadow-emerald-500/40'
                            }`}
                          >
                            <Sparkles className="w-4 h-4" />
                          </span>

                          {/* Hover tooltip label */}
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-slate-950/90 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700 shadow-md">
                            {hotspot.title}
                          </span>
                        </button>
                      );
                    })}
                  </>
                )}
              </div>

              {/* Watermark / Badge Overlay */}
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300 pointer-events-none">
                <span className="font-semibold text-white">宇治 平等院鳳凰堂</span> · 攝影現地拍攝
              </div>
            </div>

            {/* Hotspot Selection Thumbnails bar below photo */}
            {photoMode === 'main' && (
              <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 overflow-x-auto">
                <span className="text-xs text-slate-400 shrink-0 font-medium ml-1">快速切換熱點：</span>
                {PHOTO_HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspotId(h.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                      activeHotspotId === h.id
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {h.title.split('（')[0]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Concept Deck: Active Hotspot Deep-Dive Card */}
          <div className="lg:col-span-4 bg-slate-850 bg-slate-800/95 border border-slate-700/80 rounded-2xl p-6 shadow-xl space-y-5">
            <div className="flex items-start justify-between gap-3 border-b border-slate-700/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activeHotspot.category === 'architecture'
                    ? '🏛️ 木造建築美學'
                    : activeHotspot.category === 'symbol'
                    ? '🪙 國寶文化象徵'
                    : activeHotspot.category === 'religion'
                    ? '📿 宗教通道儀軌'
                    : '🌲 淨土庭園造景'}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 font-serif">
                  {activeHotspot.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeHotspot.subtitle}</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Detailed Architectural / Visual Observation */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>照片構件解析</span>
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed text-justify">
                {activeHotspot.description}
              </p>
            </div>

            {/* Historical Context Note */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 space-y-1.5">
              <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>文史考證背景</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeHotspot.historicalNote}
              </p>
            </div>

            {/* High School Inquiry Thinking Prompt */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-950/80 to-teal-900/60 border border-emerald-600/40 space-y-1.5">
              <h4 className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>高中探究思辨挑戰</span>
              </h4>
              <p className="text-xs text-emerald-100 font-medium leading-relaxed">
                {activeHotspot.inquiryPrompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
