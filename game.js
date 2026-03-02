const SHEET_PATHS = {
  janCustom: "assets/custom/january.png",
  m02Custom: "assets/custom/february.png",
  m03Custom: "assets/custom/march.png",
  m04Custom: "assets/custom/april.png",
  m05Custom: "assets/custom/may.png",
  m06Custom: "assets/custom/june.png",
  m07Custom: "assets/custom/july.png",
  m08Custom: "assets/custom/august.jpg",
  m09Custom: "assets/custom/september.png",
  m10Custom: "assets/custom/october.png",
  m11Custom: "assets/custom/november.png",
  m12Custom: "assets/custom/december.png",
};

const MONTH_SPRITES = {
  1: [
    { sheet: "janCustom", x: 141, y: 14, w: 360, h: 487 },
    { sheet: "janCustom", x: 522, y: 14, w: 360, h: 487 },
    { sheet: "janCustom", x: 141, y: 521, w: 360, h: 484 },
    { sheet: "janCustom", x: 521, y: 521, w: 361, h: 484 },
  ],
  2: [
    { sheet: "m02Custom", x: 521, y: 779, w: 408, h: 630 },
    { sheet: "m02Custom", x: 94, y: 779, w: 407, h: 630 },
    { sheet: "m02Custom", x: 95, y: 127, w: 407, h: 627 },
    { sheet: "m02Custom", x: 521, y: 127, w: 408, h: 627 },
  ],
  3: [
    { sheet: "m03Custom", x: 523, y: 14, w: 359, h: 487 },
    { sheet: "m03Custom", x: 523, y: 522, w: 359, h: 483 },
    { sheet: "m03Custom", x: 141, y: 14, w: 359, h: 487 },
    { sheet: "m03Custom", x: 141, y: 522, w: 359, h: 483 },
  ],
  4: [
    { sheet: "m04Custom", x: 94, y: 126, w: 409, h: 629 },
    { sheet: "m04Custom", x: 94, y: 782, w: 408, h: 625 },
    { sheet: "m04Custom", x: 520, y: 126, w: 409, h: 629 },
    { sheet: "m04Custom", x: 520, y: 782, w: 409, h: 626 },
  ],
  5: [
    { sheet: "m05Custom", x: 94, y: 126, w: 407, h: 629 },
    { sheet: "m05Custom", x: 94, y: 781, w: 413, h: 636 },
    { sheet: "m05Custom", x: 520, y: 126, w: 410, h: 632 },
    { sheet: "m05Custom", x: 520, y: 780, w: 411, h: 636 },
  ],
  6: [
    { sheet: "m06Custom", x: 145, y: 15, w: 360, h: 486 },
    { sheet: "m06Custom", x: 144, y: 523, w: 359, h: 482 },
    { sheet: "m06Custom", x: 526, y: 15, w: 360, h: 486 },
    { sheet: "m06Custom", x: 524, y: 523, w: 361, h: 481 },
  ],
  7: [
    { sheet: "m07Custom", x: 141, y: 15, w: 359, h: 486 },
    { sheet: "m07Custom", x: 521, y: 15, w: 361, h: 486 },
    { sheet: "m07Custom", x: 141, y: 521, w: 359, h: 483 },
    { sheet: "m07Custom", x: 521, y: 521, w: 361, h: 483 },
  ],
  8: [
    { sheet: "m08Custom", x: 140, y: 16, w: 361, h: 485 },
    { sheet: "m08Custom", x: 521, y: 15, w: 361, h: 486 },
    { sheet: "m08Custom", x: 138, y: 523, w: 363, h: 479 },
    { sheet: "m08Custom", x: 521, y: 523, w: 362, h: 479 },
  ],
  9: [
    { sheet: "m09Custom", x: 155, y: 15, w: 357, h: 485 },
    { sheet: "m09Custom", x: 155, y: 521, w: 357, h: 482 },
    { sheet: "m09Custom", x: 534, y: 15, w: 357, h: 485 },
    { sheet: "m09Custom", x: 534, y: 521, w: 357, h: 482 },
  ],
  10: [
    { sheet: "m10Custom", x: 425, y: 103, w: 333, h: 513 },
    { sheet: "m10Custom", x: 79, y: 635, w: 331, h: 511 },
    { sheet: "m10Custom", x: 80, y: 103, w: 330, h: 513 },
    { sheet: "m10Custom", x: 425, y: 634, w: 333, h: 512 },
  ],
  11: [
    { sheet: "m11Custom", x: 74, y: 63, w: 333, h: 550 },
    { sheet: "m11Custom", x: 423, y: 63, w: 333, h: 550 },
    { sheet: "m11Custom", x: 74, y: 631, w: 333, h: 559 },
    { sheet: "m11Custom", x: 423, y: 631, w: 333, h: 559 },
  ],
  12: [
    { sheet: "m12Custom", x: 520, y: 781, w: 409, h: 628 },
    { sheet: "m12Custom", x: 95, y: 127, w: 409, h: 632 },
    { sheet: "m12Custom", x: 520, y: 127, w: 409, h: 633 },
    { sheet: "m12Custom", x: 94, y: 780, w: 407, h: 629 },
  ],
};

const ACTION_LOG_LIMIT = 180;
const DEFAULT_AI_PROFILE = "balanced";
const AI_PROFILE_KEYS = ["safe", "balanced", "gambler"];

const AI_PROFILES = {
  safe: {
    card: {
      immediate: 1.0,
      yakuGain: 5.8,
      comboGain: 1.6,
      denial: 2.3,
      month: 0.7,
      expose: 1.5,
      lightBonus: 1.0,
      jitter: 0.12,
    },
    decision: {
      passBase: 1.8,
      koiBase: -0.3,
      multiplierHunger: 0.6,
      futureGainWeight: 0.52,
      riskWeight: 0.72,
      leadLockWeight: 0.24,
      leadRiskAversion: 0.22,
      comebackWeight: 0.11,
      latePassWeight: 0.46,
      behindPassPenalty: 0.08,
      highMultPassBonus: 1.3,
      handPhaseKoiBonus: 0.18,
      autoPassAtPoints: 8,
      maxMultRiskGuard: 0.95,
      koiMargin: 0.26,
      coinFlipBand: 0.9,
      randomKoiChance: 0.32,
    },
  },
  balanced: {
    card: {
      immediate: 1.1,
      yakuGain: 5.2,
      comboGain: 1.9,
      denial: 1.7,
      month: 0.9,
      expose: 1.0,
      lightBonus: 1.2,
      jitter: 0.2,
    },
    decision: {
      passBase: 0.7,
      koiBase: 0.5,
      multiplierHunger: 0.95,
      futureGainWeight: 0.62,
      riskWeight: 0.58,
      leadLockWeight: 0.15,
      leadRiskAversion: 0.16,
      comebackWeight: 0.21,
      latePassWeight: 0.3,
      behindPassPenalty: 0.06,
      highMultPassBonus: 0.8,
      handPhaseKoiBonus: 0.5,
      autoPassAtPoints: 10,
      maxMultRiskGuard: 1.12,
      koiMargin: 0.16,
      coinFlipBand: 0.75,
      randomKoiChance: 0.57,
    },
  },
  gambler: {
    card: {
      immediate: 1.2,
      yakuGain: 4.7,
      comboGain: 2.3,
      denial: 1.1,
      month: 1.1,
      expose: 0.6,
      lightBonus: 1.5,
      jitter: 0.34,
    },
    decision: {
      passBase: -0.6,
      koiBase: 1.8,
      multiplierHunger: 1.28,
      futureGainWeight: 0.86,
      riskWeight: 0.42,
      leadLockWeight: 0.08,
      leadRiskAversion: 0.1,
      comebackWeight: 0.34,
      latePassWeight: 0.18,
      behindPassPenalty: 0.03,
      highMultPassBonus: 0.25,
      handPhaseKoiBonus: 0.92,
      autoPassAtPoints: 13,
      maxMultRiskGuard: 1.45,
      koiMargin: -0.08,
      coinFlipBand: 1.0,
      randomKoiChance: 0.74,
    },
  },
};

const CPU_PROFILE_META = {
  safe: {
    name: "The Timid",
    style: "Low Risk",
    avatar: "assets/avatars/the-timid.png",
  },
  balanced: {
    name: "The Monk",
    style: "Balanced",
    avatar: "assets/avatars/the-monk.png",
  },
  gambler: {
    name: "The Gambler",
    style: "High Risk",
    avatar: "assets/avatars/the-gambler.png",
  },
};

const MONTHS = [
  { id: 1, name: "January", flower: "Pine" },
  { id: 2, name: "February", flower: "Plum Blossom" },
  { id: 3, name: "March", flower: "Cherry Blossom" },
  { id: 4, name: "April", flower: "Wisteria" },
  { id: 5, name: "May", flower: "Iris" },
  { id: 6, name: "June", flower: "Peony" },
  { id: 7, name: "July", flower: "Bush Clover" },
  { id: 8, name: "August", flower: "Pampas Grass" },
  { id: 9, name: "September", flower: "Chrysanthemum" },
  { id: 10, name: "October", flower: "Maple" },
  { id: 11, name: "November", flower: "Willow" },
  { id: 12, name: "December", flower: "Paulownia" },
];

const CARD_TYPE_BADGE_TEXT = {
  light: "BRT",
  seed: "SED",
  scroll: "SCR",
  basic: "PLN",
};

const MONTH_CARD_DEFS = [
  {
    month: 1,
    cards: [
      { code: "a", name: "Crane Light", type: "light" },
      { code: "b", name: "Red Scroll (Text)", type: "scroll", scrollKind: "redText" },
      { code: "c", name: "Pine Plain A", type: "basic" },
      { code: "d", name: "Pine Plain B", type: "basic" },
    ],
  },
  {
    month: 2,
    cards: [
      { code: "a", name: "Plum Bush Warbler", type: "seed" },
      { code: "b", name: "Red Scroll (Text)", type: "scroll", scrollKind: "redText" },
      { code: "c", name: "Plum Plain A", type: "basic" },
      { code: "d", name: "Plum Plain B", type: "basic" },
    ],
  },
  {
    month: 3,
    cards: [
      { code: "a", name: "Cherry Curtain", type: "light" },
      { code: "b", name: "Red Scroll (Text)", type: "scroll", scrollKind: "redText" },
      { code: "c", name: "Cherry Plain A", type: "basic" },
      { code: "d", name: "Cherry Plain B", type: "basic" },
    ],
  },
  {
    month: 4,
    cards: [
      { code: "a", name: "Wisteria Cuckoo", type: "seed" },
      { code: "b", name: "Red Scroll", type: "scroll", scrollKind: "red" },
      { code: "c", name: "Wisteria Plain A", type: "basic" },
      { code: "d", name: "Wisteria Plain B", type: "basic" },
    ],
  },
  {
    month: 5,
    cards: [
      { code: "a", name: "Iris Bridge", type: "seed" },
      { code: "b", name: "Red Scroll", type: "scroll", scrollKind: "red" },
      { code: "c", name: "Iris Plain A", type: "basic" },
      { code: "d", name: "Iris Plain B", type: "basic" },
    ],
  },
  {
    month: 6,
    cards: [
      { code: "a", name: "Peony Butterfly", type: "seed" },
      { code: "b", name: "Blue Scroll", type: "scroll", scrollKind: "blue" },
      { code: "c", name: "Peony Plain A", type: "basic" },
      { code: "d", name: "Peony Plain B", type: "basic" },
    ],
  },
  {
    month: 7,
    cards: [
      { code: "a", name: "Clover Boar", type: "seed" },
      { code: "b", name: "Red Scroll", type: "scroll", scrollKind: "red" },
      { code: "c", name: "Bush Clover Plain A", type: "basic" },
      { code: "d", name: "Bush Clover Plain B", type: "basic" },
    ],
  },
  {
    month: 8,
    cards: [
      { code: "a", name: "Moon Light", type: "light" },
      { code: "b", name: "Pampas Geese", type: "seed" },
      { code: "c", name: "Pampas Plain A", type: "basic" },
      { code: "d", name: "Pampas Plain B", type: "basic" },
    ],
  },
  {
    month: 9,
    cards: [
      { code: "a", name: "Sake Cup", type: "seed" },
      { code: "b", name: "Blue Scroll", type: "scroll", scrollKind: "blue" },
      { code: "c", name: "Chrysanthemum Plain A", type: "basic" },
      { code: "d", name: "Chrysanthemum Plain B", type: "basic" },
    ],
  },
  {
    month: 10,
    cards: [
      { code: "a", name: "Maple Deer", type: "seed" },
      { code: "b", name: "Blue Scroll", type: "scroll", scrollKind: "blue" },
      { code: "c", name: "Maple Plain A", type: "basic" },
      { code: "d", name: "Maple Plain B", type: "basic" },
    ],
  },
  {
    month: 11,
    cards: [
      { code: "a", name: "Rain Light", type: "light", isRainLight: true },
      { code: "b", name: "Willow Swallow", type: "seed" },
      { code: "c", name: "Red Scroll", type: "scroll", scrollKind: "red" },
      { code: "d", name: "Willow Plain", type: "basic" },
    ],
  },
  {
    month: 12,
    cards: [
      { code: "a", name: "Phoenix Light", type: "light" },
      { code: "b", name: "Paulownia Plain A", type: "basic" },
      { code: "c", name: "Paulownia Plain B", type: "basic" },
      { code: "d", name: "Paulownia Plain C", type: "basic" },
    ],
  },
];

const CARD_DECK = buildDeck();
const CARD_BY_ID = new Map(CARD_DECK.map((card) => [card.id, card]));
const DRAW_PREVIEW_FLIP_MS = 220;
const PLAYER_DRAW_REVEAL_LINGER_MS = 420;
const CPU_DECK_FLIP_DELAY_MS = 320;
const CPU_DRAW_REVEAL_LINGER_MS = 360;
const AI_STEP_THINK_MS = 300;
const AI_STEP_CPU_PHASE1_PREVIEW_MS = 520;
const AI_STEP_TARGET_MS = 340;
const AI_STEP_DRAW_RESOLVE_MS = 360;
const AI_STEP_DECISION_MS = 420;
const SAVE_CODE_PREFIX = "HKK3";
const SAVE_CODE_VERSION = 3;
const SAVE_CODE_PREFIX_VERSION = {
  HKK2: 2,
  HKK3: 3,
};
const SUPPORTED_SAVE_VERSIONS = new Set(Object.values(SAVE_CODE_PREFIX_VERSION));

const drawPreviewFx = {
  lastCardId: null,
  revealTimer: null,
};

const state = {
  ready: false,
  sprites: {},
  players: [],
  gameNumber: 1,
  maxGames: 12,
  dealer: 0,
  currentPlayer: 0,
  field: [],
  drawPile: [],
  tableMultiplier: 1,
  pendingSelection: null,
  awaitingDeckFlip: null,
  aiPreview: null,
  cpuPhase1PreviewCardId: null,
  awaitingDecision: null,
  lastKoiCaller: null,
  firstYakuPlayer: null,
  roundSpecialTwoXPlayer: null,
  nextRoundSpecialTwoXPlayer: null,
  roundLeaderAtStart: null,
  previousRoundWinner: null,
  previousRoundMultiplier: null,
  roundHistory: [],
  drawPreview: {
    cardId: null,
    text: "Waiting for draw.",
  },
  actionLog: [],
  moveCounts: [0, 0],
  roundOver: false,
  matchOver: false,
  message: "",
  aiProfile: DEFAULT_AI_PROFILE,
  aiTimer: null,
  aiTask: null,
  drawRevealTimer: null,
  autoFocusTargetKey: null,
  playMode: "cpu",
  friendFlow: "hotseat",
  viewerPlayerIndex: 0,
  interstitial: {
    open: false,
    nextPlayerIndex: null,
  },
  turnCheckpointReady: false,
  lastExportMeta: null,
};

const ui = {};

document.addEventListener("DOMContentLoaded", init);

function buildDeck() {
  const cards = [];
  for (const monthDef of MONTH_CARD_DEFS) {
    const monthSprites = MONTH_SPRITES[monthDef.month];
    if (!monthSprites || monthSprites.length !== monthDef.cards.length) {
      throw new Error(`Missing custom sprite mapping for month ${monthDef.month}`);
    }
    monthDef.cards.forEach((card, index) => {
      const sprite = monthSprites[index];
      cards.push({
        id: `${monthDef.month}${card.code}`,
        month: monthDef.month,
        name: card.name,
        type: card.type,
        scrollKind: card.scrollKind || null,
        canAlsoBeBasic: Boolean(card.canAlsoBeBasic),
        isRainLight: Boolean(card.isRainLight),
        sprite,
      });
    });
  }
  return cards;
}

function init() {
  cacheUI();
  bindUI();
  preloadSheets()
    .then(() => {
      state.ready = true;
      showStartMenu();
    })
    .catch((err) => {
      addSystemLog(`Could not load card images: ${err.message}`);
      renderActionLog();
      setCodeStatus(`Asset load failed: ${err.message}`, true, "start");
    });

  window.render_game_to_text = renderGameToText;
  window.advanceTime = advanceTime;
}

function cacheUI() {
  ui.cpuScoreInline = document.getElementById("cpu-score-inline");
  ui.playerScoreInline = document.getElementById("player-score-inline");
  ui.turnMeta = document.getElementById("turn-meta");
  ui.gameSummaryToggle = document.getElementById("game-summary-toggle");
  ui.gameSummaryPanel = document.getElementById("game-summary-panel");
  ui.roundSummaryBody = document.getElementById("round-summary-body");
  ui.cpuHandCount = document.getElementById("cpu-hand-count");
  ui.deckCount = document.getElementById("deck-count");
  ui.cpuCapturedCount = document.getElementById("cpu-captured-count");
  ui.playerCapturedCount = document.getElementById("player-captured-count");
  ui.cpuCapturesLabel = document.getElementById("cpu-captures-label");
  ui.playerCapturesLabel = document.getElementById("player-captures-label");
  ui.cpuHandLabel = document.getElementById("cpu-hand-label");
  ui.playerHandLabel = document.getElementById("player-hand-label");
  ui.summaryColYou = document.getElementById("summary-col-you");
  ui.summaryColCpu = document.getElementById("summary-col-cpu");
  ui.cpuYaku = document.getElementById("cpu-yaku");
  ui.playerYaku = document.getElementById("player-yaku");
  ui.koiState = document.getElementById("koi-state");
  ui.logToggle = document.getElementById("log-toggle");
  ui.messageZone = document.getElementById("message-zone");
  ui.actionLog = document.getElementById("action-log");
  ui.logCount = document.getElementById("log-count");
  ui.cpuHand = document.getElementById("cpu-hand");
  ui.playerHand = document.getElementById("player-hand");
  ui.field = document.getElementById("field");
  ui.drawPreviewCanvas = document.getElementById("draw-preview-canvas");
  ui.drawPreviewText = document.getElementById("draw-preview-text");
  ui.drawPreview = document.getElementById("draw-preview");
  ui.playerZone = document.getElementById("player-zone");
  ui.fieldZone = document.getElementById("field-zone");
  ui.handLockNote = document.getElementById("hand-lock-note");
  ui.cpuCaptured = document.getElementById("cpu-captured");
  ui.playerCaptured = document.getElementById("player-captured");
  ui.contextZone = document.getElementById("context-zone");
  ui.contextLeftBtn = document.getElementById("context-left-btn");
  ui.contextRightBtn = document.getElementById("context-right-btn");
  ui.codeToggle = document.getElementById("code-toggle");
  ui.codePanel = document.getElementById("code-panel");
  ui.codePanelHead = document.getElementById("code-panel-head");
  ui.exportCodeLabel = document.getElementById("export-code-label");
  ui.exportCode = document.getElementById("export-code");
  ui.importCodeLabel = document.getElementById("import-code-label");
  ui.importCode = document.getElementById("import-code");
  ui.codeStatus = document.getElementById("code-status");
  ui.refreshCodeBtn = document.getElementById("refresh-code-btn");
  ui.copyCodeBtn = document.getElementById("copy-code-btn");
  ui.loadCodeBtn = document.getElementById("load-code-btn");
  ui.closeCodeBtn = document.getElementById("close-code-btn");
  ui.startMenu = document.getElementById("start-menu");
  ui.startModeCpuBtn = document.getElementById("start-mode-cpu-btn");
  ui.startModeFriendBtn = document.getElementById("start-mode-friend-btn");
  ui.startFriendFlow = document.getElementById("start-friend-flow");
  ui.startFriendHotseatBtn = document.getElementById("start-friend-hotseat-btn");
  ui.startFriendCodeBtn = document.getElementById("start-friend-code-btn");
  ui.startLoadBtn = document.getElementById("start-load-btn");
  ui.startImportCode = document.getElementById("start-import-code");
  ui.startMenuStatus = document.getElementById("start-menu-status");
  ui.friendInterstitial = document.getElementById("friend-interstitial");
  ui.friendInterstitialTitle = document.getElementById("friend-interstitial-title");
  ui.friendInterstitialText = document.getElementById("friend-interstitial-text");
  ui.friendTurnCodeWrap = document.getElementById("friend-turn-code-wrap");
  ui.friendTurnCode = document.getElementById("friend-turn-code");
  ui.friendCopyCodeBtn = document.getElementById("friend-copy-code-btn");
  ui.friendContinueBtn = document.getElementById("friend-continue-btn");
  ui.friendInterstitialStatus = document.getElementById("friend-interstitial-status");
  ui.rulesToggle = document.getElementById("rules-toggle");
  ui.rulesPanel = document.getElementById("rules-panel");
}

function bindUI() {
  ui.playerHand.addEventListener("click", onPlayerHandClick);
  ui.field.addEventListener("click", onFieldClick);
  ui.drawPreview?.addEventListener("click", onDrawPreviewClick);
  ui.contextZone.addEventListener("click", onContextActionClick);
  ui.gameSummaryToggle?.addEventListener("click", onToggleGameSummaryPanel);
  ui.logToggle?.addEventListener("click", onToggleLogPanel);
  ui.codeToggle?.addEventListener("click", onToggleCodePanel);
  ui.refreshCodeBtn?.addEventListener("click", onRefreshCode);
  ui.copyCodeBtn?.addEventListener("click", onCopyCode);
  ui.loadCodeBtn?.addEventListener("click", onLoadCodeFromPanel);
  ui.closeCodeBtn?.addEventListener("click", () => {
    setCodePanelOpen(false);
    showStartMenu();
  });
  ui.startModeCpuBtn?.addEventListener("click", onStartModeCpuFromMenu);
  ui.startModeFriendBtn?.addEventListener("click", onStartModeFriendFromMenu);
  ui.startFriendHotseatBtn?.addEventListener("click", onStartFriendHotseatFromMenu);
  ui.startFriendCodeBtn?.addEventListener("click", onStartFriendCodeFromMenu);
  ui.startLoadBtn?.addEventListener("click", onStartLoadFromMenu);
  ui.friendCopyCodeBtn?.addEventListener("click", onFriendInterstitialCopyCode);
  ui.friendContinueBtn?.addEventListener("click", onFriendInterstitialContinue);
  ui.rulesToggle.addEventListener("click", () => {
    ui.rulesPanel.hidden = !ui.rulesPanel.hidden;
    ui.rulesToggle.textContent = ui.rulesPanel.hidden ? "Rules" : "Hide Rules";
  });
}

function preloadSheets() {
  const entries = Object.entries(SHEET_PATHS);
  const tasks = entries.map(([key, path]) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        state.sprites[key] = img;
        resolve();
      };
      img.onerror = () => reject(new Error(`missing ${path}`));
      img.src = path;
    });
  });
  return Promise.all(tasks);
}

function showStartMenu() {
  if (ui.startMenu) {
    ui.startMenu.hidden = false;
  }
  setFriendInterstitialOpen(false);
  setStartFriendFlowOpen(false);
  setLogPanelOpen(false);
  setGameSummaryPanelOpen(false);
  setCodePanelOpen(false);
  setCodeStatus("", false, "start");
}

function hideStartMenu() {
  if (ui.startMenu) {
    ui.startMenu.hidden = true;
  }
  setFriendInterstitialOpen(false);
  setStartFriendFlowOpen(false);
  setCodeStatus("", false, "start");
}

function setStartFriendFlowOpen(open) {
  if (ui.startFriendFlow) {
    ui.startFriendFlow.hidden = !open;
  }
}

function setCodePanelOpen(open) {
  if (!ui.codePanel || !ui.codeToggle) return;
  ui.codePanel.hidden = !open;
  ui.codeToggle.textContent = open ? "Hide Code" : "Code";
}

function setLogPanelOpen(open) {
  if (!ui.messageZone || !ui.logToggle) return;
  ui.messageZone.hidden = !open;
  ui.logToggle.textContent = open ? "Hide Log" : "Action Log";
}

function onToggleLogPanel() {
  const nextOpen = ui.messageZone?.hidden !== false;
  setLogPanelOpen(nextOpen);
}

function setGameSummaryPanelOpen(open) {
  if (!ui.gameSummaryPanel || !ui.gameSummaryToggle) return;
  ui.gameSummaryPanel.hidden = !open;
}

function onToggleGameSummaryPanel() {
  const nextOpen = ui.gameSummaryPanel?.hidden !== false;
  setGameSummaryPanelOpen(nextOpen);
}

function onToggleCodePanel() {
  const nextOpen = ui.codePanel?.hidden !== false;
  setCodePanelOpen(nextOpen);
  if (nextOpen) {
    refreshExportCode();
    if (isFriendCodeMode() && !isFriendTurnExportWindow()) {
      setCodeStatus("Turn code unlocks after a full turn handoff.", false, "panel");
    } else {
      setCodeStatus("", false, "panel");
    }
  }
}

function onRefreshCode() {
  if (!state.ready || !state.players.length) return;
  if (isFriendCodeMode() && !isFriendTurnExportWindow()) {
    setCodeStatus("Turn code is available after a full turn handoff.", true, "panel");
    return;
  }
  refreshExportCode();
  if (isFriendCodeMode()) {
    setCodeStatus("Turn code generated.", false, "panel");
  } else {
    setCodeStatus("Code refreshed.", false, "panel");
  }
}

function refreshExportCode() {
  if (!ui.exportCode || !state.players.length) return;
  try {
    const code = encodeStateToCode();
    ui.exportCode.value = code;
  } catch (err) {
    setCodeStatus(`Could not generate code: ${err.message}`, true, "panel");
  }
}

async function onCopyCode() {
  if (!ui.exportCode) return;
  if (isFriendCodeMode() && !isFriendTurnExportWindow()) {
    setCodeStatus("Turn code can only be copied at turn handoff.", true, "panel");
    return;
  }
  if (!ui.exportCode.value.trim()) {
    refreshExportCode();
  }
  const value = ui.exportCode.value.trim();
  if (!value) {
    setCodeStatus("No code available to copy.", true, "panel");
    return;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      ui.exportCode.focus();
      ui.exportCode.select();
      document.execCommand("copy");
      ui.exportCode.setSelectionRange(0, 0);
    }
    if (isFriendCodeMode()) {
      setCodeStatus("Turn code copied to clipboard.", false, "panel");
    } else {
      setCodeStatus("Code copied to clipboard.", false, "panel");
    }
  } catch (err) {
    setCodeStatus(`Copy failed: ${err.message}`, true, "panel");
  }
}

function onLoadCodeFromPanel() {
  const raw = ui.importCode?.value || "";
  loadCodeIntoGame(raw, "panel");
}

function onStartModeCpuFromMenu() {
  if (!state.ready) return;
  hideStartMenu();
  startNewMatch({ playMode: "cpu" });
}

function onStartModeFriendFromMenu() {
  if (!state.ready) return;
  const currentlyOpen = ui.startFriendFlow ? !ui.startFriendFlow.hidden : false;
  setStartFriendFlowOpen(!currentlyOpen);
  setCodeStatus("", false, "start");
}

function onStartFriendHotseatFromMenu() {
  if (!state.ready) return;
  hideStartMenu();
  startNewMatch({ playMode: "friend", friendFlow: "hotseat" });
}

function onStartFriendCodeFromMenu() {
  if (!state.ready) return;
  hideStartMenu();
  startNewMatch({ playMode: "friend", friendFlow: "code" });
}

function onStartLoadFromMenu() {
  const raw = ui.startImportCode?.value || "";
  loadCodeIntoGame(raw, "start");
}

function setCodeStatus(message, isError, target = "panel") {
  const node = target === "start" ? ui.startMenuStatus : ui.codeStatus;
  if (!node) return;
  node.textContent = message || "";
  node.classList.toggle("error", Boolean(message && isError));
  node.classList.toggle("success", Boolean(message && !isError));
}

function setFriendInterstitialStatus(message, isError) {
  if (!ui.friendInterstitialStatus) return;
  ui.friendInterstitialStatus.textContent = message || "";
  ui.friendInterstitialStatus.classList.toggle("error", Boolean(message && isError));
  ui.friendInterstitialStatus.classList.toggle("success", Boolean(message && !isError));
}

function setFriendInterstitialOpen(open, nextPlayerIndex = null) {
  const shouldOpen = Boolean(open);
  const normalizedNext =
    shouldOpen && nextPlayerIndex !== null && nextPlayerIndex !== undefined
      ? asPlayerIndex(nextPlayerIndex, "interstitial.nextPlayerIndex")
      : null;
  state.interstitial = {
    open: shouldOpen,
    nextPlayerIndex: shouldOpen ? (normalizedNext === null ? state.currentPlayer : normalizedNext) : null,
  };
  if (!shouldOpen) {
    setFriendInterstitialStatus("", false);
  }
}

function prepareFriendTurnHandoff(lastActorIndex, moveNumber, nextPlayerIndex) {
  if (!isFriendMode()) return;
  if (Number.isFinite(lastActorIndex) && Number.isFinite(moveNumber)) {
    state.lastExportMeta = {
      turnNumber: Math.max(1, Number(moveNumber)),
      playerIndex: asPlayerIndex(lastActorIndex, "lastExportMeta.playerIndex"),
    };
  }
  setFriendInterstitialOpen(true, nextPlayerIndex);
}

async function onFriendInterstitialCopyCode() {
  if (!isFriendMode() || !state.interstitial?.open) return;
  let code = "";
  try {
    code = encodeStateToCode();
  } catch (err) {
    setFriendInterstitialStatus(`Could not generate code: ${err.message}`, true);
    return;
  }
  if (ui.friendTurnCode) {
    ui.friendTurnCode.value = code;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(code);
    } else if (ui.friendTurnCode) {
      ui.friendTurnCode.focus();
      ui.friendTurnCode.select();
      document.execCommand("copy");
      ui.friendTurnCode.setSelectionRange(0, 0);
    }
    setFriendInterstitialStatus("Turn code copied.", false);
  } catch (err) {
    setFriendInterstitialStatus(`Copy failed: ${err.message}`, true);
  }
}

function onFriendInterstitialContinue() {
  if (!isFriendMode() || !state.interstitial?.open) return;
  const nextPlayerIndex =
    state.interstitial.nextPlayerIndex === null || state.interstitial.nextPlayerIndex === undefined
      ? state.currentPlayer
      : state.interstitial.nextPlayerIndex;
  state.viewerPlayerIndex = nextPlayerIndex;
  setFriendInterstitialOpen(false);
  renderAll();
}

function loadCodeIntoGame(rawInput, target = "panel") {
  const normalized = String(rawInput || "").trim();
  if (!normalized) {
    setCodeStatus("Paste a code first.", true, target);
    return;
  }

  try {
    const snapshot = decodeGameCode(normalized);
    validateFriendCodeSnapshotForImport(snapshot);
    applySnapshot(snapshot);
    hideStartMenu();
    setCodePanelOpen(false);
    if (snapshot.playMode === "friend" && snapshot.friendFlow === "code" && snapshot.lastExportMeta) {
      const playerLabel = `Player ${snapshot.lastExportMeta.playerIndex + 1}`;
      setCodeStatus(`Turn code loaded (${playerLabel}, move ${snapshot.lastExportMeta.turnNumber}).`, false, target);
    } else {
      setCodeStatus("Code loaded successfully.", false, target);
    }
    if (target === "panel" && ui.importCode) {
      ui.importCode.value = "";
    }
    if (target === "start" && ui.startImportCode) {
      ui.startImportCode.value = "";
    }
    refreshExportCode();
  } catch (err) {
    setCodeStatus(`Load failed: ${err.message}`, true, target);
  }
}

function validateFriendCodeSnapshotForImport(snapshot) {
  if (!snapshot || snapshot.playMode !== "friend" || snapshot.friendFlow !== "code") return;
  if (snapshot.turnCheckpointReady !== true) {
    throw new Error("This turn code is not at a valid handoff checkpoint");
  }
  if (!snapshot.interstitial || snapshot.interstitial.open !== true) {
    throw new Error("Turn code is missing handoff state");
  }
  const nextPlayerIndex = snapshot.interstitial.nextPlayerIndex;
  if (nextPlayerIndex !== 0 && nextPlayerIndex !== 1) {
    throw new Error("Turn code is missing next player metadata");
  }
  if (snapshot.currentPlayer !== nextPlayerIndex) {
    throw new Error("Turn code turn-owner metadata is invalid");
  }
  if (!snapshot.lastExportMeta || typeof snapshot.lastExportMeta !== "object") {
    throw new Error("Turn code is missing export metadata");
  }
  const exporter = snapshot.lastExportMeta.playerIndex;
  if (exporter !== 0 && exporter !== 1) {
    throw new Error("Turn code exporter metadata is invalid");
  }
  if (exporter === nextPlayerIndex) {
    throw new Error("Turn code exporter and receiver cannot be the same player");
  }
  if (!Number.isFinite(snapshot.lastExportMeta.turnNumber) || snapshot.lastExportMeta.turnNumber < 1) {
    throw new Error("Turn code move metadata is invalid");
  }
}

function createPlayer(name, isHuman, roleLabel = name) {
  return {
    name,
    roleLabel,
    isHuman,
    score: 0,
    hand: [],
    captured: [],
    yaku: { points: 0, names: [], triggerKeys: [] },
    yakuSeen: new Set(),
  };
}

function encodeStateToCode() {
  const snapshot = buildSnapshot();
  const json = JSON.stringify(snapshot);
  const payload = encodeBase64UrlUtf8(json);
  const checksum = computeCodeChecksum(payload);
  return `${SAVE_CODE_PREFIX}.${payload}.${checksum}`;
}

function decodeGameCode(code) {
  const normalized = String(code || "").trim();
  const parts = normalized.split(".");
  if (parts.length !== 3) {
    throw new Error("Bad format. Expected prefix.payload.checksum");
  }
  const [prefix, payload, checksum] = parts;
  const expectedVersion = SAVE_CODE_PREFIX_VERSION[prefix];
  if (!expectedVersion) {
    throw new Error("Unknown code prefix");
  }
  const expected = computeCodeChecksum(payload);
  if (checksum.toUpperCase() !== expected) {
    throw new Error("Checksum mismatch");
  }

  let parsed;
  try {
    const json = decodeBase64UrlUtf8(payload);
    parsed = JSON.parse(json);
  } catch (err) {
    throw new Error(`Invalid payload: ${err.message}`);
  }

  if (!parsed || typeof parsed !== "object") {
    throw new Error("Invalid payload object");
  }
  if (parsed.v !== expectedVersion) {
    throw new Error(`Version mismatch for ${prefix}`);
  }

  validateSnapshot(parsed);
  return parsed;
}

function buildSnapshot() {
  const checkpointReady = computeTurnCheckpointReady();
  state.turnCheckpointReady = checkpointReady;
  return {
    v: SAVE_CODE_VERSION,
    playMode: state.playMode,
    friendFlow: state.friendFlow,
    viewerPlayerIndex: state.viewerPlayerIndex,
    interstitial: {
      open: Boolean(state.interstitial?.open),
      nextPlayerIndex:
        state.interstitial?.nextPlayerIndex === null || state.interstitial?.nextPlayerIndex === undefined
          ? null
          : state.interstitial.nextPlayerIndex,
    },
    turnCheckpointReady: checkpointReady,
    lastExportMeta: state.lastExportMeta
      ? {
          turnNumber: state.lastExportMeta.turnNumber,
          playerIndex: state.lastExportMeta.playerIndex,
        }
      : null,
    aiProfile: state.aiProfile,
    gameNumber: state.gameNumber,
    maxGames: state.maxGames,
    dealer: state.dealer,
    currentPlayer: state.currentPlayer,
    tableMultiplier: state.tableMultiplier,
    lastKoiCaller: state.lastKoiCaller,
    firstYakuPlayer: state.firstYakuPlayer,
    roundSpecialTwoXPlayer: state.roundSpecialTwoXPlayer,
    nextRoundSpecialTwoXPlayer: state.nextRoundSpecialTwoXPlayer,
    roundLeaderAtStart: state.roundLeaderAtStart,
    previousRoundWinner: state.previousRoundWinner,
    previousRoundMultiplier: state.previousRoundMultiplier,
    roundOver: state.roundOver,
    matchOver: state.matchOver,
    message: state.message,
    drawPreview: {
      cardId: state.drawPreview?.cardId || null,
      text: state.drawPreview?.text || "",
    },
    actionLog: [...state.actionLog],
    moveCounts: [...state.moveCounts],
    roundHistory: state.roundHistory.map((entry) => ({ ...entry })),
    field: state.field.map((card) => card.id),
    drawPile: state.drawPile.map((card) => card.id),
    players: state.players.map((player) => ({
      name: player.name,
      roleLabel: player.roleLabel,
      isHuman: player.isHuman,
      score: player.score,
      hand: player.hand.map((card) => card.id),
      captured: player.captured.map((card) => card.id),
      yakuSeen: [...player.yakuSeen],
    })),
    pendingSelection: serializePendingSelection(state.pendingSelection),
    awaitingDeckFlip: serializeAwaitingDeckFlip(state.awaitingDeckFlip),
    awaitingDecision: serializeAwaitingDecision(state.awaitingDecision),
    aiPreview: serializeAiPreview(state.aiPreview),
    cpuPhase1PreviewCardId: state.cpuPhase1PreviewCardId || null,
  };
}

function serializePendingSelection(pending) {
  if (!pending) return null;
  if (pending.type === "handMatch" || pending.type === "handPlace") {
    return {
      type: pending.type,
      playerIndex: pending.playerIndex,
      cardId: pending.cardId,
      options: [...pending.options],
    };
  }
  if (pending.type === "drawMatch") {
    return {
      type: "drawMatch",
      playerIndex: pending.playerIndex,
      drawnCardId: pending.drawnCard?.id || null,
      moveNumber: pending.moveNumber,
      options: [...pending.options],
    };
  }
  return null;
}

function serializeAwaitingDeckFlip(flip) {
  if (!flip) return null;
  return {
    playerIndex: flip.playerIndex,
    moveNumber: flip.moveNumber,
    drawnCardId: flip.drawnCard?.id || null,
    revealed: Boolean(flip.revealed),
  };
}

function serializeAwaitingDecision(decision) {
  if (!decision) return null;
  return {
    ...decision,
  };
}

function serializeAiPreview(aiPreview) {
  if (!aiPreview) return null;
  return {
    options: [...(aiPreview.options || [])],
    prompt: String(aiPreview.prompt || ""),
  };
}

function validateSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") {
    throw new Error("Snapshot must be an object");
  }
  const snapshotVersion = asInt(snapshot.v, "v");
  if (!SUPPORTED_SAVE_VERSIONS.has(snapshotVersion)) {
    throw new Error(`Unsupported version ${snapshotVersion}`);
  }
  if (snapshotVersion >= 3) {
    validatePlayMode(snapshot.playMode, "playMode");
    validateFriendFlow(snapshot.friendFlow, "friendFlow");
    ensureNullablePlayerIndex(snapshot.viewerPlayerIndex, "viewerPlayerIndex");
    validateInterstitialSnapshot(snapshot.interstitial);
    if (typeof snapshot.turnCheckpointReady !== "boolean") {
      throw new Error("turnCheckpointReady must be boolean");
    }
    if (snapshot.lastExportMeta !== null && snapshot.lastExportMeta !== undefined) {
      validateLastExportMetaSnapshot(snapshot.lastExportMeta);
    }
  }
  if (!Array.isArray(snapshot.players) || snapshot.players.length !== 2) {
    throw new Error("Snapshot must contain exactly two players");
  }
  if (!Array.isArray(snapshot.field) || !Array.isArray(snapshot.drawPile)) {
    throw new Error("Snapshot must include field and draw pile arrays");
  }
  if (!Array.isArray(snapshot.moveCounts) || snapshot.moveCounts.length !== 2) {
    throw new Error("Snapshot moveCounts must have two entries");
  }
  if (!Array.isArray(snapshot.roundHistory)) {
    throw new Error("Snapshot roundHistory must be an array");
  }

  const maxGames = asInt(snapshot.maxGames, "maxGames");
  const gameNumber = asInt(snapshot.gameNumber, "gameNumber");
  if (maxGames < 1 || maxGames > 24) {
    throw new Error("maxGames out of range");
  }
  if (gameNumber < 1 || gameNumber > maxGames) {
    throw new Error("gameNumber out of range");
  }

  const dealer = asPlayerIndex(snapshot.dealer, "dealer");
  const currentPlayer = asPlayerIndex(snapshot.currentPlayer, "currentPlayer");
  const tableMultiplier = asInt(snapshot.tableMultiplier, "tableMultiplier");
  if (tableMultiplier < 1 || tableMultiplier > 4) {
    throw new Error("tableMultiplier out of range");
  }

  ensureNullablePlayerIndex(snapshot.lastKoiCaller, "lastKoiCaller");
  ensureNullablePlayerIndex(snapshot.firstYakuPlayer, "firstYakuPlayer");
  ensureNullablePlayerIndex(snapshot.roundSpecialTwoXPlayer, "roundSpecialTwoXPlayer");
  ensureNullablePlayerIndex(snapshot.nextRoundSpecialTwoXPlayer, "nextRoundSpecialTwoXPlayer");
  ensureNullablePlayerIndex(snapshot.roundLeaderAtStart, "roundLeaderAtStart");
  ensureNullablePlayerIndex(snapshot.previousRoundWinner, "previousRoundWinner");
  snapshot.roundHistory.forEach((entry, idx) => validateRoundHistoryEntry(entry, idx, maxGames));

  // Force card-id validity here and duplicate checks in applySnapshot.
  snapshot.field.forEach((id, idx) => ensureCardId(id, `field[${idx}]`));
  snapshot.drawPile.forEach((id, idx) => ensureCardId(id, `drawPile[${idx}]`));
  snapshot.players.forEach((player, playerIndex) => {
    if (!player || typeof player !== "object") {
      throw new Error(`players[${playerIndex}] must be an object`);
    }
    if (player.name !== undefined && typeof player.name !== "string") {
      throw new Error(`players[${playerIndex}].name must be a string`);
    }
    if (player.roleLabel !== undefined && typeof player.roleLabel !== "string") {
      throw new Error(`players[${playerIndex}].roleLabel must be a string`);
    }
    if (player.isHuman !== undefined && typeof player.isHuman !== "boolean") {
      throw new Error(`players[${playerIndex}].isHuman must be boolean`);
    }
    asInt(player.score, `players[${playerIndex}].score`);
    if (!Array.isArray(player.hand) || !Array.isArray(player.captured)) {
      throw new Error(`players[${playerIndex}] hand/captured must be arrays`);
    }
    if (player.yakuSeen !== undefined && !Array.isArray(player.yakuSeen)) {
      throw new Error(`players[${playerIndex}].yakuSeen must be an array`);
    }
    player.hand.forEach((id, idx) => ensureCardId(id, `players[${playerIndex}].hand[${idx}]`));
    player.captured.forEach((id, idx) => ensureCardId(id, `players[${playerIndex}].captured[${idx}]`));
  });

  if (snapshot.pendingSelection !== null && snapshot.pendingSelection !== undefined) {
    validatePendingSelectionSnapshot(snapshot.pendingSelection);
  }
  if (snapshot.awaitingDeckFlip !== null && snapshot.awaitingDeckFlip !== undefined) {
    validateAwaitingDeckFlipSnapshot(snapshot.awaitingDeckFlip);
  }
  if (snapshot.awaitingDecision !== null && snapshot.awaitingDecision !== undefined) {
    validateAwaitingDecisionSnapshot(snapshot.awaitingDecision);
  }

  // Keep explicit references in case we later add stricter rules.
  void snapshotVersion;
  void dealer;
  void currentPlayer;
}

function validatePlayMode(value, label) {
  if (value !== "cpu" && value !== "friend") {
    throw new Error(`${label} must be cpu or friend`);
  }
}

function validateFriendFlow(value, label) {
  if (value !== "hotseat" && value !== "code") {
    throw new Error(`${label} must be hotseat or code`);
  }
}

function validateInterstitialSnapshot(interstitial) {
  if (!interstitial || typeof interstitial !== "object") {
    throw new Error("interstitial must be an object");
  }
  if (typeof interstitial.open !== "boolean") {
    throw new Error("interstitial.open must be boolean");
  }
  ensureNullablePlayerIndex(interstitial.nextPlayerIndex, "interstitial.nextPlayerIndex");
}

function validateLastExportMetaSnapshot(meta) {
  if (!meta || typeof meta !== "object") {
    throw new Error("lastExportMeta must be an object");
  }
  asInt(meta.turnNumber, "lastExportMeta.turnNumber");
  asPlayerIndex(meta.playerIndex, "lastExportMeta.playerIndex");
}

function validatePendingSelectionSnapshot(pending) {
  if (!pending || typeof pending !== "object") {
    throw new Error("pendingSelection must be an object");
  }
  if (pending.type === "handMatch" || pending.type === "handPlace") {
    asPlayerIndex(pending.playerIndex, "pendingSelection.playerIndex");
    ensureCardId(pending.cardId, "pendingSelection.cardId");
    if (!Array.isArray(pending.options)) {
      throw new Error("pendingSelection.options must be an array");
    }
    pending.options.forEach((id, idx) => ensureCardId(id, `pendingSelection.options[${idx}]`));
    return;
  }
  if (pending.type === "drawMatch") {
    asPlayerIndex(pending.playerIndex, "pendingSelection.playerIndex");
    ensureCardId(pending.drawnCardId, "pendingSelection.drawnCardId");
    asInt(pending.moveNumber, "pendingSelection.moveNumber");
    if (!Array.isArray(pending.options)) {
      throw new Error("pendingSelection.options must be an array");
    }
    pending.options.forEach((id, idx) => ensureCardId(id, `pendingSelection.options[${idx}]`));
    return;
  }
  throw new Error("pendingSelection has an unknown type");
}

function validateAwaitingDeckFlipSnapshot(flip) {
  if (!flip || typeof flip !== "object") {
    throw new Error("awaitingDeckFlip must be an object");
  }
  asPlayerIndex(flip.playerIndex, "awaitingDeckFlip.playerIndex");
  asInt(flip.moveNumber, "awaitingDeckFlip.moveNumber");
  ensureCardId(flip.drawnCardId, "awaitingDeckFlip.drawnCardId");
}

function validateAwaitingDecisionSnapshot(decision) {
  if (!decision || typeof decision !== "object") {
    throw new Error("awaitingDecision must be an object");
  }
  if (decision.kind !== "stopOrKoi") {
    throw new Error("awaitingDecision.kind must be stopOrKoi");
  }
  asPlayerIndex(decision.playerIndex, "awaitingDecision.playerIndex");
  asInt(decision.moveNumber, "awaitingDecision.moveNumber");
  asInt(decision.points, "awaitingDecision.points");
  asInt(decision.passMultiplier, "awaitingDecision.passMultiplier");
  asInt(decision.koiMultiplier, "awaitingDecision.koiMultiplier");
}

function applySnapshot(snapshot) {
  clearAITask();
  clearDrawRevealTask();
  resetDrawPreviewFx();

  state.playMode = normalizePlayMode(snapshot.playMode);
  state.friendFlow = normalizeFriendFlow(snapshot.friendFlow);
  state.aiProfile = AI_PROFILES[snapshot.aiProfile] ? snapshot.aiProfile : DEFAULT_AI_PROFILE;
  state.gameNumber = asInt(snapshot.gameNumber, "gameNumber");
  state.maxGames = asInt(snapshot.maxGames, "maxGames");
  state.dealer = asPlayerIndex(snapshot.dealer, "dealer");
  state.currentPlayer = asPlayerIndex(snapshot.currentPlayer, "currentPlayer");
  const viewerPlayer = asNullablePlayerIndex(snapshot.viewerPlayerIndex, "viewerPlayerIndex");
  state.viewerPlayerIndex = viewerPlayer === null ? (state.playMode === "friend" ? state.currentPlayer : 0) : viewerPlayer;
  state.interstitial = normalizeInterstitial(snapshot.interstitial);
  state.turnCheckpointReady = Boolean(snapshot.turnCheckpointReady);
  state.lastExportMeta = normalizeLastExportMeta(snapshot.lastExportMeta);
  state.tableMultiplier = asInt(snapshot.tableMultiplier, "tableMultiplier");
  state.lastKoiCaller = asNullablePlayerIndex(snapshot.lastKoiCaller, "lastKoiCaller");
  state.firstYakuPlayer = asNullablePlayerIndex(snapshot.firstYakuPlayer, "firstYakuPlayer");
  state.roundSpecialTwoXPlayer = asNullablePlayerIndex(
    snapshot.roundSpecialTwoXPlayer,
    "roundSpecialTwoXPlayer"
  );
  state.nextRoundSpecialTwoXPlayer = asNullablePlayerIndex(
    snapshot.nextRoundSpecialTwoXPlayer,
    "nextRoundSpecialTwoXPlayer"
  );
  state.roundLeaderAtStart = asNullablePlayerIndex(snapshot.roundLeaderAtStart, "roundLeaderAtStart");
  state.previousRoundWinner = asNullablePlayerIndex(snapshot.previousRoundWinner, "previousRoundWinner");
  state.previousRoundMultiplier =
    snapshot.previousRoundMultiplier === null || snapshot.previousRoundMultiplier === undefined
      ? null
      : asInt(snapshot.previousRoundMultiplier, "previousRoundMultiplier");
  state.roundOver = Boolean(snapshot.roundOver);
  state.matchOver = Boolean(snapshot.matchOver);
  state.message = String(snapshot.message || "");
  state.drawPreview = {
    cardId: snapshot.drawPreview?.cardId || null,
    text: String(snapshot.drawPreview?.text || "Waiting for draw."),
  };

  state.players = [createPlayer("You", true), createPlayer("CPU", false)];
  for (let i = 0; i < 2; i += 1) {
    const source = snapshot.players[i];
    const target = state.players[i];
    if (typeof source.name === "string" && source.name.trim()) {
      target.name = source.name;
    }
    if (typeof source.roleLabel === "string" && source.roleLabel.trim()) {
      target.roleLabel = source.roleLabel;
    } else {
      target.roleLabel = target.name;
    }
    if (typeof source.isHuman === "boolean") {
      target.isHuman = source.isHuman;
    }
    target.score = Math.max(0, asInt(source.score, `players[${i}].score`));
    target.hand = sortByMonth(cardIdsToCards(source.hand, `players[${i}].hand`));
    target.captured = cardIdsToCards(source.captured, `players[${i}].captured`);
    target.yakuSeen = new Set(Array.isArray(source.yakuSeen) ? source.yakuSeen.map(String) : []);
    target.yaku = computeYaku(target.captured, state.gameNumber);
    if (!target.yakuSeen.size) {
      target.yakuSeen = new Set(target.yaku.triggerKeys);
    }
  }

  state.field = cardIdsToCards(snapshot.field, "field");
  state.drawPile = cardIdsToCards(snapshot.drawPile, "drawPile");
  state.moveCounts = [
    Math.max(0, asInt(snapshot.moveCounts[0], "moveCounts[0]")),
    Math.max(0, asInt(snapshot.moveCounts[1], "moveCounts[1]")),
  ];
  state.actionLog = Array.isArray(snapshot.actionLog)
    ? snapshot.actionLog.map((line) => String(line)).slice(-ACTION_LOG_LIMIT)
    : [];
  state.roundHistory = snapshot.roundHistory.map((entry, idx) => normalizeRoundHistoryEntry(entry, idx, state.maxGames));

  state.pendingSelection = hydratePendingSelection(snapshot.pendingSelection);
  state.awaitingDeckFlip = hydrateAwaitingDeckFlip(snapshot.awaitingDeckFlip);
  state.awaitingDecision = hydrateAwaitingDecision(snapshot.awaitingDecision);
  state.aiPreview = hydrateAiPreview(snapshot.aiPreview);
  state.cpuPhase1PreviewCardId = snapshot.cpuPhase1PreviewCardId || null;

  if (state.playMode === "friend" && state.friendFlow === "code" && state.interstitial.open) {
    const nextPlayerIndex =
      state.interstitial.nextPlayerIndex === null || state.interstitial.nextPlayerIndex === undefined
        ? state.currentPlayer
        : state.interstitial.nextPlayerIndex;
    state.viewerPlayerIndex = nextPlayerIndex;
    setFriendInterstitialOpen(false);
  }

  validateHydratedStateCardOwnership();
  state.autoFocusTargetKey = null;
  renderAll();
  resumeLoadedStateFlow();
}

function hydratePendingSelection(pending) {
  if (!pending) return null;
  if (pending.type === "handMatch" || pending.type === "handPlace") {
    return {
      type: pending.type,
      playerIndex: asPlayerIndex(pending.playerIndex, "pendingSelection.playerIndex"),
      cardId: String(pending.cardId),
      options: pending.options.map(String),
    };
  }
  if (pending.type === "drawMatch") {
    return {
      type: "drawMatch",
      playerIndex: asPlayerIndex(pending.playerIndex, "pendingSelection.playerIndex"),
      drawnCard: cardByIdOrThrow(pending.drawnCardId, "pendingSelection.drawnCardId"),
      moveNumber: asInt(pending.moveNumber, "pendingSelection.moveNumber"),
      options: pending.options.map(String),
    };
  }
  return null;
}

function hydrateAwaitingDeckFlip(flip) {
  if (!flip) return null;
  return {
    playerIndex: asPlayerIndex(flip.playerIndex, "awaitingDeckFlip.playerIndex"),
    moveNumber: asInt(flip.moveNumber, "awaitingDeckFlip.moveNumber"),
    drawnCard: cardByIdOrThrow(flip.drawnCardId, "awaitingDeckFlip.drawnCardId"),
    revealed: Boolean(flip.revealed),
  };
}

function hydrateAwaitingDecision(decision) {
  if (!decision) return null;
  return {
    ...decision,
    kind: "stopOrKoi",
    playerIndex: asPlayerIndex(decision.playerIndex, "awaitingDecision.playerIndex"),
    moveNumber: asInt(decision.moveNumber, "awaitingDecision.moveNumber"),
    points: asInt(decision.points, "awaitingDecision.points"),
    passMultiplier: asInt(decision.passMultiplier, "awaitingDecision.passMultiplier"),
    koiMultiplier: asInt(decision.koiMultiplier, "awaitingDecision.koiMultiplier"),
    canPass: Boolean(decision.canPass),
    forcedByFinalRound: Boolean(decision.forcedByFinalRound),
    resumeDrawPhase: Boolean(decision.resumeDrawPhase),
    yakuText: String(decision.yakuText || ""),
    specialTwoXActive: Boolean(decision.specialTwoXActive),
    prompt: String(decision.prompt || ""),
  };
}

function hydrateAiPreview(aiPreview) {
  if (!aiPreview) return null;
  return {
    options: Array.isArray(aiPreview.options) ? aiPreview.options.map(String) : [],
    prompt: String(aiPreview.prompt || ""),
  };
}

function normalizePlayMode(value) {
  return value === "friend" ? "friend" : "cpu";
}

function normalizeFriendFlow(value) {
  return value === "code" ? "code" : "hotseat";
}

function normalizeInterstitial(interstitial) {
  const open = Boolean(interstitial?.open);
  const nextPlayerIndex = asNullablePlayerIndex(interstitial?.nextPlayerIndex, "interstitial.nextPlayerIndex");
  return {
    open,
    nextPlayerIndex,
  };
}

function normalizeLastExportMeta(meta) {
  if (!meta || typeof meta !== "object") return null;
  return {
    turnNumber: asInt(meta.turnNumber, "lastExportMeta.turnNumber"),
    playerIndex: asPlayerIndex(meta.playerIndex, "lastExportMeta.playerIndex"),
  };
}

function validateRoundHistoryEntry(entry, idx, maxGames) {
  if (!entry || typeof entry !== "object") {
    throw new Error(`roundHistory[${idx}] must be an object`);
  }
  const month = asInt(entry.month, `roundHistory[${idx}].month`);
  if (month < 1 || month > maxGames) {
    throw new Error(`roundHistory[${idx}].month out of range`);
  }
  const you = asInt(entry.you, `roundHistory[${idx}].you`);
  const cpu = asInt(entry.cpu, `roundHistory[${idx}].cpu`);
  if (you < 0 || cpu < 0) {
    throw new Error(`roundHistory[${idx}] scores must be non-negative`);
  }
  const multiplier = asInt(entry.multiplier, `roundHistory[${idx}].multiplier`);
  if (multiplier < 1 || multiplier > 4) {
    throw new Error(`roundHistory[${idx}].multiplier out of range`);
  }
}

function normalizeRoundHistoryEntry(entry, idx, maxGames) {
  validateRoundHistoryEntry(entry, idx, maxGames);
  return {
    month: entry.month,
    you: entry.you,
    cpu: entry.cpu,
    multiplier: entry.multiplier,
    noScore: Boolean(entry.noScore),
  };
}

function validateHydratedStateCardOwnership() {
  const ownership = new Map();
  const claim = (id, bucket) => {
    if (ownership.has(id)) {
      throw new Error(`Card ${id} appears in both ${ownership.get(id)} and ${bucket}`);
    }
    ownership.set(id, bucket);
  };

  state.field.forEach((card) => claim(card.id, "field"));
  state.drawPile.forEach((card) => claim(card.id, "drawPile"));
  state.players.forEach((player, playerIndex) => {
    player.hand.forEach((card) => claim(card.id, `players[${playerIndex}].hand`));
    player.captured.forEach((card) => claim(card.id, `players[${playerIndex}].captured`));
  });
  if (state.pendingSelection?.type === "drawMatch") {
    claim(state.pendingSelection.drawnCard.id, "pendingSelection.drawnCard");
  }
  if (state.awaitingDeckFlip) {
    claim(state.awaitingDeckFlip.drawnCard.id, "awaitingDeckFlip.drawnCard");
  }

  if (ownership.size > CARD_DECK.length) {
    throw new Error("Snapshot references too many cards");
  }

  if (state.pendingSelection) {
    const optionSet = new Set(state.field.map((card) => card.id));
    for (const optionId of state.pendingSelection.options) {
      if (!optionSet.has(optionId)) {
        throw new Error("pendingSelection references a field card that is not on the field");
      }
    }
    if (state.pendingSelection.type === "handMatch" || state.pendingSelection.type === "handPlace") {
      const handSet = new Set(state.players[state.pendingSelection.playerIndex].hand.map((card) => card.id));
      if (!handSet.has(state.pendingSelection.cardId)) {
        throw new Error("pendingSelection hand card is missing");
      }
    }
  }
}

function resumeLoadedStateFlow() {
  if (state.roundOver || state.matchOver) return;
  if (state.awaitingDecision) {
    if (state.awaitingDecision.playerIndex === 1) {
      scheduleAIStep(AI_STEP_DECISION_MS, resolveCpuPendingDecision);
    }
    return;
  }

  if (state.awaitingDeckFlip) {
    if (state.awaitingDeckFlip.playerIndex === 1) {
      resumeCpuDeckFlipFlow(state.awaitingDeckFlip);
    }
    return;
  }

  if (state.currentPlayer === 1) {
    queueAITurn(420);
  }
}

function resolveCpuPendingDecision() {
  if (!state.awaitingDecision || state.awaitingDecision.kind !== "stopOrKoi") return;
  if (state.awaitingDecision.playerIndex !== 1) return;
  const decision = state.awaitingDecision;
  if (state.roundOver || state.currentPlayer !== decision.playerIndex) return;
  const action = chooseAIDecision(decision);
  if (action === "pass" && decision.canPass) {
    logPlayerMove(
      decision.playerIndex,
      decision.moveNumber,
      `Pass at ${decision.passMultiplier}x with ${decision.yakuText}.`
    );
    endRoundWithWinner(decision.playerIndex, decision.points, decision.passMultiplier, "passed");
    return;
  }
  applyKoiAndContinue(decision);
}

function resumeCpuDeckFlipFlow(flip) {
  if (!flip || flip.playerIndex !== 1) return;
  const drawn = flip.drawnCard;
  if (!drawn) return;

  if (flip.revealed) {
    scheduleAIStep(CPU_DRAW_REVEAL_LINGER_MS, () => {
      if (!state.awaitingDeckFlip) return;
      if (state.awaitingDeckFlip.playerIndex !== 1 || state.awaitingDeckFlip.drawnCard.id !== drawn.id) return;
      if (state.roundOver || state.currentPlayer !== 1 || state.awaitingDecision || state.pendingSelection) return;
      const moveNumber = state.awaitingDeckFlip.moveNumber;
      state.awaitingDeckFlip = null;
      resolveRevealedDrawForCpu(1, moveNumber, drawn);
    });
    return;
  }

  scheduleAIStep(CPU_DECK_FLIP_DELAY_MS, () => {
    if (!state.awaitingDeckFlip) return;
    if (state.awaitingDeckFlip.playerIndex !== 1 || state.awaitingDeckFlip.drawnCard.id !== drawn.id) return;
    if (state.roundOver || state.currentPlayer !== 1) return;
    state.awaitingDeckFlip.revealed = true;
    state.drawPreview = {
      cardId: drawn.id,
      text: `Pulled ${drawn.name}.`,
    };
    renderAll();
    resumeCpuDeckFlipFlow(state.awaitingDeckFlip);
  });
}

function asInt(value, label) {
  if (!Number.isInteger(value)) {
    throw new Error(`${label} must be an integer`);
  }
  return value;
}

function asPlayerIndex(value, label) {
  const parsed = asInt(value, label);
  if (parsed !== 0 && parsed !== 1) {
    throw new Error(`${label} must be 0 or 1`);
  }
  return parsed;
}

function ensureNullablePlayerIndex(value, label) {
  asNullablePlayerIndex(value, label);
}

function asNullablePlayerIndex(value, label) {
  if (value === null || value === undefined) return null;
  return asPlayerIndex(value, label);
}

function ensureCardId(id, label) {
  if (typeof id !== "string" || !CARD_BY_ID.has(id)) {
    throw new Error(`${label} contains unknown card id`);
  }
}

function cardByIdOrThrow(id, label) {
  ensureCardId(id, label);
  return CARD_BY_ID.get(id);
}

function cardIdsToCards(ids, label) {
  if (!Array.isArray(ids)) {
    throw new Error(`${label} must be an array`);
  }
  return ids.map((id, index) => cardByIdOrThrow(id, `${label}[${index}]`));
}

function encodeBase64UrlUtf8(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64UrlUtf8(value) {
  const normalized = String(value).replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(normalized + padding);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function computeCodeChecksum(payload) {
  let hash = 2166136261;
  for (let i = 0; i < payload.length; i += 1) {
    hash ^= payload.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36).toUpperCase();
}

function nextMoveNumber(playerIndex) {
  state.moveCounts[playerIndex] += 1;
  return state.moveCounts[playerIndex];
}

function addSystemLog(text) {
  state.message = text;
  pushActionLog("SYS", text);
}

function logPlayerMove(playerIndex, moveNumber, text) {
  state.message = text;
  pushActionLog(`P${playerIndex + 1} move ${moveNumber}`, text);
}

function pushActionLog(prefix, text) {
  const line = `${prefix}: ${text}`;
  state.actionLog.push(line);
  if (state.actionLog.length > ACTION_LOG_LIMIT) {
    state.actionLog.splice(0, state.actionLog.length - ACTION_LOG_LIMIT);
  }
}

function startNewMatch(options = {}) {
  hideStartMenu();
  setCodePanelOpen(false);
  setLogPanelOpen(false);
  setGameSummaryPanelOpen(false);
  setCodeStatus("", false, "panel");
  const playModeSource = options.playMode || state.playMode || "cpu";
  const friendFlowSource = options.friendFlow || state.friendFlow || "hotseat";
  const playMode = playModeSource === "friend" ? "friend" : "cpu";
  const friendFlow = friendFlowSource === "code" ? "code" : "hotseat";
  clearAITask();
  state.playMode = playMode;
  state.friendFlow = friendFlow;
  if (playMode === "friend") {
    state.aiProfile = DEFAULT_AI_PROFILE;
    state.players = [
      createPlayer("Player 1", true, "Player 1"),
      createPlayer("Player 2", true, "Player 2"),
    ];
  } else {
    state.aiProfile = pickRandomAIProfile();
    state.players = [createPlayer("You", true, "Player 1"), createPlayer("CPU", false, "CPU")];
  }
  state.interstitial = {
    open: false,
    nextPlayerIndex: null,
  };
  state.turnCheckpointReady = false;
  state.lastExportMeta = null;
  state.gameNumber = 1;
  state.dealer = Math.random() < 0.5 ? 0 : 1;
  state.currentPlayer = state.dealer;
  state.viewerPlayerIndex = playMode === "friend" ? state.currentPlayer : 0;
  state.roundSpecialTwoXPlayer = null;
  state.nextRoundSpecialTwoXPlayer = null;
  state.roundLeaderAtStart = null;
  state.previousRoundWinner = null;
  state.previousRoundMultiplier = null;
  state.roundHistory = [];
  state.actionLog = [];
  state.moveCounts = [0, 0];
  state.matchOver = false;
  addSystemLog("New match started.");
  startRound();
  refreshExportCode();
}

function pickRandomAIProfile() {
  const idx = Math.floor(Math.random() * AI_PROFILE_KEYS.length);
  return AI_PROFILE_KEYS[idx];
}

function startRound() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  clearAITask();
  clearDrawRevealTask();
  resetDrawPreviewFx();
  state.actionLog = [];
  state.moveCounts = [0, 0];
  state.roundOver = false;
  state.pendingSelection = null;
  state.awaitingDeckFlip = null;
  state.aiPreview = null;
  state.cpuPhase1PreviewCardId = null;
  state.awaitingDecision = null;
  state.firstYakuPlayer = null;
  state.lastKoiCaller = null;
  state.tableMultiplier = 1;
  state.roundSpecialTwoXPlayer = state.nextRoundSpecialTwoXPlayer;
  state.nextRoundSpecialTwoXPlayer = null;
  state.drawPreview = {
    cardId: null,
    text: "Waiting for draw.",
  };
  state.autoFocusTargetKey = null;
  state.autoFocusTargetKey = null;
  state.interstitial = {
    open: false,
    nextPlayerIndex: null,
  };
  if (isFriendMode()) {
    state.viewerPlayerIndex = state.currentPlayer;
  }

  const p0 = state.players[0].score;
  const p1 = state.players[1].score;
  state.roundLeaderAtStart = null;
  if (state.gameNumber === state.maxGames) {
    if (p0 > p1) state.roundLeaderAtStart = 0;
    if (p1 > p0) state.roundLeaderAtStart = 1;
  }

  const hands = dealRound();
  state.players[0].hand = sortByMonth(hands.player);
  state.players[1].hand = sortByMonth(hands.cpu);
  state.players[0].captured = [];
  state.players[1].captured = [];
  state.players[0].yaku = { points: 0, names: [], triggerKeys: [] };
  state.players[1].yaku = { points: 0, names: [], triggerKeys: [] };
  state.players[0].yakuSeen = new Set();
  state.players[1].yakuSeen = new Set();
  state.field = hands.field;
  state.drawPile = hands.deck;
  state.currentPlayer = state.dealer;

  const lucky0 = detectLuckyHand(state.players[0].hand);
  const lucky1 = detectLuckyHand(state.players[1].hand);

  if (lucky0 && lucky1) {
    state.message = "Both players opened lucky hands. Draw game.";
    endRoundDraw();
    return;
  }

  if (lucky0) {
    state.message = `Lucky hand: ${state.players[0].name} (${lucky0}).`;
    endRoundWithWinner(0, 6, 1, "lucky hand");
    return;
  }

  if (lucky1) {
    state.message = `Lucky hand: ${state.players[1].name} (${lucky1}).`;
    endRoundWithWinner(1, 6, 1, "lucky hand");
    return;
  }

  state.message = `${state.players[state.currentPlayer].name} starts. Table 1x.`;
  if (state.roundSpecialTwoXPlayer !== null) {
    state.message += ` ${state.players[state.roundSpecialTwoXPlayer].name} has the first-yaku 2x privilege.`;
  }
  addSystemLog(state.message);

  renderAll();

  if (!state.players[state.currentPlayer].isHuman) {
    queueAITurn(420);
  }
}

function dealRound() {
  while (true) {
    const deck = shuffle([...CARD_DECK]);
    const player = deck.splice(0, 8);
    const cpu = deck.splice(0, 8);
    const field = deck.splice(0, 8);
    if (!hasMonthSetOfFour(field)) {
      return { player, cpu, field, deck };
    }
  }
}

function hasMonthSetOfFour(cards) {
  const counts = {};
  for (const card of cards) {
    counts[card.month] = (counts[card.month] || 0) + 1;
  }
  return Object.values(counts).some((count) => count >= 4);
}

function isFriendMode() {
  return state.playMode === "friend";
}

function isFriendCodeMode() {
  return isFriendMode() && state.friendFlow === "code";
}

function isFriendTurnExportWindow() {
  return isFriendCodeMode() && Boolean(state.interstitial?.open);
}

function getViewerPlayerIndex() {
  const parsed = asNullablePlayerIndex(state.viewerPlayerIndex, "state.viewerPlayerIndex");
  if (parsed === null) return 0;
  return parsed;
}

function getDisplayBottomPlayerIndex() {
  return isFriendMode() ? getViewerPlayerIndex() : 0;
}

function getDisplayTopPlayerIndex() {
  return getDisplayBottomPlayerIndex() === 0 ? 1 : 0;
}

function getSummaryColumnLabel(playerIndex) {
  const player = state.players[playerIndex];
  return player?.name || `P${playerIndex + 1}`;
}

function getLatestRoundOutcome() {
  if (!state.roundHistory.length) return null;
  const last = state.roundHistory[state.roundHistory.length - 1];
  if (!last || last.noScore) {
    return {
      noScore: true,
      winnerIndex: null,
      points: 0,
    };
  }
  const p0Points = Math.max(0, Number(last.you) || 0);
  const p1Points = Math.max(0, Number(last.cpu) || 0);
  if (p0Points === p1Points) {
    return {
      noScore: false,
      winnerIndex: null,
      points: p0Points,
    };
  }
  if (p0Points > p1Points) {
    return {
      noScore: false,
      winnerIndex: 0,
      points: p0Points,
    };
  }
  return {
    noScore: false,
    winnerIndex: 1,
    points: p1Points,
  };
}

function canRevealBottomHand() {
  if (!isFriendMode()) return true;
  if (state.interstitial?.open) return false;
  return getViewerPlayerIndex() === state.currentPlayer;
}

function getInteractiveHumanPlayerIndex() {
  if (state.roundOver || state.matchOver) return null;
  if (state.interstitial?.open) return null;
  const current = state.players[state.currentPlayer];
  if (!current || !current.isHuman) return null;
  if (!isFriendMode()) {
    return state.currentPlayer === 0 ? 0 : null;
  }
  const viewerIndex = getViewerPlayerIndex();
  if (viewerIndex !== state.currentPlayer) return null;
  return viewerIndex;
}

function detectLuckyHand(hand) {
  const counts = {};
  for (const card of hand) {
    counts[card.month] = (counts[card.month] || 0) + 1;
  }
  if (Object.values(counts).some((count) => count === 4)) {
    return "Four of a Kind";
  }
  const values = Object.values(counts);
  if (values.length === 4 && values.every((count) => count === 2)) {
    return "Paired Months";
  }
  return null;
}

function onPlayerHandClick(event) {
  if (!state.ready || state.roundOver || state.awaitingDecision || state.awaitingDeckFlip) return;
  const interactivePlayerIndex = getInteractiveHumanPlayerIndex();
  if (interactivePlayerIndex === null) return;

  const pending = state.pendingSelection;
  const handPreviewPending =
    Boolean(pending) &&
    pending.playerIndex === interactivePlayerIndex &&
    (pending.type === "handMatch" || pending.type === "handPlace");

  const cardNode = event.target.closest("[data-card-id]");
  if (!cardNode) {
    if (handPreviewPending) {
      clearPlayerHandPreview(interactivePlayerIndex);
    }
    return;
  }

  const cardId = cardNode.dataset.cardId;
  const player = state.players[interactivePlayerIndex];
  const card = player.hand.find((entry) => entry.id === cardId);
  if (!card) return;

  if (pending) {
    if (pending.type === "drawMatch") return;
    if (handPreviewPending) {
      if (pending.cardId === cardId) {
        if (pending.type === "handPlace" || pending.type === "handMatch") {
          clearPlayerHandPreview(interactivePlayerIndex);
        }
        return;
      }
      previewPlayerHandCard(cardId, interactivePlayerIndex);
      return;
    }
    return;
  }

  previewPlayerHandCard(cardId, interactivePlayerIndex);
}

function previewPlayerHandCard(cardId, playerIndex = getInteractiveHumanPlayerIndex()) {
  if (playerIndex === null || playerIndex === undefined) return;
  const player = state.players[playerIndex];
  const card = player.hand.find((entry) => entry.id === cardId);
  if (!card) return;

  const matches = getFieldMatches(card.month);
  if (matches.length > 0) {
    const prompt =
      matches.length === 1
        ? `Tap highlighted ${describeMonth(card.month)} field card to capture, or tap hand area to cancel.`
        : matches.length === 3
          ? `Tap highlighted ${describeMonth(card.month)} card to sweep all four, or tap hand area to cancel.`
          : `Choose highlighted ${describeMonth(card.month)} field card, or tap hand area to cancel.`;
    beginPendingSelection(
      {
        type: "handMatch",
        playerIndex,
        cardId,
        options: matches.map((entry) => entry.id),
      },
      prompt,
      { silent: true }
    );
    return;
  }

  beginPendingSelection(
    {
      type: "handPlace",
      playerIndex,
      cardId,
      options: [cardId],
    },
    `No match for ${card.name}. Tap preview field card to place, or tap selected hand card to cancel.`,
    { silent: true }
  );
}

function clearPlayerHandPreview(playerIndex = getDisplayBottomPlayerIndex()) {
  const pending = state.pendingSelection;
  if (!pending) return;
  if (pending.playerIndex !== playerIndex) return;
  if (pending.type !== "handMatch" && pending.type !== "handPlace") return;
  state.pendingSelection = null;
  state.message = `${state.players[state.currentPlayer].name} to play. Table ${state.tableMultiplier}x.`;
  renderAll();
}

function onFieldClick(event) {
  if (state.awaitingDeckFlip) return;
  const interactivePlayerIndex = getInteractiveHumanPlayerIndex();
  if (interactivePlayerIndex === null) return;
  const cardNode = event.target.closest("[data-card-id]");
  if (!cardNode) return;

  const selectedId = cardNode.dataset.cardId;
  const pending = state.pendingSelection;
  if (pending?.playerIndex !== interactivePlayerIndex) return;
  if (!pending || !pending.options.includes(selectedId)) return;

  if (pending.type === "handPlace") {
    if (selectedId === pending.cardId) {
      executePlayFromHand(pending.playerIndex, pending.cardId, null);
    }
  } else if (pending.type === "handMatch") {
    executePlayFromHand(pending.playerIndex, pending.cardId, selectedId);
  } else if (pending.type === "drawMatch") {
    resolveDrawMatch(pending.playerIndex, pending.drawnCard, selectedId, pending.moveNumber);
  }
}

function onDrawPreviewClick() {
  const interactivePlayerIndex = getInteractiveHumanPlayerIndex();
  if (interactivePlayerIndex === null) return;
  const flip = state.awaitingDeckFlip;
  if (!flip) return;
  if (flip.playerIndex !== interactivePlayerIndex || state.currentPlayer !== interactivePlayerIndex) return;
  if (flip.revealed || state.roundOver || state.awaitingDecision || state.pendingSelection) return;

  flip.revealed = true;
  const drawn = flip.drawnCard;
  state.drawPreview = {
    cardId: drawn.id,
    text: `Pulled ${drawn.name}.`,
  };
  renderAll();

  clearDrawRevealTask();
  state.drawRevealTimer = setTimeout(() => {
    state.drawRevealTimer = null;
    if (state.roundOver || !state.awaitingDeckFlip || state.awaitingDeckFlip.drawnCard.id !== drawn.id) return;
    const { playerIndex, moveNumber } = state.awaitingDeckFlip;
    state.awaitingDeckFlip = null;
    resolveRevealedDrawForPlayer(playerIndex, moveNumber, drawn);
  }, PLAYER_DRAW_REVEAL_LINGER_MS);
}

function beginPendingSelection(pending, logMessage, options = {}) {
  state.pendingSelection = pending;
  state.message = logMessage;
  if (!options.silent) {
    addSystemLog(state.message);
  }
  renderAll();
}

function executePlayFromHand(playerIndex, cardId, forcedFieldId) {
  state.pendingSelection = null;
  state.aiPreview = null;
  if (playerIndex === 1) {
    state.cpuPhase1PreviewCardId = null;
  }
  const moveNumber = nextMoveNumber(playerIndex);

  const player = state.players[playerIndex];
  const cardIndex = player.hand.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) return;
  const card = player.hand.splice(cardIndex, 1)[0];

  let captured = [];
  const matches = getFieldMatches(card.month);

  if (matches.length === 3) {
    captured = [card, ...takeAllMonthMatchesFromField(card.month)];
    state.message = `${player.name} captured all four ${describeMonth(card.month)} cards.`;
  } else if (forcedFieldId) {
    const fieldIndex = state.field.findIndex((entry) => entry.id === forcedFieldId);
    if (fieldIndex !== -1) {
      const fieldCard = state.field.splice(fieldIndex, 1)[0];
      captured = [card, fieldCard];
      state.message = `${player.name} captured ${fieldCard.name}.`;
    } else {
      state.field.push(card);
      state.message = `${player.name} placed ${card.name}.`;
    }
  } else if (matches.length === 1) {
    const fieldIndex = state.field.findIndex((entry) => entry.id === matches[0].id);
    const fieldCard = state.field.splice(fieldIndex, 1)[0];
    captured = [card, fieldCard];
    state.message = `${player.name} captured ${fieldCard.name}.`;
  } else {
    state.field.push(card);
    state.message = `${player.name} placed ${card.name}.`;
  }

  if (captured.length) {
    addCapturedCards(playerIndex, captured);
  }

  const stoppedAtHandYaku = checkHandPhaseYaku(playerIndex, moveNumber);
  if (stoppedAtHandYaku) {
    return;
  }

  processDrawStep(playerIndex, moveNumber);
}

function processDrawStep(playerIndex, moveNumber) {
  if (state.drawPile.length === 0) {
    state.drawPreview = { cardId: null, text: "Deck is empty." };
    finalizeTurn(playerIndex, moveNumber);
    return;
  }

  const drawn = state.drawPile.shift();
  const matches = getFieldMatches(drawn.month);

  if (state.players[playerIndex].isHuman) {
    state.awaitingDeckFlip = {
      playerIndex,
      moveNumber,
      drawnCard: drawn,
      revealed: false,
    };
    state.drawPreview = {
      cardId: null,
      text: "Tap Recent Deck Pull to reveal.",
    };
    state.message += " Draw from deck ready.";
    addSystemLog("Tap Recent Deck Pull to reveal the drawn card.");
    renderAll();
    return;
  }
  state.awaitingDeckFlip = {
    playerIndex,
    moveNumber,
    drawnCard: drawn,
    revealed: false,
  };
  state.drawPreview = {
    cardId: null,
    text: "CPU is preparing deck reveal.",
  };
  addSystemLog("CPU draws from deck.");
  renderAll();

  scheduleAIStep(CPU_DECK_FLIP_DELAY_MS, () => {
    const flip = state.awaitingDeckFlip;
    if (!flip || flip.playerIndex !== playerIndex || state.roundOver || state.currentPlayer !== playerIndex) return;
    flip.revealed = true;
    state.drawPreview = {
      cardId: drawn.id,
      text: `Pulled ${drawn.name}.`,
    };
    renderAll();

    scheduleAIStep(CPU_DRAW_REVEAL_LINGER_MS, () => {
      const active = state.awaitingDeckFlip;
      if (!active || active.playerIndex !== playerIndex || active.drawnCard.id !== drawn.id) return;
      if (state.roundOver || state.currentPlayer !== playerIndex || state.awaitingDecision || state.pendingSelection) return;
      state.awaitingDeckFlip = null;
      resolveRevealedDrawForCpu(playerIndex, moveNumber, drawn);
    });
  });
}

function resolveRevealedDrawForPlayer(playerIndex, moveNumber, drawn) {
  const matches = getFieldMatches(drawn.month);

  if (matches.length === 0) {
    state.field.push(drawn);
    state.message += ` Flip ${drawn.name}, no match.`;
    state.drawPreview = {
      cardId: drawn.id,
      text: `Pulled ${drawn.name}. No match, landed on field.`,
    };
    finalizeTurn(playerIndex, moveNumber);
    return;
  }

  const drawChoiceText =
    matches.length === 1
      ? `Pulled ${drawn.name}. Tap highlighted field card to capture.`
      : matches.length === 3
        ? `Pulled ${drawn.name}. Tap any highlighted field card to sweep all four.`
        : `Pulled ${drawn.name}. Choose a matching field card.`;
  state.drawPreview = {
    cardId: drawn.id,
    text: drawChoiceText,
  };
  const prompt =
    matches.length === 1
      ? `${state.message} Flip ${drawn.name}. Tap the highlighted field card to capture.`
      : matches.length === 3
        ? `${state.message} Flip ${drawn.name}. Tap any highlighted field card to capture all four.`
        : `${state.message} Flip ${drawn.name}. Choose the matching field card.`;
  beginPendingSelection(
    {
      type: "drawMatch",
      playerIndex,
      drawnCard: drawn,
      moveNumber,
      options: matches.map((entry) => entry.id),
    },
    prompt
  );
}

function resolveRevealedDrawForCpu(playerIndex, moveNumber, drawn) {
  const matches = getFieldMatches(drawn.month);
  if (matches.length === 0) {
    state.field.push(drawn);
    state.message += ` Flip ${drawn.name}, no match.`;
    state.drawPreview = {
      cardId: drawn.id,
      text: `Pulled ${drawn.name}. No match, landed on field.`,
    };
    scheduleCpuDrawFinalize(playerIndex, moveNumber);
    return;
  }

  previewAndResolveCpuDrawMatch(playerIndex, moveNumber, drawn, matches);
}

function resolveDrawMatch(playerIndex, drawnCard, fieldCardId, moveNumber) {
  state.pendingSelection = null;
  const matches = getFieldMatches(drawnCard.month);

  if (matches.length === 3) {
    const captured = [drawnCard, ...takeAllMonthMatchesFromField(drawnCard.month)];
    addCapturedCards(playerIndex, captured);
    state.message += ` Captured all four ${describeMonth(drawnCard.month)} cards.`;
    state.drawPreview = {
      cardId: drawnCard.id,
      text: `Pulled ${drawnCard.name}. Swept all four ${describeMonth(drawnCard.month)} cards.`,
    };
    finalizeTurn(playerIndex, moveNumber);
    return;
  }

  const fieldIndex = state.field.findIndex((entry) => entry.id === fieldCardId);
  if (fieldIndex !== -1) {
    const fieldCard = state.field.splice(fieldIndex, 1)[0];
    addCapturedCards(playerIndex, [drawnCard, fieldCard]);
    state.message += ` Capture ${fieldCard.name}.`;
    state.drawPreview = {
      cardId: drawnCard.id,
      text: `Pulled ${drawnCard.name}. Matched ${fieldCard.name}.`,
    };
  } else {
    state.field.push(drawnCard);
    state.message += ` No capture.`;
    state.drawPreview = {
      cardId: drawnCard.id,
      text: `Pulled ${drawnCard.name}. No match, landed on field.`,
    };
  }

  finalizeTurn(playerIndex, moveNumber);
}

function addCapturedCards(playerIndex, cards) {
  const player = state.players[playerIndex];
  for (const card of cards) {
    player.captured.push(card);
  }
}

function takeAllMonthMatchesFromField(month) {
  const matches = state.field.filter((card) => card.month === month);
  if (!matches.length) return [];
  const ids = new Set(matches.map((card) => card.id));
  state.field = state.field.filter((card) => !ids.has(card.id));
  return matches;
}

function scheduleCpuDrawFinalize(playerIndex, moveNumber) {
  renderAll();
  scheduleAIStep(AI_STEP_DRAW_RESOLVE_MS, () => {
    if (
      state.roundOver ||
      state.currentPlayer !== playerIndex ||
      state.awaitingDecision ||
      state.pendingSelection ||
      state.awaitingDeckFlip
    ) {
      return;
    }
    finalizeTurn(playerIndex, moveNumber);
  });
}

function previewAndResolveCpuDrawMatch(playerIndex, moveNumber, drawnCard, matches) {
  let options = [];
  let selectedId = null;
  let prompt = "";

  if (matches.length === 3) {
    options = matches.map((entry) => entry.id);
    selectedId = options[0] || null;
    prompt = `CPU prepares a ${describeMonth(drawnCard.month)} sweep from deck draw.`;
  } else if (matches.length === 2) {
    const chosen = chooseBestMatchForAI(playerIndex, drawnCard, matches);
    selectedId = chosen.id;
    options = [selectedId];
    prompt = `CPU picks ${chosen.name} for drawn ${drawnCard.name}.`;
  } else {
    selectedId = matches[0].id;
    options = [selectedId];
    prompt = `CPU picks ${matches[0].name} for drawn ${drawnCard.name}.`;
  }

  state.aiPreview = {
    options,
    prompt,
  };
  addSystemLog(prompt);
  renderAll();

  scheduleAIStep(AI_STEP_TARGET_MS, () => {
    if (state.roundOver || state.currentPlayer !== playerIndex || state.awaitingDecision || state.pendingSelection) {
      return;
    }
    state.aiPreview = null;

    if (matches.length === 3) {
      const captured = [drawnCard, ...takeAllMonthMatchesFromField(drawnCard.month)];
      addCapturedCards(playerIndex, captured);
      state.message += ` Flip ${drawnCard.name}, captured all four ${describeMonth(drawnCard.month)} cards.`;
      state.drawPreview = {
        cardId: drawnCard.id,
        text: `Pulled ${drawnCard.name}. Swept all four ${describeMonth(drawnCard.month)} cards.`,
      };
      scheduleCpuDrawFinalize(playerIndex, moveNumber);
      return;
    }

    const fieldIndex = state.field.findIndex((entry) => entry.id === selectedId);
    if (fieldIndex !== -1) {
      const fieldCard = state.field.splice(fieldIndex, 1)[0];
      addCapturedCards(playerIndex, [drawnCard, fieldCard]);
      state.message += ` Flip ${drawnCard.name}, capture ${fieldCard.name}.`;
      state.drawPreview = {
        cardId: drawnCard.id,
        text: `Pulled ${drawnCard.name}. Matched ${fieldCard.name}.`,
      };
    } else {
      state.field.push(drawnCard);
      state.message += ` Flip ${drawnCard.name}, no match.`;
      state.drawPreview = {
        cardId: drawnCard.id,
        text: `Pulled ${drawnCard.name}. No match, landed on field.`,
      };
    }
    scheduleCpuDrawFinalize(playerIndex, moveNumber);
  });
}

function evaluateYakuProgress(playerIndex) {
  const player = state.players[playerIndex];
  const yakuEval = computeYaku(player.captured, state.gameNumber);
  const previousSeenCount = player.yakuSeen.size;
  const newKeys = [];

  for (const key of yakuEval.triggerKeys) {
    if (!player.yakuSeen.has(key)) {
      newKeys.push(key);
    }
  }

  player.yaku = yakuEval;
  return { player, previousSeenCount, newKeys };
}

function checkHandPhaseYaku(playerIndex, moveNumber) {
  const { player, previousSeenCount, newKeys } = evaluateYakuProgress(playerIndex);
  if (!newKeys.length) {
    return false;
  }

  const playerFirstYakuEvent = previousSeenCount === 0;
  const roundFirstYakuEvent = state.firstYakuPlayer === null;
  for (const key of newKeys) {
    player.yakuSeen.add(key);
  }
  handleNewYakuEvent(playerIndex, playerFirstYakuEvent, roundFirstYakuEvent, moveNumber, true);
  return true;
}

function finalizeTurn(playerIndex, moveNumber) {
  logPlayerMove(playerIndex, moveNumber, state.message);

  const { player, previousSeenCount, newKeys } = evaluateYakuProgress(playerIndex);

  if (newKeys.length > 0) {
    const playerFirstYakuEvent = previousSeenCount === 0;
    const roundFirstYakuEvent = state.firstYakuPlayer === null;
    for (const key of newKeys) {
      player.yakuSeen.add(key);
    }
    handleNewYakuEvent(playerIndex, playerFirstYakuEvent, roundFirstYakuEvent, moveNumber, false);
    return;
  }

  if (state.players[0].hand.length === 0 && state.players[1].hand.length === 0) {
    resolveDeckExhaustion();
    return;
  }

  moveToNextPlayer();
}

function handleNewYakuEvent(
  playerIndex,
  playerFirstYakuEvent,
  roundFirstYakuEvent,
  moveNumber,
  resumeDrawPhase
) {
  if (roundFirstYakuEvent) {
    state.firstYakuPlayer = playerIndex;
  }

  const decision = buildDecisionContext(
    playerIndex,
    playerFirstYakuEvent,
    roundFirstYakuEvent,
    moveNumber,
    resumeDrawPhase
  );

  if (!state.players[playerIndex].isHuman) {
    state.message = `${state.players[playerIndex].name} is deciding: Pass or Koi-Koi.`;
    addSystemLog(state.message);
    renderAll();
    scheduleAIStep(AI_STEP_DECISION_MS, () => {
      if (state.roundOver || state.currentPlayer !== playerIndex) return;
      const action = chooseAIDecision(decision);
      if (action === "pass" && decision.canPass) {
        logPlayerMove(
          playerIndex,
          decision.moveNumber,
          `Pass at ${decision.passMultiplier}x with ${decision.yakuText}.`
        );
        endRoundWithWinner(playerIndex, decision.points, decision.passMultiplier, "passed");
        return;
      }
      applyKoiAndContinue(decision);
    });
    return;
  }

  state.awaitingDecision = {
    ...decision,
    kind: "stopOrKoi",
    prompt: buildDecisionPrompt(decision),
  };
  renderAll();
}

function buildDecisionContext(
  playerIndex,
  playerFirstYakuEvent,
  roundFirstYakuEvent,
  moveNumber,
  resumeDrawPhase
) {
  const player = state.players[playerIndex];
  const points = player.yaku.points;
  const yakuText = player.yaku.names.join(", ") || `${points} points`;

  const specialTwoXActive =
    state.roundSpecialTwoXPlayer === playerIndex && playerFirstYakuEvent && state.tableMultiplier === 1;

  const passMultiplier = specialTwoXActive ? 2 : state.tableMultiplier;
  const koiMultiplier = specialTwoXActive ? 3 : Math.min(4, state.tableMultiplier + 1);

  let canPass = true;
  const forcedByFinalRound =
    state.gameNumber === state.maxGames &&
    state.roundLeaderAtStart === playerIndex &&
    roundFirstYakuEvent &&
    passMultiplier === 1;

  if (forcedByFinalRound) {
    canPass = false;
  }

  return {
    playerIndex,
    moveNumber,
    resumeDrawPhase,
    points,
    yakuText,
    specialTwoXActive,
    passMultiplier,
    koiMultiplier,
    canPass,
    forcedByFinalRound,
  };
}

function buildDecisionPrompt(decision) {
  const owner = state.players[decision.playerIndex].name;
  const base = `${owner} formed ${decision.yakuText}.`;
  const phaseText = decision.resumeDrawPhase ? " Decide before deck draw." : "";
  if (!decision.canPass) {
    return `${base} ${owner} is forced to Koi-Koi.${phaseText}`;
  }
  if (decision.specialTwoXActive) {
    return `${base} Pass for 2x, or Koi-Koi to jump table to 3x.${phaseText}`;
  }
  return `${base} Pass at ${decision.passMultiplier}x or Koi-Koi to ${decision.koiMultiplier}x.${phaseText}`;
}

function getAIProfile() {
  return AI_PROFILES[state.aiProfile] || AI_PROFILES[DEFAULT_AI_PROFILE];
}

function estimateCardsRemaining() {
  return state.drawPile.length + state.players[0].hand.length + state.players[1].hand.length;
}

function buildCapturedStats(captured, roundMonth) {
  const ids = new Set(captured.map((card) => card.id));
  const lights = captured.filter((card) => card.type === "light").length;
  const seeds = captured.filter((card) => card.type === "seed").length;
  const scrolls = captured.filter((card) => card.type === "scroll").length;
  const basics = captured.filter((card) => card.type === "basic").length;
  const roundMonthCount = captured.filter((card) => card.month === roundMonth).length;
  return { ids, lights, seeds, scrolls, basics, roundMonthCount };
}

function estimateNearSetThreat(stats, setIds, fullValue) {
  let present = 0;
  for (const id of setIds) {
    if (stats.ids.has(id)) present += 1;
  }
  const missing = setIds.length - present;
  if (missing <= 0) return fullValue * 0.25;
  if (missing === 1) return fullValue * 0.72;
  if (missing === 2) return fullValue * 0.34;
  return 0;
}

function estimateYakuThreatScore(captured, roundMonth) {
  const stats = buildCapturedStats(captured, roundMonth);
  const actual = computeYaku(captured, roundMonth).points;
  let threat = actual * 1.05;

  if (stats.lights >= 4) threat += 7.2;
  else if (stats.lights === 3) threat += 4.1;
  else if (stats.lights === 2) threat += 1.7;

  if (stats.seeds === 4) threat += 2.4;
  if (stats.seeds >= 5) threat += 2.2 + (stats.seeds - 5) * 0.7;
  if (stats.scrolls === 4) threat += 1.5;
  if (stats.scrolls >= 5) threat += 1.6 + (stats.scrolls - 5) * 0.55;
  if (stats.basics === 9) threat += 1.2;
  if (stats.basics >= 10) threat += 1.4 + (stats.basics - 10) * 0.45;
  if (stats.roundMonthCount === 3) threat += 3.4;

  threat += estimateNearSetThreat(stats, ["3a", "9a"], 5);
  threat += estimateNearSetThreat(stats, ["8a", "9a"], 5);
  threat += estimateNearSetThreat(stats, ["6a", "7a", "10a"], 5);
  threat += estimateNearSetThreat(stats, ["1b", "2b", "3b"], 5);
  threat += estimateNearSetThreat(stats, ["6b", "9b", "10b"], 5);

  return threat;
}

function estimateCardThreatForPlayer(card, captured, roundMonth) {
  const stats = buildCapturedStats(captured, roundMonth);
  let threat = typeValue(card.type) * 0.55;

  if (card.type === "light") threat += 2.1 + stats.lights * 0.35;
  if (card.type === "seed") {
    if (stats.seeds >= 4) threat += 2.2;
    else threat += stats.seeds * 0.3;
  }
  if (card.type === "scroll") {
    if (stats.scrolls >= 4) threat += 1.5;
    else threat += stats.scrolls * 0.18;
  }
  if (card.type === "basic" && stats.basics >= 9) {
    threat += 1.15;
  }

  if (card.month === roundMonth) {
    if (stats.roundMonthCount === 3) threat += 3.1;
    else if (stats.roundMonthCount === 2) threat += 1.4;
  }

  const ifHas = (id) => stats.ids.has(id);
  if ((card.id === "3a" && ifHas("9a")) || (card.id === "9a" && ifHas("3a"))) threat += 2.25;
  if ((card.id === "8a" && ifHas("9a")) || (card.id === "9a" && ifHas("8a"))) threat += 2.0;

  if (["6a", "7a", "10a"].includes(card.id)) {
    let present = 0;
    if (ifHas("6a")) present += 1;
    if (ifHas("7a")) present += 1;
    if (ifHas("10a")) present += 1;
    if (present >= 2) threat += 2.1;
    else if (present === 1) threat += 0.9;
  }

  if (["1b", "2b", "3b"].includes(card.id)) {
    let red = 0;
    if (ifHas("1b")) red += 1;
    if (ifHas("2b")) red += 1;
    if (ifHas("3b")) red += 1;
    if (red >= 2) threat += 1.9;
    else if (red === 1) threat += 0.55;
  }

  if (["6b", "9b", "10b"].includes(card.id)) {
    let blue = 0;
    if (ifHas("6b")) blue += 1;
    if (ifHas("9b")) blue += 1;
    if (ifHas("10b")) blue += 1;
    if (blue >= 2) threat += 1.9;
    else if (blue === 1) threat += 0.55;
  }

  return threat;
}

function estimatePlayerThreatIndex(playerIndex) {
  const player = state.players[playerIndex];
  const capturedThreat = estimateYakuThreatScore(player.captured, state.gameNumber);
  const fieldThreat = state.field.reduce(
    (sum, card) => sum + estimateCardThreatForPlayer(card, player.captured, state.gameNumber),
    0
  );
  return capturedThreat + fieldThreat * 0.22 + player.hand.length * 0.08;
}

function estimateHandOpportunity(playerIndex) {
  const player = state.players[playerIndex];
  let opportunity = 0;
  for (const card of player.hand) {
    const matches = getFieldMatches(card.month);
    if (!matches.length) continue;
    opportunity += typeValue(card.type) * 0.35 + 0.4;
    if (matches.some((entry) => entry.type === "light")) {
      opportunity += 0.75;
    }
  }
  return opportunity;
}

function chooseAIDecision(decision) {
  if (!decision.canPass) return "koi";
  const profile = getAIProfile();
  const weights = profile.decision;
  const playerIndex = decision.playerIndex;
  const opponentIndex = playerIndex === 0 ? 1 : 0;
  const player = state.players[playerIndex];
  const opponent = state.players[opponentIndex];
  const lead = player.score - opponent.score;
  const passScore = decision.points * decision.passMultiplier;

  if (passScore >= weights.autoPassAtPoints) {
    return "pass";
  }

  const cardsRemaining = estimateCardsRemaining();
  const progress = 1 - Math.min(cardsRemaining, 24) / 24;
  const ownThreat = estimatePlayerThreatIndex(playerIndex) + estimateHandOpportunity(playerIndex);
  const oppThreat = estimatePlayerThreatIndex(opponentIndex) + estimateHandOpportunity(opponentIndex);

  const passUtility =
    passScore +
    weights.passBase +
    Math.max(0, lead) * weights.leadLockWeight +
    (decision.passMultiplier >= 3 ? weights.highMultPassBonus : 0) +
    progress * weights.latePassWeight -
    Math.max(0, -lead) * weights.behindPassPenalty;

  let koiRisk = oppThreat * (weights.riskWeight + 0.08 * (decision.koiMultiplier - 1));
  if (decision.koiMultiplier >= 4 && oppThreat > ownThreat * weights.maxMultRiskGuard) {
    koiRisk += 2.3;
  }

  const koiUtility =
    weights.koiBase +
    decision.koiMultiplier * weights.multiplierHunger +
    ownThreat * weights.futureGainWeight +
    (decision.resumeDrawPhase ? weights.handPhaseKoiBonus : 0) +
    Math.max(0, -lead) * weights.comebackWeight -
    Math.max(0, lead) * weights.leadRiskAversion * (decision.koiMultiplier - 1) -
    koiRisk;

  const diff = koiUtility - passUtility;
  if (Math.abs(diff) <= weights.coinFlipBand) {
    return Math.random() < weights.randomKoiChance ? "koi" : "pass";
  }
  return diff > weights.koiMargin ? "koi" : "pass";
}

function applyKoiAndContinue(decision) {
  state.awaitingDecision = null;
  state.lastKoiCaller = decision.playerIndex;
  state.tableMultiplier = decision.koiMultiplier;

  const owner = state.players[decision.playerIndex].name;
  if (decision.specialTwoXActive) {
    state.message = `${owner} called Koi-Koi. Special jump to ${state.tableMultiplier}x.`;
  } else {
    state.message = `${owner} called Koi-Koi. Table is now ${state.tableMultiplier}x.`;
  }
  logPlayerMove(decision.playerIndex, decision.moveNumber, state.message);

  if (decision.resumeDrawPhase) {
    processDrawStep(decision.playerIndex, decision.moveNumber);
    return;
  }

  if (state.players[0].hand.length === 0 && state.players[1].hand.length === 0) {
    resolveDeckExhaustion();
    return;
  }

  moveToNextPlayer();
}

function moveToNextPlayer() {
  const previousPlayerIndex = state.currentPlayer;
  const previousTurnNumber = state.moveCounts[previousPlayerIndex];
  state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
  state.message = `${state.players[state.currentPlayer].name} to play. Table ${state.tableMultiplier}x.`;
  addSystemLog(state.message);
  if (isFriendMode()) {
    prepareFriendTurnHandoff(previousPlayerIndex, previousTurnNumber, state.currentPlayer);
  } else {
    state.viewerPlayerIndex = 0;
  }
  renderAll();
  if (!state.players[state.currentPlayer].isHuman) {
    queueAITurn(420);
  }
}

function resolveDeckExhaustion() {
  if (state.lastKoiCaller !== null) {
    const scorer = state.lastKoiCaller;
    const points = state.players[scorer].yaku.points;
    endRoundWithWinner(
      scorer,
      points,
      state.tableMultiplier,
      "last Koi-Koi caller at deck end"
    );
    return;
  }

  endRoundDraw();
}

function endRoundDraw() {
  clearAITask();
  clearDrawRevealTask();
  state.roundOver = true;
  state.pendingSelection = null;
  state.awaitingDeckFlip = null;
  state.awaitingDecision = null;
  state.lastKoiCaller = null;
  state.firstYakuPlayer = null;
  state.roundSpecialTwoXPlayer = null;
  state.nextRoundSpecialTwoXPlayer = null;
  state.previousRoundWinner = null;
  state.previousRoundMultiplier = null;
  state.roundHistory.push({
    month: state.gameNumber,
    you: 0,
    cpu: 0,
    multiplier: state.tableMultiplier,
    noScore: true,
  });

  // Keep starter from the most recent scored-round outcome.
  // A no-scorer round does not flip who starts the next round.
  state.currentPlayer = state.dealer;
  state.message = `${state.message} No scorer this round.`;
  addSystemLog(state.message);

  if (state.gameNumber >= state.maxGames) {
    state.matchOver = true;
    applyFinalMessage();
    addSystemLog(state.message);
  }

  renderAll();
}

function endRoundWithWinner(winnerIndex, basePoints, multiplierUsed, reason) {
  clearAITask();
  clearDrawRevealTask();
  state.roundOver = true;
  state.pendingSelection = null;
  state.awaitingDeckFlip = null;
  state.awaitingDecision = null;
  state.lastKoiCaller = null;
  state.firstYakuPlayer = null;

  const winner = state.players[winnerIndex];
  const loserIndex = winnerIndex === 0 ? 1 : 0;
  const scored = basePoints * multiplierUsed;
  winner.score += scored;
  state.roundHistory.push({
    month: state.gameNumber,
    you: winnerIndex === 0 ? scored : 0,
    cpu: winnerIndex === 1 ? scored : 0,
    multiplier: multiplierUsed,
    noScore: false,
  });

  state.previousRoundWinner = winnerIndex;
  state.previousRoundMultiplier = multiplierUsed;

  state.nextRoundSpecialTwoXPlayer = multiplierUsed === 1 ? loserIndex : null;
  if (multiplierUsed >= 3) {
    state.dealer = winnerIndex;
  } else {
    state.dealer = loserIndex;
  }
  state.currentPlayer = state.dealer;
  state.roundSpecialTwoXPlayer = null;

  const reasonText = reason ? ` (${reason})` : "";
  state.message = `${winner.name} scores ${basePoints} x ${multiplierUsed} = ${scored}${reasonText}.`;
  addSystemLog(state.message);

  if (state.gameNumber >= state.maxGames) {
    state.matchOver = true;
    applyFinalMessage();
    addSystemLog(state.message);
  }

  renderAll();
}

function applyFinalMessage() {
  const p0 = state.players[0].score;
  const p1 = state.players[1].score;
  const p0Name = state.players[0].name;
  const p1Name = state.players[1].name;
  if (p0 > p1) {
    state.message = `Match complete. ${p0Name} wins (${p0} - ${p1}).`;
  } else if (p1 > p0) {
    state.message = `Match complete. ${p1Name} wins (${p1} - ${p0}).`;
  } else {
    state.message = `Match complete. Draw (${p0} - ${p1}).`;
  }
}

function onNextGame() {
  if (state.matchOver || !state.roundOver) return;
  state.gameNumber += 1;
  startRound();
}

function queueAITurn(delayMs) {
  clearAITask();
  scheduleAIStep(delayMs, () => {
    if (state.roundOver || state.currentPlayer !== 1 || state.awaitingDecision) return;
    performAITurn();
  });
}

function performAITurn() {
  const choice = chooseAICard(1);
  if (!choice || !choice.card) return;
  state.message = "CPU is choosing a card.";
  addSystemLog(state.message);
  renderAll();

  scheduleAIStep(AI_STEP_THINK_MS, () => {
    if (state.roundOver || state.currentPlayer !== 1 || state.awaitingDecision) return;

    state.cpuPhase1PreviewCardId = choice.card.id;
    addSystemLog(`CPU selected ${choice.card.name}.`);
    renderAll();

    scheduleAIStep(AI_STEP_CPU_PHASE1_PREVIEW_MS, () => {
      if (state.roundOver || state.currentPlayer !== 1 || state.awaitingDecision) return;

      const matches = getFieldMatches(choice.card.month);
      if (matches.length > 0) {
        const targetOptions =
          matches.length === 3
            ? matches.map((entry) => entry.id)
            : matches.length === 2 && choice.targetFieldId
              ? [choice.targetFieldId]
              : [matches[0].id];
        const aiPrompt =
          matches.length === 3
            ? `CPU lines up a ${describeMonth(choice.card.month)} sweep.`
            : matches.length === 2 && choice.targetFieldId
              ? `CPU targets ${CARD_BY_ID.get(choice.targetFieldId)?.name || "a field card"}.`
              : `CPU targets ${matches[0].name}.`;
        state.aiPreview = {
          options: targetOptions,
          prompt: aiPrompt,
        };
        addSystemLog(aiPrompt);
        renderAll();
        scheduleAIStep(AI_STEP_TARGET_MS, () => {
          if (state.roundOver || state.currentPlayer !== 1 || state.awaitingDecision) return;
          state.aiPreview = null;
          executePlayFromHand(1, choice.card.id, choice.targetFieldId || null);
        });
        return;
      }

      executePlayFromHand(1, choice.card.id, null);
    });
  });
}

function scheduleAIStep(delayMs, task) {
  if (state.aiTimer) {
    clearTimeout(state.aiTimer);
  }
  state.aiTask = task;
  state.aiTimer = setTimeout(() => {
    const next = state.aiTask;
    state.aiTask = null;
    state.aiTimer = null;
    if (next) next();
  }, delayMs);
}

function clearAITask() {
  if (state.aiTimer) {
    clearTimeout(state.aiTimer);
  }
  state.aiTimer = null;
  state.aiTask = null;
  state.aiPreview = null;
  state.cpuPhase1PreviewCardId = null;
}

function clearDrawRevealTask() {
  if (state.drawRevealTimer) {
    clearTimeout(state.drawRevealTimer);
  }
  state.drawRevealTimer = null;
}

function chooseAICard(playerIndex) {
  const profile = getAIProfile();
  const player = state.players[playerIndex];
  if (!player.hand.length) return null;

  let best = null;
  for (const card of player.hand) {
    const matches = getFieldMatches(card.month);
    if (!matches.length) {
      const score = evaluateAIMoveOption(playerIndex, card, null, profile);
      if (!best || score > best.score) {
        best = { card, targetFieldId: null, score };
      }
      continue;
    }

    if (matches.length === 3) {
      const score = evaluateAIMoveOption(playerIndex, card, null, profile, matches);
      if (!best || score > best.score) {
        best = { card, targetFieldId: null, score };
      }
      continue;
    }

    for (const fieldCard of matches) {
      const score = evaluateAIMoveOption(playerIndex, card, fieldCard, profile);
      if (!best || score > best.score) {
        best = { card, targetFieldId: fieldCard.id, score };
      }
    }
  }
  return best;
}

function evaluateAIMoveOption(playerIndex, card, fieldCard, profile, fieldCardsOverride = null) {
  const player = state.players[playerIndex];
  const opponentIndex = playerIndex === 0 ? 1 : 0;
  const opponent = state.players[opponentIndex];
  const weights = profile.card;
  const roundMonth = state.gameNumber;
  const fieldCards = fieldCardsOverride || (fieldCard ? [fieldCard] : null);

  const beforeYakuPoints = computeYaku(player.captured, roundMonth).points;
  const beforePotential = estimateYakuThreatScore(player.captured, roundMonth);

  const capturedAfter = fieldCards ? [...player.captured, card, ...fieldCards] : [...player.captured];
  const afterYakuPoints = computeYaku(capturedAfter, roundMonth).points;
  const afterPotential = estimateYakuThreatScore(capturedAfter, roundMonth);

  const capturedFieldValue = fieldCards
    ? fieldCards.reduce((sum, entry) => sum + typeValue(entry.type), 0)
    : 0;
  const immediate = fieldCards
    ? typeValue(card.type) +
      capturedFieldValue * 1.1 +
      (fieldCards.length >= 3 ? 2.2 : 0)
    : -weights.expose * (0.45 + typeValue(card.type) * 0.32);
  const yakuGain = Math.max(0, afterYakuPoints - beforeYakuPoints);
  const comboGain = afterPotential - beforePotential;

  const denial = fieldCards
    ? fieldCards.reduce(
        (sum, entry) => sum + estimateCardThreatForPlayer(entry, opponent.captured, roundMonth),
        0
      )
    : -estimateCardThreatForPlayer(card, opponent.captured, roundMonth) * 0.7;
  const monthBonus = card.month === roundMonth ? 1 : 0;
  const lightBonus = card.type === "light" ? weights.lightBonus : 0;
  const pressure = estimatePlayerThreatIndex(opponentIndex) - estimatePlayerThreatIndex(playerIndex);

  const jitter = (Math.random() - 0.5) * weights.jitter;
  return (
    immediate * weights.immediate +
    yakuGain * weights.yakuGain +
    comboGain * weights.comboGain +
    denial * weights.denial +
    monthBonus * weights.month +
    lightBonus +
    Math.max(0, pressure) * 0.08 +
    jitter
  );
}

function chooseBestMatchForAI(playerIndex, sourceCard, matches) {
  const profile = getAIProfile();
  let best = null;
  for (const fieldCard of matches) {
    const score = evaluateAIMoveOption(playerIndex, sourceCard, fieldCard, profile);
    if (!best || score > best.score) {
      best = { fieldCard, score };
    }
  }
  return best ? best.fieldCard : matches[0];
}

function typeValue(type) {
  if (type === "light") return 5;
  if (type === "seed") return 4;
  if (type === "scroll") return 3;
  return 1;
}

function capturedDisplayGroupRank(card) {
  if (card.type === "light") return 0;
  if (card.type === "seed") return 1;
  if (card.type === "scroll") {
    if (card.scrollKind === "redText") return 2;
    if (card.scrollKind === "blue") return 3;
    if (card.scrollKind === "red") return 4;
    return 5;
  }
  return 6;
}

function compareCapturedDisplayOrder(a, b) {
  const groupDiff = capturedDisplayGroupRank(a) - capturedDisplayGroupRank(b);
  if (groupDiff !== 0) return groupDiff;
  const monthDiff = a.month - b.month;
  if (monthDiff !== 0) return monthDiff;
  return a.id.localeCompare(b.id);
}

function getSortedCapturedForDisplay(cards) {
  return cards.slice().sort(compareCapturedDisplayOrder);
}

function getFieldMatches(month) {
  return state.field.filter((card) => card.month === month);
}

function computeYaku(captured, roundMonth) {
  const ids = new Set(captured.map((card) => card.id));
  const lights = captured.filter((card) => card.type === "light");
  const seeds = captured.filter((card) => card.type === "seed");
  const scrolls = captured.filter((card) => card.type === "scroll");
  const basics = captured.filter((card) => card.type === "basic");

  let points = 0;
  const names = [];
  const triggerKeys = [];

  const hasRainLight = ids.has("11a");
  if (lights.length === 5) {
    points += 10;
    names.push("Five Lights");
    triggerKeys.push("light5");
  } else if (lights.length === 4) {
    if (hasRainLight) {
      points += 7;
      names.push("Four Lights (Rain)");
      triggerKeys.push("light4rain");
    } else {
      points += 8;
      names.push("Four Lights");
      triggerKeys.push("light4");
    }
  } else if (lights.length === 3 && !hasRainLight) {
    points += 5;
    names.push("Three Lights");
    triggerKeys.push("light3");
  }

  if (ids.has("3a") && ids.has("9a")) {
    points += 5;
    names.push("Blossom Viewing");
    triggerKeys.push("blossom");
  }

  if (ids.has("8a") && ids.has("9a")) {
    points += 5;
    names.push("Moon Viewing");
    triggerKeys.push("moon");
  }

  if (ids.has("6a") && ids.has("7a") && ids.has("10a")) {
    points += 5;
    names.push("Animal Trio");
    triggerKeys.push("animalTrio");
  }

  const hasRedScrollSet = ids.has("1b") && ids.has("2b") && ids.has("3b");
  if (hasRedScrollSet) {
    points += 5;
    names.push("Red Scrolls");
    triggerKeys.push("redScrollSet");
  }

  const hasBlueScrollSet = ids.has("6b") && ids.has("9b") && ids.has("10b");
  if (hasBlueScrollSet) {
    points += 5;
    names.push("Blue Scrolls");
    triggerKeys.push("blueScrollSet");
  }

  if (hasRedScrollSet && hasBlueScrollSet) {
    points += 10;
    names.push("Red & Blue Scrolls");
    triggerKeys.push("redBlueScrollSet");
  }

  if (seeds.length >= 5) {
    const seedPoints = 3 + (seeds.length - 5);
    points += seedPoints;
    names.push(`Seeds ${seedPoints}`);
    triggerKeys.push("seedsBase");
  }

  if (scrolls.length >= 5) {
    const scrollPoints = 1 + (scrolls.length - 5);
    points += scrollPoints;
    names.push(`Scrolls ${scrollPoints}`);
    triggerKeys.push("scrollsBase");
  }

  const basicCount = basics.length;
  if (basicCount >= 10) {
    const basicPoints = 1 + (basicCount - 10);
    points += basicPoints;
    names.push(`Basic ${basicPoints}`);
    triggerKeys.push("basicBase");
  }

  const roundMonthCount = captured.filter((card) => card.month === roundMonth).length;
  if (roundMonthCount === 4) {
    points += 5;
    names.push("Round Month Sweep");
    triggerKeys.push("roundMonthSweep");
  }

  return { points, names, triggerKeys };
}

function renderAll() {
  state.turnCheckpointReady = computeTurnCheckpointReady();
  renderTop();
  renderRoundSummary();
  renderActionLog();
  renderChoiceMode();
  renderHands();
  renderField();
  renderDrawPreview();
  renderCaptured();
  renderContextBar();
  renderFriendInterstitial();
  renderCodePanel();
  paintAllCards();
  if (ui.codePanel && !ui.codePanel.hidden && state.players.length) {
    if (isFriendCodeMode() && !isFriendTurnExportWindow()) {
      ui.exportCode.value = "";
    } else {
      try {
        ui.exportCode.value = encodeStateToCode();
      } catch (_err) {
        // Leave last value if encoding fails during an in-flight transient state.
      }
    }
  }
  focusActiveActionTarget();
}

function renderCodePanel() {
  if (!ui.codePanel) return;
  const friendCodeMode = isFriendCodeMode();
  const handoffOpen = isFriendTurnExportWindow();

  if (ui.codePanelHead) {
    ui.codePanelHead.textContent = friendCodeMode ? "Turn Code" : "Save / Load Code";
  }
  if (ui.exportCodeLabel) {
    ui.exportCodeLabel.textContent = friendCodeMode ? "Current turn code" : "Your current game code";
  }
  if (ui.importCodeLabel) {
    ui.importCodeLabel.textContent = friendCodeMode ? "Load turn code" : "Load from code";
  }
  if (ui.refreshCodeBtn) {
    ui.refreshCodeBtn.textContent = friendCodeMode ? "Generate Turn Code" : "Refresh Code";
    ui.refreshCodeBtn.disabled = friendCodeMode && !handoffOpen;
  }
  if (ui.copyCodeBtn) {
    ui.copyCodeBtn.textContent = friendCodeMode ? "Copy Turn Code" : "Copy Code";
    ui.copyCodeBtn.disabled = friendCodeMode && !handoffOpen;
  }
  if (ui.importCode) {
    ui.importCode.placeholder = friendCodeMode ? "Paste turn code from other player" : "Paste a code here";
  }
  if (ui.exportCode) {
    ui.exportCode.placeholder =
      friendCodeMode && !handoffOpen
        ? "Turn code appears after a full turn handoff."
        : "";
  }
}

function computeTurnCheckpointReady() {
  if (state.matchOver || state.roundOver) return false;
  if (state.pendingSelection || state.awaitingDeckFlip || state.awaitingDecision) return false;
  if (state.aiPreview || state.cpuPhase1PreviewCardId) return false;
  if (isFriendCodeMode()) {
    return Boolean(state.interstitial?.open);
  }
  if (isFriendMode() && state.friendFlow === "hotseat" && state.interstitial?.open) return false;
  return true;
}

function renderFriendInterstitial() {
  if (!ui.friendInterstitial) return;
  const open = isFriendMode() && Boolean(state.interstitial?.open);
  ui.friendInterstitial.hidden = !open;
  if (!open) return;

  const nextPlayerIndex =
    state.interstitial.nextPlayerIndex === null || state.interstitial.nextPlayerIndex === undefined
      ? state.currentPlayer
      : state.interstitial.nextPlayerIndex;
  const nextName = state.players[nextPlayerIndex]?.name || `Player ${nextPlayerIndex + 1}`;
  const previousPlayerIndex = nextPlayerIndex === 0 ? 1 : 0;
  const previousName = state.players[previousPlayerIndex]?.name || `Player ${previousPlayerIndex + 1}`;
  const isCodeFlow = state.friendFlow === "code";

  if (ui.friendInterstitialTitle) {
    ui.friendInterstitialTitle.textContent = isCodeFlow ? `Send Turn Code to ${nextName}` : `Pass to ${nextName}`;
  }
  if (ui.friendInterstitialText) {
    const moveText = state.lastExportMeta
      ? ` (${previousName} move ${state.lastExportMeta.turnNumber})`
      : "";
    ui.friendInterstitialText.textContent = isCodeFlow
      ? `${previousName}'s turn is complete${moveText}. Copy this code and send it to ${nextName}.`
      : `${previousName}'s turn is complete${moveText}. Pass the phone to ${nextName}, then continue.`;
  }
  if (ui.friendTurnCodeWrap) {
    ui.friendTurnCodeWrap.hidden = !isCodeFlow;
  }
  if (ui.friendCopyCodeBtn) {
    ui.friendCopyCodeBtn.hidden = !isCodeFlow;
  }
  if (ui.friendContinueBtn) {
    ui.friendContinueBtn.textContent = isCodeFlow ? "Continue on This Device" : `${nextName} Ready`;
  }
  if (ui.friendTurnCode) {
    if (!isCodeFlow) {
      ui.friendTurnCode.value = "";
    } else {
      try {
        ui.friendTurnCode.value = encodeStateToCode();
      } catch (_err) {
        ui.friendTurnCode.value = "";
      }
    }
  }
}

function getActiveActionFocusKey() {
  const interactivePlayerIndex = getInteractiveHumanPlayerIndex();
  const pending =
    state.pendingSelection && interactivePlayerIndex !== null && state.pendingSelection.playerIndex === interactivePlayerIndex
      ? state.pendingSelection
      : null;
  if (pending) return "field-zone";

  const awaitingFlip =
    state.awaitingDeckFlip &&
    interactivePlayerIndex !== null &&
    state.awaitingDeckFlip.playerIndex === interactivePlayerIndex
      ? state.awaitingDeckFlip
      : null;
  if (awaitingFlip) return "draw-preview";

  if (
    state.awaitingDecision &&
    state.awaitingDecision.kind === "stopOrKoi" &&
    interactivePlayerIndex !== null &&
    state.awaitingDecision.playerIndex === interactivePlayerIndex
  ) {
    return "context-zone";
  }

  if (state.roundOver || state.matchOver) {
    return "context-zone";
  }

  const canPickHandCard =
    interactivePlayerIndex !== null &&
    !state.roundOver &&
    !state.awaitingDecision &&
    !state.pendingSelection &&
    !state.awaitingDeckFlip &&
    state.players[interactivePlayerIndex].hand.length > 0;
  if (canPickHandCard) return "player-zone";

  const cpuPlaying =
    !state.players[state.currentPlayer].isHuman &&
    !state.roundOver &&
    !state.awaitingDecision;
  if (cpuPlaying) {
    if (state.awaitingDeckFlip) return "draw-preview";
    return "field-zone";
  }

  return null;
}

function focusActiveActionTarget() {
  const key = getActiveActionFocusKey();
  if (!key) {
    state.autoFocusTargetKey = null;
    return;
  }
  if (state.autoFocusTargetKey === key) return;
  state.autoFocusTargetKey = key;

  requestAnimationFrame(() => {
    let target = null;
    if (key === "field-zone") target = ui.fieldZone;
    if (key === "draw-preview") target = ui.drawPreview;
    if (key === "context-zone") target = ui.contextZone;
    if (key === "player-zone") target = ui.playerZone;
    if (!target) return;
    scrollTargetIntoViewSmart(target);
    if (typeof target.focus === "function") {
      target.focus({ preventScroll: true });
    }
  });
}

function scrollTargetIntoViewSmart(target) {
  if (!target || typeof target.getBoundingClientRect !== "function") return;
  const rect = target.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
  if (!viewportHeight) return;

  // Keep actionable targets visible with minimal movement, biased toward the bottom edge.
  const topBuffer = 10;
  const bottomBuffer = 14;
  const maxBottom = viewportHeight - bottomBuffer;
  const minTop = topBuffer;

  let deltaY = 0;
  if (rect.bottom > maxBottom) {
    deltaY = rect.bottom - maxBottom;
  } else if (rect.top < minTop) {
    deltaY = rect.top - minTop;
  } else {
    return;
  }

  window.scrollBy({
    top: deltaY,
    behavior: "smooth",
  });
}

function renderTop() {
  const topPlayerIndex = getDisplayTopPlayerIndex();
  const bottomPlayerIndex = getDisplayBottomPlayerIndex();
  const topName = state.players[topPlayerIndex]?.name || "Player";
  const bottomName = state.players[bottomPlayerIndex]?.name || "Player";
  const topHandText = isFriendMode() ? `${topName} Hand` : "CPU Hand";
  const bottomHandText = isFriendMode() ? `${bottomName} Hand` : "Your Hand";
  const topCapturesText = isFriendMode() ? `${topName} Captures` : "CPU Captures";
  const bottomCapturesText = isFriendMode() ? `${bottomName} Captures` : "Your Captures";
  if (ui.cpuHandLabel) {
    ui.cpuHandLabel.innerHTML = `${escapeHtml(topHandText)} <strong id="cpu-score-inline" class="header-score">${state.players[topPlayerIndex].score}</strong>`;
    ui.cpuScoreInline = document.getElementById("cpu-score-inline");
  }
  if (ui.playerHandLabel) {
    ui.playerHandLabel.innerHTML = `${escapeHtml(bottomHandText)} <strong id="player-score-inline" class="header-score">${state.players[bottomPlayerIndex].score}</strong>`;
    ui.playerScoreInline = document.getElementById("player-score-inline");
  }
  if (ui.cpuCapturesLabel) ui.cpuCapturesLabel.textContent = topCapturesText;
  if (ui.playerCapturesLabel) ui.playerCapturesLabel.textContent = bottomCapturesText;
  if (ui.summaryColYou) ui.summaryColYou.textContent = getSummaryColumnLabel(0);
  if (ui.summaryColCpu) ui.summaryColCpu.textContent = getSummaryColumnLabel(1);
  if (ui.cpuScoreInline) ui.cpuScoreInline.textContent = String(state.players[topPlayerIndex].score);
  if (ui.playerScoreInline) ui.playerScoreInline.textContent = String(state.players[bottomPlayerIndex].score);
  if (ui.gameSummaryToggle) ui.gameSummaryToggle.textContent = `Game ${state.gameNumber} / ${state.maxGames}`;
  if (ui.turnMeta) {
    const turnText = state.roundOver ? "round ended" : state.players[state.currentPlayer].name;
    ui.turnMeta.textContent = `Starts: ${state.players[state.dealer].name} | Turn: ${turnText}`;
  }

  ui.cpuHandCount.textContent = `${state.players[topPlayerIndex].hand.length} cards`;
  ui.deckCount.textContent = `Deck: ${state.drawPile.length}`;

  ui.cpuCapturedCount.textContent = String(state.players[topPlayerIndex].captured.length);
  ui.playerCapturedCount.textContent = String(state.players[bottomPlayerIndex].captured.length);

  ui.cpuYaku.textContent = formatYakuLine(state.players[topPlayerIndex].yaku);
  ui.playerYaku.textContent = formatYakuLine(state.players[bottomPlayerIndex].yaku);

  const callerLabel = state.lastKoiCaller === null ? "none" : state.players[state.lastKoiCaller].name;
  ui.koiState.textContent = `Table ${state.tableMultiplier}x | Last Koi-Koi: ${callerLabel}`;
  const clampedMult = Math.max(1, Math.min(4, state.tableMultiplier));
  ui.koiState.classList.remove("mult-1", "mult-2", "mult-3", "mult-4");
  ui.koiState.classList.add(`mult-${clampedMult}`);
}

function renderRoundSummary() {
  if (!ui.roundSummaryBody) return;
  const playedByMonth = new Map();
  for (const entry of state.roundHistory) {
    if (!entry || typeof entry.month !== "number") continue;
    playedByMonth.set(entry.month, entry);
  }

  const rows = [];
  for (let month = 1; month <= state.maxGames; month += 1) {
    const monthName = MONTHS[month - 1]?.name || `Round ${month}`;
    const entry = playedByMonth.get(month);
    if (!entry) {
      rows.push(
        `<tr><td>${monthName}</td><td class=\"summary-empty\">-</td><td class=\"summary-empty\">-</td><td class=\"summary-empty\">-</td></tr>`
      );
      continue;
    }
    const multLabel = `${entry.multiplier}x`;
    const multClass = entry.noScore ? "summary-noscore" : "";
    rows.push(`<tr><td>${monthName}</td><td>${entry.you}</td><td>${entry.cpu}</td><td class=\"${multClass}\">${multLabel}</td></tr>`);
  }
  ui.roundSummaryBody.innerHTML = rows.join("");
}

function renderActionLog() {
  if (!ui.actionLog) return;
  if (!state.actionLog.length) {
    ui.actionLog.innerHTML = "<li>SYS: Waiting for first action...</li>";
    if (ui.logCount) ui.logCount.textContent = "0";
    return;
  }

  ui.actionLog.innerHTML = state.actionLog
    .map((entry) => `<li>${escapeHtml(entry)}</li>`)
    .join("");
  if (ui.logCount) {
    ui.logCount.textContent = String(state.actionLog.length);
  }
  ui.actionLog.scrollTop = ui.actionLog.scrollHeight;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatYakuLine(yaku) {
  if (!yaku || yaku.points === 0) return "No set";
  return `${yaku.points} pts: ${yaku.names.join(", ")}`;
}

function getCardTypeBadgeText(type) {
  return CARD_TYPE_BADGE_TEXT[type] || "PLN";
}

function renderBadgedCardContent(card) {
  const typeBadge = getCardTypeBadgeText(card.type);
  return `<span class="card-type-badge card-type-${card.type}" aria-hidden="true">${typeBadge}</span><span class="card-month-badge" aria-hidden="true">${card.month}</span><canvas width="138" height="170" data-card-id="${card.id}"></canvas>`;
}

function renderHands() {
  const topPlayerIndex = getDisplayTopPlayerIndex();
  const bottomPlayerIndex = getDisplayBottomPlayerIndex();
  const topHand = state.players[topPlayerIndex].hand;
  const canRevealBottom = canRevealBottomHand();
  const interactivePlayerIndex = getInteractiveHumanPlayerIndex();

  const previewId = !isFriendMode() && topPlayerIndex === 1 ? state.cpuPhase1PreviewCardId : null;
  let displayTopHand = topHand;
  if (previewId) {
    const previewIdx = topHand.findIndex((card) => card.id === previewId);
    if (previewIdx > 0) {
      const previewCard = topHand[previewIdx];
      displayTopHand = [previewCard, ...topHand.slice(0, previewIdx), ...topHand.slice(previewIdx + 1)];
    }
  }
  ui.cpuHand.innerHTML = Array.from({ length: 8 }, (_, i) => {
    if (i < displayTopHand.length) {
      const card = displayTopHand[i];
      const isRevealed = previewId === card.id;
      if (isRevealed) {
        return `<div class="card badged cpu-revealed" data-card-type="${card.type}">${renderBadgedCardContent(card)}</div>`;
      }
      return `<div class="card-back"></div>`;
    }
    return `<div class="card-back empty"></div>`;
  }).join("");

  const pending = state.pendingSelection;
  const pendingForBottom =
    Boolean(pending) &&
    pending.playerIndex === bottomPlayerIndex;
  const inChoiceMode = pendingForBottom;
  const handPreviewPending =
    pendingForBottom &&
    (pending.type === "handMatch" || pending.type === "handPlace");
  const waitingDeckFlip =
    Boolean(state.awaitingDeckFlip) &&
    state.awaitingDeckFlip.playerIndex === bottomPlayerIndex &&
    !state.awaitingDeckFlip.revealed;
  const inputLocked = !canRevealBottom || waitingDeckFlip || (inChoiceMode && !handPreviewPending);
  const selectable =
    canRevealBottom &&
    interactivePlayerIndex !== null &&
    interactivePlayerIndex === bottomPlayerIndex &&
    !state.roundOver &&
    !state.awaitingDecision &&
    !waitingDeckFlip &&
    (!pending || handPreviewPending);
  if (ui.playerZone) {
    ui.playerZone.classList.toggle("turn-ready", selectable);
  }
  ui.playerHand.classList.toggle("locked", inputLocked);

  const bottomHand = state.players[bottomPlayerIndex].hand;
  if (!canRevealBottom) {
    ui.playerHand.innerHTML = Array.from({ length: 8 }, (_, i) => {
      if (i < bottomHand.length) {
        return `<div class="card-back"></div>`;
      }
      return `<div class="card-back empty"></div>`;
    }).join("");
    return;
  }

  ui.playerHand.innerHTML = bottomHand
    .map((card) => {
      const isPending =
        pendingForBottom &&
        (pending.type === "handMatch" || pending.type === "handPlace") &&
        pending.cardId === card.id;
      const classes = ["card", "badged"];
      if (selectable) classes.push("selectable");
      if (isPending) classes.push("pending", "choice-source");
      const disabled = selectable ? "" : " disabled";
      return `<button type="button" class="${classes.join(" ")}" data-card-id="${card.id}" data-card-type="${card.type}"${disabled}>${renderBadgedCardContent(card)}</button>`;
    })
    .join("");
}

function renderField() {
  const interactivePlayerIndex = getInteractiveHumanPlayerIndex();
  const pending =
    state.pendingSelection && interactivePlayerIndex !== null && state.pendingSelection.playerIndex === interactivePlayerIndex
      ? state.pendingSelection
      : null;
  const aiPreview = !pending && state.aiPreview ? state.aiPreview : null;
  const activeOptions = pending ? pending.options : aiPreview ? aiPreview.options : null;
  const inChoiceMode = Boolean(activeOptions && activeOptions.length);
  const humanSelectable = Boolean(pending);
  const previewPlacementCard =
    pending && pending.type === "handPlace"
      ? state.players[pending.playerIndex].hand.find((entry) => entry.id === pending.cardId) || CARD_BY_ID.get(pending.cardId) || null
      : null;
  const fieldEntries = state.field.map((card) => ({ card, isPreviewPlacement: false }));
  if (previewPlacementCard) {
    fieldEntries.push({ card: previewPlacementCard, isPreviewPlacement: true });
  }
  ui.field.innerHTML = fieldEntries
    .map(({ card, isPreviewPlacement }) => {
      const highlighted = !isPreviewPlacement && inChoiceMode && activeOptions.includes(card.id);
      const classes = ["card", "badged"];
      if (isPreviewPlacement) {
        classes.push("preview-landing", "choice-target", "selectable");
      } else if (highlighted) {
        if (humanSelectable) {
          classes.push("selectable");
        }
        classes.push("choice-target");
      } else if (inChoiceMode) {
        classes.push("choice-muted");
      }
      const disabled = isPreviewPlacement ? "" : humanSelectable && highlighted ? "" : " disabled";
      return `<button type="button" class="${classes.join(" ")}" data-card-id="${card.id}" data-card-type="${card.type}"${disabled}>${renderBadgedCardContent(card)}</button>`;
    })
    .join("");
}

function renderDrawPreview() {
  if (!ui.drawPreviewCanvas || !ui.drawPreviewText) return;
  if (ui.drawPreview) {
    ui.drawPreview.classList.toggle("awaiting-flip", Boolean(state.awaitingDeckFlip && !state.awaitingDeckFlip.revealed));
  }
  ui.drawPreviewText.textContent = state.drawPreview.text;
  const ctx = ui.drawPreviewCanvas.getContext("2d");
  if (!ctx) return;

  if (!state.drawPreview.cardId) {
    resetDrawPreviewFx();
    delete ui.drawPreviewCanvas.dataset.cardId;
    if (state.awaitingDeckFlip && !state.awaitingDeckFlip.revealed) {
      paintPreviewBack(ctx, ui.drawPreviewCanvas.width, ui.drawPreviewCanvas.height);
    } else {
      ctx.clearRect(0, 0, ui.drawPreviewCanvas.width, ui.drawPreviewCanvas.height);
    }
    return;
  }

  const nextCardId = state.drawPreview.cardId;
  if (drawPreviewFx.lastCardId !== nextCardId) {
    drawPreviewFx.lastCardId = nextCardId;
    if (drawPreviewFx.revealTimer) {
      clearTimeout(drawPreviewFx.revealTimer);
      drawPreviewFx.revealTimer = null;
    }
    delete ui.drawPreviewCanvas.dataset.cardId;
    paintPreviewBack(ctx, ui.drawPreviewCanvas.width, ui.drawPreviewCanvas.height);
    drawPreviewFx.revealTimer = setTimeout(() => {
      drawPreviewFx.revealTimer = null;
      if (!ui.drawPreviewCanvas) return;
      if (state.drawPreview.cardId !== nextCardId) return;
      ui.drawPreviewCanvas.dataset.cardId = nextCardId;
      paintPreviewFace(nextCardId, ui.drawPreviewCanvas);
    }, DRAW_PREVIEW_FLIP_MS);
    return;
  }

  if (drawPreviewFx.revealTimer) {
    delete ui.drawPreviewCanvas.dataset.cardId;
    paintPreviewBack(ctx, ui.drawPreviewCanvas.width, ui.drawPreviewCanvas.height);
    return;
  }

  ui.drawPreviewCanvas.dataset.cardId = nextCardId;
}

function resetDrawPreviewFx() {
  if (drawPreviewFx.revealTimer) {
    clearTimeout(drawPreviewFx.revealTimer);
    drawPreviewFx.revealTimer = null;
  }
  drawPreviewFx.lastCardId = null;
}

function paintPreviewBack(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#1e2a37";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#0f171f";
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, width - 6, height - 6);

  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  const step = 10;
  for (let y = 6; y < height - 4; y += step) {
    const oddRow = Math.floor(y / step) % 2 === 1;
    for (let x = oddRow ? 9 : 4; x < width - 4; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, y + 1);
      ctx.lineTo(x + 4, y + 5);
      ctx.lineTo(x - 4, y + 5);
      ctx.closePath();
      ctx.fill();
    }
  }
}

function paintPreviewFace(cardId, canvas) {
  const card = CARD_BY_ID.get(cardId);
  if (!card) return;
  const sheet = state.sprites[card.sprite.sheet];
  const ctx = canvas.getContext("2d");
  if (!sheet || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    sheet,
    card.sprite.x,
    card.sprite.y,
    card.sprite.w,
    card.sprite.h,
    0,
    0,
    canvas.width,
    canvas.height
  );
}

function getChoicePromptText(pending) {
  if (!pending) return "";
  if (pending.type === "handMatch") {
    const card = CARD_BY_ID.get(pending.cardId);
    if (!card) {
      return "Tap highlighted field card to capture, or tap selected hand card to cancel.";
    }
    if (pending.options.length === 3) {
      return `Tap highlighted ${describeMonth(card.month)} field card to sweep all four, or tap selected hand card to cancel.`;
    }
    return `Tap highlighted field card to pair with ${card.name}, or tap selected hand card to cancel.`;
  }
  if (pending.type === "handPlace") {
    const card = CARD_BY_ID.get(pending.cardId);
    return card
      ? `No match for ${card.name}. Tap preview field card to place, or tap selected hand card to cancel.`
      : "No match. Tap preview field card to place, or tap selected hand card to cancel.";
  }
  if (pending.type === "drawMatch") {
    return `Select 1 highlighted field card to pair with drawn ${pending.drawnCard.name}.`;
  }
  return "Select 1 highlighted field card.";
}

function renderChoiceMode() {
  const interactivePlayerIndex = getInteractiveHumanPlayerIndex();
  const pending =
    state.pendingSelection &&
    interactivePlayerIndex !== null &&
    state.pendingSelection.playerIndex === interactivePlayerIndex
      ? state.pendingSelection
      : null;
  const aiPreview = !pending && state.aiPreview ? state.aiPreview : null;
  const waitingDeckFlip =
    Boolean(state.awaitingDeckFlip) &&
    interactivePlayerIndex !== null &&
    state.awaitingDeckFlip.playerIndex === interactivePlayerIndex &&
    !state.awaitingDeckFlip.revealed;
  const canPickHandCard =
    interactivePlayerIndex !== null &&
    !state.roundOver &&
    !state.awaitingDecision &&
    !state.pendingSelection &&
    !state.awaitingDeckFlip &&
    state.players[interactivePlayerIndex].hand.length > 0;
  const humanDecision =
    Boolean(state.awaitingDecision) &&
    state.awaitingDecision.kind === "stopOrKoi" &&
    interactivePlayerIndex !== null &&
    state.awaitingDecision.playerIndex === interactivePlayerIndex;
  const roundEndedWaitingNext = state.roundOver && !state.matchOver;
  const matchEndedWaitingNew = state.matchOver;
  const cpuPlaying =
    !state.players[state.currentPlayer].isHuman &&
    !state.roundOver &&
    !state.awaitingDecision;
  const active = Boolean(pending || aiPreview);
  if (ui.handLockNote) {
    let noteText = "";
    let activeNote = false;
    if (pending) {
      noteText = getChoicePromptText(pending);
      activeNote = true;
    } else if (waitingDeckFlip) {
      noteText = "Reveal the deck card above.";
      activeNote = true;
    } else if (humanDecision) {
      const decision = state.awaitingDecision;
      const increase = Math.max(0, decision.koiMultiplier - state.tableMultiplier);
      if (decision.canPass) {
        noteText = `Choose Pass, or Koi-Koi for +${increase}x (to ${decision.koiMultiplier}x).`;
      } else {
        noteText = `Pass disabled. Choose Koi-Koi for +${increase}x (to ${decision.koiMultiplier}x).`;
      }
      activeNote = true;
    } else if (roundEndedWaitingNext) {
      let winnerText = "Round over.";
      const outcome = getLatestRoundOutcome();
      if (outcome?.noScore) {
        winnerText = "No scorer this round.";
      } else if (outcome?.winnerIndex !== null) {
        const winnerName = state.players[outcome.winnerIndex]?.name || `P${outcome.winnerIndex + 1}`;
        winnerText = `${winnerName} wins ${outcome.points}.`;
      }
      noteText = `${winnerText} Click Next Game.`;
      activeNote = true;
    } else if (matchEndedWaitingNew) {
      const p0 = state.players[0].score;
      const p1 = state.players[1].score;
      const p0Name = state.players[0]?.name || "P1";
      const p1Name = state.players[1]?.name || "P2";
      if (p0 > p1) {
        noteText = `${p0Name} wins ${p0}-${p1}. Click New Match.`;
      } else if (p1 > p0) {
        noteText = `${p1Name} wins ${p1}-${p0}. Click New Match.`;
      } else {
        noteText = `Draw ${p0}-${p1}. Click New Match.`;
      }
      activeNote = true;
    } else if (canPickHandCard) {
      noteText = "Pick a card from your hand to play.";
      activeNote = true;
    } else if (cpuPlaying) {
      noteText = `${state.players[state.currentPlayer].name} playing.`;
      activeNote = false;
    } else {
      noteText = "";
      activeNote = false;
    }
    ui.handLockNote.textContent = noteText;
    ui.handLockNote.classList.toggle("is-active", activeNote);
    ui.handLockNote.classList.toggle("is-muted", !activeNote);
  }
  if (ui.fieldZone) {
    ui.fieldZone.classList.toggle("choice-mode", active);
  }
}

function renderCaptured() {
  const topPlayerIndex = getDisplayTopPlayerIndex();
  const bottomPlayerIndex = getDisplayBottomPlayerIndex();
  const cpuCaptured = getSortedCapturedForDisplay(state.players[topPlayerIndex].captured);
  const playerCaptured = getSortedCapturedForDisplay(state.players[bottomPlayerIndex].captured);

  ui.cpuCaptured.innerHTML = cpuCaptured
    .map(
      (card) =>
        `<div class="card mini badged" data-card-type="${card.type}">${renderBadgedCardContent(card)}</div>`
    )
    .join("");

  ui.playerCaptured.innerHTML = playerCaptured
    .map(
      (card) =>
        `<div class="card mini badged" data-card-type="${card.type}">${renderBadgedCardContent(card)}</div>`
    )
    .join("");
}

function setContextButton(button, { text, action, disabled, primary = false }) {
  if (!button) return;
  button.textContent = text;
  button.dataset.action = action;
  button.disabled = Boolean(disabled);
  button.classList.toggle("primary", Boolean(primary));
}

function renderContextBar() {
  if (!ui.contextLeftBtn || !ui.contextRightBtn) return;
  ui.contextZone.classList.remove("single-action");
  ui.contextLeftBtn.hidden = false;
  ui.contextRightBtn.classList.remove("full");

  if (state.awaitingDecision && state.awaitingDecision.kind === "stopOrKoi") {
    const decision = state.awaitingDecision;
    setContextButton(ui.contextLeftBtn, {
      text: `Pass (${decision.passMultiplier}x)`,
      action: "pass",
      disabled: !decision.canPass,
      primary: decision.canPass,
    });
    setContextButton(ui.contextRightBtn, {
      text: `Koi-Koi (${decision.koiMultiplier}x)`,
      action: "koi",
      disabled: false,
      primary: true,
    });
    return;
  }

  if (state.roundOver && !state.matchOver) {
    ui.contextZone.classList.add("single-action");
    ui.contextLeftBtn.hidden = true;
    ui.contextRightBtn.classList.add("full");
    setContextButton(ui.contextRightBtn, {
      text: "Next Game",
      action: "next-game",
      disabled: state.gameNumber >= state.maxGames,
      primary: true,
    });
    return;
  }

  if (state.matchOver) {
    ui.contextZone.classList.add("single-action");
    ui.contextLeftBtn.hidden = true;
    ui.contextRightBtn.classList.add("full");
    setContextButton(ui.contextRightBtn, {
      text: "New Match",
      action: "new-match",
      disabled: false,
      primary: true,
    });
    return;
  }

  setContextButton(ui.contextLeftBtn, {
    text: "Pass",
    action: "idle-pass",
    disabled: true,
    primary: false,
  });
  setContextButton(ui.contextRightBtn, {
    text: "Koi-Koi",
    action: "idle-koi",
    disabled: true,
    primary: false,
  });
}

function onContextActionClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button || button.disabled) return;
  const action = button.dataset.action;

  if (action === "next-game") {
    onNextGame();
    return;
  }

  if (action === "new-match") {
    startNewMatch();
    return;
  }

  if (!state.awaitingDecision || state.awaitingDecision.kind !== "stopOrKoi") {
    return;
  }

  const decision = state.awaitingDecision;
  if (action === "pass") {
    if (!decision.canPass) return;
    state.awaitingDecision = null;
    logPlayerMove(
      decision.playerIndex,
      decision.moveNumber,
      `Pass at ${decision.passMultiplier}x with ${decision.yakuText}.`
    );
    endRoundWithWinner(decision.playerIndex, decision.points, decision.passMultiplier, "passed");
    return;
  }

  if (action === "koi") {
    applyKoiAndContinue(decision);
  }
}

function paintAllCards() {
  const canvases = document.querySelectorAll("canvas[data-card-id]");
  for (const canvas of canvases) {
    const card = CARD_BY_ID.get(canvas.dataset.cardId);
    if (!card) continue;
    const ctx = canvas.getContext("2d");
    const sheet = state.sprites[card.sprite.sheet];
    if (!sheet || !ctx) continue;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      sheet,
      card.sprite.x,
      card.sprite.y,
      card.sprite.w,
      card.sprite.h,
      0,
      0,
      canvas.width,
      canvas.height
    );
  }
}

function sortByMonth(cards) {
  return [...cards].sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month;
    return a.id.localeCompare(b.id);
  });
}

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function describeMonth(monthNumber) {
  const found = MONTHS.find((month) => month.id === monthNumber);
  return found ? `${found.name} (${found.flower})` : "Unknown month";
}

function renderGameToText() {
  const cpuProfile = CPU_PROFILE_META[state.aiProfile] || CPU_PROFILE_META[DEFAULT_AI_PROFILE];
  const context = {
    left: ui.contextLeftBtn
      ? { text: ui.contextLeftBtn.textContent, action: ui.contextLeftBtn.dataset.action, disabled: ui.contextLeftBtn.disabled }
      : null,
    right: ui.contextRightBtn
      ? {
          text: ui.contextRightBtn.textContent,
          action: ui.contextRightBtn.dataset.action,
          disabled: ui.contextRightBtn.disabled,
        }
      : null,
  };
  const viewerIndex = getViewerPlayerIndex();
  const topPlayerIndex = getDisplayTopPlayerIndex();
  const bottomPlayerIndex = getDisplayBottomPlayerIndex();
  const canRevealBottom = canRevealBottomHand();
  const bottomHandOut = canRevealBottom
    ? state.players[bottomPlayerIndex].hand.map((card) => card.id)
    : Array.from({ length: state.players[bottomPlayerIndex].hand.length }, () => "hidden");

  const payload = {
    mode: state.matchOver ? "match-over" : state.roundOver ? "round-over" : state.awaitingDecision ? "decision" : "playing",
    play_mode: state.playMode,
    friend_flow: state.friendFlow,
    viewer_player_index: state.viewerPlayerIndex,
    turn_checkpoint_ready: state.turnCheckpointReady,
    coordinate_system: "Cards are listed left-to-right in each visible area.",
    game_number: state.gameNumber,
    round_month: describeMonth(state.gameNumber),
    starts: state.players[state.dealer].name,
    turn: state.players[state.currentPlayer].name,
    table_multiplier: state.tableMultiplier,
    last_koi_caller: state.lastKoiCaller === null ? null : state.players[state.lastKoiCaller].name,
    special_two_x_player: state.roundSpecialTwoXPlayer === null ? null : state.players[state.roundSpecialTwoXPlayer].name,
    round12_leader_at_start:
      state.roundLeaderAtStart === null ? null : state.players[state.roundLeaderAtStart].name,
    deck_count: state.drawPile.length,
    pending_selection:
      state.pendingSelection && state.pendingSelection.playerIndex === getDisplayBottomPlayerIndex()
        ? {
            type: state.pendingSelection.type,
            options: state.pendingSelection.options,
            prompt: getChoicePromptText(state.pendingSelection),
          }
        : null,
    awaiting_deck_flip:
      state.awaitingDeckFlip
        ? {
            player: state.players[state.awaitingDeckFlip.playerIndex].name,
            move_number: state.awaitingDeckFlip.moveNumber,
            revealed: state.awaitingDeckFlip.revealed,
            drawn_card: state.awaitingDeckFlip.drawnCard.id,
          }
        : null,
    ai_preview: state.aiPreview
      ? {
          options: state.aiPreview.options,
          prompt: state.aiPreview.prompt,
        }
      : null,
    cpu_phase1_preview: state.cpuPhase1PreviewCardId,
    field: state.field.map((card) => card.id),
    hand_visibility: {
      viewer_player_index: viewerIndex,
      top_player_index: topPlayerIndex,
      bottom_player_index: bottomPlayerIndex,
      bottom_visible: canRevealBottom,
    },
    player: {
      score: state.players[bottomPlayerIndex].score,
      hand: bottomHandOut,
      captured_count: state.players[bottomPlayerIndex].captured.length,
      yaku_points: state.players[bottomPlayerIndex].yaku.points,
      yaku_names: state.players[bottomPlayerIndex].yaku.names,
    },
    cpu: {
      score: state.players[topPlayerIndex].score,
      hand_count: state.players[topPlayerIndex].hand.length,
      captured_count: state.players[topPlayerIndex].captured.length,
      yaku_points: state.players[topPlayerIndex].yaku.points,
      yaku_names: state.players[topPlayerIndex].yaku.names,
      profile: cpuProfile.name,
    },
    context,
    draw_preview: state.drawPreview,
    round_history: state.roundHistory.map((entry) => ({ ...entry })),
    message: state.message,
    action_log_tail: state.actionLog.slice(-10),
  };
  return JSON.stringify(payload);
}

function advanceTime(ms) {
  if (!Number.isFinite(ms) || ms < 0) return;
  if (state.aiTask) {
    const task = state.aiTask;
    clearAITask();
    task();
  }
}
