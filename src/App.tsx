import React, { useState } from 'react';
import { AppMode, FontSize } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhotoViewer } from './components/PhotoViewer';
import { PlaceSection } from './components/PlaceSection';
import { HistorySection } from './components/HistorySection';
import { ObservationSection } from './components/ObservationSection';
import { ThinkingSection } from './components/ThinkingSection';
import { OutputSection } from './components/OutputSection';
import { TeacherGuideSection } from './components/TeacherGuideSection';
import { Footer } from './components/Footer';

export default function App() {
  const [mode, setMode] = useState<AppMode>('student');
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [completedUnits, setCompletedUnits] = useState<string[]>(['P', 'O']);

  // Class mapping for accessibility font scaling
  const fontSizeClass =
    fontSize === 'large'
      ? 'text-lg [&_p]:text-lg [&_p]:leading-relaxed [&_li]:text-base'
      : fontSize === 'medium'
      ? 'text-base [&_p]:text-base [&_p]:leading-relaxed [&_li]:text-sm'
      : 'text-sm sm:text-base [&_p]:text-base [&_p]:leading-relaxed [&_li]:text-sm';

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-950 ${fontSizeClass}`}>
      {/* Top Navigation */}
      <Header
        mode={mode}
        setMode={setMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
        completedUnits={completedUnits}
      />

      <main id="top">
        {/* Hero Section */}
        <HeroSection />

        {/* Core Photo Viewer Inspection Unit */}
        <PhotoViewer />

        {/* PHOTO Step 1: P - Place */}
        <PlaceSection />

        {/* PHOTO Step 2: H - History */}
        <HistorySection />

        {/* PHOTO Step 3: O - Observation */}
        <ObservationSection />

        {/* PHOTO Step 4: T - Thinking */}
        <ThinkingSection />

        {/* PHOTO Step 5: O - Output */}
        <OutputSection />

        {/* Teacher Mode Dedicated Guide & Rubrics */}
        <TeacherGuideSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
