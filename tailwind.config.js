// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          cherry: '#FADADD',    // 벚꽃 핑크
          forsythia: '#FFF275', // 개나리 노랑
          azalea: '#F88379',    // 진달래 붉은 분홍
        },
        fontFamily: {
          sans: ['"Noto Sans KR"', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
  