# Tasks: Add Game Overview Guide

1.  **[Spec]** Finalize and approve the spec deltas for `static-guide` and `site-navigation`.
2.  **[Code]** Add a "遊戲資訊" link to the navigation bar in `src/main/resources/static/game/index.html` and `src/main/resources/static/game/map.html`. This link should be to the left of "主線攻略" and point to `index.html`.
3.  **[Code]** Read the content from `doc/misc/PEAK 遊戲概覽與重點資訊.md`.
4.  **[Code]** Parse the Markdown content into HTML.
5.  **[Code]** Modify `src/main/resources/static/game/index.html` to append the new HTML content from the game overview file. The new content should appear after the existing "newbie guide".
6.  **[Styling]** Add basic styling to `src/main/resources/static/game/style.css` to ensure the new content is legible and consistent with the existing page design.
7.  **[Validation]** Manually verify in a browser that the `index.html` page correctly displays both the original newbie guide and the new game overview content.
8.  **[Validation]** Manually verify that the "遊戲資訊" link appears on both pages and correctly navigates to `index.html`.