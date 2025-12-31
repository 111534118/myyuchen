# spec: static-guide

## MODIFIED Requirements

### Requirement: 顯示第一個任務的攻略

應用程式 MUST (必須) 在一個獨立的 `main-quest.html` 頁面上顯示一個包含文字和圖片的靜態頁面，用以引導使用者完成他們的第一個主線任務。

#### Scenario: 查看新手指南

**Given** 一位新玩家想知道如何開始遊戲。
**When** 他們點擊導覽列中的「主線攻略」連結。
**Then** 他們會看到一個標題類似「新手指南：完成第一個主線任務」的頁面。
**And** 該頁面內容應與 `main-quest.html` 中的內容一致。

## ADDED Requirements

### Requirement: 顯示遊戲概覽資訊

應用程式 MUST (必須) 在 `index.html` 主頁上顯示遊戲的概覽資訊，包括遊戲簡介、主要角色，以及核心機制。

#### Scenario: 查看遊戲總覽

**Given** 一位玩家想要了解遊戲的背景故事和玩法。
**When** 他們導覽至「遊戲資訊」頁面 (`index.html`)。
**Then** 他們會看到一個標題為「PEAK 遊戲概覽與重點資訊」的頁面。
