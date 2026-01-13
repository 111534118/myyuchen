## MODIFIED Requirements
### Requirement: 一致性的頁面導覽

應用程式的所有主要頁面都 MUST (必須) 提供一個導覽列。導覽列應包含「遊戲資訊」、「主線攻略」和「互動地圖」三個連結。

#### Scenario: 從遊戲資訊頁導覽至主線攻略頁

**Given** 使用者正在「遊戲資訊」頁面 (`index.html`)。
**When** 使用者點擊導覽列中的「主線攻略」連結。
**Then** 應用程式將顯示「主線攻略」頁面 (`main-quest.html`)。

#### Scenario: 從主線攻略頁導覽至互動地圖頁

**Given** 使用者正在「主線攻略」頁面 (`main-quest.html`)。
**When** 使用者點擊導覽列中的「互動地圖」連結。
**Then** 應用程式將顯示預設的「互動地圖」頁面 (`map-shore.html`)。
