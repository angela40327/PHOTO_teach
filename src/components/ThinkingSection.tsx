import React, { useState } from 'react';
import { THINKING_TOPICS, FORMATIVE_QUIZ } from '../data/curriculumData';
import {
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Vote,
  Sparkles,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const ThinkingSection: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(THINKING_TOPICS[0].id);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(THINKING_TOPICS[0].id);

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: number }>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);

  // Public Poll State
  const [pollChoice, setPollChoice] = useState<number | null>(null);
  const [pollVotes, setPollVotes] = useState<number[]>([142, 68, 95]);

  const handleSelectAnswer = (qId: number, optionIdx: number) => {
    if (submittedQuiz) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleVote = (choiceIdx: number) => {
    if (pollChoice !== null) return;
    setPollChoice(choiceIdx);
    setPollVotes((prev) => {
      const next = [...prev];
      next[choiceIdx] += 1;
      return next;
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    FORMATIVE_QUIZ.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });
    return Math.round((correctCount / FORMATIVE_QUIZ.length) * 100);
  };

  const totalVotes = pollVotes.reduce((a, b) => a + b, 0);

  return (
    <section id="thinking" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-900 text-sm font-semibold mb-3 border border-rose-200">
            <HelpCircle className="w-4 h-4 text-rose-700" />
            <span>T - Thinking 跨科思辨 · 地理、歷史、公民與媒體識讀</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            背後有哪些問題？跳脫觀光視角的跨領域思辨
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            一張照片只是引子，真正的高中素養在於挖掘背後的「為什麼」。我們精選四大跨領域核心課題，引導同學發展批判思考能力。
          </p>
        </div>

        {/* 4 Interdisciplinary Inquiry Topic Cards */}
        <div className="space-y-4 mb-16">
          {THINKING_TOPICS.map((topic, index) => {
            const isExpanded = expandedTopic === topic.id;
            return (
              <div
                key={topic.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-100/70 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">
                      課題 0{index + 1} · {topic.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                      {topic.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-600">
                      🎯 核心詰問：{topic.coreQuestion}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-200 text-slate-700 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-6 pt-2 border-t border-slate-200/80 bg-white space-y-4">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                      {topic.context}
                    </p>

                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200/80 space-y-2">
                      <h4 className="text-xs font-bold text-rose-900 flex items-center gap-1.5 uppercase">
                        <Lightbulb className="w-4 h-4 text-rose-600" />
                        <span>小組研討與個人論述方向</span>
                      </h4>
                      <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {topic.inquiryPoints.map((pt, i) => (
                          <li key={i} className="leading-relaxed">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Public Opinion Poll: Overtourism Debate */}
        <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 border border-indigo-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold">
              <Vote className="w-4 h-4 text-indigo-700" />
              <span>公民公民論壇 · 即時公民思辨投票</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              面對世界遺產「超限觀光（Overtourism）」，宇治市民與政府該如何決策？
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              京都部分著名景點近年因過多觀光客導致公車擠爆、居民無法出門、木造古蹟承受磨損壓力。如果你是宇治市文化資產審議委員會委員，你會支持哪一種方案？
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: '支持全面實施「參觀預約制與每日人數總量上限」', desc: '以文化資產永續保存為最高優先，即使減少門票與地方店家收益也在所不惜。' },
                { title: '支持「以價制量」：開徵觀光文化遺產特別稅並推行差別定價', desc: '向外國與外地遊客收取較高門票與稅額，並將收益 100% 專款用於當地交通補貼與古蹟維修。' },
                { title: '維持現狀自由進出，強化分散人流動線至宇治川東岸與週邊茶園', desc: '兼顧在地商家經濟生計，利用智慧手機 APP 即時推播人潮避開尖峰時段。' },
              ].map((option, idx) => {
                const isSelected = pollChoice === idx;
                const percent = Math.round((pollVotes[idx] / totalVotes) * 100);
                return (
                  <button
                    key={idx}
                    onClick={() => handleVote(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/90 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {/* Background Progress Fill */}
                    {pollChoice !== null && (
                      <div
                        className="absolute inset-y-0 left-0 bg-indigo-100/60 transition-all duration-700"
                        style={{ width: `${percent}%` }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="font-bold text-sm sm:text-base text-slate-900 block">
                          選項 {idx + 1}：{option.title}
                        </span>
                        <p className="text-xs text-slate-500">{option.desc}</p>
                      </div>

                      {pollChoice !== null && (
                        <div className="text-right shrink-0">
                          <span className="text-base font-bold text-indigo-700 font-mono">
                            {percent}%
                          </span>
                          <span className="text-xs text-slate-400 block">{pollVotes[idx]} 票</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {pollChoice !== null && (
              <p className="text-xs text-indigo-800 font-medium pt-2">
                ✅ 感謝你的思辨投票！不同決策反映了不同的公民價值權衡（文化保存 vs 經濟發展 vs 住民權利）。
              </p>
            )}
          </div>
        </div>

        {/* Formative Assessment Quiz */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              隨堂形成性評量
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-serif">
              高中探究實作檢測：你讀懂這張照片了嗎？
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              共有 4 題素養情境選擇題，請選出最符合史實與地理觀察的答案，測試你的探究敏銳度！
            </p>
          </div>

          <div className="space-y-8">
            {FORMATIVE_QUIZ.map((q, qIdx) => {
              const selectedOpt = userAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      <span className="text-emerald-700 font-mono mr-2">Q{qIdx + 1}.</span>
                      {q.question}
                    </h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      {q.category}
                    </span>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = selectedOpt === oIdx;
                      let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                      if (submittedQuiz) {
                        if (oIdx === q.correctIndex) {
                          btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                        } else if (isChosen && !isCorrect) {
                          btnStyle = 'bg-red-100 border-red-500 text-red-950';
                        }
                      } else if (isChosen) {
                        btnStyle = 'bg-emerald-600 border-emerald-600 text-white font-semibold';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectAnswer(q.id, oIdx)}
                          className={`p-3 rounded-lg border text-xs sm:text-sm text-left transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span className="font-mono font-bold mr-1.5">
                            {String.fromCharCode(65 + oIdx)}.
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation shown after submission */}
                  {submittedQuiz && (
                    <div
                      className={`p-3.5 rounded-lg text-xs sm:text-sm border ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-amber-50 border-amber-200 text-amber-950'
                      }`}
                    >
                      <p className="font-bold flex items-center gap-1.5 mb-1">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>答對了！</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span>答錯了，正確答案是 ({String.fromCharCode(65 + q.correctIndex)})</span>
                          </>
                        )}
                      </p>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quiz Submit Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div>
                {submittedQuiz ? (
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-extrabold text-emerald-700 font-mono">
                      評量得分：{calculateScore()} 分
                    </span>
                    <span className="text-xs text-slate-500">
                      （{calculateScore() >= 75 ? '🎉 恭喜通過素養檢測！' : '再複習一下各單元內容喔！'}）
                    </span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500">
                    已完成 {Object.keys(userAnswers).length} / {FORMATIVE_QUIZ.length} 題
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {submittedQuiz ? (
                  <button
                    onClick={() => {
                      setSubmittedQuiz(false);
                      setUserAnswers({});
                    }}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                  >
                    重新測驗
                  </button>
                ) : (
                  <button
                    onClick={() => setSubmittedQuiz(true)}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white shadow-md shadow-emerald-900/20 transition-all cursor-pointer"
                  >
                    繳交並查看解析
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
