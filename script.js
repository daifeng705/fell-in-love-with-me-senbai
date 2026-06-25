// ======================== GAME DATA ========================
const ENDINGS = {
  good: {
    id:'good', title:'只属于你的傲娇频率', icon:'💕',
    illustration:'💕',
    text:'天台门开着。他背对你站着，手里攥着一瓶矿泉水——没拧开。\n"你来了。"他递过来。"之前那瓶我没喝，一直留着。今天这瓶——"\n他转过来，耳通红。"我不是会在这种事情上花时间的人，以前不是。但对你从一开始就是例外。"\n他深吸一口气："以后请多指教。"往后退了半步——他在怕被拒绝。\n你笑了："面试那天我在玻璃窗外看了你三十分钟，就想这个人拆论点怎么拆得这么好看。"\n"后来器材室撞见你对着假面骑士傻笑，我就确定了。"\n"那你怎么不早说。"\n"你连发朋友圈秒删都要私聊警告，我哪敢。"\n他别过头："……你发雅典娜手办时我其实很高兴。"\n天台风大。他转身走，耳尖红。走两步，又伸过来重新牵住。\n那晚他朋友圈发了两瓶矿泉水——一瓶旧的空瓶，一瓶满的没拧开。配文"找到了"。',
    condition:'好感度>80 + 第五阶段选A'
  },
  bad: {
    id:'bad', title:'辩词构筑的巴别塔', icon:'🌧️',
    illustration:'🌧️',
    text:'他对你的耐心终于耗尽。在队内，只剩下公事公办的无视与偶尔的刻薄。\n决赛后你去找他，他疏离地看着你——\n"你的辩词，只有技术，没有灵魂。我们不是一路人。"\n他转身走了。你站在原地，看着他走过走廊拐角，没有回头。\n那些没能说出口的理解、没能传递的心意，像一堵透明的墙，隔在两个人中间。\n椰子饭依然优秀而孤独地做着他的领队。而你，只是他人生中一个擦肩而过的名字。',
    condition:'全程好感度<20'
  },
  medium: {
    id:'medium', title:'能与我碰杯的战友', icon:'🥂',
    illustration:'🥂',
    text:'天台。他攥着矿泉水瓶，深吸一口气正要开口——\n"队长！我终于明白你说的星矢精神了！被击倒永远站起来！我们可以当一辈子的圣斗士同好吗！"\n他愣住。表情从紧张到困惑到松弛——最后笑了一声。\n"……你这人真是。"他拧开矿泉水自己喝了。"一辈子的同好是吧。那就别迟到。冥王篇没看完，周末来我宿舍补。带上你雅典娜手办——我那儿有防紫外线展示盒。"\n不是恋人，却是最懂彼此的战友。你得到了比爱情更稳固的东西。',
    condition:'了解度>90 + 好感40-60'
  },
  mystery: {
    id:'mystery', title:'月光与星辉的偏移', icon:'🌙',
    illustration:'🌙',
    text:'路灯下，你给椰子饭发了"今晚有点累"，然后给猫猫坟回了"现在有空？"\n秒回：「校门口咖啡馆，我在门口等你。」\n路过教学楼时，天台灯亮着。一个模糊的身影站在围栏边——你没有停。\n咖啡馆门口，猫猫坟推来一杯热可可："照例多加牛奶。"\n"你怎么知道我喜欢喝这个？"\n"上次图书馆你手里端的就是这个，封面还洒了一点。我记性好。"\n他翻出决赛照片——三百张里挑出的最好那张：你陈词最后一分钟，侧脸被暖光镀了边。\n"你是第一个让我想从取景框后面走出来的人。"\n心动的方向，有时并非最初望见的那一束光。',
    condition:'与猫猫坟师哥互动≥3次 + 好感不足以进入好结局'
  }
};

// ======================== ITEM & CAT BONUS STORYLINES ========================
const unlockStories = {
  wechat: [
    {who:'', text:'他加了你微信。头像像素假面骑士，昵称"椰"。'},
    {who:'', text:'「资料晚上发你，看完别外传。」'},
    {who:'椰子饭', exp:'初始', text:'睡吧。'},
  ],
  water: [
    {who:'', text:'你悄悄把农夫山泉放在他右手边，转身就走。'},
    {who:'', text:'走到拐角听到塑料瓶被拿起的声音——他没拧开。'},
    {who:'', text:'深夜他发来好友申请：「训练资料发你。」'},
    {who:'', text:'对话最后他回——'},
    {who:'椰子饭', exp:'初始', text:'睡吧。'},
    {who:'', text:'手机相册里，矿泉水购买记录的截图静静躺着。'},
  ],
  samehobby: [
    {who:'', text:'沉默。三十秒后——'},
    {who:'椰子饭', exp:'害羞', text:'……你这张是再版，初版披风颜色不一样。'},
    {who:'', text:'他语速突然加快，从手办版本讲到收藏注意事项：'},
    {who:'椰子饭', exp:'初始', text:'雅典娜不能放窗边，阳光伤漆面。我家里有初版的，比你早两年。'},
    {who:'', text:'他说最喜欢的黄金圣斗士是处女座沙加——"最接近神的男人。"'},
    {who:'', text:'你说你喜欢穆先生。他沉默了一会儿——'},
    {who:'椰子饭', exp:'初始', text:'……品味不算差。'},
    {who:'', text:'他的朋友圈背景从默认换成了圣斗士星空。'},
  ],
  hiddenclub: [
    {who:'', text:'他沉默了好一会儿。'},
    {who:'椰子饭', exp:'害羞', text:'你也看圣斗士？'},
    {who:'', text:'然后他拉你进了一个群——'},
    {who:'', text:'「地表最强圣斗士候补」（3人）'},
    {who:'', text:'群里他死党当场和他为"沙加vs撒加谁更强"吵起来。'},
    {who:'', text:'椰子饭发了几百字战力分析，附带原著截图和设定集页码。'},
    {who:'', text:'死党私聊你：「你小心点，这人一聊圣斗士变话痨。」'},
    {who:'', text:'群公告被改成「讨论圣斗士战力需附带原著论据」。'},
  ],
  longletter: [
    {who:'', text:'凌晨一点十二分。你坐在床上，把那篇长微信发了出去。'},
    {who:'', text:'逐条承认他指出的问题，逐段附上修改说明。最后一行——'},
    {who:'', text:'「下次绝不会让你再有批评我的机会。」'},
    {who:'', text:'已读。很久后他回——'},
    {who:'椰子饭', exp:'初始', text:'修改稿看了。第二条收束比之前好。第一条还是太虚。附录第一份材料删掉。'},
    {who:'椰子饭', exp:'初始', text:'"下次不会让我有批评机会"——记住了。'},
    {who:'', text:'他的头像换成了假面骑士修复形态。'},
    {who:'', text:'他对着手机低低笑了。那些他没说出口的话——那瓶没拧开的矿泉水照片、你说"修复圣衣看哭了"的聊天记录——都在他桌上的专属文件夹里。'},
  ],
  conflict: [
    {who:'', text:'他愣神半秒，然后冷笑着转过来。'},
    {who:'椰子饭', exp:'扶眼镜', text:'针对你？你有什么值得我针对的？'},
    {who:'椰子饭', exp:'初始', text:'如果你只有这种程度觉悟，趁早退队。'},
    {who:'', text:'门摔上。你站在空无一人的走廊里，拳头攥得发白。'},
    {who:'', text:'对自己说——不退。你推不走我。'},
    {who:'', text:'他甩门时攥门把手的指节发白——你很久之后才会想起这个细节。'},
  ],
};
const catStories = {
  2: [
    {who:'猫猫坟', text:'嗨，训练辛苦了。'},
    {who:'', text:'他翻出相机给你看——刚才训练时他抓拍了好多张。'},
    {who:'', text:'构图温柔得不像话，每个人都被拍得很好看。'},
    {who:'猫猫坟', text:'你辩论时眼神特别专注，我多拍了几张。回头发你。'},
  ],
  3: [
    {who:'', text:'图书馆角落，猫猫坟师哥在整理相册。'},
    {who:'猫猫坟', text:'这么晚还在？'},
    {who:'', text:'他翻出一张夕阳照——橙紫色在天际晕开。'},
    {who:'猫猫坟', text:'这颜色像你辩论时脸红的程度。'},
    {who:'', text:'你愣住。他笑了笑，合上相册。'},
  ],
  4: [
    {who:'', text:'猫猫坟师哥端着两杯热可可走来。'},
    {who:'猫猫坟', text:'照例多加牛奶。'},
    {who:'', text:'你一愣——你怎么知道我喝这个？'},
    {who:'猫猫坟', text:'上次图书馆你手里端的就是热可可，封面还洒了一点。我记性好。'},
  ],
  5: [
    {who:'', text:'猫猫坟师哥举着相机蹲在场边。'},
    {who:'猫猫坟', text:'别紧张，就按平时那样打。'},
    {who:'', text:'取景框后他笑了笑，轻轻按下快门。'},
    {who:'猫猫坟', text:'你在场上发着光。'},
  ],
};

const catTexts = [
  '',
  '猫猫坟师哥在训练营帮忙拍照，要过去打个招呼吗？',
  '在图书馆遇到猫猫坟师哥整理相册，他朝你笑了笑……',
  '猫猫坟师哥端着两杯热可可经过，想找他聊聊天吗？',
  '猫猫坟师哥来拍决赛照片了，去和他聊聊？'
];

const stages = {
  1: {
    title:'初识·玻璃门后的利刃', tag:'第1阶段',
    lines:[
      {who:'', text:'军训结束第三天。艺术联队辩论队面试教室外，我手心全是汗。'},
      {who:'', text:'走廊排着长队。透过布满灰尘的玻璃窗，我看到隔壁练习教室——那个站在四辩位置的男生，黑发、黑框眼镜，蓝条纹衬衫挽到小臂。'},
      {who:'', text:'他开口拆解对方论点时，声音清晰得像手术刀精准切入要害。玻璃外，我心脏砰地一跳。'},
      {who:'', text:'轮到我面试。他坐在长桌正中——离近了才看清他眼里深棕色的光，懒散却锐利。'},
      {who:'椰子饭', exp:'初始', text:'两分钟陈述，开始。'},
      {who:'', text:'我按准备好的稿子讲完。两侧学长学姐点头。他抬眼——'},
      {who:'椰子饭', exp:'扶眼镜', text:'你最喜欢的"多维思考"角度如果最经不起推敲，你怎么办？'},
      {who:'', text:'那语气不是刁难，是认真的期待。我大脑飞转——'},
    ],
    choices:[
      {text:'"我会先竭尽全力推敲。如果站不住脚，那就换一个。建立在沙子上的房子不值得喜欢。"', effect:{affection:10,knowledge:0,tag:'可塑之才'}},
      {text:'"新生视角本身最有价值。因为不懂所以什么都碰，因为会碰壁才知道哪边是墙哪边是门。"', effect:{affection:0,knowledge:10,tag:'有意思的新人'}},
      {text:'"我没想那么深……"', effect:{affection:0,knowledge:0,tag:'白纸一张'}},
    ]
  },
  2: {
    title:'靠近·训练营的傲娇犯', tag:'第2阶段',
    lines:[
      {who:'', text:'周六早九点。一教301。椰子饭白衬衫站讲台。'},
      {who:'椰子饭', exp:'初始', text:'找位置坐。'},
      {who:'', text:'逻辑攻防训练。每人三十分钟准备，他亲自拆。三个小时内他拆掉每一个人的论点，有人直接退队。我排倒数第三，九个问题把我三个论点拆得干净。'},
      {who:'', text:'下午集训结束。器材室饮水机空了。我抱着最后一箱水经过隔壁空教室——门缝里，椰子饭捧着手机，露虎牙傻笑。'},
      {who:'', text:'假面骑士变身BGM外放。我怀里矿泉水箱"嘎吱"一声——'},
      {who:'椰子饭', exp:'害羞', text:'…………'},
      {who:'', text:'他抬头，脸从脖子红到耳尖，锁屏、扣手机、扶眼镜一气呵成。'},
      {who:'椰子饭', exp:'初始', text:'进门前不敲门？'},
      {who:'', text:'他大步走过门口时停了一下——'},
      {who:'椰子饭', exp:'初始', text:'刚才你看到的——'},
    ],
    choices:[
      {text:'"我什么都没看到。"然后主动问："需要帮忙整理资料吗？那个归谬法你是怎么三秒找到切入点的？"', effect:{affection:8,knowledge:5,unlock:'wechat'}},
      {text:'把矿泉水放在他手边，转身就走。', effect:{affection:12,knowledge:3,unlock:'water'}},
      {text:'太累了……直接回宿舍。', effect:{affection:0,knowledge:0}},
    ]
  },
  3: {
    title:'深入·电波与深夜的圣斗士', tag:'第3阶段',
    lines:[
      {who:'', text:'新生赛备战期。和椰子饭微信对话渐多，资料发送时间从十点推到凌晨零点四十三分。'},
      {who:'', text:'某晚刷朋友圈——凌晨零点五十八分，他分享了一首圣斗士星矢BGM，配文"燃烧吧，我的小宇宙"。'},
      {who:'', text:'我点了赞。'},
      {who:'', text:'两分钟后动态秒删。微信弹来——'},
      {who:'椰子饭', exp:'害羞', text:'刚才那是手滑。不准告诉别人。'},
      {who:'', text:'他紧张了。那个把辩论队拆哭的椰子饭，因为一条朋友圈被点赞——紧张了。'},
    ],
    choices:[
      {text:'"队长，你也信仰女神？"', effect:{affection:15,knowledge:15,unlock:'samehobby'}},
      {text:'"好的，其实那首歌我也很喜欢。冥王篇沙加死的时候看哭了吗。"', effect:{affection:12,knowledge:20,unlock:'hiddenclub'}},
      {text:'"原来你喜欢圣斗士？最喜欢哪个黄金圣斗士？"', effect:{affection:-5,knowledge:5}},
    ]
  },
  4: {
    title:'裂痕·辩题下的利刃与真心', tag:'第4阶段',
    lines:[
      {who:'', text:'新生赛分组。我是四辩。椰子饭说"你目前逻辑水平最适合这个位置"。'},
      {who:'', text:'赛前特训强度翻倍。他对别人平静点评，对我不一样——数据年份写错，材料直接拍桌上。'},
      {who:'椰子饭', exp:'扶眼镜', text:'你觉得对手会放过你吗？'},
      {who:'', text:'面红耳赤道歉，他没接，只在评分表写了几笔。'},
      {who:'', text:'决赛前三天，模拟赛复盘。他站起来，椅子滑过地面刺耳一响。白板上三个大叉——价值倡导虚、逻辑收束是复读、情感共鸣不够。'},
      {who:'椰子饭', exp:'初始', text:'你这个四辩陈词，是我带新生以来最差的。没有之一。'},
      {who:'', text:'他转过来看我——不是愤怒，是失望。'},
      {who:'椰子饭', exp:'初始', text:'面试时给我正面硬刚的新生视角呢？你今天多听两句难听的，总比三天后在台上被拆到说不出话强。'},
      {who:'', text:'散会。他走了，经过我时没有看。教室空了，白板上三个叉还在。'},
    ],
    choices:[
      {text:'追到办公室："你是不是针对我？"', effect:{affection:-10,knowledge:0,flag:'conflict'}},
      {text:'冷静后凌晨发长微信，逐条承认他指出的问题，附修改稿。', effect:{affection:20,knowledge:15,unlock:'longletter'}},
      {text:'什么都没说，录音听三遍，陈词重写到凌晨，用行动回应。', effect:{affection:12,knowledge:0}},
    ]
  },
  5: {
    title:'转折·唯有胜利能换真心', tag:'第5阶段',
    lines:[
      {who:'', text:'决赛前夜。凌晨十二点半睡不着，去训练教室。灯亮着——讲台上一叠资料，一杯凉咖啡。'},
      {who:'', text:'练第三遍时门开了。椰子饭浅蓝衬衫，手里两罐冰咖啡。'},
      {who:'椰子饭', exp:'初始', text:'路过。看到灯亮着。……别误会，怕你明天给队里丢脸。'},
      {who:'', text:'他把一罐推过来。然后坐下来。'},
      {who:'椰子饭', exp:'初始', text:'我当年也紧张。大一新生赛四辩，准备一星期。决赛对方提了没预料到的反例，我站起来说不出话。后来那个反例其实不难破——但太紧张，忘了基础。'},
      {who:'', text:'他说输掉后把自己关宿舍看了一天假面骑士，第二天起来重新写辩词。'},
      {who:'椰子饭', exp:'初始', text:'我从来没跟别人说过。……咖啡快凉了。'},
      {who:'', text:'他走。在门口停了一下——'},
      {who:'', text:'讲台上他留下的资料——红笔标注对方所有可能反例，每条旁写破解路径。最后一页铅笔字：「让他们看看你有多强。」'},
      {who:'', text:'决赛日。赢了。全场掌声。他站在边缘和评委握手，然后抬头——目光相遇。他点了一下头，右手在身侧悄悄攥拳又松开。'},
      {who:'', text:'他在忍笑。手机震了——'},
      {who:'椰子饭', exp:'初始', text:'明天，紧张吗？'},
    ],
    choices:[
      {text:'"紧张。但想到是你带我走到这的，就不怕了。"', effect:{affection:25,knowledge:8,flag:'goodpath'}},
      {text:'"不紧张，我的小宇宙正在燃烧呢！"', effect:{affection:18,knowledge:8,flag:'mediumpath'}},
      {text:'"队长，赢了请我吃饭吧！"', effect:{affection:3,knowledge:3}},
    ]
  }
};

// ======================== GAME STATE ========================
let G = {
  stage:1, lineIdx:0, phase:'intro', // intro|text|choice|cat|ending
  affection:0, knowledge:0, catCount:0,
  tag:'', unlocked:{wechat:false,water:false,samehobby:false,hiddenclub:false,longletter:false,conflict:false,goodpath:false,mediumpath:false},
  endings:{good:false,bad:false,medium:false,mystery:false},
  history:[], skip:false, typing:false, stageStarted:false,
};

let audioCtx = null;
let soundOn = true;
let typingTimer = null;
let bgmTimer = null; // kept for compatibility

// ======================== AUDIO ========================
function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
function playClick() {
  if (!soundOn) return;
  try {
    initAudio();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.frequency.value = 880; o.type = 'sine';
    g.gain.setValueAtTime(_sfxVol, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    o.start(); o.stop(audioCtx.currentTime + 0.08);
  } catch(e) {}
}
let bgmAudio = null;
let tsBgmAudio = null;
let _bgmVol = 0.4;
let _sfxVol = 0.4;
let _textSpeed = 35;

function applyBgmVolume() {
  const slider = document.getElementById('ts-bgm');
  _bgmVol = slider ? slider.value / 100 : _bgmVol;
  if (bgmAudio) bgmAudio.volume = _bgmVol;
  if (tsBgmAudio) tsBgmAudio.volume = _bgmVol;
}
function applySfxVolume() {
  const slider = document.getElementById('ts-sfx');
  _sfxVol = slider ? slider.value / 100 : _sfxVol;
}
function applyTextSpeed() {
  const slider = document.getElementById('ts-text-speed');
  const val = slider ? parseInt(slider.value) : 5;
  // map 1→55ms, 5→35ms (default), 10→10ms
  _textSpeed = Math.max(8, 55 - (val - 1) * 5);
}
function applyBrightness() {
  const slider = document.getElementById('ts-brightness');
  const val = slider ? slider.value / 100 : 0.75;
  document.getElementById('main').style.filter = slider ? `brightness(${val})` : '';
}

function playBgm() {
  if (!soundOn) return;
  if (bgmAudio && !bgmAudio.paused) return;
  try {
    bgmAudio = new Audio('本日は晴天なり.mp3');
    bgmAudio.loop = true;
    bgmAudio.volume = _bgmVol;
    bgmAudio.play().catch(() => {});
  } catch(e) {}
}
function stopBgm() {
  if (bgmAudio) { bgmAudio.pause(); bgmAudio.currentTime = 0; bgmAudio = null; }
}
function initTsBgm() {
  if (tsBgmAudio) return;
  tsBgmAudio = new Audio("It's a HORI style!.mp3");
  tsBgmAudio.loop = true;
  tsBgmAudio.volume = _bgmVol;
}
function playTsBgm() {
  if (!soundOn) return;
  initTsBgm();
  tsBgmAudio.volume = _bgmVol;
  tsBgmAudio.play().catch(() => {});
}
// Retry title BGM on any action while title screen is visible (handles autoplay policy)
// Always calls play() — safe to call on already-playing audio
function _tsEnsureBgm() {
  const ts = document.getElementById('title-screen');
  if (!ts || ts.style.display === 'none') return;
  if (!soundOn) return;
  initTsBgm();
  tsBgmAudio.volume = _bgmVol;
  tsBgmAudio.play().catch(() => {});
}
document.addEventListener('click', _tsEnsureBgm);
document.addEventListener('touchstart', _tsEnsureBgm);
function stopTsBgm() {
  if (tsBgmAudio) { tsBgmAudio.pause(); tsBgmAudio.currentTime = 0; tsBgmAudio = null; }
}
function toggleSound() {
  soundOn = !soundOn;
  document.getElementById('sound-toggle').textContent = soundOn ? '🔊' : '🔇';
  if (soundOn) {
    playClick();
    if (document.getElementById('title-screen').style.display !== 'none') {
      playTsBgm();
    } else {
      playBgm();
    }
  } else {
    stopTsBgm();
    stopBgm();
  }
}

// ======================== RENDER ========================
function updateStats() {
  const a = Math.min(100, Math.max(0, G.affection));
  const k = Math.min(100, Math.max(0, G.knowledge));
  document.getElementById('affection-val').textContent = a;
  document.getElementById('affection-bar').style.width = a + '%';
  document.getElementById('know-val').textContent = k;
  document.getElementById('know-bar').style.width = k + '%';
  document.getElementById('cat-count').textContent = G.catCount;
  const ta = document.getElementById('tag-area');
  ta.innerHTML = G.tag ? `<span class="tag">${G.tag}</span>` : `<span class="tag" style="background:#ccc;color:#999;">待解锁</span>`;
}

function updateStageLabel() {
  const s = stages[G.stage];
  document.getElementById('stage-label').textContent = s ? s.title : '';
}

function setSprite(exp) {
  const img = document.getElementById('sprite-img');
  const map = {初始:'初始立绘.png',扶眼镜:'扶眼镜.png',害羞:'害羞.png'};
  img.src = map[exp] || '初始立绘.png';
  img.style.opacity = '0';
  setTimeout(() => { img.style.opacity = '1'; }, 50);
}

// ======================== TYPEWRITER ========================
function showText(who, text, callback) {
  G.typing = true;
  document.getElementById('click-hint').textContent = '▼ 点击跳过';
  document.getElementById('click-hint').style.opacity = '0.6';
  document.getElementById('speaker-name').textContent = who ? (who === '椰子饭' ? '🥥 ' + who : who) : '';
  const disp = document.getElementById('text-display');
  const cursor = document.getElementById('text-cursor');
  disp.textContent = '';
  cursor.style.display = 'inline-block';
  let idx = 0;
  if (typingTimer) clearInterval(typingTimer);
  typingTimer = setInterval(() => {
    if (idx < text.length) {
      disp.textContent += text[idx];
      idx++;
      if (idx % 3 === 0) scrollTextBox();
    } else {
      clearInterval(typingTimer); typingTimer = null;
      G.typing = false;
      document.getElementById('click-hint').textContent = '▼ 点击继续';
      document.getElementById('click-hint').style.opacity = '1';
      scrollTextBox();
      if (callback) callback();
    }
  }, _textSpeed);
}

function scrollTextBox() {
  const tb = document.getElementById('text-box');
  setTimeout(() => { tb.scrollTop = tb.scrollHeight; }, 20);
}

// ======================== BONUS QUEUE (ITEM / CAT STORYLINES) ========================
let bonusQueue = null;
let bonusIdx = 0;
let bonusCallback = null;

function advanceBonusLine() {
  if (!bonusQueue || bonusIdx >= bonusQueue.length) {
    const cb = bonusCallback;
    bonusQueue = null;
    bonusIdx = 0;
    bonusCallback = null;
    if (cb) setTimeout(cb, 300);
    return;
  }
  const line = bonusQueue[bonusIdx++];
  if (line.exp) {
    setSprite(line.exp);
  } else {
    const autoExp = detectSpriteExp(line.text);
    if (autoExp) setSprite(autoExp);
  }
  G.phase = 'bonus';
  showText(line.who, line.text, () => {});
}

function textBoxClick() {
  if (G.phase === 'intro' || G.phase === 'choice' || G.phase === 'cat' || G.phase === 'ending') return;
  if (G.phase === 'bonus') {
    if (G.typing) { skipText(); }
    else { advanceBonusLine(); }
    return;
  }
  skipText();
}

function skipText() {
  if (!G.typing) {
    if (G.phase === 'text') advanceLine();
    return;
  }
  if (typingTimer) clearInterval(typingTimer); typingTimer = null;
  G.typing = false;
  let lineText = '';
  if (G.phase === 'bonus' && bonusQueue && bonusIdx > 0) {
    lineText = bonusQueue[bonusIdx - 1].text;
  } else {
    const lines = stages[G.stage].lines;
    lineText = (lines[G.lineIdx - 1] || lines[0]).text;
  }
  document.getElementById('text-display').textContent = lineText;
  document.getElementById('click-hint').textContent = '▼ 点击继续';
  document.getElementById('click-hint').style.opacity = '1';
  document.getElementById('text-cursor').style.display = 'none';
  scrollTextBox();
}

// ======================== TOAST ========================
function showToast(title, msg, dur) {
  const t = document.getElementById('toast');
  const i = document.getElementById('toast-inner');
  i.innerHTML = `<h4>${title}</h4><p>${msg}</p>`;
  t.classList.remove('hidden');
  setTimeout(() => { t.classList.add('hidden'); }, dur || 1800);
}

// ======================== CHOICE SYSTEM ========================
function showChoices() {
  G.phase = 'choice';
  const st = stages[G.stage];
  const con = document.getElementById('options-container');
  con.innerHTML = '';
  st.choices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = c.text;
    btn.onclick = () => handleChoice(i);
    con.appendChild(btn);
  });
  document.getElementById('cat-prompt-area').classList.add('hidden');
  document.getElementById('click-hint').style.display = 'none';
}

function handleChoice(idx) {
  playClick();
  const st = stages[G.stage];
  const ch = st.choices[idx];
  const eff = ch.effect;

  let aff = typeof eff.affection === 'number' ? eff.affection : 0;
  let know = typeof eff.knowledge === 'number' ? eff.knowledge : 0;

  G.affection = Math.min(100, Math.max(0, G.affection + aff));
  G.knowledge = Math.min(100, Math.max(0, G.knowledge + know));
  if (eff.tag) G.tag = eff.tag;
  if (eff.unlock === 'wechat') G.unlocked.wechat = true;
  if (eff.unlock === 'water') G.unlocked.water = true;
  if (eff.unlock === 'samehobby') G.unlocked.samehobby = true;
  if (eff.unlock === 'hiddenclub') G.unlocked.hiddenclub = true;
  if (eff.unlock === 'longletter') G.unlocked.longletter = true;
  if (eff.flag === 'conflict') G.unlocked.conflict = true;
  if (eff.flag === 'goodpath') G.unlocked.goodpath = true;
  if (eff.flag === 'mediumpath') G.unlocked.mediumpath = true;

  G.history.push(`【${st.title}】选择了「${ch.text}」`);

  let msg = '';
  if (aff > 0) msg += `好感度 +${aff} `;
  if (aff < 0) msg += `好感度 ${aff} `;
  if (know > 0) msg += `了解度 +${know} `;
  if (know < 0) msg += `了解度 ${know} `;
  if (eff.tag) msg += `获得标签「${eff.tag}」`;
  if (eff.unlock === 'wechat') msg += '解锁微信 ';
  if (eff.unlock === 'water') msg += '获得道具【未拧开矿泉水】 ';
  if (eff.unlock === 'samehobby') msg += '开启二次元同好路线！';
  if (eff.unlock === 'hiddenclub') msg += '解锁隐藏社群！';
  if (eff.unlock === 'longletter') msg += '解锁【深夜长文】事件！';

  showToast('🌸 数值变化', msg.trim());
  updateStats();

  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);

  // Check for unlock bonus storyline
  const bonusKey = eff.unlock || eff.flag;
  const bonus = unlockStories[bonusKey];
  if (bonus) {
    bonusQueue = bonus;
    bonusIdx = 0;
    bonusCallback = () => {
      if (G.stage === 1) {
        setTimeout(() => proceedNextStage(), 300);
      } else {
        setTimeout(() => showCatPrompt(), 300);
      }
    };
    advanceBonusLine();
    return;
  }

  // Stage 1: no cat prompt
  if (G.stage === 1) {
    setTimeout(() => proceedNextStage(), 600);
    return;
  }
  // Stages 2-5: show cat prompt
  setTimeout(() => showCatPrompt(), 600);
}

function showCatPrompt() {
  G.phase = 'cat';
  const area = document.getElementById('cat-prompt-area');
  area.classList.remove('hidden');
  const promptText = catTexts[G.stage] || '猫猫坟师哥在不远处，要过去打个招呼吗？';
  area.innerHTML = `
    <p>😺 ${promptText}</p>
    <button class="cat-btn" onclick="visitCat()">去找他聊聊 🐾</button>
    <button class="cat-btn" onclick="skipCat()">下次吧</button>
  `;
}

function visitCat() {
  playClick();
  G.catCount++;
  updateStats();
  const story = catStories[G.stage];
  if (story && story.length > 0) {
    // Hide 椰子饭 sprite during 猫猫坟 interactions
    document.getElementById('sprite-box').style.display = 'none';
    bonusQueue = story;
    bonusIdx = 0;
    bonusCallback = () => {
      // Restore sprite for next stage
      document.getElementById('sprite-box').style.display = 'flex';
      proceedNextStage();
    };
    advanceBonusLine();
  } else {
    proceedNextStage();
  }
}

function skipCat() {
  playClick();
  proceedNextStage();
}

function proceedNextStage() {
  G.stage++;
  if (G.stage > 5) {
    G.phase = 'ending';
    autoSave();
    setTimeout(() => determineEnding(), 300);
    return;
  }
  G.lineIdx = 0;
  G.phase = 'intro';
  updateStageLabel();
  autoSave();
  showStageIntro();
}

// ======================== ENDING SYSTEM ========================
function determineEnding() {
  G.phase = 'ending';
  const a = G.affection, k = G.knowledge, c = G.catCount;
  let eid = 'bad';

  // Balanced thresholds: each ending corresponds to a distinct playstyle
  if (a > 60 && G.unlocked.goodpath) {
    // 好结局：好感路线 + 阶段五直球
    eid = 'good';
  } else if (a < 25) {
    // 坏结局：持续低好感
    eid = 'bad';
  } else if (c >= 3 && a < 55) {
    // 迷思结局：猫猫坟互动≥3 + 好感不足以进好结局
    eid = 'mystery';
  } else if (k > 50) {
    // 中等结局：了解度路线
    eid = 'medium';
  } else if (c >= 3) {
    // 迷思结局：猫猫坟互动≥3（好感也高时仍可选）
    eid = 'mystery';
  } else if (G.unlocked.mediumpath && k > 35) {
    // 中等结局：阶段五电波回应 + 一定了解度
    eid = 'medium';
  } else if (a > 45) {
    // 好感度尚可但没走对路 → 好结局
    eid = 'good';
  } else if (k > 35) {
    // 一定了解度 → 中等结局
    eid = 'medium';
  }
  // 其余 → 坏结局（default）

  G.endings[eid] = true;
  showEnding(eid);
}

function showEnding(eid) {
  const e = ENDINGS[eid];
  const area = document.getElementById('scene-area');
  area.innerHTML = `
    <div class="ending-wrap">
      <div class="ending-illust">${e.illustration}</div>
      <div class="ending-title">${e.title}</div>
      <div class="ending-text">${e.text.replace(/\n/g,'<br>')}</div>
      <div class="ending-stats">
        📊 达成条件：${e.condition}<br>
        好感度 ${G.affection} | 了解度 ${G.knowledge} | 猫猫坟互动 ${G.catCount}次
      </div>
      <div class="ending-btns">
        <button class="btn-primary" onclick="resetGame()">🔄 重新开始</button>
        <button class="btn-secondary" onclick="openModal('gallery')">🖼️ 查看图鉴</button>
      </div>
    </div>
  `;
  document.getElementById('options-area').innerHTML = '';
  document.getElementById('text-box').style.display = 'none';
  document.getElementById('sprite-box').style.display = 'none';
  document.getElementById('float-btns').style.display = 'flex';
  // Auto save
  autoSave();
  
  // Save ending to local
  try {
    let data = JSON.parse(localStorage.getItem('yz_game_endings') || '{}');
    data[eid] = true;
    localStorage.setItem('yz_game_endings', JSON.stringify(data));
  } catch(e) {}
}

// ======================== SPRITE AUTO-DETECT ========================
function detectSpriteExp(text) {
  if (/脸红|害羞|不好意思|尴尬|红到|耳尖/.test(text)) return '害羞';
  if (/扶眼镜|推眼镜/.test(text)) return '扶眼镜';
  return null;
}

// ======================== LINE ADVANCE ========================
function advanceLine() {
  if (G.phase === 'ending') return;
  const st = stages[G.stage];
  if (!st) return;
  
  if (G.lineIdx >= st.lines.length) {
    showChoices();
    return;
  }
  
  G.phase = 'text';
  const line = st.lines[G.lineIdx];
  G.lineIdx++;
  
  // Explicit exp from data takes priority
  if (line.exp) {
    setSprite(line.exp);
  } else {
    // Auto-detect from text content
    const autoExp = detectSpriteExp(line.text);
    if (autoExp) setSprite(autoExp);
  }
  
  G.history.push(line.who ? `【${line.who}】${line.text}` : `${line.text}`);
  
  document.getElementById('text-cursor').style.display = 'inline-block';
  showText(line.who, line.text, () => {
    // callback after typing finishes naturally
  });
}

// ======================== STAGE INTRO ========================
function showStageIntro() {
  const st = stages[G.stage];
  if (!st) { determineEnding(); return; }
  const overlay = document.getElementById('stage-intro');
  document.getElementById('si-stage').textContent = st.tag || `第${G.stage}阶段`;
  document.getElementById('si-title').textContent = st.title;
  overlay.classList.remove('hidden');
  G.phase = 'intro';
}

function startStage() {
  playClick();
  stopTsBgm();
  playBgm();
  document.getElementById('stage-intro').classList.add('hidden');
  G.lineIdx = 0;
  G.phase = 'text';
  document.getElementById('sprite-box').style.display = 'flex';
  document.getElementById('text-box').style.display = 'block';
  document.getElementById('options-area').innerHTML = '<div id="options-container"></div><div id="cat-prompt-area" class="cat-prompt hidden"></div>';
  updateStageLabel();
  advanceLine();
}

// ======================== SAVE / LOAD ========================
function autoSave() {
  const data = {stage:G.stage,lineIdx:G.lineIdx,phase:G.phase,
    affection:G.affection,knowledge:G.knowledge,catCount:G.catCount,
    tag:G.tag,unlocked:{...G.unlocked},
    endings:{...G.endings},
    history:G.history,stageStarted:G.stageStarted};
  try { localStorage.setItem('yz_autosave', JSON.stringify(data)); } catch(e) {}
}

function saveGame(slot) {
  playClick();
  const data = {stage:G.stage,lineIdx:G.lineIdx,phase:G.phase,
    affection:G.affection,knowledge:G.knowledge,catCount:G.catCount,
    tag:G.tag,unlocked:{...G.unlocked},
    history:G.history,stageStarted:G.stageStarted,
    stageTitle:stages[G.stage]?.title||'',time:Date.now()};
  try {
    let saves = JSON.parse(localStorage.getItem('yz_saves') || '{}');
    saves[slot] = data;
    localStorage.setItem('yz_saves', JSON.stringify(saves));
    showToast('💾', `已存档至 槽位${slot+1}`);
    renderSaveSlots();
    renderLoadSlots();
  } catch(e) { showToast('⚠️', '存档失败'); }
}

function loadGame(slot) {
  playClick();
  try {
    let saves = JSON.parse(localStorage.getItem('yz_saves') || '{}');
    const data = saves[slot];
    if (!data) { showToast('⚠️', '该槽位无存档'); return; }
    Object.assign(G, data);
    G.unlocked = {...data.unlocked};
    _tsModalActive = null; // Don't restore title screen — we're starting the game
    closeModal('load');
    // Reset UI
    document.getElementById('scene-area').innerHTML = `
      <div id="bg-canvas" style="background-image:url('背景.png')"></div>
      <div id="sprite-box"><img id="sprite-img" src="初始立绘.png" alt="椰子饭"></div>
      <div id="text-box" onclick="textBoxClick()">
        <div id="speaker-name"></div>
        <div id="text-content"><span id="text-display"></span><span id="text-cursor"></span></div>
        <div id="click-hint">▼ 点击继续</div>
      </div>`;
    document.getElementById('options-area').innerHTML = '<div id="options-container"></div><div id="cat-prompt-area" class="cat-prompt hidden"></div>';
    document.getElementById('sprite-box').style.display = 'flex';
    document.getElementById('text-box').style.display = 'block';
    updateStats();
    updateStageLabel();
    
    if (G.stage <= 5) {
      showStageIntro();
    } else {
      // Beyond stage 5 means ending - restore state
    }
    showToast('📂', '读档成功！');
  } catch(e) { showToast('⚠️', '读档失败'); }
}

function renderSaveSlots() {
  const con = document.getElementById('save-slots');
  con.innerHTML = '';
  let saves = {};
  try { saves = JSON.parse(localStorage.getItem('yz_saves') || '{}'); } catch(e) {}
  for (let i = 0; i < 5; i++) {
    const d = saves[i];
    const card = document.createElement('div');
    card.className = 'slot-card' + (d ? ' slot-active' : '');
    card.innerHTML = d
      ? `<div class="slot-num">📁 存档位 ${i+1}</div><div class="slot-info">${d.stageTitle||''}<br>${new Date(d.time).toLocaleString()}</div>`
      : `<div class="slot-num">📁 存档位 ${i+1}</div><div class="slot-empty">空</div>`;
    card.onclick = () => saveGame(i);
    con.appendChild(card);
  }
}

function renderLoadSlots() {
  const con = document.getElementById('load-slots');
  con.innerHTML = '';
  let saves = {};
  try { saves = JSON.parse(localStorage.getItem('yz_saves') || '{}'); } catch(e) {}
  for (let i = 0; i < 5; i++) {
    const d = saves[i];
    const card = document.createElement('div');
    card.className = 'slot-card' + (d ? ' slot-active' : '');
    card.innerHTML = d
      ? `<div class="slot-num">📁 存档位 ${i+1}</div><div class="slot-info">${d.stageTitle||''}<br>${new Date(d.time).toLocaleString()}<br>好感${d.affection} 了解${d.knowledge}</div>`
      : `<div class="slot-num">📁 存档位 ${i+1}</div><div class="slot-empty">空</div>`;
    card.onclick = d ? () => loadGame(i) : ()=>{};
    con.appendChild(card);
  }
}

// ======================== GALLERY ========================
function renderGallery() {
  const con = document.getElementById('gallery-grid');
  con.innerHTML = '';
  let unlocked = {};
  try { unlocked = JSON.parse(localStorage.getItem('yz_game_endings') || '{}'); } catch(e) {}
  // Also check current game
  Object.keys(G.endings).forEach(k => { if(G.endings[k]) unlocked[k]=true; });
  
  for (const [id, e] of Object.entries(ENDINGS)) {
    const card = document.createElement('div');
    const isUnlocked = unlocked[id];
    card.className = 'gal-card' + (isUnlocked ? ' unlocked' : ' locked');
    if (isUnlocked) {
      card.innerHTML = `
        <div class="gal-icon">${e.icon}</div>
        <div class="gal-title">${e.title}</div>
        <div class="gal-desc">${e.condition}</div>
      `;
    } else {
      card.innerHTML = `
        <div class="gal-icon">❓</div>
        <div class="gal-locked">???</div>
        <div class="gal-desc">未解锁</div>
      `;
    }
    con.appendChild(card);
  }
}

// ======================== REVIEW ========================
function renderReview() {
  const con = document.getElementById('review-list');
  con.innerHTML = '';
  if (G.history.length === 0) {
    con.innerHTML = '<div style="text-align:center;color:#bbb;padding:20px;">暂无记录</div>';
    return;
  }
  G.history.forEach(h => {
    const div = document.createElement('div');
    div.className = 'review-item';
    div.textContent = h;
    con.appendChild(div);
  });
  con.scrollTop = con.scrollHeight;
}

// ======================== MODALS ========================
function openModal(type) {
  playClick();
  if (type === 'save') renderSaveSlots();
  if (type === 'load') renderLoadSlots();
  if (type === 'gallery') renderGallery();
  if (type === 'review') renderReview();
  document.getElementById('modal-' + type).classList.add('show');
}
function closeModal(type) {
  document.getElementById('modal-' + type).classList.remove('show');
  if (_tsModalActive === type) restoreTitleScreen();
}

// ======================== RESET ========================
function resetGame() {
  // Auto-save current progress before reset
  autoSave();
  playClick();
  // Restore endings from localStorage so gallery is preserved
  let savedEndings = {};
  try { savedEndings = JSON.parse(localStorage.getItem('yz_game_endings') || '{}'); } catch(e) {}
  G = {
    stage:1, lineIdx:0, phase:'intro',
    affection:0, knowledge:0, catCount:0,
    tag:'', unlocked:{wechat:false,water:false,samehobby:false,hiddenclub:false,longletter:false,conflict:false,goodpath:false,mediumpath:false},
    endings:{good:false,bad:false,medium:false,mystery:false},
    history:[], skip:false, typing:false, stageStarted:false,
  };
  // Preserve previously unlocked endings for gallery
  try { localStorage.setItem('yz_game_endings', JSON.stringify(savedEndings)); } catch(e) {}
  document.getElementById('scene-area').innerHTML = `
    <div id="bg-canvas" style="background-image:url('背景.png')"></div>
    <div id="sprite-box"><img id="sprite-img" src="初始立绘.png" alt="椰子饭"></div>
    <div id="text-box" onclick="textBoxClick()">
      <div id="speaker-name"></div>
      <div id="text-content"><span id="text-display"></span><span id="text-cursor"></span></div>
      <div id="click-hint">▼ 点击继续</div>
    </div>`;
  document.getElementById('options-area').innerHTML = '<div id="options-container"></div><div id="cat-prompt-area" class="cat-prompt hidden"></div>';
  document.getElementById('float-btns').style.display = 'flex';
  updateStats();
  updateStageLabel();
  document.getElementById('sprite-box').style.display = 'flex';
  document.getElementById('text-box').style.display = 'block';
  showStageIntro();
}

// ======================== SIDEBAR TOGGLE ========================
function toggleSidebar() {
  const s = document.getElementById('sidebar');
  const b = document.getElementById('sidebar-backdrop');
  s.classList.toggle('open');
  b.classList.toggle('show');
}

// ======================== CLICK OUTSIDE MODAL ========================
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    const type = e.target.id.replace('modal-', '');
    closeModal(type);
  }
});


// ======================== TITLE SCREEN ========================
function startNewGame() {
  const ts = document.getElementById('title-screen');
  if (ts) {
    ts.style.transition = 'opacity 0.6s, transform 0.6s';
    ts.style.opacity = '0';
    ts.style.transform = 'scale(1.04)';
  }
  stopTsBgm();
  playClick();
  playBgm(); // call inside user gesture for autoplay policy
  setTimeout(() => {
    if (ts) ts.style.display = 'none';
    showStageIntro();
  }, 600);
}

function openSettings() { loadSettings(); document.getElementById('ts-settings').classList.remove('hidden'); }
function closeSettings() { document.getElementById('ts-settings').classList.add('hidden'); }

// ======================== TITLE SCREEN HANDLERS ========================
function continueGame() {
  try {
    const data = JSON.parse(localStorage.getItem('yz_autosave'));
    if (!data || !data.stage) {
      showToast('📂', '没有找到可继续的存档');
      return;
    }
    // Hide title screen
    const ts = document.getElementById('title-screen');
    ts.style.transition = 'opacity 0.6s, transform 0.6s';
    ts.style.opacity = '0';
    ts.style.transform = 'scale(1.04)';
    setTimeout(() => { ts.style.display = 'none'; }, 600);
    // Load game state into G
    Object.assign(G, data);
    G.unlocked = {...data.unlocked};
    G.endings = data.endings ? {...data.endings} : {good:false,bad:false,medium:false,mystery:false};
    // Also merge any endings saved separately
    try {
      const saved = JSON.parse(localStorage.getItem('yz_game_endings') || '{}');
      Object.keys(saved).forEach(k => { if (saved[k]) G.endings[k] = true; });
    } catch(e) {}
    // Reset UI
    document.getElementById('scene-area').innerHTML = `
      <div id="bg-canvas" style="background-image:url('背景.png')"></div>
      <div id="sprite-box"><img id="sprite-img" src="初始立绘.png" alt="椰子饭"></div>
      <div id="text-box" onclick="textBoxClick()">
        <div id="speaker-name"></div>
        <div id="text-content"><span id="text-display"></span><span id="text-cursor"></span></div>
        <div id="click-hint">▼ 点击继续</div>
      </div>`;
    document.getElementById('options-area').innerHTML = '<div id="options-container"></div><div id="cat-prompt-area" class="cat-prompt hidden"></div>';
    document.getElementById('sprite-box').style.display = 'flex';
    document.getElementById('text-box').style.display = 'block';
    updateStats();
    updateStageLabel();
    stopTsBgm();
    playBgm();
    if (G.stage <= 5) {
      showStageIntro();
    }
    showToast('📂', '已读取自动存档');
  } catch(e) {
    showToast('⚠️', '读取存档失败');
  }
}

let _tsModalActive = null;

function openLoadFromTitle() {
  _tsModalActive = 'load';
  const ts = document.getElementById('title-screen');
  ts.style.transition = 'opacity 0.4s';
  ts.style.opacity = '0';
  setTimeout(() => {
    ts.style.display = 'none';
    openModal('load');
  }, 400);
}

function openGalleryFromTitle() {
  _tsModalActive = 'gallery';
  const ts = document.getElementById('title-screen');
  ts.style.transition = 'opacity 0.4s';
  ts.style.opacity = '0';
  setTimeout(() => {
    ts.style.display = 'none';
    openModal('gallery');
  }, 400);
}

function restoreTitleScreen() {
  const ts = document.getElementById('title-screen');
  if (ts && ts.style.display === 'none') {
    ts.style.display = '';
    ts.style.transition = 'opacity 0.4s';
    requestAnimationFrame(() => { ts.style.opacity = '1'; });
  }
  _tsModalActive = null;
}

function quitGame() {
  if (confirm('确定要退出游戏吗？')) {
    playClick();
    window.close();
  }
}

function saveSettings() {
  playClick();
  applyBgmVolume();
  applySfxVolume();
  applyTextSpeed();
  applyBrightness();
  const modal = document.getElementById('ts-settings');
  const ranges = modal.querySelectorAll('.ts-range');
  const settings = {};
  ranges.forEach(r => {
    const label = r.closest('.ts-slider-row')?.querySelector('.ts-slider-label')?.textContent || '';
    settings[label] = r.value;
  });
  try { localStorage.setItem('yz_settings', JSON.stringify(settings)); } catch(e) {}
  showToast('⚙️', '设置已保存');
  closeSettings();
}

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('yz_settings'));
    if (s) {
      document.querySelectorAll('.ts-range').forEach(r => {
        const label = r.closest('.ts-slider-row')?.querySelector('.ts-slider-label')?.textContent;
        if (label && s[label] !== undefined) r.value = s[label];
      });
    }
    applyBgmVolume();
    applySfxVolume();
    applyTextSpeed();
    applyBrightness();
  } catch(e) {}
}

// Escape key and click-outside for settings modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('ts-settings');
    if (!modal.classList.contains('hidden')) closeSettings();
  }
});
document.getElementById('ts-settings').addEventListener('click', function(e) {
  if (e.target === this) closeSettings();
});

// ======================== INIT ========================
function initGame() {
  // Restore saved endings into G
  try {
    const saved = JSON.parse(localStorage.getItem('yz_game_endings') || '{}');
    Object.keys(saved).forEach(k => { if (saved[k]) G.endings[k] = true; });
  } catch(e) {}
  loadSettings();
  updateStats();
  updateStageLabel();
  renderGallery();
  playTsBgm(); // start title screen BGM (may be blocked by autoplay policy)
}

// Override closeModal clicks for overlay
['save','load','gallery','review'].forEach(t => {
  document.getElementById('modal-'+t).addEventListener('click', function(e) {
    if (e.target === this) closeModal(t);
  });
});

window.onload = initGame;
