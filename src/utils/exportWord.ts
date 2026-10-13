import { StudentWorksheetState } from '../types';
import {
  PHOTO_MODEL_STEPS,
  PHOTO_HOTSPOTS,
  TIMELINE_DATA,
  MAP_EXPLORATION_POINTS,
  THINKING_TOPICS,
  FORMATIVE_QUIZ,
  OUTPUT_PROJECT_PROMPTS,
  TEACHER_LESSON_PLANS,
  ASSESSMENT_RUBRICS,
} from '../data/curriculumData';

/**
 * Generates an MS Word (.doc) file using standard Word HTML/XML format
 * that opens seamlessly in Word, Google Docs, and LibreOffice with full styling.
 */
function downloadWordDocument(filename: string, htmlContent: string) {
  const header = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:w="urn:schemas-microsoft-com:office:word" 
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="utf-8">
  <title>${filename}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page Section1 {
      size: 595.3pt 841.9pt; /* A4 */
      margin: 56.7pt 56.7pt 56.7pt 56.7pt;
      mso-header-margin: 35.4pt;
      mso-footer-margin: 35.4pt;
      mso-paper-source: 0;
    }
    div.Section1 { page: Section1; }
    body {
      font-family: 'Microsoft JhengHei', '微軟正黑體', 'PingFang TC', Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #1e293b;
      background-color: #ffffff;
    }
    h1 {
      font-size: 22pt;
      color: #991b1b;
      border-bottom: 2pt solid #dc2626;
      padding-bottom: 6pt;
      margin-top: 18pt;
      margin-bottom: 12pt;
      font-weight: bold;
    }
    h2 {
      font-size: 15pt;
      color: #065f46;
      border-left: 5pt solid #059669;
      padding-left: 8pt;
      margin-top: 16pt;
      margin-bottom: 8pt;
      font-weight: bold;
    }
    h3 {
      font-size: 12.5pt;
      color: #1e3a8a;
      margin-top: 12pt;
      margin-bottom: 6pt;
      font-weight: bold;
    }
    p { margin: 0 0 6pt 0; text-align: justify; }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 10pt 0;
      font-size: 10pt;
    }
    th {
      background-color: #f1f5f9;
      color: #0f172a;
      border: 1pt solid #cbd5e1;
      padding: 6pt 8pt;
      font-weight: bold;
      text-align: left;
    }
    td {
      border: 1pt solid #cbd5e1;
      padding: 6pt 8pt;
      vertical-align: top;
    }
    .highlight-box {
      background-color: #f8fafc;
      border: 1pt solid #e2e8f0;
      border-radius: 4pt;
      padding: 8pt 12pt;
      margin: 8pt 0;
    }
    .badge {
      display: inline-block;
      background-color: #fee2e2;
      color: #991b1b;
      font-weight: bold;
      padding: 2pt 6pt;
      border-radius: 3pt;
      font-size: 9pt;
    }
    .footer-note {
      font-size: 9pt;
      color: #64748b;
      text-align: center;
      margin-top: 24pt;
      border-top: 1pt solid #e2e8f0;
      padding-top: 8pt;
    }
  </style>
</head>
<body>
<div class="Section1">
  ${htmlContent}
  <div class="footer-note">
    本教材依據 108 課綱高中跨領域探究與實作精神編撰 · 主題：旅行照片會說話：用 Google 地圖探索日本平等院
  </div>
</div>
</body>
</html>`;

  const blob = new Blob([header], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportCurriculumGuideWord() {
  const html = `
    <h1>旅行照片會說話：用 Google 地圖探索日本平等院</h1>
    <p><strong>教學主題：</strong>日本京都平等院鳳凰堂探究與實作完整教材指南</p>
    <p><strong>適用對象：</strong>高中一年級至三年級學生（地理科、歷史科、公民與社會、探究與實作）</p>
    <p><strong>設計核心：</strong>PHOTO 探究教學模型（Place 地點、History 歷史、Observation 觀察、Thinking 思考、Output 產出）</p>
    
    <hr style="border: none; border-top: 1pt solid #e2e8f0; margin: 12pt 0;" />

    <h2>一、探究情境引言（The Inquiry Hook）</h2>
    <div class="highlight-box">
      <p>「當你在京都宇治拍下這座華麗的朱紅佛殿，你看到的是單純的風景，還是藏在 10 元日幣背後的千年密碼？」</p>
      <p>這座位於京都府宇治市的平等院鳳凰堂，建於西元 1053 年。整座佛閣宛若一隻舒展雙翅、停歇在阿字池畔的巨大鳳凰。本課程引導高中生透過一張旅行照片，搭配 Google 地圖 GIS 空間分析工具，解構建築符號、追溯平安時代末法思想歷史脈絡，並反思世界文化遺產保存與現代觀光的公民議題。</p>
    </div>

    <h2>二、PHOTO 教學模型核心架構</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 15%;">維度代號</th>
          <th style="width: 20%;">核心問題</th>
          <th style="width: 65%;">高中教學重點與探究內容</th>
        </tr>
      </thead>
      <tbody>
        ${PHOTO_MODEL_STEPS.map(
          (step) => `
          <tr>
            <td><strong>${step.title}</strong></td>
            <td>${step.question}</td>
            <td>${step.subtext}</td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>

    <h2>三、P - Place 地點：照片在哪裡？（GIS 空間與水文地景）</h2>
    <p><strong>地理定位：</strong>日本京都府宇治市宇治蓮華 116（座標：34°53'21" N, 135°48'28" E）</p>
    <p><strong>水文地理剖析：</strong></p>
    <ul>
      <li><strong>宇治川水系：</strong>源自日本第一大淡水湖「琵琶湖」（瀨田川下遊），水量豐沛急湍，為近江國與山城國之天然防線與水運咽喉。</li>
      <li><strong>阿字池活水工程：</strong>古代工匠巧借宇治川水位高低差，引河川活水入池，並透過石砌洲濱沉降泥沙，長年保持池水平靜如鏡。</li>
      <li><strong>宇治茶微氣候：</strong>宇治川晨霧瀰漫，加上東西兩側山丘屏障，形成天然遮陰與高濕度微氣候，造就了舉世聞名的頂級「宇治抹茶」。</li>
    </ul>

    <h3>宇治川走讀核心據點對照表</h3>
    <table>
      <thead>
        <tr>
          <th>地標名稱</th>
          <th>日文原名</th>
          <th>離平等院距離</th>
          <th>空間意義與功能</th>
        </tr>
      </thead>
      <tbody>
        ${MAP_EXPLORATION_POINTS.map(
          (p) => `
          <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.japanese}</td>
            <td>${p.distanceFromByodoin}（約步行 ${p.walkMinutes} 分鐘）</td>
            <td>${p.description}</td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>

    <h2>四、H - History 歷史：這裡發生過什麼？（千年時空雙軸線）</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 15%;">年代與紀年</th>
          <th style="width: 25%;">歷史事件</th>
          <th style="width: 45%;">事件脈絡</th>
          <th style="width: 15%;">歷史意義</th>
        </tr>
      </thead>
      <tbody>
        ${TIMELINE_DATA.map(
          (t) => `
          <tr>
            <td><strong>${t.year}</strong><br><small>${t.era}</small></td>
            <td><strong>${t.title}</strong></td>
            <td>${t.description}</td>
            <td><span class="badge">${t.tag}</span></td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>

    <h2>五、O - Observation 觀察：照片中看到什麼？（8 大核心建築細節）</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 22%;">觀察部位</th>
          <th style="width: 48%;">構件外觀特徵與歷史解讀</th>
          <th style="width: 30%;">高中生探究引導提問</th>
        </tr>
      </thead>
      <tbody>
        ${PHOTO_HOTSPOTS.map(
          (h) => `
          <tr>
            <td><strong>${h.title}</strong><br><small>${h.subtitle}</small></td>
            <td>${h.description}<br><em>【文史補充】${h.historicalNote}</em></td>
            <td><strong>${h.inquiryPrompt}</strong></td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>

    <h2>六、T - Thinking 思考：背後的跨領域思辨（四大議題卡）</h2>
    ${THINKING_TOPICS.map(
      (topic, idx) => `
      <div class="highlight-box">
        <h3>議題 ${idx + 1}：【${topic.category}】${topic.title}</h3>
        <p><strong>核心詰問：</strong>${topic.coreQuestion}</p>
        <p>${topic.context}</p>
        <p><strong>延伸討論點：</strong></p>
        <ul>
          ${topic.inquiryPoints.map((pt) => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `
    ).join('')}

    <h2>七、隨堂素養檢測題與解析</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 8%;">題號</th>
          <th style="width: 40%;">題目內容</th>
          <th style="width: 22%;">正確答案</th>
          <th style="width: 30%;">詳細解析</th>
        </tr>
      </thead>
      <tbody>
        ${FORMATIVE_QUIZ.map(
          (q) => `
          <tr>
            <td>${q.id}</td>
            <td>${q.question}</td>
            <td><strong>${q.options[q.correctIndex]}</strong></td>
            <td>${q.explanation}</td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>

    <h2>八、O - Output 產出：多元任務引導方案</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">任務項目</th>
          <th style="width: 45%;">任務說明</th>
          <th style="width: 30%;">預期交付成果</th>
        </tr>
      </thead>
      <tbody>
        ${OUTPUT_PROJECT_PROMPTS.map(
          (prompt) => `
          <tr>
            <td><strong>${prompt.title}</strong><br><small>${prompt.badge}</small></td>
            <td>${prompt.description}</td>
            <td>${prompt.deliverables}</td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>

    <h2>九、教師教學指引與評量規準（Rubrics）</h2>
    <h3>1. 三種課堂教學流程方案</h3>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">方案模式</th>
          <th style="width: 20%;">適用對象</th>
          <th style="width: 55%;">課堂教學流程安排</th>
        </tr>
      </thead>
      <tbody>
        ${TEACHER_LESSON_PLANS.map(
          (plan) => `
          <tr>
            <td><strong>${plan.mode}</strong></td>
            <td>${plan.target}</td>
            <td>
              ${plan.flow.map((f) => `<p><strong>${f.time}【${f.title}】</strong>：${f.desc}</p>`).join('')}
            </td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>

    <h3>2. 高中學生探究成果評量規準（Rubrics）</h3>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">評量維度</th>
          <th style="width: 25%;">特優 (Exemplary) 90-100分</th>
          <th style="width: 25%;">通過 (Proficient) 75-89分</th>
          <th style="width: 25%;">發展中 (Developing) 60-74分</th>
        </tr>
      </thead>
      <tbody>
        ${ASSESSMENT_RUBRICS.map(
          (r) => `
          <tr>
            <td><strong>${r.dimension}</strong><br><small>權重：${r.weight}</small></td>
            <td>${r.levels.exemplary}</td>
            <td>${r.levels.proficient}</td>
            <td>${r.levels.developing}</td>
          </tr>
        `
        ).join('')}
      </tbody>
    </table>
  `;

  downloadWordDocument('旅行照片會說話_平等院完整教學與學習手冊.doc', html);
}

export function exportStudentWorksheetWord(state: StudentWorksheetState) {
  const html = `
    <h1>學生個人探究成果學習單：旅行照片會說話</h1>
    <p><strong>主題：</strong>用 Google 地圖探索日本平等院（PHOTO 探究實作歷程檔案）</p>
    
    <table style="margin-top: 10pt;">
      <tr>
        <td><strong>學生姓名：</strong>${state.studentName || '（未填寫）'}</td>
        <td><strong>就讀學校：</strong>${state.schoolName || '（未填寫）'}</td>
        <td><strong>年級班級：</strong>${state.gradeClass || '（未填寫）'}</td>
        <td><strong>選定產出任務：</strong>${state.selectedTask || '任務 A：Google 我的地圖走讀'}</td>
      </tr>
    </table>

    <h2>一、O - Observation 影像觀察紀錄</h2>
    <div class="highlight-box">
      <p><strong>我的照片特徵觀察與細節筆記：</strong></p>
      <p>${state.observationNotes ? state.observationNotes.replace(/\n/g, '<br>') : '（尚無紀錄，請於網頁中填寫）'}</p>
    </div>

    <h2>二、P - Place 空間與 GIS 地景分析</h2>
    <div class="highlight-box">
      <p><strong>宇治川水系、阿字池與周邊空間分析：</strong></p>
      <p>${state.geographyAnalysis ? state.geographyAnalysis.replace(/\n/g, '<br>') : '（尚無紀錄，請於網頁中填寫）'}</p>
    </div>

    <h2>三、H - History 歷史時空脈絡探究</h2>
    <div class="highlight-box">
      <p><strong>西元 1052 年末法思想與建築創建背景反思：</strong></p>
      <p>${state.historyReflection ? state.historyReflection.replace(/\n/g, '<br>') : '（尚無紀錄，請於網頁中填寫）'}</p>
    </div>

    <h2>四、T - Thinking 跨科跨領域思辨觀點</h2>
    <div class="highlight-box">
      <p><strong>公民議題（超限觀光／文化資產）或媒體識讀觀點：</strong></p>
      <p>${state.thinkingResponse ? state.thinkingResponse.replace(/\n/g, '<br>') : '（尚無紀錄，請於網頁中填寫）'}</p>
    </div>

    <h2>五、O - Output 成果構想摘要與自評</h2>
    <div class="highlight-box">
      <p><strong>產出成果構想（導覽腳本／圖表構圖／策展企劃）：</strong></p>
      <p>${state.outputSummary ? state.outputSummary.replace(/\n/g, '<br>') : '（尚無紀錄，請於網頁中填寫）'}</p>
      <p style="margin-top: 8pt;"><strong>個人自評預估得分：</strong><span class="badge">${state.selfEvaluationScore} 分 / 100 分</span></p>
    </div>

    <h2>六、教師評語與學習回饋專區</h2>
    <table style="height: 120pt;">
      <tr>
        <td style="vertical-align: top;">
          <p><strong>任課教師簽閱 / 批改意見：</strong></p>
          <br><br><br><br>
          <p style="text-align: right; color: #64748b;">簽名：____________________ 日期：____年____月____日</p>
        </td>
      </tr>
    </table>
  `;

  const safeName = state.studentName ? `_${state.studentName}` : '';
  downloadWordDocument(`學生探究學習歷程檔案${safeName}.doc`, html);
}
