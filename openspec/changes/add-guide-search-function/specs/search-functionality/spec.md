# spec: search-functionality

## ADDED Requirements

### Requirement: 根據關鍵字搜尋攻略內容

應用程式 MUST (必須) 提供一個搜尋結果頁面，該頁面能根據使用者提供的關鍵字，顯示在 `index.html` 和 `main-quest.html` 中找到的相關內容。

#### Scenario: 搜尋到有效結果

**Given** 使用者在搜尋頁面，且搜尋的關鍵字是「羅盤」。
**And** 「主線攻略」頁面中含有「羅盤」這個詞。
**When** 搜尋完成。
**Then** 搜尋結果頁面 MUST 顯示至少一個結果項目。
**And** 該結果項目應包含一個指向「主線攻略」頁面的連結。
**And** 該結果項目應顯示部分包含「羅盤」的內文片段，且「羅盤」這個關鍵字應被突顯。

#### Scenario: 搜尋無結果

**Given** 使用者在搜尋頁面，且搜尋的關鍵字是「一個不存在的詞」。
**When** 搜尋完成。
**Then** 搜尋結果頁面 MUST 顯示「找不到結果」的訊息。
