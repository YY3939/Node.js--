#22k1102'sシーザー暗号  
入力された英文字を3シフトのシーザー暗号に変換するサイトです。

#使い方

dockerを使ってmongoDBを起動する  
`docker run --rm --name=my-app-db -p 27017:27017 mongo`

serverを起動する
```javascript
npm install
node index.js
```

任意のブラウザにhttp://localhost:3000と入力し、サイトへ入る  

入力欄に変換したい文字列を入力し、送信を押し、F5などでリフレッシュすると暗号化された文字列を取得できる