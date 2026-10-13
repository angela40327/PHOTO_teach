import { Hotspot, TimelineEvent, MapPoint, QuizQuestion, RubricCriterion } from '../types';

export const PHOTO_MODEL_STEPS = [
  {
    key: 'P',
    letter: 'P',
    title: 'Place 地點',
    question: '照片在哪裡？',
    subtext: '空間坐標、宇治川水系與周邊地景',
    color: 'from-blue-600 to-cyan-500',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    iconName: 'MapPin',
  },
  {
    key: 'H',
    letter: 'H',
    title: 'History 歷史',
    question: '這裡發生過什麼？',
    subtext: '西元 1052 末法思想、藤原賴通與千年興衰',
    color: 'from-amber-600 to-orange-500',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    iconName: 'Clock',
  },
  {
    key: 'O',
    letter: 'O',
    title: 'Observation 觀察',
    question: '照片中看到什麼？',
    subtext: '金銅鳳凰、翼廊、阿字池與洲濱石岸細節剖析',
    color: 'from-emerald-600 to-teal-500',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconName: 'Search',
  },
  {
    key: 'T',
    letter: 'T',
    title: 'Thinking 思考',
    question: '背後有哪些問題？',
    subtext: '地理水文、宗教審美、世界遺產超限觀光與媒體識讀',
    color: 'from-rose-600 to-pink-500',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    iconName: 'HelpCircle',
  },
  {
    key: 'O2',
    letter: 'O',
    title: 'Output 產出',
    question: '成果如何展現？',
    subtext: '數位走讀地圖、雙遺產資訊圖表、Podcast 或微展覽',
    color: 'from-purple-600 to-indigo-500',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    iconName: 'FileCheck2',
  },
];

export const PHOTO_HOTSPOTS: Hotspot[] = [
  {
    id: 'phoenix',
    title: '屋頂金銅鳳凰（雄雌一對）',
    subtitle: '國寶雕刻 · 萬元日幣紙鈔象徵',
    x: 48,
    y: 19,
    category: 'symbol',
    description:
      '鳳凰堂中堂大脊兩端立有一對鍍金青銅鳳凰（北側為雄、南側為雌），昂首展翅，象徵佛陀護佑與祥瑞盛世。現原件典藏於院內「鳳翔館」國寶庫中，屋頂上為依古法嚴格複製之復原雕塑。',
    historicalNote:
      '日本銀行於 2004 年發行的一萬日圓紙鈔背面，即採用此對鳳凰作為日本文化資產的國家級代表圖案。',
    inquiryPrompt:
      '為什麼日本政府會選擇將千年前佛教寺院屋頂上的神鳥，印在現代全國流通的最高面額鈔票上？這反映出怎樣的文化認同？',
  },
  {
    id: 'chudo',
    title: '中堂佛閣（阿彌陀堂）',
    subtitle: '重簷歇山頂 · 平安時代木構建築瑰寶',
    x: 50,
    y: 43,
    category: 'architecture',
    description:
      '中堂面闊三間、進深兩間，採用重簷歇山頂（入母屋造），屋面鋪設黑色燻瓦，樑柱施以典雅丹土漆。堂內供奉由平安時代首席佛師定朝所雕刻的國寶「木造阿彌陀如來坐像」，面容溫潤慈和，背後有華麗透雕的化佛光背。',
    historicalNote:
      '平安後期貴族篤信「觀想念佛」，中堂正面的格子門在清晨會映入東方晨光，池水反光照在阿彌陀如來的金箔上，宛若極樂淨土降臨人間。',
    inquiryPrompt:
      '仔細觀察中堂的建築比例，為什麼中堂相較於兩側翼廊更顯沉穩厚重？門窗的開口設計與光線有何神學考量？',
  },
  {
    id: 'wings',
    title: '左右雙翼廊（空廊構造）',
    subtitle: '純粹美學建築 · 展翅騰飛的巧思',
    x: 27,
    y: 45,
    category: 'architecture',
    description:
      '從中堂兩側橫向伸展的翼廊為雙層木構迴廊，轉角設有小方亭。令人驚奇的是，這兩座迴廊內部並無鋪設可供行走的樓板與樓梯，其層高亦不適合人體站立，純屬「視覺雕塑性建築」。',
    historicalNote:
      '工匠為了讓整座寺院遠看宛若一隻舒展雙翼、即將自淨土池畔振翅高飛的巨大鳳凰，特意建造了這對不具備實際居住與通行機能的翼廊。',
    inquiryPrompt:
      '在講求實用機能的建築歷史中，為何藤原賴通願意耗費龐大物力建造「無法住人也無法通行」的翼廊？這揭示了平安貴族何種藝術價值觀？',
  },
  {
    id: 'biro',
    title: '後方尾廊（羽尾延伸）',
    subtitle: '三維立體均衡 · 鳳尾象徵',
    x: 75,
    y: 46,
    category: 'architecture',
    description:
      '在中堂後方正中央向後筆直延伸出一條單層尾廊，如同鳳凰尾羽，使整體平面呈現「凸」字形，與正面的翼廊共同形成完美對稱的三維空間。',
    historicalNote:
      '尾廊的存在加強了建築的立體進深感，也讓信眾從各個角度環池觀賞時，皆能感受到鳳凰立體靈動的姿態。',
    inquiryPrompt:
      '如果拿掉尾廊，鳳凰堂的視覺重心會產生什麼變化？三維空間的對稱性對佛教宗教儀軌有何心理暗示作用？',
  },
  {
    id: 'aji_pond',
    title: '阿字池（淨土舟遊庭園）',
    subtitle: '引宇治川活水 · 倒影再現西方極樂',
    x: 50,
    y: 72,
    category: 'scenery',
    description:
      '阿字池環繞著鳳凰堂，水源源自宇治川。在梵文與密教中，「阿（A）」字代表萬物的起點與宇宙真理。池面如同一面明鏡，將朱紅的鳳凰堂與綠樹藍天完美倒映其中。',
    historicalNote:
      '平安時代的貴族常乘畫舫在阿字池中泛舟（舟遊式庭園），在管弦樂聲中遙望佛堂，體驗宛若《阿彌陀經》所載西方極樂淨土的七寶蓮池水。',
    inquiryPrompt:
      '照片中的池水倒影十分清晰，古代設計者如何利用宇治川的水位與沉積機制，讓這座人工池塘在千年間維持流動與澄澈？',
  },
  {
    id: 'suhama',
    title: '洲濱鵝卵石沙灘（白石汀線）',
    subtitle: '平安造園工法 · 象徵淨土寶地',
    x: 48,
    y: 56,
    category: 'scenery',
    description:
      '阿字池邊整齊鋪排著層層扁平圓潤的鵝卵石，形成優美曲折的「洲濱」景觀。這種造園手法模擬自然海岸潮間帶的沙洲，是平安時代至鐮倉時代日本庭園的最高代表手法。',
    historicalNote:
      '2012-2014 年平成大修理期間，考證考古發掘成果，重新鋪設了數萬顆京都周邊產卵石，忠實還原千年前藤原賴通時期的池畔汀線。',
    inquiryPrompt:
      '為何位於內陸京都盆地東南的宇治寺院，要特別在水池邊模擬「海濱沙洲」的景致？這與古代日本人的神聖空間想像有何關聯？',
  },
  {
    id: 'bridge',
    title: '連拱朱橋與木質棧道',
    subtitle: '彼岸與此岸的界線 · 宗教通道',
    x: 91,
    y: 52,
    category: 'religion',
    description:
      '右側橫跨阿字池的小型朱紅色木造拱橋，連結了凡塵的陸地與供奉阿彌陀如來的神聖中堂。信徒跨越橋樑的過程，在象徵意義上就是自「此岸」（穢土）渡向「彼岸」（淨土）。',
    historicalNote:
      '在古代祭典儀式中，只有高階僧侶與皇室貴族在特定法會時方獲准登橋入堂，一般平民只能在池畔遙拜。',
    inquiryPrompt:
      '橋樑在宗教地理學中常被賦予「門檻空間（Liminal Space）」的隱喻，此處的朱紅小橋如何引導參拜者的心理轉變？',
  },
  {
    id: 'borrowed_scenery',
    title: '後方蒼翠山巒（自然借景）',
    subtitle: '朝日山與大峰山系 · 天人合一的地景',
    x: 10,
    y: 25,
    category: 'scenery',
    description:
      '鳳凰堂背後的深鬱林木與遠方宇治川東岸的朝日山相映成趣。日本傳統造園注重「借景（Shakkei）」手法，將院牆外的自然山勢納入庭園構圖，消弭人造建築與大自然的邊界。',
    historicalNote:
      '宇治地區多山環抱，晨昏易起山嵐霧靄，正是紫式部在《源氏物語》宇治十帖中描述的幽邃浪漫氛圍。',
    inquiryPrompt:
      '現代都市開發若在寺院後方建造高樓，借景效果將遭破壞。京都府實施何種嚴格的《景觀法》保護這片天際線？',
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '1052 年',
    era: '平安時代（永承七年）',
    title: '「末法思想」元年與別莊改建',
    description:
      '根據佛教預言，佛陀滅度後兩千年正法、像法已盡，進入罪惡遍布的「末法時代」。關白藤原賴通將父親藤原道長留下的宇治別莊改名為「平等院」，祈求在亂世中得彌陀救贖。',
    significance: '開啟日本淨土宗建築與造園藝術的全盛時代。',
    tag: '創建起源',
  },
  {
    year: '1053 年',
    era: '平安時代（天喜元年）',
    title: '阿彌陀堂（鳳凰堂）與定朝大佛落成',
    description:
      '由宮廷御用首席造佛師「定朝」採用寄木造法完成阿彌陀如來坐像，堂頂安置純金鍍銅雙鳳凰。時人讚譽「欲知極樂何所似，請拜宇治平等院」。',
    significance: '日本唯一現存 11 世紀平安時代最高規格極樂淨土佛堂。',
    tag: '國寶落成',
  },
  {
    year: '1180 年',
    era: '平安末期（治承四年）',
    title: '源平合戰首役：宇治川之戰與源賴政自刃',
    description:
      '源賴政擁立以仁王起兵討伐平家，在宇治川拆毀宇治橋迎敵，戰敗退入平等院，在鳳凰堂旁的「扇之芝」剖腹自盡，終年 77 歲。',
    significance: '揭開日本源平內戰與武家幕府政權崛起的歷史大序幕。',
    tag: '武士歷史',
  },
  {
    year: '1336 年',
    era: '南北朝時代（建武三年）',
    title: '楠木正成戰火與多數伽藍焚毀',
    description:
      '南北朝戰亂中，平等院內多數堂塔建築遭大火吞噬，唯獨鳳凰堂與阿彌陀如來坐像奇蹟般逃過祝融之劫，保存至今。',
    significance: '奇蹟倖存，成為後世研究平安木構的唯一完整實物標本。',
    tag: '戰火浩劫',
  },
  {
    year: '1951-1953 年',
    era: '昭和時代',
    title: '指定為日本國寶 & 榮登十圓硬幣圖案',
    description:
      '因其卓越的藝術美學與歷史地位，鳳凰堂被列為第一批國家級「國寶」。1953 年日本政府改版貨幣，決定以平等院鳳凰堂作為 10 日圓硬幣正面圖案，深入全民日常生活。',
    significance: '從貴族私產轉化為全民日常文化記憶與國家身分象徵。',
    tag: '現代象徵',
  },
  {
    year: '1994 年',
    era: '平成時代',
    title: '登錄聯合國教科文組織世界文化遺產',
    description:
      '平等院以「古都京都的文化財」重要構成資產，正式獲選登錄 UNESCO 世界文化遺產名錄，成為全球全人類共同保護的文明瑰寶。',
    significance: '提升至全人類普世價值（OUV）的國際文化遺產地位。',
    tag: '世界遺產',
  },
  {
    year: '2012-2014 年',
    era: '平成時代',
    title: '「平成大修理」百年大修工程',
    description:
      '歷經一年半封館整修，經由嚴謹古蹟紅外線光學考證，洗去風化暗黑漆色，還原平安時代亮麗的丹土朱紅、鍍金青銅鳳凰與鋪設復古洲濱鵝卵石汀線。',
    significance: '展現日本在古蹟科學保存、文化資產復原與工藝傳承的巔峰技術。',
    tag: '當代修復',
  },
];

export const MAP_EXPLORATION_POINTS: MapPoint[] = [
  {
    id: 'byodoin',
    name: '平等院鳳凰堂',
    japanese: 'びょうどういん ほうおうどう',
    type: 'heritage',
    x: 35,
    y: 65,
    distanceFromByodoin: '核心據點',
    walkMinutes: 0,
    description:
      '座落於宇治川西岸，為平安時代藤原賴通創建之淨土宗名剎，擁有一千餘年歷史，登錄 UNESCO 世界文化遺產。',
    googleMapQuery: '平等院, 宇治市',
  },
  {
    id: 'uji_river',
    name: '宇治川與中島（橘島・塔之島）',
    japanese: 'うじがわ なかのしま',
    type: 'nature',
    x: 52,
    y: 50,
    distanceFromByodoin: '約 180 公尺',
    walkMinutes: 3,
    description:
      '琵琶湖唯一流出之活水，自古即為水運交通與軍事天險。川心沙洲修築有十三重石塔（日本最高古石塔，祈求河川安瀾）。',
    googleMapQuery: '宇治公園 塔之島',
  },
  {
    id: 'asagiri_bridge',
    name: '朝霧橋',
    japanese: 'あさぎりばし',
    type: 'bridge',
    x: 60,
    y: 42,
    distanceFromByodoin: '約 300 公尺',
    walkMinutes: 4,
    description:
      '全長 74 公尺的朱紅色步行曲橋，橫跨宇治川東支流，連結中島與東岸的宇治神社，清晨水氣常籠罩薄霧，故名朝霧橋。',
    googleMapQuery: '朝霧橋, 宇治市',
  },
  {
    id: 'uji_bridge',
    name: '宇治橋（日本三大古橋之一）',
    japanese: 'うじばし',
    type: 'bridge',
    x: 35,
    y: 20,
    distanceFromByodoin: '約 500 公尺',
    walkMinutes: 7,
    description:
      '始建於西元 646 年（大化改新時期），名列日本最古老橋樑之一。橋頭設有「三之間」觀景台，相傳為豐臣秀吉汲取茶道用水之所。',
    googleMapQuery: '宇治橋, 宇治市',
  },
  {
    id: 'uji_shrine',
    name: '宇治神社',
    japanese: 'うじじんじゃ',
    type: 'heritage',
    x: 72,
    y: 35,
    distanceFromByodoin: '約 450 公尺（經朝霧橋）',
    walkMinutes: 6,
    description:
      '祭祀應神天皇皇子「菟道稚郎子命」，曾為平等院的鎮守社。以「回頭引路兔（みかえり兎）」作為守護引路象徵。',
    googleMapQuery: '宇治神社, 宇治市',
  },
  {
    id: 'ujigami_shrine',
    name: '宇治上神社',
    japanese: 'うじがみじんじゃ',
    type: 'heritage',
    x: 82,
    y: 25,
    distanceFromByodoin: '約 600 公尺',
    walkMinutes: 9,
    description:
      '擁有全日本現存「最古老神社本殿」（西元 1060 年前後木構），同為 UNESCO 世界文化遺產，殿內有宇治七名水之一「桐原水」。',
    googleMapQuery: '宇治上神社, 宇治市',
  },
  {
    id: 'genji_monogatari',
    name: '源氏物語宇治十帖紀念像',
    japanese: 'げんじものがたり きねんぞう',
    type: 'culture',
    x: 68,
    y: 48,
    distanceFromByodoin: '約 350 公尺',
    walkMinutes: 5,
    description:
      '紫式部巨著《源氏物語》最後十帖以宇治為悲劇舞台，朝霧橋畔立有匂宮與浮舟同乘小舟泛川的青銅雕像。',
    googleMapQuery: '源氏物語 宇治十帖 雕像',
  },
];

export const THINKING_TOPICS = [
  {
    id: 'topic_geography',
    category: '地理 × 水文環境',
    title: '自然水文如何被工匠轉化為神聖精神景觀？',
    coreQuestion: '宇治川水源如何調控阿字池水質，古代工程與地景借景有何智慧？',
    context:
      '宇治川源自琵琶湖，水量豐沛且水質清澈。藤原賴通在此造園時，巧借河川高低落差引水入阿字池，並在池岸鋪排鵝卵石「洲濱」，重現古代海洋沙洲的美學。此外，後方朝日山的山稜線更巧妙融入寺院背後，成為著名的「借景」典範。',
    inquiryPoints: [
      '古代工匠如何在沒有現代幫浦的情況下，維持阿字池的活水循環與沉積防淤？',
      '宇治川常年形成的晨霧（朝霧）對茶樹生長與佛堂氛圍各產生什麼影響？',
      '現代都市規劃中，如何透過景觀管制區（條例）維護這片借景天際線？',
    ],
  },
  {
    id: 'topic_history',
    category: '歷史 × 信仰美學',
    title: '恐懼如何催生極致藝術？末法思想下的貴族心靈救贖',
    coreQuestion: '西元 1052 年的末世恐懼，為何促成了日本佛教建築史上最耀眼的鳳凰堂？',
    context:
      '在平安後期，社會面臨頻繁的天災、饑荒與社會秩序動盪，佛教界普遍認定西元 1052 年正是佛法衰頹的「末法之年」。貴族們不再寄望於現世繁華，轉而傾家蕩產將西方極樂世界的莊嚴景象具象化在人間，建造了阿彌陀堂與倒映阿字池的淨土庭園。',
    inquiryPoints: [
      '「末法思想」與歐洲中世紀的千禧年末世論有何異曲同工之處？',
      '阿彌陀佛像的「寄木造」工法革新，如何使大規模佛像雕刻得以迅速普及？',
      '為何現代日本仍將此佛堂圖案印製於日常流通的十元硬幣上？',
    ],
  },
  {
    id: 'topic_citizenship',
    category: '公民 × 文化資產',
    title: '世界文化遺產與「超限觀光（Overtourism）」的兩難平衡',
    coreQuestion: '龐大國際觀光人潮為地方帶來經濟繁榮，還是破壞了古蹟幽靜與在地生活？',
    context:
      '平等院每年吸引超過數百萬遊客造訪，帶來可觀的門票與周邊茶商收入。然而，狹窄的宇治參道面臨交通壅塞、垃圾處理、拍照干擾與古蹟承載量過載等嚴峻挑戰。在「文化資產保存」與「觀光經濟效益」之間，公民社會該如何權衡決策？',
    inquiryPoints: [
      '是否應採取「預約制」、「觀光特別徵稅（入湯稅/宿泊稅）」或「淡旺季差別定價」？',
      '鳳凰堂內部木地板因長年遊客踩踏而受損，古蹟「開放親近」與「永久封存」的界線何在？',
      '在地住民與觀光客在公共空間使用上的權利衝擊，政府該如何透過公聽會協調？',
    ],
  },
  {
    id: 'topic_media',
    category: '資訊科技 × 媒體素養',
    title: '照片會說話，還是照片會「說謊」？影像與地理空間批判',
    coreQuestion: '社群打卡照片常常只展示局部取景，我們該如何利用 Google 地圖進行「空間求真」？',
    context:
      '在社群媒體時代，一張旅行照片往往經過精挑細選的濾鏡、廣角裁切與構圖，可能讓人誤以為這是一座遺世獨立的深山古剎，忽視了它旁邊幾十公尺外其實就是熱鬧的商店街與住宅區。利用 Google 衛星空拍圖、街景服務（Street View）與空間量測，能幫助我們破除「照片濾鏡」，看清事物的真實脈絡。',
    inquiryPoints: [
      '透過 Google Maps 衛星模式觀察平等院，它的基地與宇治現代市街有何相鄰關係？',
      '從拍照角度的「視角盲點」，討論媒體影像如何形塑大眾對異國文化的刻板印象？',
      '「PHOTO」模型如何轉化為高中生日常檢視網路假訊息或爭議圖片的實用查核工具？',
    ],
  },
];

export const FORMATIVE_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: '請問平等院鳳凰堂最初落成於西元 1053 年，其建造的時代核心心理背景為何？',
    options: [
      '慶祝幕府武家政權在宇治川戰役中獲得大捷',
      '因應西元 1052 年進入「末法思想」元年，祈求阿彌陀佛淨土接引救贖',
      '為了安置豐臣秀吉從外國帶回的兩尊金銅鳳凰',
      '作為德川幕府接待外國使節的皇家迎賓館',
    ],
    correctIndex: 1,
    explanation:
      '正確！西元 1052 年（平安時代永承七年）被日本視為「末法元年」，貴族藤原賴通因末世恐懼，隔年建成了象徵西方極樂淨土的阿彌陀堂（鳳凰堂）。',
    category: '歷史背景',
  },
  {
    id: 2,
    question: '照片中鳳凰堂中堂兩側橫向伸展的「左右翼廊」，在建築機能上有何最特別的特徵？',
    options: [
      '內部設有寬敞的講經堂，可供數百位僧侶同時修行',
      '純粹追求展翅鳳凰外觀的雕塑性建築，內部並無鋪設可供行走的樓板與樓梯',
      '作為貯藏平安時代珍貴佛經與皇家財寶的秘密防潮倉庫',
      '是專門供天皇在夏天避暑乘涼所設的御用涼亭',
    ],
    correctIndex: 1,
    explanation:
      '正確！左右翼廊純屬外觀美學的巧思，象徵鳳凰舒展之雙翼，其內部無樓板、無階梯，不能供人居住或通行，展現了平安貴族對視覺極致對稱與意象的追求。',
    category: '建築觀察',
  },
  {
    id: 3,
    question: '從地理環境分析，為何宇治川兩岸自古以來能培育出全日本最高品質的「宇治抹茶」？',
    options: [
      '因為該地為全日本降雨量最低的乾燥沙漠性氣候',
      '宇治川流域晨昏常生山嵐晨霧，加上周邊山稜阻擋烈日，形成天然遮陰與濕潤微氣候',
      '土壤中含有大量火山熔岩灰，酸鹼值達到極端的強酸性',
      '引進了琵琶湖深層冰川融雪，全年水溫保持在攝氏零度以下',
    ],
    correctIndex: 1,
    explanation:
      '正確！宇治川晨霧瀰漫，結合兩側山巒地形屏障，使茶樹葉片在溫潤柔和的光線中緩慢生長，避免苦澀茶多酚過度累積，造就香濃甘醇的頂級茶葉。',
    category: '空間地理',
  },
  {
    id: 4,
    question: '在現代日本貨幣體系中，平等院的文化符號分別出現在哪兩種法定貨幣之上？',
    options: [
      '5 日圓硬幣正面 與 1,000 日圓紙鈔背面',
      '10 日圓硬幣正面（鳳凰堂全景） 與 10,000 日圓紙鈔背面（屋頂金銅鳳凰）',
      '50 日圓硬幣背面 與 5,000 日圓紙鈔正面',
      '100 日圓硬幣正面 與 2,000 日圓紙鈔背面',
    ],
    correctIndex: 1,
    explanation:
      '正確！10 日圓硬幣正面刻印的是鳳凰堂全景，而萬元紙鈔背面印的是鳳凰堂屋脊上的國寶金銅鳳凰，展現其身為日本國家文化象徵的最高地位。',
    category: '文化象徵',
  },
];

export const OUTPUT_PROJECT_PROMPTS = [
  {
    id: 'task_map',
    title: '任務 A：Google 我的地圖（My Maps）走讀導覽規劃',
    badge: '空間地理 × 數位 GIS',
    description:
      '運用 Google My Maps 自訂圖層功能，設計一條以「平等院與宇治川水系」為核心的 3 小時高中生實地走讀路線，標註至少 5 個關鍵地標並撰寫導覽解說詞。',
    deliverables: 'Google My Maps 公開地圖連結 + 景點主題標籤與 200 字解說卡',
    evalCriteria: '空間節點邏輯性、路徑流暢度、解說內容與照片實物關聯度',
  },
  {
    id: 'task_infographic',
    title: '任務 B：視覺化資訊圖表（Infographic）懶人包',
    badge: '視覺傳達 × 跨科統整',
    description:
      '製作一張《十元硬幣背後的千禧密碼：解密宇治平等院》A4 資訊圖表，以圖文並茂方式呈現建築構造、末法思想、水文庭園與世界遺產三大看點。',
    deliverables: 'Canva 或軟體輸出之高解析圖表 PDF / 圖像，包含 4 處核心圖解',
    evalCriteria: '資訊層次清晰度、視覺美感與數據/圖解精確度、文案易讀性',
  },
  {
    id: 'task_podcast',
    title: '任務 C：文化隨身聽 5 分鐘 Podcast 語音走讀劇本',
    badge: '表達溝通 × 歷史文學',
    description:
      '模擬錄製一集給高中旅人的現場音訊指南，引導聽眾站在阿字池畔，從照片視角出發，聲歷其境體會平安時代的管弦清音與現代修復的動人故事。',
    deliverables: '3-5 分鐘雙人對談或單人旁白錄音檔 + 1,200 字完整對白劇本',
    evalCriteria: '聲音情境帶入感、歷史考據嚴謹性、引導聽眾觀察實物之啟發性',
  },
  {
    id: 'task_exhibition',
    title: '任務 D：數位微策展（Google 街景 × 虛擬展覽）',
    badge: '科技應用 × 策展思維',
    description:
      '利用 Google 街景服務與旅行照片，在 Padlet 或 Google 簡報上策劃「水、霧、茶、佛：宇治地景四重奏」線上特展，包含策展論述與展品導讀。',
    deliverables: '線上策展平台分享連結 + 500 字策展主論述 + 展品詮釋牌',
    evalCriteria: '主題概念深度、數位展品選件邏輯、展覽動線設計與觀眾互動性',
  },
];

export const TEACHER_LESSON_PLANS = [
  {
    mode: '50 分鐘單堂微探究',
    target: '高一/高二 地理或歷史課堂',
    flow: [
      { time: '00-10 分鐘', title: '影像破題', desc: '展示核心照片，提問學生：「這座佛堂為何出現在十元硬幣上？池水倒影有何玄機？」引起探究興趣。' },
      { time: '10-25 分鐘', title: 'PHOTO P-H-O 分組觀察', desc: '學生利用平板掃描 8 大熱點，並在 GIS 模擬器量測宇治川寬度與地標距離。' },
      { time: '25-40 分鐘', title: 'T 思考思辨對話', desc: '班級分組抽籤四大思考議題卡，針對「超限觀光」與「末法救贖」進行 5 分鐘發表。' },
      { time: '40-50 分鐘', title: '隨堂評量與反思總結', desc: '完成 4 題素養小測驗，教師指派延伸產出任務。' },
    ],
  },
  {
    mode: '100 分鐘跨領域專題',
    target: '高二 跨領域探究與實作課',
    flow: [
      { time: '00-20 分鐘', title: 'PHOTO 模型完整解析', desc: '導引學生掌握「照片-地圖-文獻」三角驗證法，解構平等院與宇治神社雙岸地景。' },
      { time: '20-50 分鐘', title: 'Google 地圖實作工坊', desc: '開啟 Google My Maps，學生動手繪製走讀路徑，並分析地形等高線與水文沖積平原。' },
      { time: '50-80 分鐘', title: '產出草案工作坊', desc: '各組選定 A~D 任務之一，擬定導覽腳本大綱或資訊圖架構，同儕互評反饋。' },
      { time: '80-100 分鐘', title: '組間成果發表與評量', desc: '即時產出個人探究報告卡，並下載 Word 學習歷程存檔。' },
    ],
  },
  {
    mode: '4 週專案式學習（PBL）',
    target: '高三 選修課程 / 校訂必修',
    flow: [
      { time: '第 1 週', title: '發現問題與照片解構', desc: 'PHOTO 模型引導、旅行照片真實性辨識、京都世界遺產地理概況。' },
      { time: '第 2 週', title: 'GIS 空間分析與文獻探討', desc: '水文地理分析、末法思想文獻考證、宇治川水系變遷探討。' },
      { time: '第 3 週', title: '數位走讀產品研發', desc: '完成 Google My Maps、Podcast 錄製或資訊圖表排版。' },
      { time: '第 4 週', title: '期末數位展覽與同儕盲評', desc: '舉辦班級「宇治數位博覽會」，依 Rubrics 規準進行自評、互評與教師總結評量。' },
    ],
  },
];

export const ASSESSMENT_RUBRICS: RubricCriterion[] = [
  {
    dimension: '1. 圖像觀察與細節辨識 (Observation)',
    weight: '25%',
    levels: {
      exemplary: '能精準辨析照片中 6 處以上建築與地景細節（如鳳凰、翼廊空廊、洲濱汀線），並結合符號學詮釋其宗教美學象徵。',
      proficient: '能指出照片中 4-5 處核心特徵，並正確說明其外觀名稱與基本功用。',
      developing: '僅能指出主殿等概略外觀，缺乏對細部構件與空間比例的深入觀察。',
    },
  },
  {
    dimension: '2. 空間地理與 GIS 地景分析 (Place)',
    weight: '25%',
    levels: {
      exemplary: '能熟練操作 Google 地圖分析宇治川水文對庭園營造、微氣候、茶葉產業之因果關係，具備宏觀與微觀空間推理能力。',
      proficient: '能標記核心地標與行走動線，理解宇治川的基本水文特性及空間分佈。',
      developing: '對地理位置定位模糊，無法清楚說明水文環境與庭園設計的空間關聯。',
    },
  },
  {
    dimension: '3. 歷史脈絡與跨科思辨 (History & Thinking)',
    weight: '25%',
    levels: {
      exemplary: '能深刻同理「末法思想」之社會心理，並能就世界遺產超限觀光或影像媒體識讀提出多元、有理有據的批判性見解。',
      proficient: '清楚理解藤原賴通建寺之歷史時空，能回答思辨問題並提出個人合理觀點。',
      developing: '僅能覆述教材年代與事件表面，缺乏對歷史背景之同理心與批判反思。',
    },
  },
  {
    dimension: '4. 多元產出與數位展現 (Output)',
    weight: '25%',
    levels: {
      exemplary: '成果作品（地圖/圖表/Podcast/展覽）結構嚴謹、美感優秀、論述清晰，具備高度創意與自學展示價值。',
      proficient: '成果作品完整符合所選任務規範，內容正確，具備良好的溝通傳達效果。',
      developing: '產出內容零散不完整，未能整合探究過程中搜集之地理歷史資料。',
    },
  },
];
