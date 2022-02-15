const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  // Entry 설정 (입력 파일 경로)
  // 기본엔트리 : index.js -> 사용자 기본 엔트리파일 변경
  entry: "./script.js",
  // Output 설정 (출력 디렉터리와 파일 이름)
  // 기본경로 : dist/main.js -> 사용자 경로 및 출력파일 이름 변경
  output: {
    // __dirname은 node.js 현재 프로젝트 디렉터리
    path: __dirname,
    filename: "build.js",
  },
  // Loader 설정 (module > rules 로더 등록)
  // 다양한  파일 번들링
  // style-loader, css-loader -> 웹팩에 CSS 파일 번들링
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // Plugin 설정 (플러그인 등록)
  // clean-webpack-plugin -> 웹팩을 실행할 때 마다 기존에 있던 번들 파일을 먼저 깔끔히 지우고 싶은 경우 사용
  plugins: [new CleanWebpackPlugin("build.js")],
};
