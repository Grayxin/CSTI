# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CSTI (公务员性格测试 - Civil Servant Personality Test) is a static Single Page Application (SPA) web quiz. It presents 30 scenario-based questions and calculates a personality type based on an 8-dimensional scoring system.

**Technology Stack:** Vanilla JavaScript, CSS3, HTML5, Chart.js (CDN)

**No Build System:** This is a pure static application. To run/test, simply open `index.html` in a browser. No npm, bundlers, or compilation required.

## Core Architecture

### Three-View SPA Pattern
- `#home` - Landing page with animated mountain background
- `#quiz` - Question display with progress tracking
- `#result` - Personality result with radar chart visualization

View switching uses `.view.active` class pattern with `display: flex !important` / `display: none !important` to overcome ID selector specificity conflicts.

### State Management Pattern
```javascript
let currentQuestion = 0;
let userAnswers = [];  // Stores option index per question, NOT scores
let scores = { L, D, O, S, N, F, P, A };  // Calculated only at end
```

**Critical:** Scores are NOT accumulated during the quiz. User selections are stored in `userAnswers[]`, and `calculateAllScores()` is called only after completing all 30 questions. This allows "back" navigation and answer modification without score corruption.

### Scoring Algorithm (评分标准.md)

**8 Dimensions in 4 Opposing Pairs:**
- L (满载) vs D (枯竭) - Energy
- O (圆滑) vs S (耿直) - Social
- N (麻木) vs F (易碎) - Emotion
- P (入世) vs A (出世) - Authority

**Calculation Priority:**
1. **Easter Egg Check:** All 4 dimensions within ±1 difference → "薛定谔的临时工"
2. **Mutation Check (threshold ≥12):** Priority order: P → F → O → S → L → D → N → A
3. **Standard Calculation:** "Winner-takes-all" with tie-breaker rules (L=D→D, O=S→O, N=F→N, P=A→A)

### Personality Types
- 16 basic personalities (4-letter codes like LONP, DSFA)
- 9 mutation personalities (EXTREME_L, EXTREME_P, etc.)
- 1 easter egg (EASTER_EGG)

All defined in `personalities` object in `script.js`.

### Radar Chart
Uses Chart.js via CDN. Dynamic `max` calculation: `Math.max(maxValue + 2, 15)` to prevent overflow on extreme scores.

## File Structure

```
├── index.html     - SPA structure, three views
├── script.js      - All logic: questions data, personalities, state, functions
├── style.css      - Mobile-first responsive design, PC optimizations
├── 题目.md        - Question source (30 questions, 6 scenarios)
├── 性格.md        - Personality descriptions source
├── 评分标准.md    - Scoring algorithm specification
└── 提示词.md      - Original development requirements (UI/UX specs)
```

## Key Functions

- `startQuiz()` - Initialize state, show quiz view
- `renderQuestion()` - Display current question, highlight previous selection
- `selectOption(idx)` - Store answer in `userAnswers[]`, navigate to next
- `prevQuestion()` - Go back, re-render with selection highlight
- `calculateAllScores()` - Sum all scores from `userAnswers` at end
- `calculateResult()` - Apply scoring algorithm, return personality
- `renderRadarChart(result)` - Dynamic max/stepSize Chart.js config

## CSS Patterns

- CSS variables in `:root` for theme consistency
- `.view.active` with `!important` for view switching
- `@media (min-width: 768px)` - PC mode: 800px width, 2-column options grid
- `prefers-reduced-motion` media query for accessibility