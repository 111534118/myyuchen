# spec: site-navigation

## ADDED Requirements

### Requirement: 提供遊戲資訊連結

導覽列 MUST (必須) 包含一個名為「遊戲資訊」的連結，該連結應指向主攻略頁面 (`index.html`)。

#### Scenario: 點擊遊戲資訊連結

**Given** 使用者正在任何一個有導覽列的頁面。
**When** 他們點擊「遊戲資訊」連結。
**Then** 應用程式應顯示包含遊戲總覽資訊的主攻略頁面。
