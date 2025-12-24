# 原型正規化任務清單

**變更 ID (Change-Id):** `formalize-existing-prototype`

此清單概述了在 OpenSpec 框架內文件化現有原型所需的工作。所有任務都與建立規格文件有關，而非實作新功能。

1.  [x] **為網站導覽建立規格：**
    *   **描述：** 在 `openspec/changes/formalize-existing-prototype/specs/site-navigation/spec.md` 起草一份新的規格變更文件。
    *   **詳細資訊：** 該規格將定義導覽列的需求，允許使用者在應用程式的主要頁面（攻略與地圖）之間切換。
    *   **驗證：** 執行 `openspec validate formalize-existing-prototype --strict` 並確保規格通過驗證。

2.  [x] **為靜態攻略頁面建立規格：**
    *   **描述：** 在 `openspec/changes/formalize-existing-prototype/specs/static-guide/spec.md` 起草一份新的規格變更文件。
    *   **詳細資訊：** 該規格將定義一個靜態內容頁面的需求，該頁面需包含文字和圖片，用以引導使用者完成第一個遊戲任務（如 `index.html` 所實作）。
    *   **驗證：** 執行 `openspec validate formalize-existing-prototype --strict` 並確保規格通過驗證。

3.  [x] **為互動地圖建立規格：**
    *   **描述：** 在 `openspec/changes/formalize-existing-prototype/specs/interactive-map/spec.md` 起草一份新的規格變更文件。
    *   **詳細資訊：** 該規格將定義互動地圖的需求，包括顯示地圖圖片、在預定位置顯示可點擊的標記，以及用於顯示資訊的彈出視窗（如 `map.html` 和 `map.js` 所實作）。
    *   **驗證：** 執行 `openspec validate formalize-existing-prototype --strict` 並確保規格通過驗證。

4.  [x] **最終驗證：**
    *   **描述：** 最後一次執行 `openspec validate formalize-existing-prototype --strict`，以確保在提交提案前所有檔案和引用都正確無誤。