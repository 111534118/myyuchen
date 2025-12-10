
# 系統架構書 (SA.md) – 遊戲攻略靜態原型

### 1. 系統分層概觀 (System Layering Overview)

本系統為極度簡化的**純靜態網站原型**，架構設計排除了後端邏輯層和資料存取層。系統目標是作為一個靜態內容容器，而非傳統的 Spring MVC 應用。

*   **前端展示層 (Presentation Layer)**：負責 HTML 頁面渲染、CSS 樣式應用、以及所有基於 **Vanilla JavaScript** 的客戶端互動 (點擊彈窗)。
*   **靜態內容服務層 (Static Content Service Layer)**：由 Spring Boot 容器提供，作為**靜態檔案的 Web Server**，負責將 `/static` 或 `/templates` 內的檔案提供給瀏覽器,。
*   **後端邏輯層 (Business/API Layer)**：**無** (Out of Scope)。
*   **資料存取層 (Persistence Layer)**：**無** (Out of Scope)。

### 2. 系統元件 (System Components)

由於無後端邏輯，所有元件均集中於前端檔案結構。

*   **HTML 頁面 (Templates/Views)**
    *   `index.html`：主導覽頁面或入口。
    *   `map.html`：**簡化版互動地圖**。
    *   `guide.html`：**靜態圖文攻略**。
*   **靜態資源 (Static Assets)**：預計存放在 `/frontend/static/` 目錄下。
    *   `/static/css/`：存放所有 CSS 樣式檔案。
    *   `/static/js/`：存放所有 JavaScript 檔案（專責處理地圖點位點擊功能）。
    *   `/static/img/`：存放地圖圖片和攻略頁面的靜態圖片。
*   **核心功能元件 (MVP)**
    *   **地圖點擊邏輯：** JavaScript 模組，專門處理 `map.html` 中**預先設定的 2–3 個點位**（維持與 REQ 功能數量一致性）。
    *   **後端元件：** `/controller`, `/service`, `/repository`, `/entity`, `/dto` 僅作為專案骨架目錄存在，內部檔案為空或最小化，**不執行任何業務邏輯**。

### 3. 頁面架構（前台/後台）

頁面設計基於 REQ 的 MVP 限制，明確使用**多個獨立的 HTML 檔案**實現導覽切換（而非 SPA 區塊切換）。

| 頁面類型 | 頁面名稱/檔案路徑（於 `/static` 或 `/templates` 內）| REQ 對應功能與 MVP 承諾 |
| :--- | :--- | :--- |
| **前台** | `index.html` 或 `/` | 基礎頁面導覽（導引至地圖與攻略頁）|
| **前台** | `map.html` | **MVP 功能 1：** 簡化版互動地圖頁面。支援「迷路的探索者」情境。|
| **前台** | `guide.html` | **MVP 功能 2：** 靜態圖文攻略頁面。支援「新手初試身手」情境。|
| **後台** | 無 (Out of Scope) | 本專案無後台管理功能或內容維護系統（CMS）。|

### 4. 系統架構圖（文字版）

本系統流程是純粹的客戶端行為，不涉及後端業務運算或資料庫查詢。

1.  **使用者行為：** 使用者在瀏覽器中點擊導覽列連結 (e.g., 連結至 `/map.html`)。
2.  **前端請求：** 瀏覽器向 Web Server（Spring Boot 靜態容器）發出請求。
3.  **靜態服務：** Spring Boot 容器回傳 `map.html`、`map.css` 和 `map.js` 等靜態檔案。
4.  **瀏覽器渲染：** 瀏覽器載入頁面並執行 `map.js`。
5.  **客戶端互動：** 使用者點擊預設圖標 → **JavaScript 執行** 彈窗提示。

### 5. 技術選用 (Technology Stack) 與 非功能需求 (Non-functional Requirements)

#### 技術選用

| 類別 | 選用技術 | 用途說明 | 範圍確認 |
| :--- | :--- | :--- | :--- |
| **核心技術** | HTML5, CSS3, Vanilla JavaScript | 靜態頁面結構、樣式與客戶端互動。 | 必選 |
| **後端容器** | Spring Boot (Java) | **僅作為靜態檔案容器使用**，滿足專案樣板要求。 | 必選 |
| **資料庫** | 無 (N/A) | **排除**所有資料庫相關依賴、配置，不包含 `/db/schema.sql` 檔案。 | Out of Scope |
| **安全性** | 無 (N/A) | **排除** Spring Security 或任何複雜的後端驗證機制。 | Out of Scope |

#### 非功能需求

| 類別 | 需求描述 |
| :--- | :--- |
| **效能** | 作為純靜態網站，頁面應能在毫秒級快速載入。 |
| **易用性 (Usability)** | **桌面瀏覽器優先**。介面佈局清晰，使用者能輕易理解導覽切換。|
| **瀏覽器相容性** | 能在最新版的 Chrome 或 Edge 瀏覽器上正常顯示。 |
| **安全性 (Security)**| 純靜態網站，不處理使用者輸入或敏感資料，**不配置複雜安全性**。|