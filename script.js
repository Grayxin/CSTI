// ========== 题目数据（30题）==========
const questions = [
  {
    id: 1,
    scene: "场景一：职场生存日常",
    text: "周一早晨 8:58 踏进办公室，发现科长已经坐在工位上了，你会：",
    options: [
      { label: "A", text: `立刻大声且热情地打招呼："科长早！周末休息得好吗？"`, tags: ["O", "P"] },
      { label: "B", text: "默默低头，假装在回工作微信，企图隐身滑入工位", tags: ["D", "A"] },
      { label: "C", text: `脑子里闪过一百种"他是不是在抓考勤"的恐怖猜想，心跳加速`, tags: ["F", "S"] },
      { label: "D", text: "面无表情地走过去，顺手把包一扔，该泡茶泡茶", tags: ["N", "D"] }
    ]
  },
  {
    id: 2,
    scene: "场景一：职场生存日常",
    text: "办公网突然崩溃，全单位断网半小时，你的真实反应是：",
    options: [
      { label: "A", text: "抓紧时间用手机热点把刚写好的材料发给领导过目", tags: ["L", "P"] },
      { label: "B", text: `狂喜！立刻点开微信群和搭子疯狂发送"哈哈哈哈哈哈"`, tags: ["F", "D"] },
      { label: "C", text: "顺势瘫在椅子上，双眼失去焦距，享受这难得的虚无", tags: ["N", "A"] },
      { label: "D", text: "跑到别的科室串门，趁机打听最近的人事八卦", tags: ["O", "L"] }
    ]
  },
  {
    id: 3,
    scene: "场景一：职场生存日常",
    text: `下午 3 点，同事神秘兮兮地递给你一杯奶茶："帮个小忙，这个台账你熟…"`,
    options: [
      { label: "A", text: `笑着接过奶茶："没问题，正好我一会也要弄我的。"`, tags: ["O", "L"] },
      { label: "B", text: "满脸警惕但不敢拒绝，接过来后在心里狂扇自己耳光", tags: ["F", "L"] },
      { label: "C", text: `义正言辞："不行啊，我手头还有张局交办的活儿。"`, tags: ["S", "A"] },
      { label: "D", text: "奶茶照喝，活儿先拖着，拖到他自己着急拿回去", tags: ["N", "D"] }
    ]
  },
  {
    id: 4,
    scene: "场景一：职场生存日常",
    text: "发工资的日子，你打开工资条，发现比上个月少了 50 块钱：",
    options: [
      { label: "A", text: "立刻去查绩效考核文件，看看是不是自己哪项扣分了，下次注意", tags: ["P", "L"] },
      { label: "B", text: "气到想砸键盘，晚上发了一条仅自己可见的崩溃朋友圈", tags: ["F", "S"] },
      { label: "C", text: "算了，才 50，不值得我去财务科看那群人的冷脸", tags: ["N", "A"] },
      { label: "D", text: "趁着倒水，看似不经意地问问老同事是不是大家都扣了", tags: ["O", "D"] }
    ]
  },
  {
    id: 5,
    scene: "场景一：职场生存日常",
    text: "参加全局大会，领导在台上念了两个小时毫不相干的报告，此时你在：",
    options: [
      { label: "A", text: `奋笔疾书，把领导的"金句"记在专用的红皮笔记本上`, tags: ["L", "P"] },
      { label: "B", text: "戴着降噪耳机听播客，头发刚好遮住耳朵", tags: ["D", "N"] },
      { label: "C", text: "在纸上疯狂画各种诡异的涂鸦，并在心里默默吐槽", tags: ["F", "S"] },
      { label: "D", text: "时刻保持坐姿端正，并在领导抬头时精准送上赞同的眼神", tags: ["O", "P"] }
    ]
  },
  {
    id: 6,
    scene: "场景二：材料与公文的无间道",
    text: `领导退回了你的请示件，上面只有一个字："改"。`,
    options: [
      { label: "A", text: "马上跑到领导办公室，虚心请教具体的修改方向", tags: ["O", "P"] },
      { label: "B", text: `回到工位，盯着那个"改"字看了十分钟，眼泪开始打转`, tags: ["F", "L"] },
      { label: "C", text: "调整一下行距，改了两个标点符号，明天再报一次", tags: ["N", "D"] },
      { label: "D", text: `直接发给部门里的老同志："哥，救命，帮我看看这啥意思？"`, tags: ["S", "O"] }
    ]
  },
  {
    id: 7,
    scene: "场景二：材料与公文的无间道",
    text: "写年终总结时，你发现自己这一年好像除了贴发票什么都没干：",
    options: [
      { label: "A", text: `熟练运用"统筹规划、扎实推进、创新赋能"等词汇，强行写出两万字`, tags: ["L", "O"] },
      { label: "B", text: `陷入深度自我怀疑："我这辈子是不是就这么废了？"`, tags: ["F", "S"] },
      { label: "C", text: "照抄去年的总结，把日期改成今年", tags: ["D", "N"] },
      { label: "D", text: "重点突出自己配合领导完成的几项大工作，弱化日常琐事", tags: ["P", "O"] }
    ]
  },
  {
    id: 8,
    scene: "场景二：材料与公文的无间道",
    text: "为了一个极其生僻的红头文件排版格式，你和办公室主任产生了分歧：",
    options: [
      { label: "A", text: "坚信自己查阅的国家标准是对的，拿出规定硬刚到底", tags: ["S", "L"] },
      { label: "B", text: "主任说啥就是啥，他就算要求排成心形我也照做", tags: ["O", "N"] },
      { label: "C", text: "表面答应修改，背后在部门小群里疯狂输出主任的坏话", tags: ["F", "O"] },
      { label: "D", text: "假装没听懂，把文件扔在那，等主任自己改", tags: ["D", "A"] }
    ]
  },
  {
    id: 9,
    scene: "场景二：材料与公文的无间道",
    text: "明天要迎检，今天晚上 10 点还在补造半年前的会议记录：",
    options: [
      { label: "A", text: "一边造假一边总结经验，发誓明年一定要按时做台账", tags: ["P", "L"] },
      { label: "B", text: "左手签字笔，右手速效救心丸，觉得这比坐牢还折磨", tags: ["F", "L"] },
      { label: "C", text: "模仿了八个同事的字迹，内心甚至觉得有点好玩", tags: ["O", "N"] },
      { label: "D", text: "随便抄几段敷衍了事，反正检查组也不会细看", tags: ["D", "A"] }
    ]
  },
  {
    id: 10,
    scene: "场景二：材料与公文的无间道",
    text: "你发现一份下发全县的文件上，把大领导的名字打错了一个字：",
    options: [
      { label: "A", text: "惊出一身冷汗，立刻想办法全网撤回并准备承担处分", tags: ["F", "S"] },
      { label: "B", text: "假装没看见，只要我不说，就没人知道是我排的版", tags: ["D", "N"] },
      { label: "C", text: "迅速联系各单位机要员，私底下悄悄更换，掩盖过去", tags: ["O", "L"] },
      { label: "D", text: "主动找领导承认错误，并深刻剖析自己的思想懈怠", tags: ["P", "O"] }
    ]
  },
  {
    id: 11,
    scene: "场景三：人际与社交的修罗场",
    text: "电梯门即将关上，你看到平时最喜欢骂人的分管副局长正走过来：",
    options: [
      { label: "A", text: `赶紧按开门键，并露出八颗牙齿的微笑："局长您先请！"`, tags: ["O", "P"] },
      { label: "B", text: `疯狂按关门键，心里默念"看不见我看不见我"`, tags: ["F", "D"] },
      { label: "C", text: "面无表情地看着电梯门关上，假装在发呆没看到", tags: ["N", "A"] },
      { label: "D", text: "开门等他，但在电梯里僵硬得像一具兵马俑", tags: ["S", "L"] }
    ]
  },
  {
    id: 12,
    scene: "场景三：人际与社交的修罗场",
    text: "单位聚餐，领导端着酒杯走到你这桌：",
    options: [
      { label: "A", text: `马上站起来，酒杯压到最低："领导我干了，您随意！"`, tags: ["O", "P"] },
      { label: "B", text: `端起椰树牌椰汁，理直气壮："我酒精过敏，以茶代酒。"`, tags: ["S", "A"] },
      { label: "C", text: "跟着大家一起站起来傻笑，抿一口杯子里的不明液体", tags: ["N", "D"] },
      { label: "D", text: "紧张到手抖，生怕领导突然问起自己负责的那个烂尾项目", tags: ["F", "L"] }
    ]
  },
  {
    id: 13,
    scene: "场景三：人际与社交的修罗场",
    text: `微信"相亲相爱工作群"里，同事老王发了一个极度冷场的中老年表情包：`,
    options: [
      { label: "A", text: `秒回一个大拇指表情，配文："王哥说得对！"`, tags: ["O", "P"] },
      { label: "B", text: "已读，锁屏，继续睡觉", tags: ["D", "A"] },
      { label: "C", text: "截图发到另一个没有老王的群里供大家嘲笑", tags: ["F", "S"] },
      { label: "D", text: `回复一个"呲牙"的系统表情，主打一个敷衍的礼貌`, tags: ["N", "O"] }
    ]
  },
  {
    id: 14,
    scene: "场景三：人际与社交的修罗场",
    text: "两个平级的科室推诿扯皮，最后皮球踢到了你这个基层大头兵这里：",
    options: [
      { label: "A", text: "利用自己的人脉，组个局把双方拉到一起把事情盘清楚", tags: ["O", "L"] },
      { label: "B", text: "谁也不理，把文件锁进抽屉，主打一个物理隔离", tags: ["D", "N"] },
      { label: "C", text: "气不过，跑去找大领导告状，要求明确职责边界", tags: ["S", "P"] },
      { label: "D", text: "晚上在被窝里哭半小时，第二天自己默默把活儿干了", tags: ["F", "L"] }
    ]
  },
  {
    id: 15,
    scene: "场景三：人际与社交的修罗场",
    text: "走廊里遇到其他科室的同事，他热情地跟你打招呼，但你完全想不起他叫什么：",
    options: [
      { label: "A", text: `"哎呀哥们/姐们，好久不见！最近忙啥呢？"完美糊弄过去`, tags: ["O", "L"] },
      { label: "B", text: "尴尬地点头微笑，加快脚步逃离现场", tags: ["F", "S"] },
      { label: "C", text: "毫无心理负担地点个头就走，反正大家都是牛马", tags: ["N", "D"] },
      { label: "D", text: `直接问："不好意思，您是哪个科室的来着？"`, tags: ["S", "A"] }
    ]
  },
  {
    id: 16,
    scene: "场景四：权力与欲望的试探",
    text: "单位有个提拔副科的推荐名额，你资历刚好够：",
    options: [
      { label: "A", text: "早就把竞争对手的优劣势分析透了，开始暗中找领导汇报思想", tags: ["P", "L"] },
      { label: "B", text: "觉得选不上，但又有点期待，每天都在疯狂猜想谁会拉票", tags: ["F", "O"] },
      { label: "C", text: "填表的时候弃权，我觉得现在每天准点下班挺好的", tags: ["A", "D"] },
      { label: "D", text: "觉得这是对自己工作的认可，认真准备竞聘演讲，自信上台", tags: ["S", "P"] }
    ]
  },
  {
    id: 17,
    scene: "场景四：权力与欲望的试探",
    text: `新来了一个背景很硬的年轻人，领导让你"带带他"：`,
    options: [
      { label: "A", text: "把核心业务倾囊相授，顺便跟他处成好哥们，当做政治投资", tags: ["O", "P"] },
      { label: "B", text: "只教他最简单的贴发票和复印，核心台账自己死死捏住", tags: ["L", "S"] },
      { label: "C", text: `把所有脏活累活都甩给他："年轻同志要多锻炼。"`, tags: ["D", "N"] },
      { label: "D", text: "表面客客气气，内心极度防备，生怕哪天被他顶了位置", tags: ["F", "O"] }
    ]
  },
  {
    id: 18,
    scene: "场景四：权力与欲望的试探",
    text: `发现单位的"红人"在报销上有明显的违规操作：`,
    options: [
      { label: "A", text: "默默搜集证据，找准时机匿名举报，为民除害", tags: ["S", "P"] },
      { label: "B", text: "当作没看见，多一事不如少一事，保命要紧", tags: ["N", "A"] },
      { label: "C", text: "旁敲侧击地提醒他一下，卖个人情", tags: ["O", "L"] },
      { label: "D", text: "心理极度不平衡，凭什么他能贪我连打车费都不给报", tags: ["F", "D"] }
    ]
  },
  {
    id: 19,
    scene: "场景四：权力与欲望的试探",
    text: "单位准备派你去艰苦的乡镇挂职一年，据说回来能解决职级：",
    options: [
      { label: "A", text: "坚决服从组织安排，这是镀金的大好机会！", tags: ["P", "L"] },
      { label: "B", text: "找一万个理由（比如腰突、备孕、狗没人喂）推脱", tags: ["D", "A"] },
      { label: "C", text: "表面答应，转头就开始托关系找人想办法调回城里", tags: ["O", "P"] },
      { label: "D", text: "认命了去挂职，到了乡下每天以泪洗面，倒数回家的日子", tags: ["F", "L"] }
    ]
  },
  {
    id: 20,
    scene: "场景四：权力与欲望的试探",
    text: `你对"为人民服务"这句话的当前真实理解是：`,
    options: [
      { label: "A", text: "这是我考公的初心，无论多累都要坚持做实事", tags: ["L", "S"] },
      { label: "B", text: `本质上是"为领导服务"，领导满意就是人民满意`, tags: ["O", "P"] },
      { label: "C", text: "我连自己都服务不好，别给我扣这么大的帽子了", tags: ["F", "D"] },
      { label: "D", text: "一份工作而已，给钱干活，到点下班，互不相欠", tags: ["N", "A"] }
    ]
  },
  {
    id: 21,
    scene: "场景五：内耗与解脱的边缘",
    text: "连续加班三个月后，你终于迎来了一天的调休，你会：",
    options: [
      { label: "A", text: "手机关机，在家里躺成一具尸体，谁找我谁死", tags: ["D", "N"] },
      { label: "B", text: "去医院挂了五个科室的号，全面检查自己这副破烂身体", tags: ["F", "A"] },
      { label: "C", text: "约同在体制内的朋友去喝酒，大骂各自的领导三小时", tags: ["S", "O"] },
      { label: "D", text: "带着电脑去咖啡厅，以防单位随时有突发任务找我", tags: ["L", "P"] }
    ]
  },
  {
    id: 22,
    scene: "场景五：内耗与解脱的边缘",
    text: `听到"原则上同意"这个词，你的第一反应是：`,
    options: [
      { label: "A", text: "就是不同意，马上准备 Plan B", tags: ["O", "L"] },
      { label: "B", text: "别整这些虚的，直接告诉我行还是不行！", tags: ["S", "F"] },
      { label: "C", text: "随便吧，反正天塌下来有高个子顶着", tags: ["N", "D"] },
      { label: "D", text: `好的，我这就去琢磨领导"原则外"的顾虑是什么`, tags: ["P", "O"] }
    ]
  },
  {
    id: 23,
    scene: "场景五：内耗与解脱的边缘",
    text: "如果能拥有一项体制内超能力，你希望是：",
    options: [
      { label: "A", text: `"一眼看透领导心思"的读心术`, tags: ["O", "P"] },
      { label: "B", text: `"材料一键生成且绝对不被退回"的神笔马良技能`, tags: ["L", "N"] },
      { label: "C", text: `"无论怎么摸鱼都不会被发现"的隐身斗篷`, tags: ["D", "A"] },
      { label: "D", text: `"每天都能准时下班且毫无愧疚感"的钢铁神经`, tags: ["F", "A"] }
    ]
  },
  {
    id: 24,
    scene: "场景五：内耗与解脱的边缘",
    text: "坐在工位上，看着窗外的夕阳，你最常冒出的念头是：",
    options: [
      { label: "A", text: `"等我当上主任，绝对不让下面的人这么受罪。"`, tags: ["P", "L"] },
      { label: "B", text: `"再干 25 年 3 个月零 8 天就能退休了。"`, tags: ["A", "N"] },
      { label: "C", text: `"我想辞职我想辞职我想辞职…算了下个月还要交房租。"`, tags: ["F", "D"] },
      { label: "D", text: `"晚上去哪搓一顿慰劳一下自己呢？"`, tags: ["O", "S"] }
    ]
  },
  {
    id: 25,
    scene: "场景五：内耗与解脱的边缘",
    text: `年底考核你被评了"合格"（没有优秀），因为名额给了领导的关系户：`,
    options: [
      { label: "A", text: "直接冲进局长办公室拍桌子要个说法", tags: ["S", "F"] },
      { label: "B", text: "无所谓，只要不开除我，合格就合格", tags: ["N", "A"] },
      { label: "C", text: "明年我也要找关系，吃一堑长一智", tags: ["O", "P"] },
      { label: "D", text: "气得半个月睡不着觉，觉得自己是个彻底的loser", tags: ["F", "L"] }
    ]
  },
  {
    id: 26,
    scene: "场景六：极限拉扯与最终幻想",
    text: `财务科的大姐以"字迹太潦草"为由，第三次打回了你的报销单：`,
    options: [
      { label: "A", text: `堆起笑脸，拿出一盒切好的水果："姐您受累，我现场重写。"`, tags: ["O", "L"] },
      { label: "B", text: "当场崩溃，在财务科走廊里大声嚎啕大哭", tags: ["F", "S"] },
      { label: "C", text: "面无表情地撕了报销单，这 200 块钱我不要了，当给单位捐款", tags: ["N", "D"] },
      { label: "D", text: `把单子扔给科长："领导，财务卡我不给报，您看怎么办？"`, tags: ["P", "S"] }
    ]
  },
  {
    id: 27,
    scene: "场景六：极限拉扯与最终幻想",
    text: "单位引进了一个号称能替代人工的 AI 办公系统：",
    options: [
      { label: "A", text: "积极学习，争取成为全单位第一个 AI 讲师，作为晋升资本", tags: ["P", "L"] },
      { label: "B", text: "冷笑一声，体制内的推诿扯皮 AI 学得会？", tags: ["N", "O"] },
      { label: "C", text: `极度恐慌，每天担心自己这个"废物"要被优化了`, tags: ["F", "D"] },
      { label: "D", text: "狂喜，立刻用 AI 帮自己写年终总结和学习心得", tags: ["D", "A"] }
    ]
  },
  {
    id: 28,
    scene: "场景六：极限拉扯与最终幻想",
    text: "同事因为受不了压力突然裸辞了，你的感觉是：",
    options: [
      { label: "A", text: "敬他是条汉子，并打听他跳槽去了哪家好公司", tags: ["S", "P"] },
      { label: "B", text: "感觉自己的工作量又要增加了，眼前一黑", tags: ["F", "L"] },
      { label: "C", text: "关我屁事，只要不把他的活儿分给我就行", tags: ["N", "D"] },
      { label: "D", text: "觉得可惜，这可是个好用的背锅侠啊", tags: ["O", "A"] }
    ]
  },
  {
    id: 29,
    scene: "场景六：极限拉扯与最终幻想",
    text: "当你听说隔壁老李（每天喝茶看报）的工资比你（每天加班到吐）高 3000 块：",
    options: [
      { label: "A", text: "立刻开始研究老李的职级和工龄，规划自己的晋升路线", tags: ["P", "L"] },
      { label: "B", text: "咬牙切齿，并在所有材料里暗暗给老李挖坑", tags: ["F", "S"] },
      { label: "C", text: "顿悟了。从明天起，我也要买一套好茶具", tags: ["D", "A"] },
      { label: "D", text: "跑去跟老李套近乎，看看能不能蹭点他的茶叶和人脉", tags: ["O", "O"] }
    ]
  },
  {
    id: 30,
    scene: "场景六：极限拉扯与最终幻想",
    text: "如果要用一句话总结你的体制内生涯，你会选：",
    options: [
      { label: "A", text: `"世界就是一个巨大的草台班子，而我是那个努力维持运转的齿轮。"`, tags: ["L", "P"] },
      { label: "B", text: `"只要我不尴尬，所有的烂摊子就都是别人的。"`, tags: ["O", "N"] },
      { label: "C", text: `"在发疯与妥协之间，我选择周期性精神死亡。"`, tags: ["F", "D"] },
      { label: "D", text: `"没有困难的工作，只有勇敢的狗狗狗狗狗狗狗…"`, tags: ["S", "A"] }
    ]
  }
];

// ========== 性格库（25种）==========
const personalities = {
  // 16种基础人格组合
  "LONP": {
    name: "深海老油条",
    type: "基础",
    desc: "体制内的终极掠食者。他能写最红的材料，喝最烈的白酒，扛最重的锅。表面八面玲珑，实则内心极度渴望权力。只要职位能动，他能把地球装进他的公文包里。",
    icon: "🐟"
  },
  "LONA": {
    name: "工位地缚灵",
    type: "基础",
    desc: `干活很猛，社交也很溜，但对升职毫无兴趣。他把单位当成了道场，把写材料当成了修行。领导以为他是中流砥柱，其实他只是患有了"不在工位敲键盘就会死"的强迫症。`,
    icon: "⚓"
  },
  "LSNP": {
    name: "铁血推土机",
    type: "基础",
    desc: `业务能力极强，但嘴巴比石头还硬。从不屑于溜须拍马，坚信"真理只在我的红头文件射程之内"。虽然天天得罪人，但因为单位缺不了这种干实事的老牛，反而稳步高升。`,
    icon: "🚜"
  },
  "LSNA": {
    name: "莫的感情的盖章机",
    type: "基础",
    desc: `极度按规矩办事的法家传人。没有眼力见，不吃人情世故这一套。"规定不行就是不行"，哪怕玉皇大帝来了，也得填个申请表。是财务科和机要室最常见的神奇物种。`,
    icon: "📋"
  },
  "LOFP": {
    name: "焦虑的端水艺术家",
    type: "基础",
    desc: "每天都在平衡科室的恩怨情仇。人前笑眯眯，其实内心已经碎成了渣。晚上回家常常搜索'如何优雅地给领导下毒'。他在仕途和精神崩溃的边缘反复横跳。",
    icon: "⚖️"
  },
  "LOFA": {
    name: "微笑抑郁症患者",
    type: "基础",
    desc: "全单位出名的大好人，谁找他帮忙都答应，然后半夜一边哭一边替别人干活。对当官没兴趣，但害怕得罪任何人。这是一种极度环保的性格：内耗自己，照亮他人。",
    icon: "😊"
  },
  "LSFP": {
    name: "材料堆里的电子骨灰",
    type: "基础",
    desc: `易碎、耿直、且干活多。每一个"好的收到"背后，都是在电脑前颤抖的手。怀揣着一点点可怜的政治抱负，却是单位里最亮的耗材，燃烧自己，甚至连灰都留不下来。`,
    icon: "💀"
  },
  "LSFA": {
    name: "纯爱战神",
    type: "基础",
    desc: `带着"为人民服务"的纯洁信仰考入体制内，结果被现实撞得头破血流。不会圆滑，又极度敏感。每天都在"我辞职算了"和"为了群众再坚持一下"之间精神分裂。`,
    icon: "❤️"
  },
  "DONP": {
    name: "隐形的刺客卷王",
    type: "基础",
    desc: `平时看着都在摸鱼，从不加班，但总能在关键时刻（比如局长视察）精准展现自己的成果。这种人是天赋型选手，他不是在上班，他是在玩一款名为"体制"的真人策略游戏。`,
    icon: "👻"
  },
  "DONA": {
    name: "工位禅修大师",
    type: "基础",
    desc: `掌握了"看起来很忙"的终极奥义。键盘敲得震天响，其实在打消消乐；眉头紧锁看着屏幕，其实在看股票。只要他不尴尬，整个单位的高压气氛就只能是他的背景板。`,
    icon: "🧘"
  },
  "DSNP": {
    name: "绝命毒师",
    type: "基础",
    desc: "不干活，不社交，面瘫，但极度渴望提拔。靠着神仙般的后台或者令人胆寒的抓把柄能力，让所有人都对他忌惮三分。他是单位里的伏地魔，不可说，不敢惹。",
    icon: "🧪"
  },
  "DSNA": {
    name: "透明的暗物质",
    type: "基础",
    desc: "连门口保安都记不住他的脸。开会从不发言，评优从不露面。他是单位里的暗物质，真实存在但无法观测。他的工资就像是宇宙对他的低保补贴。",
    icon: "🌫️"
  },
  "DOFP": {
    name: "心机笨蛋",
    type: "基础",
    desc: "极度想进步，每天到处拉关系凑酒局，但实际上什么核心工作都干不好。一遇到事就慌乱甩锅，内心脆弱得像个玻璃渣。领导看他就像看一个上蹿下跳的吗喽。",
    icon: "🦊"
  },
  "DOFA": {
    name: "交际花大妈/大爷",
    type: "基础",
    desc: "正事一点不干，但单位谁家狗生了都知道。每天游走于各个办公室倒卖八卦。因为极度出世，对领导毫无威胁，反而成了单位生态系统里不可或缺的润滑剂。",
    icon: "🌸"
  },
  "DSFP": {
    name: "怀才不遇的怨妇",
    type: "基础",
    desc: `觉得自己能力通天，但因为不肯低头所以没被提拔（其实是因为啥也不干）。每天在办公室里愤世嫉俗，内耗严重，散发着让方圆十米草木不生的负能量。`,
    icon: "☁️"
  },
  "DSFA": {
    name: "带薪流浪汉",
    type: "基础",
    desc: "精神已经离职三万年。工位上只放一个水杯，手机常年静音。唯一的愿望是世界和平且报账单别被打回。只要不给他派活，他能在这张办公桌前一直枯坐到宇宙毁灭。",
    icon: "🌙"
  },
  // 9种极端突变人格
  "EXTREME_L": {
    name: "终极八爪鱼",
    type: "突变",
    desc: "他不是在揽活，他是在吸食工作。全单位的台账、PPT、新闻稿都在他手里。他一旦休假，整个单位的运转将在一小时内瘫痪。",
    icon: "🐙"
  },
  "EXTREME_D": {
    name: "量子态员工",
    type: "突变",
    desc: "测不准原理的实体化。你永远不知道他此刻在工位、在厕所、在车库还是在家里睡觉。只要你不主动观测他，他就处于一种绝对摸鱼的叠加态。",
    icon: "🌊"
  },
  "EXTREME_O": {
    name: "人形变色龙",
    type: "突变",
    desc: "没有任何原则，领导的眼色就是他的出厂设置。能在三秒内无缝切换三种不同级别的笑容。他的脊椎骨是用高分子柔性材料做的，随时可以呈现90度弯曲。",
    icon: "🦎"
  },
  "EXTREME_S": {
    name: "职场泥石流",
    type: "突变",
    desc: "主打一个创死所有人。开会直接指出局长的数据错误，聚餐当面吐槽菜难吃。他能在体制内存活至今，完全是一个医学和生物学上的双重奇迹。",
    icon: "💥"
  },
  "EXTREME_N": {
    name: "三体人降临",
    type: "突变",
    desc: "已经脱离了低级碳基生物的情绪。被骂？无所谓。降薪？无所谓。地球爆炸？哦，那我不用写这篇材料了。他的脑电波常年维持在一条直线上。",
    icon: "🪐"
  },
  "EXTREME_F": {
    name: "尖叫的土拨鼠",
    type: "突变",
    desc: `稍微有一点风吹草动（比如领导多看了一眼），他的内心小剧场就已经演完了整部《甄嬛传》。每天在工位上默默流下两行清泪，是单位里最昂贵的消耗品。`,
    icon: "🐿️"
  },
  "EXTREME_P": {
    name: "权力多巴胺成瘾者",
    type: "突变",
    desc: `即使是发一个通知，也要用上最高级的红头文件格式和排版，以彰显自己的存在感。做梦都在背《厚黑学》，只要能往上爬，他甚至可以出卖自己心爱的发财树。`,
    icon: "👑"
  },
  "EXTREME_A": {
    name: "修仙者",
    type: "突变",
    desc: "已经超脱了三界之外，不在五行之中。评优评先填表查无此人，打卡下班快如闪电。他看领导的眼神，就像在看一群还在泥里打滚的凡人。",
    icon: "🪷"
  },
  // 隐藏彩蛋
  "EASTER_EGG": {
    name: "薛定谔的临时工",
    type: "彩蛋",
    desc: `出了成绩，他是单位骨干；出了事故，他就是被通报的那个"临时人员"。一种极其玄幻的体制内存在，是宇宙中最完美的替罪羊和最坚韧的牛马。`,
    icon: "🐱"
  }
};

// ========== 状态管理（重构）==========
let currentQuestion = 0;
let userAnswers = [];  // 只存储用户选择（按题目index存储选项索引），不累加分数
let scores = { L: 0, D: 0, O: 0, S: 0, N: 0, F: 0, P: 0, A: 0 };  // 最终计算时才使用
let radarChart = null;
let shuffledQuestions = [];  // 洗牌后的题目数组

// ========== 核心函数 ==========

// Fisher-Yates 洗牌算法（深拷贝并打乱顺序）
function shuffleQuestions() {
  shuffledQuestions = questions.map(q => ({ ...q, options: q.options.map(o => ({ ...o })) }));
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
  }
}

// 开始测试
function startQuiz() {
  currentQuestion = 0;
  userAnswers = [];  // 清空答案数组
  scores = { L: 0, D: 0, O: 0, S: 0, N: 0, F: 0, P: 0, A: 0 };
  shuffleQuestions();  // 洗牌打乱题目顺序
  showView('quiz');
  renderQuestion();
}

// 渲染当前题目
function renderQuestion() {
  const q = shuffledQuestions[currentQuestion];

  // 更新进度条
  const progress = ((currentQuestion + 1) / 30) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;
  document.getElementById('questionNum').textContent = currentQuestion + 1;

  // 更新返回按钮状态（第一题隐藏）
  const backBtn = document.getElementById('backBtn');
  backBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';

  // 更新场景和题目
  document.getElementById('sceneTag').textContent = q.scene;
  document.getElementById('questionText').textContent = q.text;

  // 渲染选项
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  // 获取当前题目已有的答案（用于回显选中状态）
  const existingAnswer = userAnswers[currentQuestion];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';

    // 如果之前选过这个选项，回显选中状态
    if (existingAnswer !== undefined && existingAnswer === idx) {
      btn.classList.add('selected');
    }

    btn.innerHTML = `
      <span class="option-label">${opt.label}</span>
      <span class="option-text">${opt.text}</span>
    `;
    btn.onclick = () => selectOption(idx);
    container.appendChild(btn);
  });
}

// 选择选项（重构：只记录答案，不累加分数）
function selectOption(idx) {
  // 标记选中状态
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.classList.remove('selected'));
  buttons[idx].classList.add('selected');

  // 记录答案（覆盖式存储，支持修改）
  userAnswers[currentQuestion] = idx;

  // 延迟300ms后切换下一题
  setTimeout(() => {
    if (currentQuestion < 29) {
      currentQuestion++;
      // 添加淡出动画
      const quizCard = document.querySelector('.quiz-card');
      quizCard.classList.add('fade-out');
      setTimeout(() => {
        renderQuestion();
        quizCard.classList.remove('fade-out');
        quizCard.classList.add('fade-in');
        setTimeout(() => quizCard.classList.remove('fade-in'), 300);
      }, 300);
    } else {
      // 测试完成，一次性计算总分
      calculateAllScores();
      const result = calculateResult();
      showView('result');
      renderResult(result);
    }
  }, 300);
}

// 返回上一题
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    // 添加淡出动画
    const quizCard = document.querySelector('.quiz-card');
    quizCard.classList.add('fade-out');
    setTimeout(() => {
      renderQuestion();
      quizCard.classList.remove('fade-out');
      quizCard.classList.add('fade-in');
      setTimeout(() => quizCard.classList.remove('fade-in'), 300);
    }, 300);
  }
}

// 一次性计算所有分数（仅在完成30题后调用）
function calculateAllScores() {
  scores = { L: 0, D: 0, O: 0, S: 0, N: 0, F: 0, P: 0, A: 0 };

  userAnswers.forEach((optionIdx, questionIdx) => {
    if (optionIdx !== undefined) {
      const tags = shuffledQuestions[questionIdx].options[optionIdx].tags;
      tags.forEach(tag => {
        scores[tag]++;
      });
    }
  });
}

// 计算结果
function calculateResult() {
  // Step 1: 检查隐藏彩蛋（薛定谔的临时工）
  const isEasterEgg =
    Math.abs(scores.L - scores.D) <= 1 &&
    Math.abs(scores.O - scores.S) <= 1 &&
    Math.abs(scores.N - scores.F) <= 1 &&
    Math.abs(scores.P - scores.A) <= 1;

  if (isEasterEgg) {
    return {
      code: "EASTER_EGG",
      personality: personalities["EASTER_EGG"],
      scores: scores,
      type: "彩蛋"
    };
  }

  // Step 2: 检查突变人格（按优先级：P→F→O→S→L→D→N→A）
  const mutationPriority = ['P', 'F', 'O', 'S', 'L', 'D', 'N', 'A'];
  for (const dim of mutationPriority) {
    if (scores[dim] >= 12) {
      return {
        code: `EXTREME_${dim}`,
        personality: personalities[`EXTREME_${dim}`],
        scores: scores,
        isMutation: true,
        mutationDim: dim,
        type: "突变"
      };
    }
  }

  // Step 3: 常规结算（胜者通吃+同分降级）
  const result = {
    LvsD: scores.L > scores.D ? 'L' : (scores.L < scores.D ? 'D' : 'D'), // 平局→D
    OvsS: scores.O > scores.S ? 'O' : (scores.O < scores.S ? 'S' : 'O'), // 平局→O
    NvsF: scores.N > scores.F ? 'N' : (scores.N < scores.F ? 'F' : 'N'), // 平局→N
    PvsA: scores.P > scores.A ? 'P' : (scores.P < scores.A ? 'A' : 'A')  // 平局→A
  };

  const code = `${result.LvsD}${result.OvsS}${result.NvsF}${result.PvsA}`;

  return {
    code: code,
    personality: personalities[code],
    scores: scores,
    dimensions: result,
    type: "基础"
  };
}

// 渲染结果页
function renderResult(result) {
  // 更新性格信息
  document.getElementById('resultTitle').textContent = result.personality.name;
  document.getElementById('resultCode').textContent = result.type === "彩蛋" ? "彩蛋触发！" : (result.type === "突变" ? `突变：${result.mutationDim}≥12` : result.code);
  document.getElementById('resultDesc').textContent = result.personality.desc;

  // 更新人物立绘图片
  updateResultIcon(result);

  // 渲染雷达图
  renderRadarChart(result);

  // 渲染各维度得分
  renderScoresDisplay(result);
}

// 更新结果人物立绘（根据性格类型生成图片路径）
function updateResultIcon(result) {
  const iconContainer = document.getElementById('resultIcon');

  // 根据性格类型生成图片路径
  let imagePath;
  if (result.type === "彩蛋") {
    // 隐藏彩蛋：HIDDEN.png
    imagePath = 'img/personality/HIDDEN.png';
  } else if (result.type === "突变") {
    // 极端突变人格：E-{突变字母}.png
    imagePath = `img/personality/E-${result.mutationDim}.png`;
  } else {
    // 16种基础人格：直接使用4位字母代码.png
    imagePath = `img/personality/${result.code}.png`;
  }

  // 渲染图片
  iconContainer.innerHTML = `<img src="${imagePath}" alt="${result.personality.name}" class="character-img">`;
}

// 渲染雷达图（动态max值，防止溢出）
function renderRadarChart(result) {
  const ctx = document.getElementById('radarChart').getContext('2d');

  // 如果已有图表，先销毁
  if (radarChart) {
    radarChart.destroy();
  }

  // 准备数据：取每个对抗池胜出维度的得分
  let data;
  if (result.isMutation) {
    // 突变人格：显示所有8维度
    data = {
      labels: ['L满载', 'D枯竭', 'O圆滑', 'S耿直', 'N麻木', 'F易碎', 'P入世', 'A出世'],
      values: [scores.L, scores.D, scores.O, scores.S, scores.N, scores.F, scores.P, scores.A]
    };
  } else {
    // 常规人格：显示4维度对抗结果
    data = {
      labels: ['精力(L/D)', '社交(O/S)', '情绪(N/F)', '权力(P/A)'],
      values: [
        Math.max(scores.L, scores.D),
        Math.max(scores.O, scores.S),
        Math.max(scores.N, scores.F),
        Math.max(scores.P, scores.A)
      ]
    };
  }

  // 动态计算max值，防止溢出
  const maxValue = Math.max(...data.values);
  const chartMax = Math.max(maxValue + 2, 15);
  // 动态计算stepSize，确保网格合理
  const stepSize = Math.ceil(chartMax / 5);

  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.labels,
      datasets: [{
        label: '维度得分',
        data: data.values,
        fill: true,
        backgroundColor: 'rgba(243, 156, 18, 0.3)',
        borderColor: '#f39c12',
        borderWidth: 2,
        pointBackgroundColor: '#e67e22',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#e67e22'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: chartMax,
          ticks: {
            stepSize: stepSize,
            color: '#7f8c8d',
            backdropColor: 'transparent'
          },
          grid: {
            color: 'rgba(243, 156, 18, 0.2)'
          },
          angleLines: {
            color: 'rgba(243, 156, 18, 0.2)'
          },
          pointLabels: {
            color: '#2c3e50',
            font: {
              size: 11,
              weight: '500'
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// 渲染各维度得分显示
function renderScoresDisplay(result) {
  const container = document.getElementById('scoresDisplay');

  let html = '';
  if (result.isMutation) {
    html = `
      <div class="score-item">
        <div class="score-label">L</div>
        <div class="score-value">${scores.L}</div>
      </div>
      <div class="score-item">
        <div class="score-label">D</div>
        <div class="score-value">${scores.D}</div>
      </div>
      <div class="score-item">
        <div class="score-label">O</div>
        <div class="score-value">${scores.O}</div>
      </div>
      <div class="score-item">
        <div class="score-label">S</div>
        <div class="score-value">${scores.S}</div>
      </div>
      <div class="score-item">
        <div class="score-label">N</div>
        <div class="score-value">${scores.N}</div>
      </div>
      <div class="score-item">
        <div class="score-label">F</div>
        <div class="score-value">${scores.F}</div>
      </div>
      <div class="score-item">
        <div class="score-label">P</div>
        <div class="score-value">${scores.P}</div>
      </div>
      <div class="score-item">
        <div class="score-label">A</div>
        <div class="score-value">${scores.A}</div>
      </div>
    `;
  } else {
    html = `
      <div class="score-item">
        <div class="score-label">${result.dimensions.LvsD}</div>
        <div class="score-value">${Math.max(scores.L, scores.D)}</div>
      </div>
      <div class="score-item">
        <div class="score-label">${result.dimensions.OvsS}</div>
        <div class="score-value">${Math.max(scores.O, scores.S)}</div>
      </div>
      <div class="score-item">
        <div class="score-label">${result.dimensions.NvsF}</div>
        <div class="score-value">${Math.max(scores.N, scores.F)}</div>
      </div>
      <div class="score-item">
        <div class="score-label">${result.dimensions.PvsA}</div>
        <div class="score-value">${Math.max(scores.P, scores.A)}</div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// 重新测试
function restartQuiz() {
  if (radarChart) {
    radarChart.destroy();
    radarChart = null;
  }
  showView('home');
}

// 切换视图
function showView(viewId) {
  const views = document.querySelectorAll('.view');
  views.forEach(v => {
    v.classList.remove('active');
    if (v.id === viewId) {
      v.classList.add('active');
    }
  });
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
  showView('home');
});