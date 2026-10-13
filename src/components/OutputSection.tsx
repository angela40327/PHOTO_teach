import React, { useState } from 'react';
import { OUTPUT_PROJECT_PROMPTS } from '../data/curriculumData';
import { StudentWorksheetState } from '../types';
import { exportStudentWorksheetWord } from '../utils/exportWord';
import {
  FileCheck2,
  FileDown,
  Sparkles,
  Share2,
  CheckCircle,
  Award,
  Layers,
  Map,
  FileText,
  Mic,
  Eye,
  RefreshCw,
} from 'lucide-react';

const INITIAL_WORKSHEET_STATE: StudentWorksheetState = {
  studentName: '',
  schoolName: '市立高中',
  gradeClass: '二年級三班',
  selectedTask: '任務 A：Google 我的地圖（My Maps）走讀導覽規劃',
  observationNotes:
    '1. 鳳凰堂整體外觀呈展翅鳳凰造型，左右翼廊純屬雕塑美學，內部無樓板與樓梯。\n2. 中堂屋頂雄雌一對金銅鳳凰，為日本萬元鈔票背面圖案。\n3. 阿字池引宇治川活水，水質澄澈，倒映佛殿象徵西方極樂世界七寶池。',
  geographyAnalysis:
    '宇治川源自琵琶湖，水流急湍。古工匠利用高低落差引水入阿字池，並在池畔鋪設鵝卵石洲濱沉澱泥沙。清晨水氣形成的朝霧，加上東側朝日山屏障，形成培育頂級宇治抹茶的天然微氣候。',
  historyReflection:
    '西元 1052 年為末法思想元年，貴族藤原賴通因末世天災恐懼，於 1053 年將別莊改建為阿彌陀堂（鳳凰堂），祈求彌陀淨土接引救贖。1953 年被選為日本十元硬幣圖案，融入全民日常生活記憶。',
  thinkingResponse:
    '【世界遺產超限觀光】建議採取每日參觀預約總量管制，並推行尖峰時段差別定價，將觀光收益專款用於古蹟修復與宇治市住民生活補貼。\n【媒體識讀】打卡照片往往裁切周邊，透過 Google 地圖衛星模式才能看清平等院與現代繁華市街的緊密共存。',
  outputSummary:
    '規劃一條「宇治水陸文化雙遺產」3 小時走讀路線：從宇治車站出發，經宇治橋通商店街，參訪平等院鳳凰堂與阿字池，再跨越朝霧橋至東岸宇治神社與宇治上神社，沿途標註 6 個歷史與水文解說牌。',
  selfEvaluationScore: 92,
};

export const OutputSection: React.FC = () => {
  const [worksheet, setWorksheet] = useState<StudentWorksheetState>(INITIAL_WORKSHEET_STATE);
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);
  const [showSample, setShowSample] = useState<boolean>(false);

  const handleInputChange = (field: keyof StudentWorksheetState, value: any) => {
    setWorksheet((prev) => ({ ...prev, [field]: value }));
  };

  const loadExemplarySample = () => {
    setWorksheet({
      studentName: '陳冠宇',
      schoolName: '國立師大附中',
      gradeClass: '高二 14 班',
      selectedTask: OUTPUT_PROJECT_PROMPTS[activeTaskIndex].title,
      observationNotes:
        '深入觀察鳳凰堂外觀：\n1. 左右翼廊為二層中空空廊，不具居住與步行功能，純為塑造鳳凰凌空展翅的美感比例。\n2. 中堂大脊兩側金銅鳳凰雄雌相望，原件藏於鳳翔館，展現平安時代頂尖金屬鑄造工藝。\n3. 阿字池邊鋪設數萬顆京都產扁平卵石（洲濱），象徵極樂淨土中的七寶蓮池水岸。',
      geographyAnalysis:
        '宇治川源自日本第一大淡水湖琵琶湖，水量充沛。鳳凰堂選址於西岸沖積高地，既借景東岸朝日山與大峰山系，又利用引水涵洞將河水導入阿字池形成活水循環。宇治川常年晨霧更造就了馳名世界的「宇治抹茶」產業地景。',
      historyReflection:
        '西元 1052 年被視為佛法衰頹的「末法元年」。關白藤原賴通在天災疫病頻傳的亂世中，將父親藤原道長的宇治別莊改建為佛寺，祈求死後往生阿彌陀佛極樂淨土。這座建於 1053 年的古蹟，戰後成為日本 10 圓硬幣的國寶標誌。',
      thinkingResponse:
        '【超限觀光治理】支持推動預約制與門票差別定價，並建立遊客流量數位監控系統。\n【照片與空間求真】旅行照片常給人古寺遺世獨立的錯覺；打開 Google Maps 街景會發現走出寺門即是繁榮熱鬧的抹茶商店街與JR電車線，反映了傳統與現代的動態共生。',
      outputSummary:
        '運用 Google My Maps 自訂圖層，建立包含 6 大實地坐標的「水之淨土：宇治文化走讀數位地圖」，包含每站 200 字歷史解說詞與自拍視角建議。',
      selfEvaluationScore: 95,
    });
    setShowSample(true);
  };

  return (
    <section id="output" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-sm font-semibold mb-3 border border-purple-200">
            <FileCheck2 className="w-4 h-4 text-purple-700" />
            <span>O - Output 成果產出 · 展現多元探究素養</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            成果如何展現？把研究化為地圖、導覽與展覽
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            探究的終點不是被動考試，而是「主動產出」。學生可以選擇一項有興趣的任務，並在線上工作坊中完成個人探究學習歷程，一鍵匯出為標準 Word 文件！
          </p>
        </div>

        {/* 4 Multi-Disciplinary Project Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {OUTPUT_PROJECT_PROMPTS.map((prompt, idx) => {
            const isSelected = activeTaskIndex === idx;
            const icons = [Map, FileText, Mic, Eye];
            const IconComponent = icons[idx] || FileCheck2;

            return (
              <div
                key={prompt.id}
                onClick={() => {
                  setActiveTaskIndex(idx);
                  handleInputChange('selectedTask', prompt.title);
                }}
                className={`bg-white rounded-2xl p-6 border transition-all cursor-pointer shadow-xs ${
                  isSelected
                    ? 'border-purple-600 ring-2 ring-purple-600/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                    {prompt.badge}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">
                  {prompt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 text-justify">
                  {prompt.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-1 text-xs">
                  <p className="text-slate-500">
                    <strong className="text-slate-700">預期成果：</strong>
                    {prompt.deliverables}
                  </p>
                  <p className="text-slate-500">
                    <strong className="text-slate-700">評量重點：</strong>
                    {prompt.evalCriteria}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Student Worksheet Workbench */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                個人探究歷程工作坊
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-1">
                線上學習單填寫與 Word 匯出產生器
              </h3>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={loadExemplarySample}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>載入優良範例學習單</span>
              </button>
              <button
                onClick={() => exportStudentWorksheetWord(worksheet)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-900/20 active:scale-98 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>匯出學生學習單 (.doc)</span>
              </button>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 pb-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                學生姓名
              </label>
              <input
                type="text"
                placeholder="例如：王小明"
                value={worksheet.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                就讀學校
              </label>
              <input
                type="text"
                placeholder="例如：市立第一高級中學"
                value={worksheet.schoolName}
                onChange={(e) => handleInputChange('schoolName', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                年級班級
              </label>
              <input
                type="text"
                placeholder="例如：高二 5 班"
                value={worksheet.gradeClass}
                onChange={(e) => handleInputChange('gradeClass', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Text Areas for PHOTO Notes */}
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                <span>1. O - 圖像觀察筆記（觀察到哪些建築構件與水岸細節？）</span>
                <span className="text-slate-400 font-normal">至少紀錄 3 點</span>
              </label>
              <textarea
                rows={3}
                value={worksheet.observationNotes}
                onChange={(e) => handleInputChange('observationNotes', e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                2. P - 地理空間與水文分析（宇治川水系、朝霧氣候與阿字池關係）
              </label>
              <textarea
                rows={3}
                value={worksheet.geographyAnalysis}
                onChange={(e) => handleInputChange('geographyAnalysis', e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                3. H - 歷史時空脈絡思考（西元 1052 年末法思想與貨幣象徵）
              </label>
              <textarea
                rows={3}
                value={worksheet.historyReflection}
                onChange={(e) => handleInputChange('historyReflection', e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                4. T - 跨領域公民思辨觀點（超限觀光／文化資產保存／媒體識讀）
              </label>
              <textarea
                rows={3}
                value={worksheet.thinkingResponse}
                onChange={(e) => handleInputChange('thinkingResponse', e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                5. O - 產出成果摘要企劃（你所選擇任務的構想大綱）
              </label>
              <textarea
                rows={3}
                value={worksheet.outputSummary}
                onChange={(e) => handleInputChange('outputSummary', e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            {/* Self Evaluation Slider */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                <span>自我評量預估分數：</span>
                <span className="text-base font-bold text-purple-700 font-mono">
                  {worksheet.selfEvaluationScore} 分 / 100 分
                </span>
              </div>
              <input
                type="range"
                min="60"
                max="100"
                value={worksheet.selfEvaluationScore}
                onChange={(e) => handleInputChange('selfEvaluationScore', Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Action Trigger Row */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              💡 填寫內容將保留於目前網頁中，點擊右方按鈕即可下載為排版完整的 Word 學習單檔案。
            </span>

            <button
              onClick={() => exportStudentWorksheetWord(worksheet)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-md shadow-purple-900/20 active:scale-98 transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>立即下載我的探究學習單 (.doc)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
