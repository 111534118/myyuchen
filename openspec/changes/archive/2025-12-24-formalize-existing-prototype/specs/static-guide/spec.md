**Parent-Spec:** `specs/static-guide`
**Title:** 靜態任務攻略
**Status:** `proposal`

## ADDED Requirements

### Requirement: 顯示第一個任務的攻略

應用程式 MUST (必須) 顯示一個包含文字和圖片的靜態頁面，用以引導使用者完成他們的第一個主線任務。

#### Scenario: 查看新手指南

**Given** 一位新玩家想知道如何開始遊戲。
**When** 他們導覽至「主線攻略」頁面。
**Then** 他們會看到一個標題類似「新手指南：完成第一個主線任務」的頁面。
**And** 該頁面包含解釋任務步驟的文字。
**And** 該頁面包含至少一張圖片以輔助攻略說明。