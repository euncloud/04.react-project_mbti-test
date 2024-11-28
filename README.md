
# 💡 MBTI TEST 

MBTI 성격 유형 테스트 서비스 프로젝트 
- 사이트를 직접 만들어 보며 회원가입/로그인부터 프로필 관리, 테스트 결과 저장까지 실무에서 자주 사용되는 기능을 익혀본다.
- Axios와 Tanstack Query(React Query)를 활용하여 비동기 데이터를 효율적으로 관리하고, json-server를 사용해 로컬 환경에서 API 서버를 구축한다.
<br>  

## 배포 링크

- [🔎 [MBTI TEST] 사이트 둘러보기](https://04-react-project-mbti-test.vercel.app/)

<br>  

## 주요 기능
 **1. moneyful api**
- 회원가입
- 로그인
- 닉네임 변경

**2. json-server api**
- 테스트 결과 저장
- 테스트 결과 삭제
- 결과 중복 확인
- 전체 결과 출력

## 파일 구조
```📦src
 ┣ 📂api
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜testResults.js
 ┃ ┗ 📜userInfo.js
 ┣ 📂axios
 ┃ ┗ 📜api.js
 ┣ 📂components
 ┃ ┣ 📜AuthForm.jsx
 ┃ ┗ 📜TestForm.jsx
 ┣ 📂data
 ┃ ┗ 📜questions.js
 ┣ 📂pages
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜HomePage.jsx
 ┃ ┣ 📜LoginPage.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜ProfilePage.jsx
 ┃ ┣ 📜SignupPage.jsx
 ┃ ┣ 📜TestPage.jsx
 ┃ ┣ 📜TestResultListPage.jsx
 ┃ ┗ 📜TestResultPage.jsx
 ┣ 📂shared
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜ProtectedRoute.jsx
 ┃ ┗ 📜Router.jsx
 ┣ 📂utils
 ┃ ┗ 📜mbtiCalculator.js
 ┣ 📂zustand
 ┃ ┗ 📜bearsStore.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx 
```

<br>

## 🛠 Technologies
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=tailwindcss&logoColor=black">      

<br>
<br>

## 프로젝트 목표 및 결과
- Tailwind CSS 설치 및 적용
- 로그인 유지 기능 구현(localStorage)
- axios를 이용한 API 호출 및 axios Instance 사용
- Tanstack Query 사용

<br>

## 프로젝트 회고
서버별로 api 통신 방법이 다름을 이해하고 사용하는데 어려움이 있었다. 여러 라이브러리와 기능에 익숙치 않은 상태로 개발에 들어가서 코드가 제대로 정리되지 못했고 자잘한 버그가 많았으며, 수정하지 못했다.(등록한 테스트를 삭제하고 다른 페이지로 랜더링 하는 부분) json-server에서 데이터 수정은 어떤 식으로 하는지 알아보고 적용할 시간이 없어 아쉬웠다. 짧은 시간 내에 해결하기 위해 노력했고, 학습의 연장선이었다는 점에 긍정적인 의미를 둔다.
<br><br>
