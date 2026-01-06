## ADDED Requirements

### Requirement: Support multiple independent interactive map pages
New HTML pages MUST be created to display additional interactive maps.
#### Scenario: 系統應能顯示「Shore (海岸)」地圖
系統應提供一個獨立的 HTML 頁面 (例如 `map-shore.html`) 用於顯示「Shore (海岸)」地圖。該頁面應包含 `images/海岸.png` 作為背景地圖圖片，並至少包含 2-3 個可點擊的靜態地圖標記，每個標記應具備預設的標題與說明文字。

#### Scenario: 系統應能顯示「Tropics (熱帶雨林)」地圖
系統應提供一個獨立的 HTML 頁面 (例如 `map-tropics.html`) 用於顯示「Tropics (熱帶雨林)」地圖。該頁面應包含 `images/熱帶.png` 作為背景地圖圖片，並至少包含 2-3 個可點擊的靜態地圖標記，每個標記應具備預設的標題與說明文字。

### Requirement: Map markers should display detailed information
Interactive map markers SHALL display detailed information when clicked.
#### Scenario: 點擊地圖標記時應顯示預設資訊
當使用者點擊新增地圖上的任何一個標記時，應彈出一個模態視窗，顯示該標記的預設標題與說明文字。