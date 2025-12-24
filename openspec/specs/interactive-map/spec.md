# interactive-map Specification

## Purpose
TBD - created by archiving change formalize-existing-prototype. Update Purpose after archive.
## Requirements
### Requirement: 顯示一個互動地圖

應用程式 MUST (必須) 顯示一個遊戲初始區域的靜態地圖圖片，並帶有預定義的、可點擊的標記。

#### Scenario: 查看地圖及其標記

**Given** 使用者正在「互動地圖」頁面。
**When** 頁面載入時。
**Then** 使用者會看到一張「寧靜森林」的地圖圖片。
**And** 使用者會看到幾個疊加在固定位置的地圖標記。

### Requirement: 點擊標記時顯示資訊

點擊地圖上的標記 MUST (必須) 顯示一個包含該地點資訊的彈出視窗。

#### Scenario: 點擊標記以獲取資訊

**Given** 使用者正在查看「互動地圖」。
**When** 使用者點擊一個標記（例如，標示「低語洞穴入口」的那個）。
**Then** 一個彈出視窗會出現在螢幕上。
**And** 該視窗會顯示該地點的標題和描述性文字。

#### Scenario: 關閉資訊彈出視窗

**Given** 資訊彈出視窗目前正在顯示。
**When** 使用者點擊視窗上的關閉按鈕（`×`）。
**Then** 彈出視窗消失。

