# Tasks: Refactor Guide Content Structure

1.  [x] **[Spec]** Finalize and approve the spec deltas for `static-guide` and `site-navigation`.
2.  [x] **[Code]** Create a new file `src/main/resources/static/game/main-quest.html`.
3.  [x] **[Code]** Copy the original "Newbie Guide" content (from `<h1>` to `</p>`) from the original `index.html` into `main-quest.html`. The page structure (header, footer, nav) should be preserved.
4.  [x] **[Code]** Read the content from `doc/misc/PEAK 遊戲概覽與重點資訊.md`, parse it to HTML.
5.  [x] **[Code]** Replace the content of `src/main/resources/static/game/index.html`'s `<main>` element with the new game overview HTML.
6.  [x] **[Code]** Update the navigation bar in `index.html`, `map.html`, and the new `main-quest.html` to reflect the new structure:
    - "遊戲資訊" -> `index.html`
    - "主線攻略" -> `main-quest.html`
    - "互動地圖" -> `map.html`
7.  [x] **[Styling]** Ensure `style.css` styles are applied correctly to `main-quest.html`. No new styles should be needed initially.
8.  [x] **[Validation]** Manually verify the navigation and content on all three pages (`index.html`, `main-quest.html`, `map.html`).
