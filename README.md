# react_training008

React を利用して、ブラウザ上で動作する SNS アプリを作成しました  
バックエンド(データ永続化)に firestore を利用しています

## 開発環境

- Windows 11 (21H2)
- WSL2 Ubuntu20.04
- React 18.2
- Redux Toolkit 1.8.5
- firebase 9.10
- bootstrap 5.2.1
- mui v5
- Node.js 16.11.1
- vite 3.1.0
- firebase-tools 11.10.0

## firestore の設定

`.env` はリモートリポジトリに含まれていません  
設定項目のみを記載した`.env.example` を`.env` にリネームし、ご自身の firebase アプリの ID などを設定してください

## ローカルでの動作の手順

node が利用できる環境に当リポジトリをクローンします  
下記コマンドで依存パッケージをインストールします

```bash
$ npm install
```

下記コマンドで vite のローカルサーバを起動します

```bash
$ npm run dev

> react_training008@0.0.0 dev
> vite


  VITE v3.1.0  ready in 381 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

ターミナルに表示された localhost の URL にアクセスすると、トップページが表示されます

## 参考資料

以下の教材をベースにソースコードを作成しました  
【Twitter クローン】React×Firebase でツイッターアプリをハンズオン形式で自作してみよう！
:  
https://www.udemy.com/course/twitter-clone-using-react-firebase/
