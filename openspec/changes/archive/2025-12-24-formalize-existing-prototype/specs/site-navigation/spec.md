**Parent-Spec:** `specs/site-navigation`
**Title:** 網站導覽
**Status:** `proposal`

## ADDED Requirements

### Requirement: 一致性的頁面導覽

應用程式的所有主要頁面都 MUST (必須) 提供一個導覽列，以允許使用者在它們之間輕鬆切換。

#### Scenario: 從攻略頁導覽至地圖頁

**Given** 使用者正在「主線攻略」頁面。
**When** 使用者點擊導覽列中的「互動地圖」連結。
**Then** 應用程式將顯示「互動地圖」頁面。

#### Scenario: 從地圖頁導覽至攻略頁

**Given** 使用者正在「互動地圖」頁面。
**When** 使用者點擊導覽列中的「主線攻略」連結。
**Then** 應用程式將顯示「主線攻略」頁面。