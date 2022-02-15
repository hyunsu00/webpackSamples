# webpackSamples01

```bash
# package.json의 패키지 인스톨
npm install
```

**참고 URL :** [웹팩(Webpack) 기본 사용법 (CLI)](https://www.daleseo.com/webpack-basics/)

### 기본 package.json 파일 생성

```bash
npm init -y
```

### Webpack과 Webpack CLI 패키지 설치

```bash
# webpack, webpack-cli 패키지 설치
npm i -D webpack webpack-cli
```

### Webpack Bundle 만들기

```bash
# 웹팩의 기본 폴더는 src
# 웹팩의 기본 엔트리 파일은 index.js
# 따라서 ./src/index.js 파일 생성

# 웹팩 번들링(기본적으로 ./src/index.js을 찾아 번들링한다.)
# 번들링 생성은 기본적으로 ./dist/main.js로 번들링 파일이 생성됨
npx webpack
```
