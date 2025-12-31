# Proposal: Refactor Guide Content Structure

This change will refactor the guide pages to separate game overview information from the main quest guide.

## Problem

The initial implementation placed both the game overview and the first quest guide on the same page (`index.html`), which led to confusion. The user wants the "Game Information" and "Main Quest Guide" to be distinct sections accessed via separate navigation links.

## Proposed Solution

This proposal introduces a structural change to how guide content is presented:
1.  **`index.html`** will be dedicated to the "Game Information" (遊戲資訊), containing the overview from `doc/misc/PEAK 遊戲概覽與重點資訊.md`.
2.  A new page, **`main-quest.html`**, will be created to host the "Main Quest Guide" (主線攻略), containing the original content of the newbie guide.
3.  The **site navigation** will be updated across all pages to link "遊戲資訊" to `index.html` and "主線攻略" to `main-quest.html`.

This change will be implemented by modifying the `static-guide` and `site-navigation` specs.
