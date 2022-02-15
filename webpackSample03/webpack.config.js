const path = require("path");

module.exports = {
  // Entry 설정 (입력 파일 경로)
  // 기본엔트리 : index.js -> 사용자 기본 엔트리파일 변경
  entry: "./src/index.js",
  // Output 설정 (출력 디렉터리와 파일 이름)
  // 기본경로 : dist/main.js -> 사용자 경로 및 출력파일 이름 변경
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // webpack-dev-server 설정
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 5505,
  },
  // 모드
  // development -> 개발모드
  // production -> 배포모드(기본값)
  // none -> 기본 최적화 옵션 해제
  mode: "none",
  // 소스 맵
  devtool: "inline-source-map",
};
