# spec: site-navigation

## ADDED Requirements

### Requirement: 顯示攻略搜尋框

導覽列 MUST (必須) 在主要連結的右側顯示一個搜尋表單，包含一個輸入框和一個「搜尋」按鈕。

#### Scenario: 使用搜尋功能

**Given** 使用者正在任何一個有導覽列的頁面。
**When** 他們在搜尋框中輸入「羅盤」並點擊「搜尋」按鈕。
**Then** 頁面應導向至一個顯示「羅盤」相關搜尋結果的頁面。
