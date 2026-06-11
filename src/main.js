const STORAGE_KEY = "kids-word-adventure:v1";

const ageOptions = [
  {
    id: "preschool",
    label: "3-5 岁",
    icon: "🧩",
    title: "大图、大声音、强提示",
    detail: "每轮 6 题，也会练字母拼搭和完整拼写，提示更多、节奏更慢。",
    roundSize: 6,
    guidedSpelling: true,
    fullSpelling: true,
    hintLevel: "strong",
    optionCount: 3,
    speechRate: { learn: 0.5, clear: 0.54, quiz: 0.58, segment: 0.48 },
    challengeRatio: 0.08,
  },
  {
    id: "primary",
    label: "6-9 岁",
    icon: "✏️",
    title: "拼搭、目标和贴纸",
    detail: "每轮 8 题，字母拼搭为主，穿插完整拼写和简单挑战。",
    roundSize: 8,
    guidedSpelling: true,
    fullSpelling: true,
    hintLevel: "medium",
    optionCount: 4,
    speechRate: { learn: 0.56, clear: 0.6, quiz: 0.64, segment: 0.52 },
    challengeRatio: 0.16,
  },
  {
    id: "older",
    label: "10-12 岁",
    icon: "🏆",
    title: "例句和完整拼写",
    detail: "每轮 10 题，包含完整拼写和更高阶词汇。",
    roundSize: 10,
    guidedSpelling: true,
    fullSpelling: true,
    hintLevel: "light",
    optionCount: 4,
    speechRate: { learn: 0.62, clear: 0.66, quiz: 0.7, segment: 0.58 },
    challengeRatio: 0.28,
  },
];

const mascotOptions = [
  { id: "fox", name: "小狐狸", symbol: "狐", color: "#f97316" },
  { id: "bear", name: "小熊", symbol: "熊", color: "#8b5e34" },
  { id: "owl", name: "猫头鹰", symbol: "鹰", color: "#6d5dfc" },
];

const stickerCatalog = ["晨光星星", "水果徽章", "森林脚印", "学校铅笔", "彩虹贴纸", "勇气宝石"];

const phonicsOverrides = {
  cat: { phonics: "c · a · t", ipa: "/kæt/", segments: ["ca", "t"] },
  dog: { phonics: "d · o · g", ipa: "/dɔg/", segments: ["do", "g"] },
  bird: { phonics: "b · ir · d", ipa: "/bɝːd/", segments: ["bir", "d"] },
  fish: { phonics: "f · i · sh", ipa: "/fɪʃ/", segments: ["fi", "sh"] },
  apple: { phonics: "a · pp · le", ipa: "/ˈæpəl/", segments: ["ap", "ple"] },
  bus: { phonics: "b · u · s", ipa: "/bʌs/", segments: ["bu", "s"] },
  book: { phonics: "b · oo · k", ipa: "/bʊk/", segments: ["boo", "k"] },
};

const themeDefinitions = [
  { id: "animals", name: "动物乐园", shortName: "动物", color: "#f06a6a", icon: "🐾" },
  { id: "colors", name: "彩色画室", shortName: "颜色", color: "#a15cff", icon: "🎨" },
  { id: "fruits", name: "水果商店", shortName: "水果", color: "#ff9f1c", icon: "🍎" },
  { id: "body", name: "身体小队", shortName: "身体", color: "#2ec4b6", icon: "🙌" },
  { id: "school", name: "学校一天", shortName: "学校", color: "#3a86ff", icon: "📚" },
  { id: "family", name: "温暖的家", shortName: "家庭", color: "#ff6b9a", icon: "🏠" },
  { id: "food", name: "美味餐桌", shortName: "食物", color: "#7cb342", icon: "🍽️" },
  { id: "clothes", name: "衣橱换装", shortName: "衣物", color: "#00a6a6", icon: "👕" },
  { id: "actions", name: "动起来", shortName: "动作", color: "#ff7a00", icon: "🏃" },
  { id: "nature", name: "自然探险", shortName: "自然", color: "#43aa8b", icon: "🌳" },
  { id: "weather", name: "天气观察", shortName: "天气", color: "#577590", icon: "⛅" },
  { id: "transport", name: "交通旅行", shortName: "交通", color: "#ef476f", icon: "🚗" },
  { id: "numbers", name: "数字城堡", shortName: "数字", color: "#118ab2", icon: "🔢" },
  { id: "shapes", name: "形状工坊", shortName: "形状", color: "#8338ec", icon: "◆" },
  { id: "feelings", name: "心情花园", shortName: "情绪", color: "#06d6a0", icon: "😊" },
];

const themeMap = Object.fromEntries(themeDefinitions.map((theme) => [theme.id, theme]));
const levelOrder = ["starter", "easy", "normal", "challenge", "advanced"];
const levelLabels = {
  starter: "起步",
  easy: "简单",
  normal: "进阶",
  challenge: "挑战",
  advanced: "高阶",
};
const ageLabelMap = Object.fromEntries(ageOptions.map((age) => [age.id, age.label]));

const vocabularySeeds = {
  animals: [
    ["cat", "猫", "🐱"],
    ["dog", "狗", "🐶"],
    ["bird", "鸟", "🐦"],
    ["fish", "鱼", "🐟"],
    ["rabbit", "兔子", "🐰"],
    ["lion", "狮子", "🦁"],
    ["tiger", "老虎", "🐯"],
    ["bear", "熊", "🐻"],
    ["monkey", "猴子", "🐵"],
    ["elephant", "大象", "🐘"],
    ["horse", "马", "🐴"],
    ["sheep", "绵羊", "🐑"],
    ["duck", "鸭子", "🦆"],
    ["cow", "奶牛", "🐮"],
    ["pig", "猪", "🐷"],
    ["frog", "青蛙", "🐸"],
    ["bee", "蜜蜂", "🐝"],
    ["butterfly", "蝴蝶", "🦋"],
    ["panda", "熊猫", "🐼"],
    ["giraffe", "长颈鹿", "🦒"],
  ],
  colors: [
    ["red", "红色", "🟥"],
    ["blue", "蓝色", "🟦"],
    ["yellow", "黄色", "🟨"],
    ["green", "绿色", "🟩"],
    ["black", "黑色", "⬛"],
    ["white", "白色", "⬜"],
    ["orange", "橙色", "🟧"],
    ["purple", "紫色", "🟪"],
    ["pink", "粉色", "🌸"],
    ["brown", "棕色", "🟫"],
    ["gray", "灰色", "◻"],
    ["gold", "金色", "🏅"],
    ["silver", "银色", "🥈"],
    ["violet", "紫罗兰色", "🟣"],
    ["navy", "藏青色", "🔵"],
    ["lime", "青柠色", "🟢"],
    ["cyan", "青色", "🔷"],
    ["magenta", "洋红色", "💗"],
    ["beige", "米色", "▱"],
    ["teal", "蓝绿色", "🟩"],
  ],
  fruits: [
    ["apple", "苹果", "🍎"],
    ["banana", "香蕉", "🍌"],
    ["orange", "橙子", "🍊"],
    ["grape", "葡萄", "🍇"],
    ["pear", "梨", "🍐"],
    ["peach", "桃子", "🍑"],
    ["mango", "芒果", "🥭"],
    ["lemon", "柠檬", "🍋"],
    ["watermelon", "西瓜", "🍉"],
    ["strawberry", "草莓", "🍓"],
    ["pineapple", "菠萝", "🍍"],
    ["cherry", "樱桃", "🍒"],
    ["kiwi", "猕猴桃", "🥝"],
    ["coconut", "椰子", "🥥"],
    ["plum", "李子", "🟣"],
    ["melon", "甜瓜", "🍈"],
    ["papaya", "木瓜", "🟠"],
    ["blueberry", "蓝莓", "🫐"],
    ["raspberry", "树莓", "🔴"],
    ["avocado", "牛油果", "🥑"],
  ],
  body: [
    ["head", "头", "🙂"],
    ["hair", "头发", "💇"],
    ["face", "脸", "😀"],
    ["eye", "眼睛", "👁️"],
    ["ear", "耳朵", "👂"],
    ["nose", "鼻子", "👃"],
    ["mouth", "嘴巴", "👄"],
    ["tooth", "牙齿", "🦷"],
    ["hand", "手", "✋"],
    ["finger", "手指", "☝️"],
    ["arm", "手臂", "💪"],
    ["leg", "腿", "🦵"],
    ["foot", "脚", "🦶"],
    ["knee", "膝盖", "🦵"],
    ["shoulder", "肩膀", "🤷"],
    ["back", "背部", "↩"],
    ["tummy", "肚子", "○"],
    ["neck", "脖子", "🧣"],
    ["heart", "心脏", "❤️"],
    ["skin", "皮肤", "🖐️"],
  ],
  school: [
    ["book", "书", "📘"],
    ["pen", "钢笔", "🖊️"],
    ["pencil", "铅笔", "✏️"],
    ["ruler", "尺子", "📏"],
    ["eraser", "橡皮", "▭"],
    ["desk", "课桌", "🪑"],
    ["chair", "椅子", "🪑"],
    ["bag", "书包", "🎒"],
    ["teacher", "老师", "🧑‍🏫"],
    ["student", "学生", "🧑‍🎓"],
    ["classroom", "教室", "🏫"],
    ["lesson", "课程", "📖"],
    ["homework", "作业", "📝"],
    ["notebook", "笔记本", "📓"],
    ["paper", "纸", "📄"],
    ["crayon", "蜡笔", "🖍️"],
    ["glue", "胶水", "🧴"],
    ["scissors", "剪刀", "✂️"],
    ["clock", "时钟", "🕘"],
    ["board", "黑板", "⬛"],
  ],
  family: [
    ["mother", "妈妈", "👩"],
    ["father", "爸爸", "👨"],
    ["sister", "姐妹", "👧"],
    ["brother", "兄弟", "👦"],
    ["grandma", "奶奶", "👵"],
    ["grandpa", "爷爷", "👴"],
    ["baby", "宝宝", "👶"],
    ["aunt", "阿姨", "👩"],
    ["uncle", "叔叔", "👨"],
    ["cousin", "堂表亲", "🧒"],
    ["parent", "父母", "👪"],
    ["family", "家庭", "👨‍👩‍👧"],
    ["home", "家", "🏠"],
    ["room", "房间", "🚪"],
    ["kitchen", "厨房", "🍳"],
    ["garden", "花园", "🌷"],
    ["bedroom", "卧室", "🛏️"],
    ["bathroom", "浴室", "🛁"],
    ["sofa", "沙发", "🛋️"],
    ["table", "桌子", "▭"],
  ],
  food: [
    ["rice", "米饭", "🍚"],
    ["bread", "面包", "🍞"],
    ["milk", "牛奶", "🥛"],
    ["egg", "鸡蛋", "🥚"],
    ["soup", "汤", "🍲"],
    ["cheese", "奶酪", "🧀"],
    ["chicken", "鸡肉", "🍗"],
    ["beef", "牛肉", "🥩"],
    ["noodles", "面条", "🍜"],
    ["salad", "沙拉", "🥗"],
    ["cake", "蛋糕", "🍰"],
    ["cookie", "饼干", "🍪"],
    ["pizza", "披萨", "🍕"],
    ["sandwich", "三明治", "🥪"],
    ["water", "水", "💧"],
    ["juice", "果汁", "🧃"],
    ["tea", "茶", "🍵"],
    ["honey", "蜂蜜", "🍯"],
    ["yogurt", "酸奶", "🥣"],
    ["carrot", "胡萝卜", "🥕"],
  ],
  clothes: [
    ["shirt", "衬衫", "👕"],
    ["pants", "裤子", "👖"],
    ["dress", "连衣裙", "👗"],
    ["coat", "外套", "🧥"],
    ["shoes", "鞋子", "👟"],
    ["socks", "袜子", "🧦"],
    ["hat", "帽子", "🧢"],
    ["scarf", "围巾", "🧣"],
    ["skirt", "裙子", "▱"],
    ["sweater", "毛衣", "🧶"],
    ["jacket", "夹克", "🧥"],
    ["boots", "靴子", "🥾"],
    ["gloves", "手套", "🧤"],
    ["belt", "腰带", "▬"],
    ["pajamas", "睡衣", "🌙"],
    ["shorts", "短裤", "🩳"],
    ["swimsuit", "泳衣", "🏊"],
    ["pocket", "口袋", "▣"],
    ["button", "纽扣", "⚪"],
    ["uniform", "制服", "🎽"],
  ],
  actions: [
    ["run", "跑", "🏃"],
    ["jump", "跳", "⬆"],
    ["walk", "走", "🚶"],
    ["swim", "游泳", "🏊"],
    ["read", "读", "📖"],
    ["write", "写", "✍️"],
    ["draw", "画", "🎨"],
    ["sing", "唱", "🎵"],
    ["dance", "跳舞", "💃"],
    ["clap", "拍手", "👏"],
    ["eat", "吃", "🍽️"],
    ["drink", "喝", "🥤"],
    ["sleep", "睡觉", "😴"],
    ["sit", "坐", "🪑"],
    ["stand", "站", "🧍"],
    ["open", "打开", "🔓"],
    ["close", "关闭", "🔒"],
    ["look", "看", "👀"],
    ["listen", "听", "👂"],
    ["play", "玩", "🎲"],
  ],
  nature: [
    ["sun", "太阳", "☀️"],
    ["moon", "月亮", "🌙"],
    ["star", "星星", "⭐"],
    ["sky", "天空", "☁️"],
    ["cloud", "云", "☁️"],
    ["tree", "树", "🌳"],
    ["flower", "花", "🌼"],
    ["grass", "草", "🌱"],
    ["river", "河流", "🏞️"],
    ["lake", "湖泊", "🌊"],
    ["mountain", "山", "⛰️"],
    ["sea", "大海", "🌊"],
    ["beach", "海滩", "🏖️"],
    ["forest", "森林", "🌲"],
    ["leaf", "叶子", "🍃"],
    ["stone", "石头", "🪨"],
    ["sand", "沙子", "▫"],
    ["island", "岛屿", "🏝️"],
    ["rainbow", "彩虹", "🌈"],
    ["valley", "山谷", "∨"],
  ],
  weather: [
    ["sunny", "晴朗的", "☀️"],
    ["rainy", "下雨的", "🌧️"],
    ["cloudy", "多云的", "☁️"],
    ["windy", "有风的", "🌬️"],
    ["snowy", "下雪的", "❄️"],
    ["stormy", "暴风雨的", "⛈️"],
    ["hot", "热的", "🔥"],
    ["cold", "冷的", "🧊"],
    ["warm", "温暖的", "🌤️"],
    ["cool", "凉爽的", "🍃"],
    ["foggy", "有雾的", "🌫️"],
    ["dry", "干燥的", "☀️"],
    ["wet", "潮湿的", "💧"],
    ["thunder", "雷声", "🌩️"],
    ["lightning", "闪电", "⚡"],
    ["shower", "阵雨", "🌦️"],
    ["breeze", "微风", "〰"],
    ["hail", "冰雹", "⚪"],
    ["frost", "霜", "❄️"],
    ["season", "季节", "🍂"],
  ],
  transport: [
    ["car", "汽车", "🚗"],
    ["bus", "公交车", "🚌"],
    ["bike", "自行车", "🚲"],
    ["train", "火车", "🚆"],
    ["plane", "飞机", "✈️"],
    ["boat", "小船", "⛵"],
    ["ship", "轮船", "🚢"],
    ["taxi", "出租车", "🚕"],
    ["subway", "地铁", "🚇"],
    ["truck", "卡车", "🚚"],
    ["scooter", "滑板车", "🛴"],
    ["helicopter", "直升机", "🚁"],
    ["rocket", "火箭", "🚀"],
    ["van", "面包车", "🚐"],
    ["ambulance", "救护车", "🚑"],
    ["police car", "警车", "🚓"],
    ["tractor", "拖拉机", "🚜"],
    ["ferry", "渡轮", "⛴️"],
    ["motorcycle", "摩托车", "🏍️"],
    ["tram", "有轨电车", "🚋"],
  ],
  numbers: [
    ["zero", "零", "0"],
    ["one", "一", "1"],
    ["two", "二", "2"],
    ["three", "三", "3"],
    ["four", "四", "4"],
    ["five", "五", "5"],
    ["six", "六", "6"],
    ["seven", "七", "7"],
    ["eight", "八", "8"],
    ["nine", "九", "9"],
    ["ten", "十", "10"],
    ["eleven", "十一", "11"],
    ["twelve", "十二", "12"],
    ["thirteen", "十三", "13"],
    ["fourteen", "十四", "14"],
    ["fifteen", "十五", "15"],
    ["sixteen", "十六", "16"],
    ["seventeen", "十七", "17"],
    ["eighteen", "十八", "18"],
    ["twenty", "二十", "20"],
  ],
  shapes: [
    ["circle", "圆形", "●"],
    ["square", "正方形", "■"],
    ["triangle", "三角形", "▲"],
    ["rectangle", "长方形", "▭"],
    ["star", "星形", "★"],
    ["heart", "心形", "♥"],
    ["oval", "椭圆形", "⬭"],
    ["diamond", "菱形", "◆"],
    ["line", "线", "━"],
    ["dot", "点", "•"],
    ["cube", "立方体", "◧"],
    ["cone", "圆锥体", "△"],
    ["sphere", "球体", "○"],
    ["box", "盒子", "▣"],
    ["ring", "圆环", "◎"],
    ["arrow", "箭头", "→"],
    ["cross", "十字", "✚"],
    ["wave", "波浪", "〰"],
    ["spiral", "螺旋", "◎"],
    ["curve", "曲线", "⌒"],
  ],
  feelings: [
    ["happy", "开心的", "😊"],
    ["sad", "难过的", "😢"],
    ["angry", "生气的", "😠"],
    ["scared", "害怕的", "😨"],
    ["tired", "疲惫的", "😴"],
    ["excited", "兴奋的", "🤩"],
    ["bored", "无聊的", "😐"],
    ["calm", "平静的", "😌"],
    ["proud", "自豪的", "😎"],
    ["shy", "害羞的", "☺️"],
    ["silly", "傻乎乎的", "😜"],
    ["lonely", "孤单的", "🙁"],
    ["hungry", "饿的", "🍽️"],
    ["thirsty", "渴的", "🥤"],
    ["sleepy", "困的", "😪"],
    ["surprised", "惊讶的", "😮"],
    ["worried", "担心的", "😟"],
    ["brave", "勇敢的", "🛡️"],
    ["friendly", "友好的", "🤝"],
    ["kind", "善良的", "💛"],
  ],
};

const vocabulary = buildVocabulary();

let appState = loadState();
let currentView = appState.selectedAgeBand ? "home" : "age";
let showAgePicker = !appState.selectedAgeBand;
let currentLearnIndex = 0;
let activeQuiz = null;
let audioContext = null;
let preferredEnglishVoice = null;
let speechSequenceId = 0;
let parentVerified = false;
let parentGate = createParentGate();

const app = document.querySelector("#app");

if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener?.("voiceschanged", () => {
    preferredEnglishVoice = pickEnglishVoice();
  });
  window.setTimeout(() => {
    preferredEnglishVoice = pickEnglishVoice();
  }, 250);
}

render();

app.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;
  const value = actionTarget.dataset.value;

  if (action === "choose-age") chooseAge(value);
  if (action === "open-age") {
    showAgePicker = true;
    render();
  }
  if (action === "set-view") {
    currentView = value;
    activeQuiz = null;
    showAgePicker = false;
    render();
    scrollToTopSoon();
  }
  if (action === "toggle-sound") toggleSound();
  if (action === "speak-word") speakWord(value, actionTarget.dataset.clarity || "clear");
  if (action === "speak-segments") speakWordSegments(value);
  if (action === "choose-mascot") chooseMascot(value);
  if (action === "learn-prev") moveLearn(-1);
  if (action === "learn-next") moveLearn(1);
  if (action === "start-quiz") startQuiz(value);
  if (action === "start-adventure") startQuiz("adventure");
  if (action === "start-review") startQuiz("review");
  if (action === "start-word-review") startWordReview(value);
  if (action === "answer-choice") answerChoice(value);
  if (action === "next-question") nextQuestion();
  if (action === "letter-add") addLetter(value);
  if (action === "letter-backspace") backspaceLetter();
  if (action === "letter-clear") clearLetters();
  if (action === "hint-letter") hintLetter();
  if (action === "submit-spell") submitSpelling();
  if (action === "check-parent") checkParentGate();
  if (action === "refresh-parent-gate") {
    parentGate = createParentGate();
    render();
  }
  if (action === "reset-progress") resetCurrentProgress();
});

app.addEventListener("input", (event) => {
  if (event.target.matches("[data-spell-input]") && activeQuiz) {
    activeQuiz.typedAnswer = event.target.value;
  }
});

app.addEventListener("keydown", (event) => {
  if (currentView === "parents" && event.key === "Enter" && event.target.matches("[data-parent-answer]")) {
    checkParentGate();
    return;
  }
  if (!activeQuiz || currentView !== "quiz") return;
  if (event.key === "Enter") {
    const question = getCurrentQuestion();
    if (!question) return;
    if (activeQuiz.answered) {
      nextQuestion();
    } else if (question.mode === "spell") {
      submitSpelling();
    }
  }
});

function buildVocabulary() {
  return Object.entries(vocabularySeeds).flatMap(([themeId, entries]) =>
    entries.map(([word, meaning, symbol], index) => {
      const level = levelForIndex(index);
      const speech = speechDataFor(word);
      return {
        id: `${themeId}-${slugify(word)}`,
        themeId,
        word,
        meaning,
        symbol,
        image: createWordImage(themeId, word, meaning, index),
        example: exampleFor(themeId, word),
        phonics: speech.phonics,
        ipa: speech.ipa,
        segments: speech.segments,
        ageBands: ageBandsForLevel(level),
        level,
        spellingLevel: spellingForLevel(level),
        rank: themeDefinitions.findIndex((theme) => theme.id === themeId) * 100 + index,
      };
    }),
  );
}

function levelForIndex(index) {
  if (index < 4) return "starter";
  if (index < 9) return "easy";
  if (index < 14) return "normal";
  if (index < 17) return "challenge";
  return "advanced";
}

function ageBandsForLevel(level) {
  if (level === "starter" || level === "easy") return ["preschool", "primary", "older"];
  if (level === "normal") return ["primary", "older"];
  return ["older"];
}

function spellingForLevel(level) {
  if (level === "starter" || level === "easy") return "guided";
  return "full";
}

function speechDataFor(word) {
  const clean = cleanWord(word);
  if (phonicsOverrides[clean]) return phonicsOverrides[clean];
  const letters = clean.split("");
  const midpoint = clean.length <= 4 ? clean.length - 1 : Math.ceil(clean.length / 2);
  const segments =
    clean.length <= 2 ? [clean] : [clean.slice(0, Math.max(1, midpoint)), clean.slice(Math.max(1, midpoint))];
  return {
    phonics: letters.join(" · "),
    ipa: "",
    segments: segments.filter(Boolean),
  };
}

function createWordImage(themeId, word, meaning, index) {
  const theme = themeMap[themeId];
  const hue = Math.abs(hashString(`${themeId}-${word}`)) % 360;
  const accent = theme?.color || `hsl(${hue} 72% 46%)`;
  const warm = `hsl(${(hue + 34) % 360} 86% 72%)`;
  const cool = `hsl(${(hue + 205) % 360} 70% 86%)`;
  const initial = cleanWord(word).slice(0, 1).toUpperCase() || "?";
  const clean = cleanWord(word);
  const label = escapeSvg(meaning.slice(0, 4));
  const object = illustrationSvgFor(clean, themeId, accent, warm, initial, index);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" role="img" aria-label="${escapeSvg(word)}">
      <rect width="216" height="216" rx="28" fill="${cool}"/>
      <circle cx="42" cy="42" r="18" fill="${warm}" opacity=".85"/>
      <circle cx="178" cy="48" r="10" fill="#fff" opacity=".82"/>
      ${object}
      <rect x="42" y="162" width="132" height="30" rx="15" fill="#fff" opacity=".9"/>
      <text x="108" y="182" text-anchor="middle" font-family="PingFang SC, Arial, sans-serif" font-size="17" font-weight="800" fill="#233142">${label}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.replace(/\s+/g, " ").trim())}`;
}

function illustrationSvgFor(word, themeId, accent, warm, initial, index) {
  const colorMap = {
    red: "#ef4444",
    blue: "#2563eb",
    yellow: "#facc15",
    green: "#22c55e",
    black: "#111827",
    white: "#ffffff",
    orange: "#fb923c",
    purple: "#8b5cf6",
    pink: "#f472b6",
    brown: "#92400e",
  };
  if (word === "cat") {
    return `<path d="M61 78 L73 45 L94 70 Q108 63 122 70 L143 45 L155 78 C164 117 142 150 108 150 C74 150 52 117 61 78Z" fill="#f8b45c"/><path d="M78 77 L74 57 L91 74Z" fill="#fff4d8"/><path d="M138 77 L142 57 L125 74Z" fill="#fff4d8"/><circle cx="94" cy="101" r="7" fill="#233142"/><circle cx="122" cy="101" r="7" fill="#233142"/><path d="M101 119 Q108 126 115 119" fill="none" stroke="#233142" stroke-width="6" stroke-linecap="round"/><path d="M108 110 L116 116 L100 116Z" fill="#233142"/>`;
  }
  if (word === "dog") {
    return `<ellipse cx="108" cy="98" rx="54" ry="48" fill="#f4d6aa"/><path d="M60 79 C39 89 42 126 66 132 C76 116 76 92 60 79Z" fill="#8b5e34"/><path d="M156 79 C177 89 174 126 150 132 C140 116 140 92 156 79Z" fill="#8b5e34"/><circle cx="91" cy="96" r="7" fill="#233142"/><circle cx="125" cy="96" r="7" fill="#233142"/><ellipse cx="108" cy="112" rx="12" ry="9" fill="#233142"/><path d="M102 128 Q108 135 114 128" fill="none" stroke="#233142" stroke-width="5" stroke-linecap="round"/>`;
  }
  if (word === "bird") {
    return `<ellipse cx="110" cy="102" rx="48" ry="40" fill="#5aa9e6"/><circle cx="126" cy="84" r="24" fill="#76c7f2"/><circle cx="133" cy="79" r="5" fill="#233142"/><path d="M148 87 L173 98 L148 109Z" fill="#ffb000"/><path d="M82 103 C53 87 45 128 83 132Z" fill="#3f83c5"/><path d="M96 140 L88 154 M118 141 L126 154" stroke="#8b5e34" stroke-width="6" stroke-linecap="round"/>`;
  }
  if (word === "fish") {
    return `<path d="M54 104 C84 62 139 67 164 104 C139 141 84 146 54 104Z" fill="#35b7ff"/><path d="M164 104 L190 78 L190 130Z" fill="#1d8fd1"/><circle cx="83" cy="95" r="7" fill="#233142"/><path d="M108 76 C116 88 116 120 108 132" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M121 78 C130 91 130 117 121 130" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`;
  }
  if (word === "apple") {
    return `<path d="M108 69 C142 45 171 75 161 113 C151 153 125 154 108 141 C91 154 65 153 55 113 C45 75 74 45 108 69Z" fill="#ef4444"/><path d="M111 68 C111 50 120 39 136 34" fill="none" stroke="#2f7d32" stroke-width="8" stroke-linecap="round"/><path d="M132 43 C149 43 157 55 153 68 C137 70 128 60 132 43Z" fill="#54c45e"/><circle cx="86" cy="91" r="10" fill="#fff" opacity=".35"/>`;
  }
  if (word === "banana") {
    return `<path d="M59 77 C96 132 143 137 166 89 C151 151 82 158 47 96Z" fill="#facc15"/><path d="M59 77 C93 120 135 127 166 89" fill="none" stroke="#fff2a8" stroke-width="13" stroke-linecap="round"/><circle cx="54" cy="82" r="7" fill="#8b5e34"/><circle cx="168" cy="88" r="7" fill="#8b5e34"/>`;
  }
  if (colorMap[word]) {
    const stroke = word === "white" ? "#cbd5e1" : colorMap[word];
    return `<rect x="60" y="55" width="96" height="96" rx="18" fill="${colorMap[word]}" stroke="${stroke}" stroke-width="6"/><circle cx="86" cy="81" r="12" fill="#fff" opacity=".28"/><path d="M76 128 H140" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".42"/>`;
  }
  if (themeId === "animals") {
    return `<ellipse cx="108" cy="105" rx="50" ry="44" fill="${accent}"/><circle cx="89" cy="97" r="7" fill="#233142"/><circle cx="127" cy="97" r="7" fill="#233142"/><path d="M91 123 Q108 136 125 123" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/><circle cx="72" cy="67" r="18" fill="${warm}"/><circle cx="144" cy="67" r="18" fill="${warm}"/>`;
  }
  if (themeId === "fruits" || themeId === "food") {
    return `<circle cx="108" cy="100" r="50" fill="${accent}"/><path d="M111 65 C113 47 124 38 140 34" fill="none" stroke="#2f7d32" stroke-width="8" stroke-linecap="round"/><path d="M135 45 C151 46 158 57 154 69 C139 70 131 60 135 45Z" fill="#54c45e"/><circle cx="89" cy="84" r="10" fill="#fff" opacity=".35"/>`;
  }
  if (themeId === "transport") {
    return `<rect x="50" y="83" width="116" height="46" rx="14" fill="${accent}"/><rect x="74" y="64" width="60" height="28" rx="10" fill="${warm}"/><circle cx="78" cy="132" r="13" fill="#233142"/><circle cx="138" cy="132" r="13" fill="#233142"/><circle cx="78" cy="132" r="5" fill="#fff"/><circle cx="138" cy="132" r="5" fill="#fff"/>`;
  }
  const shape = index % 3;
  if (shape === 1) {
    return `<rect x="58" y="48" width="100" height="90" rx="26" fill="${accent}"/><path d="M80 61 L108 28 L136 61" fill="${warm}"/><circle cx="108" cy="94" r="21" fill="#fff"/><text x="108" y="104" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="#233142">${initial}</text>`;
  }
  return `<circle cx="108" cy="92" r="48" fill="${accent}"/><circle cx="91" cy="79" r="8" fill="#fff"/><circle cx="125" cy="79" r="8" fill="#fff"/><path d="M86 112 Q108 132 130 112" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/><text x="108" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="#233142">${initial}</text>`;
}

function exampleFor(themeId, word) {
  const templates = {
    animals: `I can see a ${word}.`,
    colors: `The color is ${word}.`,
    fruits: `I like ${word}.`,
    body: `Touch your ${word}.`,
    school: `This is my ${word}.`,
    family: `My ${word} is here.`,
    food: `I want some ${word}.`,
    clothes: `Put on the ${word}.`,
    actions: `I can ${word}.`,
    nature: `Look at the ${word}.`,
    weather: `It is ${word} today.`,
    transport: `The ${word} goes fast.`,
    numbers: `I can count ${word}.`,
    shapes: `Draw a ${word}.`,
    feelings: `I feel ${word} today.`,
  };
  return templates[themeId] || `This word is ${word}.`;
}

function loadState() {
  const fallback = { selectedAgeBand: null, profiles: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return normalizeState(parsed);
  } catch {
    return fallback;
  }
}

function normalizeState(state) {
  const safe = {
    selectedAgeBand: ageOptions.some((age) => age.id === state?.selectedAgeBand)
      ? state.selectedAgeBand
      : null,
    profiles: state?.profiles && typeof state.profiles === "object" ? state.profiles : {},
  };

  for (const age of ageOptions) {
    if (safe.profiles[age.id]) {
      safe.profiles[age.id] = normalizeProfile(age.id, safe.profiles[age.id]);
    }
  }

  return safe;
}

function normalizeProfile(ageBand, profile) {
  const initial = createProfile(ageBand);
  const unlockedWordIds = Array.isArray(profile.unlockedWordIds)
    ? profile.unlockedWordIds.filter((id) => vocabulary.some((word) => word.id === id))
    : initial.unlockedWordIds;

  const normalized = {
    unlockedWordIds: unlockedWordIds.length ? unique(unlockedWordIds) : initial.unlockedWordIds,
    wordStats: profile.wordStats && typeof profile.wordStats === "object" ? profile.wordStats : {},
    dailyActivity:
      profile.dailyActivity && typeof profile.dailyActivity === "object" ? profile.dailyActivity : {},
    rounds: Array.isArray(profile.rounds) ? profile.rounds.slice(-20) : [],
    soundEnabled: typeof profile.soundEnabled === "boolean" ? profile.soundEnabled : true,
    badges: Array.isArray(profile.badges) ? profile.badges : [],
    selectedMascot: mascotOptions.some((mascot) => mascot.id === profile.selectedMascot)
      ? profile.selectedMascot
      : initial.selectedMascot,
    stars: Number.isFinite(profile.stars) ? Math.max(0, profile.stars) : initial.stars,
    stickers: Array.isArray(profile.stickers) ? unique(profile.stickers) : initial.stickers,
    mapFragments: Number.isFinite(profile.mapFragments) ? Math.max(0, profile.mapFragments) : initial.mapFragments,
    completedMissions: Number.isFinite(profile.completedMissions)
      ? Math.max(0, profile.completedMissions)
      : initial.completedMissions,
  };

  for (const wordId of normalized.unlockedWordIds) {
    if (!normalized.wordStats[wordId]) normalized.wordStats[wordId] = createWordStats();
    normalized.wordStats[wordId] = normalizeWordStats(normalized.wordStats[wordId]);
  }

  return normalized;
}

function createProfile(ageBand) {
  const now = new Date().toISOString();
  const unlockedWordIds = getInitialWords(ageBand).map((word) => word.id);
  const wordStats = Object.fromEntries(
    unlockedWordIds.map((id) => [
      id,
      {
        mastery: 1,
        attempts: 0,
        correct: 0,
        wrong: 0,
        lastSeenAt: null,
        unlockedAt: now,
        correctStreak: 0,
        nextReviewAt: null,
        lastResult: null,
      },
    ]),
  );

  return {
    unlockedWordIds,
    wordStats,
    dailyActivity: {},
    rounds: [],
    soundEnabled: true,
    badges: [],
    selectedMascot: mascotOptions[0].id,
    stars: 0,
    stickers: [],
    mapFragments: 0,
    completedMissions: 0,
  };
}

function createWordStats() {
  return {
    mastery: 1,
    attempts: 0,
    correct: 0,
    wrong: 0,
    lastSeenAt: null,
    unlockedAt: new Date().toISOString(),
    correctStreak: 0,
    nextReviewAt: null,
    lastResult: null,
  };
}

function normalizeWordStats(stats) {
  const fallback = createWordStats();
  const attempts = Math.max(0, Number(stats.attempts) || 0);
  return {
    mastery: clampNumber(stats.mastery, 0, 5, fallback.mastery),
    attempts,
    correct: Math.max(0, Number(stats.correct) || 0),
    wrong: Math.max(0, Number(stats.wrong) || 0),
    lastSeenAt: typeof stats.lastSeenAt === "string" ? stats.lastSeenAt : null,
    unlockedAt: typeof stats.unlockedAt === "string" ? stats.unlockedAt : fallback.unlockedAt,
    correctStreak: Math.max(0, Number(stats.correctStreak) || 0),
    nextReviewAt: attempts > 0 && typeof stats.nextReviewAt === "string" ? stats.nextReviewAt : null,
    lastResult: stats.lastResult === "correct" || stats.lastResult === "wrong" ? stats.lastResult : null,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function chooseAge(ageBand) {
  if (!ageOptions.some((age) => age.id === ageBand)) return;
  appState.selectedAgeBand = ageBand;
  if (!appState.profiles[ageBand]) appState.profiles[ageBand] = createProfile(ageBand);
  currentView = "home";
  showAgePicker = false;
  activeQuiz = null;
  saveState();
  render();
  scrollToTopSoon();
}

function getAgeConfig() {
  return ageOptions.find((age) => age.id === appState.selectedAgeBand) || ageOptions[1];
}

function getProfile() {
  const ageBand = appState.selectedAgeBand;
  if (!ageBand) return null;
  if (!appState.profiles[ageBand]) appState.profiles[ageBand] = createProfile(ageBand);
  return appState.profiles[ageBand];
}

function getInitialWords(ageBand) {
  return getEligibleWords(ageBand)
    .filter((word) => word.level === "starter")
    .sort(sortWordsByLearningOrder)
    .slice(0, 10);
}

function getEligibleWords(ageBand = appState.selectedAgeBand) {
  return vocabulary.filter((word) => word.ageBands.includes(ageBand));
}

function getUnlockedWords() {
  const profile = getProfile();
  if (!profile) return [];
  const unlockedSet = new Set(profile.unlockedWordIds);
  return vocabulary.filter((word) => unlockedSet.has(word.id)).sort(sortWordsByLearningOrder);
}

function getActiveWords() {
  const profile = getProfile();
  if (!profile) return [];
  const unlockedWords = getUnlockedWords();
  const today = getTodayActivity(profile);
  const reviewSet = new Set(today.wrongWordIds);

  return unlockedWords
    .slice()
    .sort((a, b) => {
      const aStats = profile.wordStats[a.id] || createWordStats();
      const bStats = profile.wordStats[b.id] || createWordStats();
      const aReview = reviewSet.has(a.id) || (aStats.attempts > 0 && aStats.mastery <= 2);
      const bReview = reviewSet.has(b.id) || (bStats.attempts > 0 && bStats.mastery <= 2);
      if (aReview !== bReview) return aReview ? -1 : 1;
      if (aStats.mastery !== bStats.mastery) return aStats.mastery - bStats.mastery;
      return a.rank - b.rank;
    })
    .slice(0, 10);
}

function sortWordsByLearningOrder(a, b) {
  const levelDiff = levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level);
  if (levelDiff !== 0) return levelDiff;
  return a.rank - b.rank;
}

function getTodayActivity(profile = getProfile()) {
  const key = todayKey();
  if (!profile.dailyActivity[key]) {
    profile.dailyActivity[key] = {
      attempts: 0,
      correct: 0,
      wrong: 0,
      practicedWordIds: [],
      wrongWordIds: [],
    };
  }
  return profile.dailyActivity[key];
}

function recordAnswer(wordId, isCorrect) {
  const profile = getProfile();
  if (!profile) return;
  if (!profile.wordStats[wordId]) profile.wordStats[wordId] = createWordStats();

  const stats = profile.wordStats[wordId];
  const now = new Date();
  stats.attempts += 1;
  stats.lastSeenAt = now.toISOString();
  stats.lastResult = isCorrect ? "correct" : "wrong";

  if (isCorrect) {
    stats.correct += 1;
    stats.correctStreak += 1;
    stats.mastery = Math.min(5, stats.mastery + 1);
    stats.nextReviewAt = nextReviewDateFor(stats).toISOString();
  } else {
    stats.wrong += 1;
    stats.correctStreak = 0;
    stats.mastery = Math.max(0, stats.mastery - 1);
    stats.nextReviewAt = addMinutes(now, 5).toISOString();
  }

  const today = getTodayActivity(profile);
  today.attempts += 1;
  today.practicedWordIds = unique([...today.practicedWordIds, wordId]);
  if (isCorrect) {
    today.correct += 1;
  } else {
    today.wrong += 1;
    today.wrongWordIds = unique([...today.wrongWordIds, wordId]);
  }

  saveState();
}

function recordRound(mode, correct, total, wrongWordIds) {
  const profile = getProfile();
  if (!profile) return { unlocked: [], rewards: createRoundRewards(0, 0, 0) };
  profile.rounds.push({
    date: todayKey(),
    mode,
    correct,
    total,
    wrongWordIds: unique(wrongWordIds),
  });
  profile.rounds = profile.rounds.slice(-20);

  const rewards = awardMissionRewards(profile, correct, total);
  awardBadges(profile);
  const unlocked = maybeUnlockWords(profile);
  saveState();
  return { unlocked, rewards };
}

function maybeUnlockWords(profile) {
  const lowMasteryCount = profile.unlockedWordIds.filter((id) => {
    const stats = profile.wordStats[id];
    return stats && stats.attempts > 0 && stats.mastery <= 2;
  }).length;
  if (lowMasteryCount > 8) return [];

  const todayWrongCount = getTodayActivity(profile).wrongWordIds.length;
  if (todayWrongCount >= 3) return [];

  const recentTwo = profile.rounds.slice(-2);
  if (recentTwo.length < 2) return [];
  const totalCorrect = recentTwo.reduce((sum, round) => sum + round.correct, 0);
  const totalQuestions = recentTwo.reduce((sum, round) => sum + round.total, 0);
  if (!totalQuestions || totalCorrect / totalQuestions < 0.8) return [];

  const eligible = getEligibleWords(appState.selectedAgeBand).sort(sortWordsByLearningOrder);
  const unlockedSet = new Set(profile.unlockedWordIds);
  const nextWords = eligible.filter((word) => !unlockedSet.has(word.id)).slice(0, 5);
  if (!nextWords.length) return [];

  for (const word of nextWords) {
    profile.unlockedWordIds.push(word.id);
    profile.wordStats[word.id] = createWordStats();
  }

  profile.unlockedWordIds = unique(profile.unlockedWordIds);
  return nextWords;
}

function awardBadges(profile) {
  const mastered = profile.unlockedWordIds.filter((id) => profile.wordStats[id]?.mastery >= 4).length;
  const streak = getLearningStreak(profile);
  const candidates = [];
  if (mastered >= 10) candidates.push("掌握 10 词");
  if (mastered >= 30) candidates.push("掌握 30 词");
  if (streak >= 3) candidates.push("连续 3 天");
  if (profile.unlockedWordIds.length >= 25) candidates.push("解锁 25 词");
  profile.badges = unique([...profile.badges, ...candidates]);
}

function awardMissionRewards(profile, correct, total) {
  const accuracy = total ? correct / total : 0;
  const starCount = accuracy >= 0.9 ? 3 : accuracy >= 0.7 ? 2 : accuracy >= 0.5 ? 1 : 0;
  const sticker = starCount >= 2 ? stickerCatalog[profile.completedMissions % stickerCatalog.length] : null;
  const mapFragments = starCount >= 2 ? 1 : 0;

  profile.completedMissions += 1;
  profile.stars += starCount;
  profile.mapFragments += mapFragments;
  if (sticker) profile.stickers = unique([...profile.stickers, sticker]);

  return createRoundRewards(starCount, mapFragments, sticker);
}

function createRoundRewards(stars, mapFragments, sticker) {
  return {
    stars,
    mapFragments,
    sticker,
  };
}

function toggleSound() {
  const profile = getProfile();
  if (!profile) return;
  profile.soundEnabled = !profile.soundEnabled;
  saveState();
  render();
}

function moveLearn(offset) {
  const words = getActiveWords();
  if (!words.length) return;
  currentLearnIndex = (currentLearnIndex + offset + words.length) % words.length;
  render();
}

function startQuiz(mode) {
  const actualMode = mode || "adventure";
  const words = selectRoundWords(actualMode);
  if (!words.length) return;
  const questions = words.map((word) => createQuestion(word, actualMode));

  activeQuiz = {
    mode: actualMode,
    questions,
    index: 0,
    answered: false,
    selectedValue: null,
    typedAnswer: "",
    builtAnswer: "",
    hintsUsed: 0,
    correctCount: 0,
    wrongWordIds: [],
    unlockedWords: [],
    rewards: createRoundRewards(0, 0, null),
    completed: false,
  };
  currentView = "quiz";
  showAgePicker = false;
  render();
  scrollToTopSoon();

  if (questions[0]?.mode === "listen") {
    window.setTimeout(() => speakWord(questions[0].word.word, "quiz"), 120);
  }
}

function selectRoundWords(mode) {
  const ageConfig = getAgeConfig();
  const profile = getProfile();
  const unlocked = getUnlockedWords();
  const today = getTodayActivity(profile);
  const reviewWords = getReviewWords();
  const activeWords = getActiveWords();
  const size = mode === "review" ? Math.min(ageConfig.roundSize, Math.max(1, reviewWords.length)) : ageConfig.roundSize;

  let pool;
  if (mode === "review") {
    pool = reviewWords.length ? reviewWords : activeWords;
  } else {
    const reviewSet = new Set(today.wrongWordIds);
    const priority = unlocked.filter((word) => {
      const stats = profile.wordStats[word.id] || createWordStats();
      return reviewSet.has(word.id) || stats.mastery <= 2 || stats.attempts === 0;
    });
    pool = uniqueById([...priority, ...activeWords, ...unlocked]);
  }

  return pool.slice(0, size);
}

function createQuestion(word, mode) {
  const finalMode = resolveQuestionMode(word, mode);

  if (finalMode === "listen") {
    return {
      mode: "listen",
      word,
      title: "听发音，选择对应图案",
      prompt: "点播放，再选择你听到的单词",
      options: makeOptions(word, "image"),
      answer: word.id,
    };
  }

  if (finalMode === "match") {
    return {
      mode: "match",
      word,
      title: "英中配对",
      prompt: word.word,
      options: makeOptions(word, "meaning"),
      answer: word.id,
    };
  }

  if (finalMode === "spell") {
    return {
      mode: "spell",
      variant: "guided",
      word,
      title: "字母拼搭",
      prompt: `${word.meaning}`,
      answer: cleanWord(word.word),
      letters: shuffle(cleanWord(word.word).split("")),
    };
  }

  if (finalMode === "full-spell") {
    return {
      mode: "spell",
      variant: "full",
      word,
      title: "完整拼写",
      prompt: `${word.meaning}`,
      answer: cleanWord(word.word),
      letters: shuffle(cleanWord(word.word).split("")),
    };
  }

  return {
    mode: "picture",
    word,
    title: "看图选词",
    prompt: word.image,
    options: makeOptions(word, "word"),
    answer: word.id,
  };
}

function resolveQuestionMode(word, mode) {
  if (mode === "spell") return "spell";
  if (mode === "full-spell") return "full-spell";
  if (mode === "adventure" || mode === "review") {
    const ageConfig = getAgeConfig();
    const stats = getProfile()?.wordStats[word.id] || createWordStats();
    const baseModes = ["picture", "listen", "match", "spell"];
    const shouldUseFull =
      word.spellingLevel === "full" ||
      stats.mastery >= 2 ||
      ageConfig.hintLevel !== "strong" ||
      Math.random() < ageConfig.challengeRatio;
    if (shouldUseFull) baseModes.push("full-spell");
    const reviewBoost = mode === "review" || stats.lastResult === "wrong" || stats.mastery <= 2;
    const pool = reviewBoost ? [...baseModes, "listen", "spell"] : baseModes;
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return mode;
}

function makeOptions(correctWord, type) {
  const optionCount = getAgeConfig().optionCount || 4;
  const candidates = getEligibleWords(appState.selectedAgeBand)
    .filter((word) => word.id !== correctWord.id)
    .sort((a, b) => {
      const sameThemeA = a.themeId === correctWord.themeId ? 0 : 1;
      const sameThemeB = b.themeId === correctWord.themeId ? 0 : 1;
      if (sameThemeA !== sameThemeB) return sameThemeA - sameThemeB;
      return a.rank - b.rank;
    })
    .slice(0, 18);

  const distractors = shuffle(candidates).slice(0, optionCount - 1);
  return shuffle([correctWord, ...distractors]).map((word) => ({
    id: word.id,
    value: word.id,
    label: type === "image" ? word.meaning : type === "meaning" ? word.meaning : word.word,
    image: word.image,
    subLabel: type === "image" ? themeMap[word.themeId].shortName : themeMap[word.themeId].shortName,
  }));
}

function answerChoice(value) {
  const question = getCurrentQuestion();
  if (!question || activeQuiz.answered || question.mode === "spell") return;
  const isCorrect = value === question.answer;
  finishQuestion(isCorrect, value);
}

function addLetter(letter) {
  const question = getCurrentQuestion();
  if (!question || activeQuiz.answered || question.mode !== "spell") return;
  activeQuiz.builtAnswer += letter;
  render();
}

function backspaceLetter() {
  const question = getCurrentQuestion();
  if (!question || activeQuiz.answered || question.mode !== "spell") return;
  activeQuiz.builtAnswer = activeQuiz.builtAnswer.slice(0, -1);
  render();
}

function clearLetters() {
  const question = getCurrentQuestion();
  if (!question || activeQuiz.answered || question.mode !== "spell") return;
  activeQuiz.builtAnswer = "";
  activeQuiz.typedAnswer = "";
  render();
}

function hintLetter() {
  const question = getCurrentQuestion();
  if (!question || activeQuiz.answered || question.mode !== "spell") return;
  const cleanBuilt = cleanWord(activeQuiz.builtAnswer);
  const nextLetter = question.answer[cleanBuilt.length];
  if (!nextLetter) return;
  activeQuiz.builtAnswer = `${cleanBuilt}${nextLetter}`;
  activeQuiz.hintsUsed = (activeQuiz.hintsUsed || 0) + 1;
  render();
}

function submitSpelling() {
  const question = getCurrentQuestion();
  if (!question || activeQuiz.answered || question.mode !== "spell") return;
  const answer = question.variant === "full" ? activeQuiz.typedAnswer || activeQuiz.builtAnswer : activeQuiz.builtAnswer;
  const isCorrect = cleanWord(answer) === question.answer;
  finishQuestion(isCorrect, answer);
}

function finishQuestion(isCorrect, selectedValue) {
  const question = getCurrentQuestion();
  if (!question) return;
  activeQuiz.answered = true;
  activeQuiz.selectedValue = selectedValue;
  if (isCorrect) {
    activeQuiz.correctCount += 1;
    playCorrectSound();
  } else {
    activeQuiz.wrongWordIds.push(question.word.id);
    playWrongSound();
  }
  vibrateFeedback(isCorrect);
  recordAnswer(question.word.id, isCorrect);
  render();
}

function nextQuestion() {
  if (!activeQuiz) return;
  if (!activeQuiz.answered && !activeQuiz.completed) return;

  if (activeQuiz.index >= activeQuiz.questions.length - 1) {
    completeQuiz();
    return;
  }

  activeQuiz.index += 1;
  activeQuiz.answered = false;
  activeQuiz.selectedValue = null;
  activeQuiz.typedAnswer = "";
  activeQuiz.builtAnswer = "";
  activeQuiz.hintsUsed = 0;
  render();
  scrollToTopSoon();

  const question = getCurrentQuestion();
  if (question?.mode === "listen") {
    window.setTimeout(() => speakWord(question.word.word, "quiz"), 120);
  }
}

function completeQuiz() {
  if (!activeQuiz || activeQuiz.completed) return;
  activeQuiz.completed = true;
  const result = recordRound(
    activeQuiz.mode,
    activeQuiz.correctCount,
    activeQuiz.questions.length,
    activeQuiz.wrongWordIds,
  );
  activeQuiz.unlockedWords = result.unlocked;
  activeQuiz.rewards = result.rewards;
  playCompleteSound();
  render();
  scrollToTopSoon();
}

function getCurrentQuestion() {
  if (!activeQuiz) return null;
  return activeQuiz.questions[activeQuiz.index] || null;
}

function getReviewWords() {
  const profile = getProfile();
  if (!profile) return [];
  const todayWrong = new Set(getTodayActivity(profile).wrongWordIds);
  const now = Date.now();
  return getUnlockedWords().filter((word) => {
    const stats = profile.wordStats[word.id] || createWordStats();
    const reviewDue = stats.nextReviewAt ? new Date(stats.nextReviewAt).getTime() <= now : false;
    return (
      todayWrong.has(word.id) ||
      stats.lastResult === "wrong" ||
      reviewDue ||
      (stats.attempts > 0 && stats.mastery <= 2)
    );
  });
}

function resetCurrentProgress() {
  const ageBand = appState.selectedAgeBand;
  if (!ageBand) return;
  const ok = window.confirm(`确定重置 ${ageLabelMap[ageBand]} 的学习进度吗？`);
  if (!ok) return;
  appState.profiles[ageBand] = createProfile(ageBand);
  activeQuiz = null;
  currentView = "home";
  currentLearnIndex = 0;
  saveState();
  render();
  scrollToTopSoon();
}

function chooseMascot(mascotId) {
  const profile = getProfile();
  if (!profile || !mascotOptions.some((mascot) => mascot.id === mascotId)) return;
  profile.selectedMascot = mascotId;
  saveState();
  render();
}

function startWordReview(wordId) {
  const word = getUnlockedWords().find((item) => item.id === wordId);
  if (!word) return;
  activeQuiz = {
    mode: "review",
    questions: [
      createQuestion(word, "listen"),
      createQuestion(word, "spell"),
      createQuestion(word, "full-spell"),
    ],
    index: 0,
    answered: false,
    selectedValue: null,
    typedAnswer: "",
    builtAnswer: "",
    hintsUsed: 0,
    correctCount: 0,
    wrongWordIds: [],
    unlockedWords: [],
    rewards: createRoundRewards(0, 0, null),
    completed: false,
  };
  currentView = "quiz";
  render();
  scrollToTopSoon();
  window.setTimeout(() => speakWord(word.word, "quiz"), 120);
}

function createParentGate() {
  const a = 2 + Math.floor(Math.random() * 8);
  const b = 2 + Math.floor(Math.random() * 8);
  return { a, b, answer: a + b, error: "" };
}

function checkParentGate() {
  const input = app.querySelector("[data-parent-answer]");
  const value = Number(input?.value);
  if (value === parentGate.answer) {
    parentVerified = true;
    parentGate.error = "";
  } else {
    parentGate.error = "答案不对，再试一次。";
  }
  render();
}

function nextReviewDateFor(stats) {
  const now = new Date();
  if (stats.mastery >= 4) return addDays(now, 7);
  if (stats.correctStreak >= 2) return addDays(now, 3);
  return addDays(now, 1);
}

function scrollToTopSoon() {
  window.requestAnimationFrame(() => window.scrollTo(0, 0));
}

function render() {
  if (showAgePicker || !appState.selectedAgeBand) {
    app.innerHTML = renderAgeGate();
    return;
  }

  const viewRenderers = {
    home: renderHome,
    learn: renderLearn,
    practice: renderPractice,
    review: renderReview,
    parents: renderParents,
    quiz: renderQuiz,
  };
  app.innerHTML = `
    <main class="app-shell ${currentView === "quiz" ? "is-quiz-mode" : ""}">
      ${renderHeader()}
      ${renderNav()}
      <section class="view-surface">
        ${(viewRenderers[currentView] || renderHome)()}
      </section>
    </main>
  `;
}

function renderAgeGate() {
  const current = appState.selectedAgeBand;
  return `
    <main class="age-gate">
      <section class="age-hero">
        <div class="brand-mark">ABC</div>
        <div>
          <p class="eyebrow">单词小冒险</p>
          <h1>先选择年龄段</h1>
          <p class="hero-copy">选择会保存在本机。系统会从 10 个起步词开始，根据练习表现慢慢增加新词。</p>
        </div>
      </section>
      <section class="age-options" aria-label="选择年龄段">
        ${ageOptions
          .map(
            (age) => `
              <button class="age-option ${current === age.id ? "is-current" : ""}" data-action="choose-age" data-value="${age.id}">
                <span class="age-option-top">
                  <span class="age-icon">${age.icon}</span>
                  <span class="age-label">${age.label}</span>
                </span>
                <strong>${age.title}</strong>
                <span>${age.detail}</span>
                <small>每轮 ${age.roundSize} 题</small>
              </button>
            `,
          )
          .join("")}
      </section>
    </main>
  `;
}

function renderHeader() {
  const profile = getProfile();
  const mascot = getSelectedMascot(profile);
  return `
    <header class="topbar">
      <div class="topbar-title">
        <p class="eyebrow">单词小冒险</p>
        <h1>今日冒险</h1>
      </div>
      <div class="topbar-actions">
        <span class="status-pill mascot-pill" style="--mascot-color:${mascot.color}">${renderMascotImage(mascot, "mascot-mini")} ${mascot.name}</span>
        <span class="status-pill">${ageLabelMap[appState.selectedAgeBand]}</span>
        <button class="icon-button" data-action="toggle-sound" title="音效开关" aria-label="音效开关">
          ${profile.soundEnabled ? "🔊" : "🔇"}
        </button>
        <button class="text-button" data-action="open-age">切换年龄</button>
      </div>
    </header>
  `;
}

function renderNav() {
  const items = [
    ["home", "⌂", "首页"],
    ["learn", "▣", "学习"],
    ["practice", "▶", "冒险"],
    ["review", "↺", "错词"],
    ["parents", "○", "家长"],
  ];
  return `
    <nav class="nav-tabs" aria-label="主导航">
      ${items
        .map(
          ([id, icon, label]) => `
            <button class="${currentView === id ? "is-active" : ""}" data-action="set-view" data-value="${id}">
              <span class="nav-icon" aria-hidden="true">${icon}</span>
              <span class="nav-label">${label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderHome() {
  const profile = getProfile();
  const activeWords = getActiveWords();
  const reviewWords = getReviewWords();
  const stats = getDashboardStats(profile);
  const mascot = getSelectedMascot(profile);
  const starTarget = getAgeConfig().roundSize;
  const stickerProgress = Math.min(100, Math.round(((profile.stars % 6) / 6) * 100));
  return `
    <div class="dashboard-grid">
      <section class="action-band home-hero-band">
        <div class="home-hero-copy">
          ${renderMascotImage(mascot, "home-hero-icon")}
          <div>
            <h2>${mascot.name}的今日冒险</h2>
            <p>目标：完成 ${starTarget} 个小任务，收集星星和贴纸。系统会自动混合看图、听音、配对和拼写。</p>
          </div>
        </div>
        <div class="action-row action-row-large">
          <button class="primary-button big-action" data-action="start-adventure">开始今日冒险</button>
          <button class="secondary-button big-action" data-action="set-view" data-value="learn">先看学习卡</button>
          <button class="secondary-button big-action" data-action="set-view" data-value="review">迷路的小单词</button>
        </div>
      </section>
      <section class="reward-band">
        <article class="reward-card">
          <span>星星目标</span>
          <strong>${profile.stars} ★</strong>
          <div class="tile-progress"><span style="width:${Math.min(100, (profile.stars / Math.max(1, starTarget)) * 100)}%"></span></div>
        </article>
        <article class="reward-card">
          <span>贴纸进度</span>
          <strong>${profile.stickers.length} 张</strong>
          <div class="tile-progress"><span style="width:${stickerProgress}%"></span></div>
        </article>
        <article class="reward-card">
          <span>地图碎片</span>
          <strong>${profile.mapFragments} 块</strong>
          <div class="tile-progress"><span style="width:${Math.min(100, profile.mapFragments * 12)}%"></span></div>
        </article>
      </section>
      ${renderMascotPicker(profile)}
      <section class="summary-band">
        ${renderMetric("开放词", profile.unlockedWordIds.length, `总词库 ${getEligibleWords().length} 个`)}
        ${renderMetric("掌握词", stats.masteredWords, "掌握度达到 4 分")}
        ${renderMetric("迷路词", reviewWords.length, reviewWords.length > 8 ? "先稳住复习" : "节奏很好")}
        ${renderMetric("最近正确率", `${stats.recentAccuracy}%`, "最近两轮表现")}
      </section>
    </div>
    <section class="word-strip" aria-label="今日单词">
      ${activeWords.map(renderMiniWord).join("")}
    </section>
    <section class="section-block">
      <div class="section-heading">
        <h2>主题地图</h2>
        <p>只显示当前已开放进度，未解锁词不会提前露出。</p>
      </div>
      <div class="theme-grid">
        ${themeDefinitions.map(renderThemeTile).join("")}
      </div>
    </section>
  `;
}

function renderLearn() {
  const words = getActiveWords();
  if (!words.length) return renderEmptyState("还没有开放词", "请选择年龄段重新初始化。");
  if (currentLearnIndex >= words.length) currentLearnIndex = 0;
  const word = words[currentLearnIndex];
  const stats = getProfile().wordStats[word.id] || createWordStats();
  const theme = themeMap[word.themeId];

  return `
    <section class="learn-layout">
      <article class="word-card" style="--theme-color:${theme.color}">
        ${renderWordImage(word, "word-symbol")}
        <div class="word-content">
          <span class="theme-chip">${theme.name}</span>
          <h2>${escapeHtml(word.word)}</h2>
          <p class="meaning">${escapeHtml(word.meaning)}</p>
          <div class="phonics-row">
            <span>${escapeHtml(word.phonics)}</span>
            ${word.ipa && appState.selectedAgeBand !== "preschool" ? `<small>${escapeHtml(word.ipa)}</small>` : ""}
          </div>
          <p class="example">${escapeHtml(word.example)}</p>
          <div class="mastery-row">
            ${renderStars(stats.mastery)}
            <span>掌握度 ${stats.mastery}/5</span>
          </div>
        </div>
        <div class="sound-actions">
          <button class="sound-button" data-action="speak-word" data-clarity="learn" data-value="${escapeAttr(word.word)}">慢速听两遍</button>
          <button class="secondary-button" data-action="speak-segments" data-value="${escapeAttr(word.id)}">分段发音</button>
        </div>
      </article>
      <div class="learn-controls">
        <button class="secondary-button step-button" data-action="learn-prev" aria-label="上一张">
          <span class="pager-arrow" aria-hidden="true">‹</span>
          <span class="pager-label">上一张</span>
        </button>
        <span class="learn-count">${currentLearnIndex + 1}/${words.length}</span>
        <button class="secondary-button step-button" data-action="learn-next" aria-label="下一张">
          <span class="pager-label">下一张</span>
          <span class="pager-arrow" aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  `;
}

function renderPractice() {
  const ageConfig = getAgeConfig();
  const modes = [
    ["picture", "◆", "看图选词", `${ageConfig.optionCount} 选 1`],
    ["listen", "♪", "听音选图", "先听英文发音，再选择对应插画。"],
    ["match", "中", "英中配对", "英文和中文配一配。"],
    ["spell", "Aa", "字母拼搭", "点字母块拼出来。"],
    ["full-spell", "Ab", "完整拼写", "输入或点字母辅助。"],
  ];

  return `
    <section class="section-block practice-panel">
      <div class="section-heading">
        <h2>冒险任务</h2>
        <p>${ageConfig.label} · 每轮 ${ageConfig.roundSize} 题 · 自动混合任务</p>
      </div>
      <button class="daily-mission-card" data-action="start-adventure">
        <span class="daily-mission-icon" aria-hidden="true">★</span>
        <span>
          <strong>今日冒险</strong>
          <small>看图、听音、配对、拼搭、完整拼写一起练</small>
        </span>
        <em>开始</em>
      </button>
      <div class="section-heading compact-heading">
        <h3>单项练习</h3>
        <p>想单独加强某一项时再选。</p>
      </div>
      <div class="mode-grid compact-mode-grid">
        ${modes
          .map(
            ([id, icon, title, detail]) => `
              <button class="mode-card mode-button" data-action="start-quiz" data-value="${id}">
                <span class="mode-icon" aria-hidden="true">${icon}</span>
                <span class="mode-text">
                  <strong>${title}</strong>
                  <small>${detail}</small>
                </span>
                <span class="mode-cta" aria-hidden="true">›</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderReview() {
  const reviewWords = getReviewWords();
  if (!reviewWords.length) {
    return renderEmptyState("没有迷路的小单词", "可以继续做今日冒险，系统会把需要巩固的词自动放进这里。", "继续冒险", "practice");
  }

  return `
    <section class="section-block">
      <div class="section-heading">
        <h2>迷路的小单词</h2>
        <p>这里优先出现答错过、到时间复习或掌握度较低的词。错词超过 8 个时，系统会暂停解锁新词。</p>
      </div>
      <div class="review-list">
        ${reviewWords.map(renderReviewWord).join("")}
      </div>
      <button class="primary-button big-action" data-action="start-review">帮它们回家</button>
    </section>
  `;
}

function renderParents() {
  if (!parentVerified) return renderParentGate();
  const profile = getProfile();
  const stats = getDashboardStats(profile);
  const weakThemes = getWeakThemes(profile);
  const reviewWords = getReviewWords();
  return `
    <section class="parent-layout">
      <div class="section-heading">
        <h2>家长视图</h2>
        <p>进度只保存在当前浏览器，切换年龄段后会使用独立进度。儿童端不会直接显示重置入口。</p>
      </div>
      <section class="summary-band">
        ${renderMetric("当前开放", profile.unlockedWordIds.length, "初始 10 个，逐步增加")}
        ${renderMetric("已掌握", stats.masteredWords, "掌握度 4 分以上")}
        ${renderMetric("待复习", reviewWords.length, "建议优先处理")}
        ${renderMetric("连续天数", stats.streak, "有答题记录即计入")}
      </section>
      <section class="reward-band">
        ${renderMetric("星星", profile.stars, "完成任务获得")}
        ${renderMetric("贴纸", profile.stickers.length, profile.stickers.slice(-2).join("、") || "还未获得")}
        ${renderMetric("地图碎片", profile.mapFragments, "完成高质量关卡获得")}
      </section>
      <section class="parent-grid">
        <article class="info-panel">
          <h3>薄弱主题</h3>
          ${
            weakThemes.length
              ? weakThemes
                  .map(
                    (item) => `
                      <div class="weak-row">
                        <span>${themeMap[item.themeId].name}</span>
                        <strong>${item.accuracy}%</strong>
                      </div>
                    `,
                  )
                  .join("")
              : "<p>还没有足够记录，先完成一轮练习。</p>"
          }
        </article>
        <article class="info-panel">
          <h3>学习策略</h3>
          <p>最近两轮正确率达到 80%，且今日错词少于 3 个时，自动解锁 5 个新词。</p>
          <p>低掌握度词超过 8 个时，系统会暂停新词，先把复习比例提高。</p>
          <p>${reviewWords.length ? `本次建议先复习 ${reviewWords.slice(0, 3).map((word) => word.word).join("、")}。` : "今天可以继续做一轮今日冒险。"}</p>
        </article>
      </section>
      <div class="danger-zone">
        <button class="secondary-button" data-action="open-age">切换年龄段</button>
        <button class="danger-button" data-action="reset-progress">重置当前年龄进度</button>
      </div>
    </section>
  `;
}

function renderQuiz() {
  if (!activeQuiz) return renderPractice();
  if (activeQuiz.completed) return renderQuizSummary();

  const question = getCurrentQuestion();
  if (!question) return renderQuizSummary();
  const progress = `${activeQuiz.index + 1} / ${activeQuiz.questions.length}`;
  const isSpell = question.mode === "spell";

  return `
    <section class="quiz-shell ${activeQuiz.answered ? "has-feedback" : ""}">
      <div class="quiz-topline">
        <button class="quiz-exit" data-action="set-view" data-value="practice">退出</button>
        <span>${question.title}</span>
        <strong>${progress}</strong>
      </div>
      <div class="quiz-progress">
        <span style="width:${((activeQuiz.index + 1) / activeQuiz.questions.length) * 100}%"></span>
      </div>
      <article class="quiz-card ${activeQuiz.answered ? "is-answered" : ""}">
        ${renderQuestionPrompt(question)}
        ${
          isSpell
            ? renderSpellQuestion(question)
            : `<div class="answer-grid">${question.options.map((option) => renderAnswerOption(option, question)).join("")}</div>`
        }
        ${renderFeedback(question)}
      </article>
    </section>
  `;
}

function renderQuestionPrompt(question) {
  if (question.mode === "picture") {
    return `
      <div class="question-prompt">
        <p class="quiz-title">${question.title}</p>
        ${renderWordImage(question.word, "quiz-symbol")}
        <p class="quiz-hint">这张图片对应哪个英文单词？</p>
      </div>
    `;
  }

  if (question.mode === "listen") {
    return `
      <div class="question-prompt">
        <p class="quiz-title">${question.title}</p>
        <button class="listen-button" data-action="speak-word" data-clarity="quiz" data-value="${escapeAttr(question.word.word)}">点我听发音</button>
        <p class="quiz-hint">${question.prompt}</p>
      </div>
    `;
  }

  if (question.mode === "match") {
    return `
      <div class="question-prompt">
        <p class="quiz-title">${question.title}</p>
        <div class="quiz-word">${escapeHtml(question.prompt)}</div>
        <button class="small-link" data-action="speak-word" data-clarity="clear" data-value="${escapeAttr(question.word.word)}">听发音</button>
      </div>
    `;
  }

  return `
    <div class="question-prompt">
      <p class="quiz-title">${question.title}</p>
      ${renderWordImage(question.word, "quiz-symbol")}
      <p class="quiz-hint">${escapeHtml(question.word.meaning)} · ${escapeHtml(question.word.phonics)}</p>
    </div>
  `;
}

function renderAnswerOption(option, question) {
  const answered = activeQuiz.answered;
  const isCorrect = option.value === question.answer;
  const isSelected = option.value === activeQuiz.selectedValue;
  const stateClass = answered && isCorrect ? "is-correct" : answered && isSelected ? "is-wrong" : "";
  return `
    <button class="answer-option ${stateClass}" data-action="answer-choice" data-value="${escapeAttr(option.value)}" ${answered ? "disabled" : ""}>
      ${question.mode === "listen" ? renderOptionImage(option) : ""}
      <strong>${escapeHtml(option.label)}</strong>
      <span>${escapeHtml(option.subLabel)}</span>
    </button>
  `;
}

function renderSpellQuestion(question) {
  const ageConfig = getAgeConfig();
  const full = question.variant === "full";
  const placeholder =
    ageConfig.hintLevel === "strong"
      ? `${question.word.word.slice(0, 1)}${" · ".repeat(Math.max(0, question.answer.length - 1))}`
      : "输入英文单词";

  return `
    <div class="spell-panel ${full ? "is-full" : "is-guided"}">
      ${full ? `<input class="spell-input" data-spell-input autocomplete="off" autocapitalize="none" spellcheck="false" value="${escapeAttr(activeQuiz.typedAnswer)}" placeholder="${escapeAttr(placeholder)}" ${activeQuiz.answered ? "disabled" : ""} />` : ""}
      ${renderBuiltWord(question)}
      <div class="letter-bank">
        ${question.letters
          .map(
            (letter) => `
              <button data-action="letter-add" data-value="${letter}" ${activeQuiz.answered ? "disabled" : ""}>${letter}</button>
            `,
          )
          .join("")}
      </div>
      <div class="action-row">
        <button class="secondary-button" data-action="hint-letter" ${activeQuiz.answered ? "disabled" : ""}>提示一个字母</button>
        <button class="secondary-button" data-action="letter-backspace" ${activeQuiz.answered ? "disabled" : ""}>退格</button>
        <button class="secondary-button" data-action="letter-clear" ${activeQuiz.answered ? "disabled" : ""}>清空</button>
        <button class="primary-button" data-action="submit-spell" ${activeQuiz.answered ? "disabled" : ""}>提交</button>
      </div>
    </div>
  `;
}

function renderFeedback(question) {
  if (!activeQuiz.answered) return "";
  const isCorrect =
    question.mode === "spell"
      ? cleanWord(activeQuiz.selectedValue) === question.answer
      : activeQuiz.selectedValue === question.answer;
  return `
    <div class="feedback ${isCorrect ? "is-good" : "is-bad"}" role="status" aria-live="polite">
      <span class="feedback-mark" aria-hidden="true">${isCorrect ? "✓" : "↺"}</span>
      <strong>${isCorrect ? "答对啦，收集一颗星" : "这个单词迷路了"}</strong>
      ${isCorrect ? `<div class="feedback-stars" aria-hidden="true"><span>★</span><span>★</span><span>★</span></div>` : ""}
      <span class="feedback-answer">正确答案：${escapeHtml(question.word.word)} · ${escapeHtml(question.word.meaning)}</span>
      ${
        isCorrect
          ? ""
          : `<button class="secondary-button" data-action="speak-word" data-clarity="clear" data-value="${escapeAttr(question.word.word)}">再听一次</button>`
      }
      <button class="primary-button" data-action="next-question">${activeQuiz.index >= activeQuiz.questions.length - 1 ? "看结果" : "下一题"}</button>
    </div>
  `;
}

function renderQuizSummary() {
  const total = activeQuiz.questions.length;
  const accuracy = Math.round((activeQuiz.correctCount / total) * 100);
  const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : accuracy >= 50 ? 1 : 0;
  const rewards = activeQuiz.rewards || createRoundRewards(stars, 0, null);
  return `
    <section class="result-view">
      <div class="result-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <h2>本轮完成</h2>
      <p>答对 ${activeQuiz.correctCount} / ${total} 题，正确率 ${accuracy}%</p>
      <div class="reward-summary">
        <span>+${rewards.stars} 星星</span>
        <span>+${rewards.mapFragments} 地图碎片</span>
        <span>${rewards.sticker ? `新贴纸：${rewards.sticker}` : "贴纸还差一点"}</span>
      </div>
      ${
        activeQuiz.unlockedWords.length
          ? `<div class="unlock-box"><strong>新解锁 ${activeQuiz.unlockedWords.length} 个词</strong><span>${activeQuiz.unlockedWords
              .map((word) => word.word)
              .join("、")}</span></div>`
          : `<div class="unlock-box"><strong>继续巩固</strong><span>最近两轮达到 80% 且错词少于 3 个，就会新增 5 个词。</span></div>`
      }
      <div class="action-row">
        <button class="primary-button" data-action="set-view" data-value="home">回首页</button>
        <button class="secondary-button" data-action="start-adventure">再来一轮</button>
        <button class="secondary-button" data-action="set-view" data-value="review">看错题本</button>
      </div>
    </section>
  `;
}

function renderMetric(label, value, detail) {
  return `
    <article class="metric">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </article>
  `;
}

function renderMiniWord(word) {
  const stats = getProfile().wordStats[word.id] || createWordStats();
  return `
    <article class="mini-word">
      ${renderWordImage(word, "mini-word-image")}
      <strong>${escapeHtml(word.word)}</strong>
      <small>${escapeHtml(word.meaning)} · ${levelLabels[word.level]} · ${stats.mastery}/5</small>
    </article>
  `;
}

function renderThemeTile(theme) {
  const profile = getProfile();
  const eligible = getEligibleWords().filter((word) => word.themeId === theme.id);
  const unlocked = eligible.filter((word) => profile.unlockedWordIds.includes(word.id));
  const mastered = unlocked.filter((word) => profile.wordStats[word.id]?.mastery >= 4);
  const percent = eligible.length ? Math.round((unlocked.length / eligible.length) * 100) : 0;

  return `
    <article class="theme-tile" style="--theme-color:${theme.color}">
      <div class="theme-icon">${theme.icon}</div>
      <div>
        <h3>${theme.name}</h3>
        <p>${unlocked.length} / ${eligible.length} 已开放 · ${mastered.length} 已掌握</p>
        <div class="tile-progress"><span style="width:${percent}%"></span></div>
      </div>
    </article>
  `;
}

function renderReviewWord(word) {
  const stats = getProfile().wordStats[word.id] || createWordStats();
  return `
    <article class="review-word">
      ${renderWordImage(word, "review-word-image")}
      <div>
        <strong>${escapeHtml(word.word)}</strong>
        <small>${escapeHtml(word.meaning)} · 掌握度 ${stats.mastery}/5 · 错 ${stats.wrong} 次 · ${formatReviewTime(stats.nextReviewAt)}</small>
      </div>
      <div class="review-actions">
        <button class="small-link" data-action="speak-word" data-clarity="clear" data-value="${escapeAttr(word.word)}">发音</button>
        <button class="small-link" data-action="start-word-review" data-value="${escapeAttr(word.id)}">再练</button>
      </div>
    </article>
  `;
}

function renderStars(value) {
  const full = Math.max(0, Math.min(5, value));
  return `<span class="stars">${"★".repeat(full)}${"☆".repeat(5 - full)}</span>`;
}

function renderEmptyState(title, detail, buttonLabel, view) {
  return `
    <section class="empty-state">
      <div class="empty-mark">✓</div>
      <h2>${title}</h2>
      <p>${detail}</p>
      ${buttonLabel ? `<button class="primary-button" data-action="set-view" data-value="${view}">${buttonLabel}</button>` : ""}
    </section>
  `;
}

function renderMascotPicker(profile) {
  return `
    <section class="mascot-strip" aria-label="选择冒险伙伴">
      <span>冒险伙伴</span>
      ${mascotOptions
        .map(
          (mascot) => `
            <button class="${profile.selectedMascot === mascot.id ? "is-active" : ""}" style="--mascot-color:${mascot.color}" data-action="choose-mascot" data-value="${mascot.id}">
              ${renderMascotImage(mascot, "mascot-choice-image")}
              <small>${mascot.name}</small>
            </button>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderParentGate() {
  return `
    <section class="parent-gate">
      <div class="empty-mark">家</div>
      <h2>家长中心</h2>
      <p>请先完成一道小算术，避免孩子误触重置或切换年龄段。</p>
      <label class="parent-question">
        <span>${parentGate.a} + ${parentGate.b} = ?</span>
        <input data-parent-answer inputmode="numeric" autocomplete="off" />
      </label>
      ${parentGate.error ? `<p class="gate-error">${parentGate.error}</p>` : ""}
      <div class="action-row">
        <button class="primary-button" data-action="check-parent">进入家长中心</button>
        <button class="secondary-button" data-action="refresh-parent-gate">换一道题</button>
      </div>
    </section>
  `;
}

function renderWordImage(word, className) {
  return `
    <figure class="${className} word-art">
      <img src="${escapeAttr(word.image)}" alt="${escapeAttr(word.meaning)}" loading="lazy" />
      <figcaption>${escapeHtml(word.word.slice(0, 1).toUpperCase())}</figcaption>
    </figure>
  `;
}

function renderMascotImage(mascot, className) {
  return `
    <span class="${className} mascot-art" style="--mascot-color:${mascot.color}">
      ${mascotSvg(mascot.id)}
    </span>
  `;
}

function mascotSvg(id) {
  if (id === "bear") {
    return `<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="23" cy="22" r="13" fill="#8b5e34"/><circle cx="57" cy="22" r="13" fill="#8b5e34"/><circle cx="40" cy="42" r="29" fill="#a86f3d"/><circle cx="30" cy="37" r="4" fill="#233142"/><circle cx="50" cy="37" r="4" fill="#233142"/><ellipse cx="40" cy="50" rx="13" ry="10" fill="#f8dfbf"/><circle cx="40" cy="47" r="4" fill="#233142"/></svg>`;
  }
  if (id === "owl") {
    return `<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M18 19 L31 25 L40 15 L49 25 L62 19 L60 50 C58 66 48 72 40 72 C32 72 22 66 20 50Z" fill="#6d5dfc"/><circle cx="31" cy="39" r="12" fill="#fff"/><circle cx="49" cy="39" r="12" fill="#fff"/><circle cx="31" cy="39" r="5" fill="#233142"/><circle cx="49" cy="39" r="5" fill="#233142"/><path d="M36 52 L44 52 L40 59Z" fill="#ffb000"/></svg>`;
  }
  return `<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M17 27 L25 10 L35 25 Q40 21 45 25 L55 10 L63 27 C70 49 58 70 40 70 C22 70 10 49 17 27Z" fill="#f97316"/><path d="M24 29 L31 17 L35 31Z" fill="#fff3d7"/><path d="M56 29 L49 17 L45 31Z" fill="#fff3d7"/><circle cx="31" cy="41" r="4" fill="#233142"/><circle cx="49" cy="41" r="4" fill="#233142"/><path d="M34 51 Q40 58 46 51" fill="none" stroke="#233142" stroke-width="4" stroke-linecap="round"/><path d="M40 46 L45 50 L35 50Z" fill="#233142"/></svg>`;
}

function renderOptionImage(option) {
  return `
    <span class="option-image word-art">
      <img src="${escapeAttr(option.image)}" alt="" loading="lazy" />
    </span>
  `;
}

function renderBuiltWord(question) {
  const built = activeQuiz.builtAnswer || "";
  const display = built || (question.variant === "full" ? "也可以点下面字母辅助" : "点下面字母拼单词");
  if (!activeQuiz.answered || !built) {
    return `<div class="built-word">${escapeHtml(display)}</div>`;
  }
  const letters = cleanWord(built).split("");
  return `
    <div class="built-word has-letter-feedback">
      ${letters
        .map((letter, index) => {
          const state = question.answer[index] === letter ? "is-right" : "is-miss";
          return `<span class="${state}">${escapeHtml(letter)}</span>`;
        })
        .join("")}
    </div>
  `;
}

function getDashboardStats(profile) {
  const unlockedStats = profile.unlockedWordIds.map((id) => profile.wordStats[id] || createWordStats());
  const masteredWords = unlockedStats.filter((stats) => stats.mastery >= 4).length;
  const recentRounds = profile.rounds.slice(-2);
  const recentTotal = recentRounds.reduce((sum, round) => sum + round.total, 0);
  const recentCorrect = recentRounds.reduce((sum, round) => sum + round.correct, 0);
  const recentAccuracy = recentTotal ? Math.round((recentCorrect / recentTotal) * 100) : 0;
  return {
    masteredWords,
    recentAccuracy,
    streak: getLearningStreak(profile),
  };
}

function getSelectedMascot(profile = getProfile()) {
  return mascotOptions.find((mascot) => mascot.id === profile?.selectedMascot) || mascotOptions[0];
}

function formatReviewTime(value) {
  if (!value) return "今天复习";
  const diff = new Date(value).getTime() - Date.now();
  if (diff <= 0) return "现在复习";
  const minutes = Math.ceil(diff / 60000);
  if (minutes < 60) return `${minutes} 分钟后`;
  const hours = Math.ceil(minutes / 60);
  if (hours < 24) return `${hours} 小时后`;
  return `${Math.ceil(hours / 24)} 天后`;
}

function getWeakThemes(profile) {
  const byTheme = new Map();
  for (const word of getUnlockedWords()) {
    const stats = profile.wordStats[word.id];
    if (!stats || stats.attempts === 0) continue;
    const current = byTheme.get(word.themeId) || { attempts: 0, correct: 0 };
    current.attempts += stats.attempts;
    current.correct += stats.correct;
    byTheme.set(word.themeId, current);
  }

  return [...byTheme.entries()]
    .map(([themeId, stats]) => ({
      themeId,
      accuracy: Math.round((stats.correct / stats.attempts) * 100),
      attempts: stats.attempts,
    }))
    .filter((item) => item.attempts >= 2)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3);
}

function getLearningStreak(profile) {
  let streak = 0;
  const cursor = new Date();

  for (;;) {
    const key = formatDate(cursor);
    if (profile.dailyActivity[key]?.attempts > 0) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

function speakWord(text, clarity = "clear") {
  if (!("speechSynthesis" in window)) return;
  const sequenceId = (speechSequenceId += 1);
  const speechText = prepareSpeechText(text, clarity);
  const utterance = createSpeechUtterance(speechText, speechRateForAge(clarity), 1);
  preferredEnglishVoice = preferredEnglishVoice || pickEnglishVoice();

  if (preferredEnglishVoice) {
    utterance.voice = preferredEnglishVoice;
  }

  window.speechSynthesis.cancel();
  if (clarity === "learn") utterance.onend = () => repeatSpeechOnce(sequenceId, speechText, clarity, 1050);
  window.speechSynthesis.speak(utterance);
}

function speakWordSegments(wordId) {
  if (!("speechSynthesis" in window)) return;
  const word = vocabulary.find((item) => item.id === wordId);
  if (!word) return;
  const sequenceId = (speechSequenceId += 1);
  const parts = [...word.segments, word.word].filter(Boolean);
  window.speechSynthesis.cancel();
  speakParts(parts, sequenceId, 0);
}

function speakParts(parts, sequenceId, index) {
  if (sequenceId !== speechSequenceId || index >= parts.length) return;
  const utterance = createSpeechUtterance(prepareSpeechText(parts[index], "segment"), speechRateForAge("segment"), 1);
  preferredEnglishVoice = preferredEnglishVoice || pickEnglishVoice();
  if (preferredEnglishVoice) utterance.voice = preferredEnglishVoice;
  utterance.onend = () => {
    window.setTimeout(() => speakParts(parts, sequenceId, index + 1), 520);
  };
  window.speechSynthesis.speak(utterance);
}

function repeatSpeechOnce(sequenceId, speechText, clarity, delay) {
  window.setTimeout(() => {
    if (sequenceId !== speechSequenceId) return;
    const repeatUtterance = createSpeechUtterance(speechText, speechRateForAge(clarity), 1);
    if (preferredEnglishVoice) repeatUtterance.voice = preferredEnglishVoice;
    window.speechSynthesis.speak(repeatUtterance);
  }, delay);
}

function createSpeechUtterance(text, rate, pitch) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = 1;
  return utterance;
}

function prepareSpeechText(text, clarity = "clear") {
  const normalized = String(text || "").trim();
  if (!normalized) return "";
  if (normalized.includes(" ")) {
    return normalized.replace(/\s+/g, clarity === "clear" ? " " : ", ");
  }
  return normalized;
}

function speechRateForAge(clarity = "clear") {
  const rates = getAgeConfig().speechRate || ageOptions[1].speechRate;
  return rates[clarity] || rates.clear;
}

function pickEnglishVoice() {
  const voices = window.speechSynthesis.getVoices?.() || [];
  const englishVoices = voices.filter((voice) => voice.lang?.toLowerCase().startsWith("en"));
  if (!englishVoices.length) return null;
  return englishVoices
    .map((voice) => ({ voice, score: scoreEnglishVoice(voice) }))
    .sort((a, b) => b.score - a.score)[0].voice;
}

function scoreEnglishVoice(voice) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  let score = 0;

  if (lang === "en-us") score += 50;
  else if (lang === "en-gb") score += 42;
  else if (lang.startsWith("en")) score += 30;

  if (/samantha|alex|daniel|karen|serena|moira|tessa|veena/.test(name)) score += 28;
  if (/google us english|microsoft aria|microsoft jenny|natural|premium|enhanced|neural/.test(name)) {
    score += 24;
  }
  if (/compact|novelty|whisper|bad news|bahh|bells|boing|bubbles|cellos|jester|organ|trinoids|zarvox/.test(name)) {
    score -= 40;
  }
  if (voice.localService) score += 4;

  return score;
}

function vibrateFeedback(isCorrect) {
  if (!("vibrate" in navigator)) return;
  navigator.vibrate(isCorrect ? [18, 24, 18] : [28]);
}

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playCorrectSound() {
  if (!getProfile()?.soundEnabled) return;
  playToneSequence([
    [659.25, 0.09, 0],
    [783.99, 0.09, 0.07],
    [987.77, 0.12, 0.14],
    [1318.51, 0.18, 0.24],
  ], "sine", 0.095);
  playToneSequence([
    [329.63, 0.2, 0.02],
    [493.88, 0.22, 0.14],
    [659.25, 0.24, 0.24],
  ], "triangle", 0.035);
}

function playWrongSound() {
  if (!getProfile()?.soundEnabled) return;
  playToneSequence([
    [293.66, 0.16, 0],
    [261.63, 0.2, 0.15],
  ], "sine", 0.055);
}

function playCompleteSound() {
  if (!getProfile()?.soundEnabled) return;
  playToneSequence([
    [523.25, 0.08, 0],
    [659.25, 0.08, 0.07],
    [783.99, 0.1, 0.14],
    [1046.5, 0.2, 0.24],
  ], "sine", 0.1);
}

function playToneSequence(notes, type = "sine", volume = 0.1) {
  try {
    const context = getAudioContext();
    if (context.state === "suspended") context.resume();
    const now = context.currentTime;

    for (const [frequency, duration, delay] of notes) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.001, now + delay);
      gain.gain.exponentialRampToValueAtTime(volume, now + delay + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now + delay);
      oscillator.stop(now + delay + duration + 0.02);
    }
  } catch {
    // Audio is optional; some browsers block it before user interaction.
  }
}

function todayKey() {
  return formatDate(new Date());
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addMinutes(date, minutes) {
  const next = new Date(date);
  next.setMinutes(next.getMinutes() + minutes);
  return next;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function cleanWord(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, number));
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return hash;
}

function slugify(value) {
  return cleanWord(value) || value.toLowerCase().replace(/\s+/g, "-");
}

function unique(items) {
  return [...new Set(items)];
}

function uniqueById(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function shuffle(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function escapeSvg(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
