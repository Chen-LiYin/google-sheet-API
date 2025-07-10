# google sheet資料獲取

## how to run
1. 部屬連結：
2. 登入帳密，之後再改，先寫死
   帳號：admin
   密碼：1234
3. 資料應該就會顯示，只是篩選的功能可能要在改🫠

## how to do to fix code
1. 如果要看頁面直接執行html檔就可以
2. 要先設定google sheets 的API
  - https://www.letswrite.tw/google-excel-db/

    這個blog寫的很詳細，但因為有更新過，所以方法要從中間開始用，照著做就可以
    ```
    https://sheets.googleapis.com/v4/spreadsheets/{表單id}/values/{sheet名稱}?alt=json&key={API金鑰}
    ```
    最後取的的API金鑰放進去就好，剩下的就是表單的連結（記得要開權限可以所有人檢視）
    
    ```{表單id}``` 跟原本的一樣，網址上就可以看到。

    ```{sheet名稱}``` 就是每一張試算表的名稱，預設會是叫「工作表1」，August 測試過，有支援中文。

    ```{API金鑰}``` 就是上一段我們從 GCP 上取得的金鑰。

    程式碼的變數可以修改！！


## 推推的vscode擴充功能

| Extenstion Name                        | Description                                                                                                                                                                       |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prettier - Code formatter              | 文字排版對齊工具，基本上是必備。                                                                                                                                                  |
| GitHub Copilot or Tabnine AI           | 程式碼自動補齊、生成。前者可以於 Student Developer Package 免費取得，後者有付費與免費版本。                                                                                       |
| Git History                            | 查看檔案 Git log、檔案歷史紀錄、比較分支或 commit 紀錄 。                                                                                                                         |
| Material Icon Theme                    | 好看的 VSCode 圖示可以提升生產力。不一定要用這個，有很多不同圖示的 extentions 等你去找。                                                                                          |
| ESLint                                 | 用於檢查 JavaScript 程式碼是否符合規則(語法檢查、提醒刪除多於程式碼等等)，確保你的程式碼品質在一定的水準之上 。                                                                   |


## 參考連結
- https://www.letswrite.tw/google-excel-db/
- chatgpt(牛逼)
