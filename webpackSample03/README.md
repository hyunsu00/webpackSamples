# webpackSamples03

```bash
# package.json의 패키지 인스톨
npm install
```

**참고 URL :** [웹팩(Webpack) 개발 편의 기능](https://www.daleseo.com/webpack-development/)

### 웹팩 감시 옵션

```bash
# --watch 옵션
# 웹팩을 감시 옵션을 줘서 실행시키면 한 번 번들을 하고 마는 것이 아니라 소스 파일을 감시하는 프로세스가 계속 떠있게 됩니다.
# 그리고 이 프로세스가 변경 사항을 캐치해서 바로 바로 반영을 해줍니다.
npx webpack --watch
```

### 웹팩 개발 서버

```bash
# 웹팩 개발 서버 설치
npm i -D webpack-dev-server
```

```javascript
// webpack.config.js
// (...생략...)
module.exports = {
  // (...생략...)
  // webpack-dev-server 설정
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 8080,
  },
  mode: "development",
};
```

```bash
# 웹팩 개발 서버 실행(환경설정 -> webpack.config.js 수정후)
npx webpack-dev-server
```

### 소스 맵

```javascript
// (...생략...)
module.exports = {
  // (...생략...)
  devtool: "inline-source-map",
};
```

### 웹팩 스크립트 등록

```javascript
// package.json
{
  // (...생략...)
  "scripts": {
    // (...생략...)
    "build": "webpack",
    "watch": "webpack --watch",
    "server": "webpack-dev-server --open"
  },
  // (...생략...)
}
```

```bash
# 웹팩 단순 1회 실행
npm run build

# 웹팩 감시 모드 실행
npm run watch

# 웹팩 개발 서버 구동 (--open 옵션 덕분에 브라우저도 자동으로 실행됨)
npm run server
```
