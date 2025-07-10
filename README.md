# google sheet 資料獲取

## how to run

1. 部屬連結：
2. 登入帳密，之後再改，先寫死
   帳號：admin
   密碼：1234
3. 資料應該就會顯示，只是篩選的功能可能要在改 🫠

## how to do to fix code

### file structure

```text
├── dashboard.html       // 資料顯示的頁面
├── dashboard.js         // 資料篩選的功能
├── index.html           // 登入頁面
├── login.css            // 登入頁面的樣式
├── peter.jpeg           // 登入介面的圖片
├── README.md            // 專案說明文件
├── script.js            // 登入功能的邏輯
└── style.css            // dashboard 頁面的樣式
```

1. 如果要看頁面直接執行 html 檔就可以
2. 要先設定 google sheets 的 API

- https://www.letswrite.tw/google-excel-db/

  這個 blog 寫的很詳細，但因為有更新過，所以方法要從中間開始用，照著做就可以

  ```
  https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/{SHEET_RANGE}?alt=json&key={API_KEY}
  ```

  最後取的的 API 金鑰放進去就好，剩下的就是表單的連結（記得要開權限可以所有人檢視）

  `{SHEET_ID}` 跟原本的一樣，網址上就可以看到。

  `{SHEET_RANGE}` 就是每一張試算表的名稱，預設會是叫「工作表 1」，August 測試過，有支援中文。

  `{API_KEY}` 就是上一段我們從 GCP 上取得的金鑰。

  程式碼的變數可以修改！！
  ![](截圖%202025-07-10%20晚上11.22.01.png)

## 推推的 vscode 擴充功能

| Extenstion Name              | Description                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Prettier - Code formatter    | 文字排版對齊工具，基本上是必備。                                                                                |
| GitHub Copilot or Tabnine AI | 程式碼自動補齊、生成。前者可以於 Student Developer Package 免費取得，後者有付費與免費版本。                     |
| Git History                  | 查看檔案 Git log、檔案歷史紀錄、比較分支或 commit 紀錄 。                                                       |
| Material Icon Theme          | 好看的 VSCode 圖示可以提升生產力。不一定要用這個，有很多不同圖示的 extentions 等你去找。                        |
| ESLint                       | 用於檢查 JavaScript 程式碼是否符合規則(語法檢查、提醒刪除多於程式碼等等)，確保你的程式碼品質在一定的水準之上 。 |

## 參考連結

- https://www.letswrite.tw/google-excel-db/
- https://flowbite.com/
  - 很多質感的介面呈現可以參考，丟 gpt 他就會幫你改好
- chatgpt(牛逼)
