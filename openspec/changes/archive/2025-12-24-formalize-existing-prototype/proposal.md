# 提案：將現有原型正規化

**變更 ID (Change-Id):** `formalize-existing-prototype`

## 1. 摘要

本提案旨在將現有已實作的靜態遊戲攻略原型，正式文件化並納入 OpenSpec 框架。

經比對程式碼庫與專案文件 (`REQ.md`, `SA.md`, `sd.md`)，我們發現最小可行產品 (MVP) 的功能均已完成，包含：

1.  一個靜態攻略頁面 (`index.html`)。
2.  一個互動地圖頁面 (`map.html` 與 `map.js`)。
3.  一個用於切換頁面的共用導覽列。

本次變更的目標**不是撰寫新程式碼**，而是為這些已實作的功能建立對應的規格文件。這將使專案的當前狀態與 OpenSpec 方法論保持一致，為未來的任何變更提供一個基準。

## 2. 功能與規格變更

本次變更將分為三個獨立的功能，每個功能對應現有原型的一個核心特性。

| 功能 (Capability) | 描述 | 規格變更 (Spec Delta) |
| :--- | :--- | :--- |
| **`site-navigation`** | 建立對一致性導覽列的需求。 | `specs/site-navigation/spec.md` |
| **`static-guide`** | 文件化第一個任務的靜態攻略頁面。 | `specs/static-guide/spec.md` |
| **`interactive-map`** | 文件化帶有可點擊標記的互動地圖功能。 | `specs/interactive-map/spec.md` |

由於我們只是在文件化一個已存在的、簡單的靜態網站，因此不需要複雜的架構性說明。故本提案無需 `design.md` 檔案。