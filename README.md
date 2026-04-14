# 🏛️ CSTI (Civil Servant Type Indicator) - 公务员性格测试

> “你是深海老油条，还是带薪流浪汉？” 
> 一款专为体制内/国企打工人量身定制的、具有“淡淡疯感”的职场生存性格测试。

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

## 💡 项目简介

近期互联网爆火了各种解构 MBTI 的测试。**CSTI（公务员性格测试）** 便是由此启发，精准提取了体制内生存的四大核心矛盾，通过 30 道极具画面感的真实职场场景题（如：迎检造台账、替同事背黑锅、电梯偶遇大领导等），测算出你在职场生态中的真实段位。

本项目采用纯前端原生技术（Vanilla JS + HTML + CSS）构建，无需编译，开箱即用。

## 🧬 四大核心维度（生存代谢系统）

我们抛弃了传统的 E/I、S/N，重构了更适合体制内体质的评价体系：

* 🔋 **精力代谢 (Energy)：** `L (Loaded/满载/卷王)` vs `D (Drained/枯竭/摸鱼)`
* 🎭 **社交厚度 (Social)：** `O (Oily/圆滑/世故)` vs `S (Straight/耿直/真诚)`
* 💔 **情绪水位 (Mental)：** `N (Numb/麻木/稳定)` vs `F (Fragile/易碎/内耗)`
* 👑 **权力感知 (Authority)：** `P (Proactive/入世/求升职)` vs `A (Apathetic/出世/等退休)`

## ✨ 核心特性

- **25 种专属人格图鉴**：包含 16 种基础人格（如：`LONP 深海老油条`）、9 种单维度爆表的“极端突变人格”（如：`极端 P 型：权力多巴胺成瘾者`），以及 1 个极小概率触发的隐藏彩蛋（`薛定谔的临时工`）。
- **极佳的 UI/UX 体验**：深色温暖渐变背景、MBTI 风格的低多边形人物立绘展示、平滑的卡片过渡与立绘呼吸动效。
- **动态雷达图生成**：集成 `Chart.js`，根据用户答题得分动态生成多维能力雷达图，直观展示“卷度”与“疯感”。
- **单页应用 (SPA) 架构**：纯原生 JS 路由控制，题目乱序渲染，状态管理严谨（支持无损返回修改答案）。

## 📁 目录结构

    CSTI/
    ├── index.html          # 主页面（包含应用入口与 DOM 结构）
    ├── style.css           # 样式文件（响应式布局与微动效）
    ├── script.js           # 核心逻辑（题库、评分引擎、DOM操作）
    ├── README.md           # 项目说明文档
    └── img/
        └── personality/    # MBTI 风格人物立绘目录
            ├── LONP.png    # 基础人格图片 (16张)
            ├── ...
            ├── E-L.png     # 突变人格图片 (以 E- 开头, 8张)
            └── HIDDEN.png  # 隐藏彩蛋图片

## 🚀 如何运行

本项目没有任何 Node.js 依赖或复杂的构建工具！

1. 克隆或下载本项目到本地。
2. 确保 `img/personality/` 目录下已放置对应的 PNG 图片资源。
3. 直接在浏览器中双击打开 `index.html`，即可开始测试！

> **注**：由于使用 CDN 引入了 `Chart.js`，请确保测试设备处于联网状态。如果遇到跨域或安全策略限制（部分浏览器严格限制 `file:///` 协议加载外部脚本），建议使用 VS Code 的 `Live Server` 插件启动本地服务预览。

## ⚖️ 评分算法与机制

本项目的结算引擎不仅仅是简单的分值累加，而是引入了：
1. **胜者通吃**：对抗维度得分高者胜出。
2. **同分降级原则**：在体制内，不主动就是退缩（如 L=D 时，默认判定为 D 枯竭）。
3. **阈值熔断机制**：任一单项得分 ≥ 12 分时，强制阻断常规计算，直接触发对应维度的“极端突变人格”。

## 📜 免责声明

本项目及测试结果仅供娱乐和“赛博宣泄”，没有任何严谨的心理学依据。请勿将其作为升职加薪、辞职跑路或向上管理的科学参考。祝大家准时下班，永不背锅！