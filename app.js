const brandLogo = "./จาวเหนือสุขภาพดีที่ 1/Logo/จาวเหนือสุขภาพดีที่ 1.png";

const defaultSlides = [
  {
    part: "OPENING",
    tone: "opening",
    layout: "title",
    chapter: "จาวเหนือสุขภาพดีที่ 1",
    headline: "สุขภาพดี ที่เดินทางถึงทุกคน",
    subhead: "จากยอดดอย สู่เมือง จากการช่วยชีวิต สู่การสร้างอนาคตของภาคเหนือ",
  },
  {
    part: "OPENING",
    tone: "opening",
    layout: "center",
    headline: "ระบบสุขภาพที่ดีที่สุด คืออะไร",
    subhead: "ไม่ใช่แค่โรงพยาบาลใหญ่ แต่คือความอุ่นใจของประชาชนทุกพื้นที่",
  },
  {
    part: "PART 1",
    tone: "urgent",
    layout: "title",
    chapter: "บทที่ 1",
    headline: "ทุกนาที คือโอกาสของชีวิต",
    subhead: "เมื่อระยะทางไม่ควรเป็นตัวกำหนดโอกาสในการรอดชีวิต",
  },
  {
    part: "PART 1",
    tone: "urgent",
    layout: "split",
    quote: "เวลามีค่าที่สุด ตอนที่เรากำลังจะสูญเสียมันไป",
    body: "หัวใจ สมอง และชีวิตแรกเกิด ต่างมีเวลาทองของตัวเอง ระบบสุขภาพจึงต้องเดินทางได้เร็วกว่าอุปสรรค",
  },
  {
    part: "PART 1",
    tone: "urgent",
    layout: "map",
    headline: "จากยอดดอย สู่ทีมแพทย์เฉพาะทาง",
    body: "Sky Doctor และเครือข่ายส่งต่อทางอากาศ เชื่อม 8 จังหวัดภาคเหนือให้เป็นระบบเดียว",
    provinces: ["เชียงใหม่", "เชียงราย", "ลำพูน", "ลำปาง", "แพร่", "น่าน", "พะเยา", "แม่ฮ่องสอน"],
  },
  {
    part: "PART 1",
    tone: "urgent",
    layout: "network",
    headline: "เราไม่ได้เชื่อมแค่การเดินทาง",
    subhead: "เราเชื่อมโอกาสในการรอดชีวิต",
    nodes: ["หมู่บ้าน", "กู้ชีพ", "Sky Doctor", "ศูนย์เฉพาะทาง", "กลับบ้าน"],
  },
  {
    part: "PART 1",
    tone: "urgent",
    layout: "center",
    headline: "ชีวิตของคุณ มีคุณค่าเท่ากัน",
    list: ["อยู่บนยอดดอย", "อยู่กลางเมือง", "อยู่ในหมู่บ้านห่างไกล"],
  },
  {
    part: "PART 2",
    tone: "community",
    layout: "title",
    chapter: "บทที่ 2",
    headline: "สุขภาพดี ไม่ต้องเริ่มที่โรงพยาบาล",
    subhead: "ระบบสุขภาพที่ดี ไม่ได้รอให้ประชาชนป่วยก่อนจึงเริ่มทำงาน",
  },
  {
    part: "PART 2",
    tone: "community",
    layout: "split",
    quote: "โรงพยาบาล กำลังเดินทางไปหาประชาชน",
    body: "จาก Hospital-Centered สู่ People-Centered Care บริการเคลื่อนเข้าใกล้บ้าน ครอบครัว และชุมชน",
  },
  {
    part: "PART 2",
    tone: "community",
    layout: "center",
    headline: "ความสำเร็จไม่ใช่คนไข้ที่เพิ่มขึ้น",
    subhead: "แต่คือคนที่ป่วยน้อยลง และดูแลตัวเองได้มากขึ้น",
  },
  {
    part: "PART 2",
    tone: "community",
    layout: "network",
    headline: "สุขภาพ เป็นงานของทุกคน",
    nodes: ["ครอบครัว", "อสม.", "รพ.สต.", "โรงพยาบาล", "ชุมชน"],
  },
  {
    part: "PART 2",
    tone: "community",
    layout: "center",
    headline: "การดูแลที่ดีที่สุด คือการดูแลก่อนเจ็บป่วย",
    list: ["คัดกรองเร็ว", "ติดตามใกล้ชิด", "ส่งต่ออย่างแม่นยำ"],
  },
  {
    part: "PART 3",
    tone: "city",
    layout: "title",
    chapter: "บทที่ 3",
    headline: "สุขภาพดี เริ่มจากเมืองที่ดูแลทุกคน",
    subhead: "บ้าน ชุมชน และเมือง คือพื้นที่แรกของสุขภาพ",
  },
  {
    part: "PART 3",
    tone: "city",
    layout: "split",
    quote: "ผู้สูงอายุไม่ควรเป็นภาระของสังคม",
    body: "แต่ควรเป็นพลังของสังคม เมื่อเมืองออกแบบให้ทุกวัยใช้ชีวิตได้อย่างมีศักดิ์ศรี",
  },
  {
    part: "PART 3",
    tone: "city",
    layout: "center",
    headline: "เมืองสุขภาพดี ไม่ใช่แค่เมืองที่มีโรงพยาบาล",
    subhead: "แต่คือเมืองที่ทำให้คนป่วยยากขึ้น ใช้ชีวิตง่ายขึ้น และไม่ถูกทิ้งไว้ข้างหลัง",
  },
  {
    part: "PART 3",
    tone: "city",
    layout: "network",
    headline: "Healthy City",
    subhead: "เมื่อสิ่งแวดล้อม ทางเดิน อาหาร การออกกำลังกาย และบริการสุขภาพ ทำงานร่วมกัน",
    nodes: ["บ้าน", "สวน", "ตลาด", "คลินิก", "ทางเดิน"],
  },
  {
    part: "PART 3",
    tone: "city",
    layout: "center",
    headline: "สุขภาพดี เป็นโครงสร้างพื้นฐานของเมือง",
    list: ["ปลอดภัย", "เข้าถึงได้", "เป็นมิตรกับทุกวัย"],
  },
  {
    part: "PART 4",
    tone: "future",
    layout: "title",
    chapter: "บทที่ 4",
    headline: "สุขภาพดี สร้างอนาคตที่ดี",
    subhead: "สุขภาพไม่ได้สร้างแค่คุณภาพชีวิต แต่สร้างโอกาสทางเศรษฐกิจให้ชุมชน",
  },
  {
    part: "PART 4",
    tone: "future",
    layout: "split",
    quote: "ภูมิปัญญาคนเหนือ คือทุนของอนาคต",
    body: "นวดไทย สมุนไพร ผลิตภัณฑ์สุขภาพ และบริการเชิงสุขภาวะ สามารถเติบโตจากท้องถิ่นสู่เวทีโลก",
  },
  {
    part: "PART 4",
    tone: "future",
    layout: "center",
    headline: "เศรษฐกิจสุขภาพ เริ่มต้นจากการดูแลผู้คน",
    list: ["อาชีพใหม่", "รายได้ชุมชน", "ลูกหลานกลับบ้านเกิด"],
  },
  {
    part: "PART 4",
    tone: "future",
    layout: "network",
    headline: "จากการรักษา สู่การสร้างมูลค่า",
    nodes: ["สุขภาพ", "ภูมิปัญญา", "นวัตกรรม", "ผู้ประกอบการ", "ตลาดโลก"],
  },
  {
    part: "CLOSING",
    tone: "future",
    layout: "center",
    headline: "สุขภาพที่ดีที่สุด",
    subhead: "ไม่ใช่สุขภาพของคนคนหนึ่ง แต่คือสุขภาพของทั้งภูมิภาค",
  },
  {
    part: "CLOSING",
    tone: "future",
    layout: "closing",
    headline: "จาวเหนือสุขภาพดีที่ 1",
    subhead: "คำมั่นสัญญาที่ประชาชนทุกคนสัมผัสได้ ทุกวัน",
    logo: true,
  },
];

const STORAGE_KEY = "northern-health-cinematic-deck-v1";

function cloneSlides(source) {
  return JSON.parse(JSON.stringify(source));
}

function normalizeSlide(slide = {}) {
  return {
    part: "",
    tone: "opening",
    layout: "title",
    align: "default",
    chapter: "",
    headline: "",
    quote: "",
    subhead: "",
    body: "",
    list: [],
    provinces: [],
    nodes: [],
    backgroundImage: "",
    video: "",
    sceneShift: "",
    logo: false,
    ...slide,
  };
}

function loadSlides() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved).map(normalizeSlide);
  } catch (error) {
    console.warn("Could not load saved deck", error);
  }
  return cloneSlides(defaultSlides).map(normalizeSlide);
}

function saveSlides() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
    setEditorStatus("Saved");
  } catch (error) {
    setEditorStatus("Save failed: file too large for browser storage");
    console.warn("Could not save deck", error);
  }
}

let slides = loadSlides();

const footageMap = window.FOOTAGE || {};
const sceneVideoMap = window.SCENE_VIDEOS || {};
for (const [slideNumber, src] of Object.entries(footageMap)) {
  const slideIndex = Number(slideNumber) - 1;
  if (slides[slideIndex] && src && !slides[slideIndex].video) slides[slideIndex].video = src;
}

function getSceneKey(slide) {
  if (slide.tone === "opening" || slide.tone === "urgent") return "emergency";
  return slide.tone;
}

function getSceneShift(slideIndex) {
  const sceneKeys = slides.map(getSceneKey);
  const sceneKey = sceneKeys[slideIndex];
  const group = sceneKeys.reduce((indexes, key, index) => {
    if (key === sceneKey) indexes.push(index);
    return indexes;
  }, []);
  const sceneStep = group.indexOf(slideIndex);
  const sceneProgress = group.length > 1 ? sceneStep / (group.length - 1) : 0.5;
  return -6 + sceneProgress * 12;
}

const stage = document.getElementById("stage");
const slideEl = document.getElementById("slide");
const partChip = document.getElementById("partChip");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const fullBtn = document.getElementById("fullBtn");
const slideVideo = document.getElementById("slideVideo");
const editDeckButton = document.getElementById("editDeckButton");

let index = 0;
let lastRenderedIndex = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderList(items, className = "three-list") {
  const safeItems = Array.isArray(items) ? items : String(items || "").split("\n");
  return `<ul class="${className} reveal">${safeItems.filter(Boolean).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderMap(slide) {
  return `
    <div>
      ${renderText(slide)}
    </div>
    <div class="map-card reveal">
      <p class="body-copy">เครือข่ายสุขภาพภาคเหนือ</p>
      <div class="province-grid">
        ${(slide.provinces || []).map((province) => `<div class="province">${escapeHtml(province)}</div>`).join("")}
      </div>
    </div>
  `;
}

function renderNetwork(slide) {
  return `
    <div>
      ${renderText(slide)}
    </div>
    <div class="visual-card reveal">
      <div class="network-viz">
        ${(slide.nodes || []).map((node) => `<div class="node">${escapeHtml(node)}</div>`).join("")}
      </div>
    </div>
  `;
}

function renderText(slide) {
  const chunks = [];
  if (slide.chapter) chunks.push(`<div class="chapter reveal">${escapeHtml(slide.chapter)}</div>`);
  if (slide.headline) chunks.push(`<h1 class="headline reveal">${escapeHtml(slide.headline)}</h1>`);
  if (slide.quote) chunks.push(`<blockquote class="quote reveal">${escapeHtml(slide.quote)}</blockquote>`);
  if (slide.subhead) chunks.push(`<p class="subhead reveal">${escapeHtml(slide.subhead)}</p>`);
  if (slide.body) chunks.push(`<p class="body-copy reveal">${escapeHtml(slide.body)}</p>`);
  if (Array.isArray(slide.list) && slide.list.length) chunks.push(renderList(slide.list));
  if (slide.logo) chunks.push(`<img class="closing-mark reveal" src="${brandLogo}" alt="จาวเหนือสุขภาพดีที่ 1" />`);
  return chunks.join("");
}

function renderSlide(nextIndex) {
  const slide = slides[nextIndex];
  const customShift = Number(slide.sceneShift);
  const sceneShift = Number.isFinite(customShift) && slide.sceneShift !== "" ? customShift : getSceneShift(nextIndex);
  slideEl.classList.add("is-exiting");

  window.setTimeout(() => {
    stage.className = `stage tone-${slide.tone} static-pan${slide.part === "CLOSING" ? " is-closing" : ""}`;
    stage.style.setProperty("--scene-shift", `${sceneShift}%`);
    if (slide.backgroundImage) {
      stage.style.setProperty("--scene-image", `url(${JSON.stringify(slide.backgroundImage)})`);
    } else {
      stage.style.removeProperty("--scene-image");
    }
    slideEl.className = `slide-content layout-${slide.layout} align-${slide.align || "default"}`;

    const backgroundVideo = slide.video || sceneVideoMap[slide.tone] || sceneVideoMap[slide.part] || "";
    if (backgroundVideo) {
      if (slideVideo.getAttribute("src") !== backgroundVideo) slideVideo.src = backgroundVideo;
      slideVideo.classList.add("is-visible");
      slideVideo.play().catch(() => {});
    } else {
      slideVideo.removeAttribute("src");
      slideVideo.classList.remove("is-visible");
    }

    if (slide.layout === "map") {
      slideEl.innerHTML = renderMap(slide);
    } else if (slide.layout === "network") {
      slideEl.innerHTML = renderNetwork(slide);
    } else {
      slideEl.innerHTML = renderText(slide);
    }

    partChip.textContent = slide.part;
    counter.textContent = `${String(nextIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    progressBar.style.width = `${((nextIndex + 1) / slides.length) * 100}%`;
    prevBtn.disabled = nextIndex === 0;
    nextBtn.disabled = nextIndex === slides.length - 1;
    document.title = `${slide.part} · ${slide.headline || slide.quote || "จาวเหนือสุขภาพดีที่ 1"}`;
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("slide", String(nextIndex + 1));
    window.history.replaceState(null, "", nextUrl);
    if (editDeckButton) {
      const editUrl = new URL(window.location.href);
      editUrl.searchParams.set("editor", "1");
      editUrl.searchParams.set("slide", String(nextIndex + 1));
      editDeckButton.href = `${editUrl.pathname}${editUrl.search}`;
    }
    lastRenderedIndex = nextIndex;
    syncEditor();
  }, 180);
}

function goTo(nextIndex) {
  const bounded = Math.max(0, Math.min(slides.length - 1, nextIndex));
  if (bounded === index) return;
  index = bounded;
  renderSlide(index);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    stage.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

const editorPanel = document.getElementById("editorPanel");
const editorSlideSelect = document.getElementById("editorSlideSelect");
const editorStatus = document.getElementById("editorStatus");
const editorFields = {
  part: document.getElementById("editPart"),
  tone: document.getElementById("editTone"),
  layout: document.getElementById("editLayout"),
  align: document.getElementById("editAlign"),
  chapter: document.getElementById("editChapter"),
  headline: document.getElementById("editHeadline"),
  quote: document.getElementById("editQuote"),
  subhead: document.getElementById("editSubhead"),
  body: document.getElementById("editBody"),
  items: document.getElementById("editItems"),
  logo: document.getElementById("editLogo"),
  backgroundImage: document.getElementById("editBgImage"),
  video: document.getElementById("editBgVideo"),
  sceneShift: document.getElementById("editSceneShift"),
};
let syncingEditor = false;

function setEditorStatus(message) {
  if (!editorStatus) return;
  editorStatus.textContent = message;
  if (message) {
    window.clearTimeout(setEditorStatus.timer);
    setEditorStatus.timer = window.setTimeout(() => {
      editorStatus.textContent = "";
    }, 1800);
  }
}

function linesToArray(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function arrayToLines(value) {
  return Array.isArray(value) ? value.join("\n") : "";
}

function activeItemKey(slide) {
  if (slide.layout === "map") return "provinces";
  if (slide.layout === "network") return "nodes";
  return "list";
}

function populateEditorSlideSelect() {
  if (!editorSlideSelect) return;
  editorSlideSelect.innerHTML = slides
    .map((slide, slideIndex) => {
      const label = slide.headline || slide.quote || slide.part || `Slide ${slideIndex + 1}`;
      return `<option value="${slideIndex}">${String(slideIndex + 1).padStart(2, "0")} · ${escapeHtml(label).slice(0, 72)}</option>`;
    })
    .join("");
  editorSlideSelect.value = String(index);
}

function syncEditor() {
  if (!editorPanel || editorPanel.hidden) return;
  const slide = slides[index] || normalizeSlide();
  syncingEditor = true;
  populateEditorSlideSelect();
  editorFields.part.value = slide.part || "";
  editorFields.tone.value = slide.tone || "opening";
  editorFields.layout.value = slide.layout || "title";
  editorFields.align.value = slide.align || "default";
  editorFields.chapter.value = slide.chapter || "";
  editorFields.headline.value = slide.headline || "";
  editorFields.quote.value = slide.quote || "";
  editorFields.subhead.value = slide.subhead || "";
  editorFields.body.value = slide.body || "";
  editorFields.logo.checked = Boolean(slide.logo);
  editorFields.backgroundImage.value = slide.backgroundImage || "";
  editorFields.video.value = slide.video || "";
  editorFields.sceneShift.value = slide.sceneShift === "" || slide.sceneShift == null ? String(getSceneShift(index)) : String(slide.sceneShift);
  editorFields.items.value = arrayToLines(slide[activeItemKey(slide)]);
  syncingEditor = false;
}

function applyEditorChange() {
  if (syncingEditor || !editorPanel || editorPanel.hidden) return;
  const slide = slides[index];
  if (!slide) return;
  const itemLines = linesToArray(editorFields.items.value);
  slide.part = editorFields.part.value.trim();
  slide.tone = editorFields.tone.value;
  slide.layout = editorFields.layout.value;
  slide.align = editorFields.align.value;
  slide.chapter = editorFields.chapter.value.trim();
  slide.headline = editorFields.headline.value.trim();
  slide.quote = editorFields.quote.value.trim();
  slide.subhead = editorFields.subhead.value.trim();
  slide.body = editorFields.body.value.trim();
  slide.logo = editorFields.logo.checked;
  slide.backgroundImage = editorFields.backgroundImage.value.trim();
  slide.video = editorFields.video.value.trim();
  slide.sceneShift = editorFields.sceneShift.value;
  slide[activeItemKey(slide)] = itemLines;
  saveSlides();
  populateEditorSlideSelect();
  renderSlide(index);
}

function makeBlankSlide() {
  return normalizeSlide({
    part: slides[index]?.part || "PART",
    tone: slides[index]?.tone || "opening",
    layout: "center",
    headline: "New slide",
    subhead: "",
  });
}

function readFileAsDataUrl(input, targetField) {
  const file = input.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    targetField.value = reader.result;
    applyEditorChange();
    setEditorStatus(`${file.name} loaded`);
    input.value = "";
  });
  reader.readAsDataURL(file);
}

function exportDeck() {
  const blob = new Blob([JSON.stringify(slides, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "northern-health-deck.json";
  link.click();
  URL.revokeObjectURL(link.href);
  setEditorStatus("Exported");
}

function importDeck(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("Deck JSON must be an array");
      if (!imported.length) throw new Error("Deck JSON must contain at least one slide");
      slides = imported.map(normalizeSlide);
      index = Math.min(index, slides.length - 1);
      saveSlides();
      renderSlide(index);
      syncEditor();
      setEditorStatus("Imported");
    } catch (error) {
      setEditorStatus("Import failed");
      console.warn(error);
    }
  });
  reader.readAsText(file);
}

function initEditor() {
  if (!editorPanel) return;
  document.body.classList.add("editor-open");
  editorPanel.hidden = false;
  syncEditor();

  editorSlideSelect.addEventListener("change", () => goTo(Number(editorSlideSelect.value)));
  Object.values(editorFields).forEach((field) => {
    field.addEventListener(field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "input", applyEditorChange);
  });
  document.getElementById("editBgImageFile").addEventListener("change", (event) => readFileAsDataUrl(event.currentTarget, editorFields.backgroundImage));
  document.getElementById("editBgVideoFile").addEventListener("change", (event) => readFileAsDataUrl(event.currentTarget, editorFields.video));
  document.getElementById("editorAdd").addEventListener("click", () => {
    slides.splice(index + 1, 0, makeBlankSlide());
    index += 1;
    saveSlides();
    renderSlide(index);
    syncEditor();
  });
  document.getElementById("editorDuplicate").addEventListener("click", () => {
    slides.splice(index + 1, 0, normalizeSlide(cloneSlides([slides[index]])[0]));
    index += 1;
    saveSlides();
    renderSlide(index);
    syncEditor();
  });
  document.getElementById("editorDelete").addEventListener("click", () => {
    if (slides.length <= 1) return;
    slides.splice(index, 1);
    index = Math.min(index, slides.length - 1);
    saveSlides();
    renderSlide(index);
    syncEditor();
  });
  document.getElementById("editorExport").addEventListener("click", exportDeck);
  document.getElementById("editorImport").addEventListener("click", () => document.getElementById("editorImportFile").click());
  document.getElementById("editorImportFile").addEventListener("change", (event) => importDeck(event.currentTarget.files?.[0]));
  document.getElementById("editorReset").addEventListener("click", () => {
    if (!window.confirm("Reset deck to original slides?")) return;
    slides = cloneSlides(defaultSlides).map(normalizeSlide);
    index = 0;
    window.localStorage.removeItem(STORAGE_KEY);
    renderSlide(index);
    syncEditor();
    setEditorStatus("Reset");
  });
}

prevBtn.addEventListener("click", () => goTo(index - 1));
nextBtn.addEventListener("click", () => goTo(index + 1));
fullBtn.addEventListener("click", toggleFullscreen);

window.addEventListener("keydown", (event) => {
  if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target?.tagName)) return;
  if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
    event.preventDefault();
    goTo(index + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goTo(index - 1);
  }
  if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen();
  }
  if (event.key === "Home") {
    event.preventDefault();
    goTo(0);
  }
  if (event.key === "End") {
    event.preventDefault();
    goTo(slides.length - 1);
  }
});

const requestedSlide = Number(new URLSearchParams(window.location.search).get("slide"));
if (Number.isInteger(requestedSlide) && requestedSlide >= 1 && requestedSlide <= slides.length) {
  index = requestedSlide - 1;
}

if (new URLSearchParams(window.location.search).get("editor") === "1") {
  initEditor();
}

renderSlide(index);
