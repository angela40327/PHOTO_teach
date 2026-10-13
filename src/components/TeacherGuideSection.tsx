import React from 'react';
import { TEACHER_LESSON_PLANS, ASSESSMENT_RUBRICS } from '../data/curriculumData';
import { exportCurriculumGuideWord } from '../utils/exportWord';
import {
  GraduationCap,
  BookOpen,
  FileDown,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';

export const TeacherGuideSection: React.FC = () => {
  return (
    <section id="teacher-guide" className="py-16 sm:py-24 bg-amber-50/50 text-slate-900 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 text-amber-950 text-sm font-semibold mb-3 border border-amber-300">
              <GraduationCap className="w-4 h-4 text-amber-800" />
              <span>👨‍🏫 教師專區 · 108 課綱跨領域教學指南與評量規準</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
              教學設計與評量指引（Curriculum Guide）
            </h2>
            <p className="mt-3 text-lg text-slate-700 leading-relaxed">
              專為高中社會科跨領域教師設計：提供素養指標對齊、3 種課堂實施時間模組、探究提問鷹架與可客製化的 4 級評量規準（Rubrics）。
            </p>
          </div>

          <button
            onClick={() => exportCurriculumGuideWord()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md shadow-amber-900/20 transition-all cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>下載完整教案手冊 (.doc)</span>
          </button>
        </div>

        {/* 108 Curriculum Competency Alignment Grid */}
        <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-xs mb-12">
          <h3 className="text-xl font-bold text-slate-900 font-serif mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <span>108 課綱核心素養與學習重點對應</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 space-y-2">
              <span className="font-bold text-blue-800 block text-sm">🌍 地理科 (Geography)</span>
              <p className="text-slate-700 font-medium">【地 Ca-V-1】水文系統與人類活動之相互影響</p>
              <p className="text-slate-600 text-xs">
                分析宇治川水系如何形塑聚落交通防禦、阿字池庭園造景，以及朝霧微氣候對宇治茶特色產業的孕育。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
              <span className="font-bold text-amber-900 block text-sm">📜 歷史科 (History)</span>
              <p className="text-slate-700 font-medium">【歷 Bc-V-2】宗教信仰、文化交流與社會變遷</p>
              <p className="text-slate-600 text-xs">
                探討西元 1052 年末法思想之社會心理，理解平安貴族寄託西方淨土之審美，以及日本源平合戰之轉折。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 space-y-2">
              <span className="font-bold text-rose-900 block text-sm">🏛️ 公民與社會 (Civics)</span>
              <p className="text-slate-700 font-medium">【公 Ba-V-1】文化資產保存與公共利益衡量</p>
              <p className="text-slate-600 text-xs">
                思辨世界文化遺產超限觀光（Overtourism）衝擊，討論門票總量管制、觀光徵稅與住民生活品質之平衡。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <span className="font-bold text-emerald-900 block text-sm">🔍 探究與實作 (Inquiry)</span>
              <p className="text-slate-700 font-medium">【實探-V-1】問題發現、空間查核與多元展現</p>
              <p className="text-slate-600 text-xs">
                運用 Google 地圖與旅行照片進行空間求真，辨析媒體視角盲點，並產出數位走讀地圖、Podcast 或資訊圖表。
              </p>
            </div>
          </div>
        </div>

        {/* 3 Lesson Plans Schemes */}
        <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-xs mb-12">
          <h3 className="text-xl font-bold text-slate-900 font-serif mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            <span>三種課堂實施時間模組（彈性融入教學現場）</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEACHER_LESSON_PLANS.map((plan, idx) => (
              <div
                key={plan.mode}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      方案 {idx + 1}
                    </span>
                    <span className="text-xs text-slate-500">{plan.target}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">{plan.mode}</h4>

                  <div className="space-y-2.5 pt-2 border-t border-slate-200">
                    {plan.flow.map((step, sIdx) => (
                      <div key={sIdx} className="text-xs space-y-0.5">
                        <span className="font-bold text-amber-900 block font-mono">
                          {step.time} · {step.title}
                        </span>
                        <p className="text-slate-600 leading-relaxed text-justify">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Rubrics Matrix */}
        <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900 font-serif flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>高中學生探究成果評量規準（Rubrics）</span>
            </h3>
            <span className="text-xs font-semibold text-slate-500">共四大維度 · 每維度 25%</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-amber-100/70 text-amber-950">
                  <th className="p-3 border border-amber-200 font-bold w-1/4">評量維度與權重</th>
                  <th className="p-3 border border-amber-200 font-bold w-1/4 bg-emerald-50 text-emerald-900">
                    特優 (Exemplary) 90-100分
                  </th>
                  <th className="p-3 border border-amber-200 font-bold w-1/4 bg-blue-50 text-blue-900">
                    通過 (Proficient) 75-89分
                  </th>
                  <th className="p-3 border border-amber-200 font-bold w-1/4 bg-slate-100 text-slate-800">
                    發展中 (Developing) 60-74分
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-slate-700">
                {ASSESSMENT_RUBRICS.map((rubric, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-3 border border-amber-200 font-bold text-slate-900 bg-amber-50/30">
                      {rubric.dimension}
                    </td>
                    <td className="p-3 border border-amber-200 bg-emerald-50/30 leading-relaxed">
                      {rubric.levels.exemplary}
                    </td>
                    <td className="p-3 border border-amber-200 bg-blue-50/30 leading-relaxed">
                      {rubric.levels.proficient}
                    </td>
                    <td className="p-3 border border-amber-200 bg-slate-50/50 leading-relaxed">
                      {rubric.levels.developing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
