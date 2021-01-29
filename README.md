##  Billage의 성격 유형 테스트
나는 무슨 토끼일까? 10가지의 질문으로 알아보는 성격 유형 테스트입니다.

[🏡 바로 테스트 해보기](https://billage-test.web.app/)

<br>

## ✅ Preview
![image](https://user-images.githubusercontent.com/41133663/105662785-eff8a800-5f13-11eb-8c5e-725027d73bf7.png)

<br>

## ✅ Development Environment
- Visual Studio Code / 1.52.1
- Node.js / 12.19.0

<br>

##  ✅ To-do 1 : Google Firebase
- Google firebase로 웹 서버 실행 및 배포가 이루어지므로, firebase 계정이 필요합니다. [자세한 내용](https://firebase.google.com/)
  <details>
    <summary>상세 보기</summary>

    - Install nodejs with npm (or yarn)
    - Install firebase-tools CLI
    `npm install -g firebase-tools` or `yarn global add firebase-tools`
    - Clone & cd into this repo
    - Login to firebase with CLI firebase login
    - Create firebase project `firebase projects:create`, or use existing project `firebase use`
    - `cd functions && yarn install`
    - Start local json-server with `firebase serve --only hosting,functions`
    - Deploy json-server to firebase cloud hosting with firebase deploy
    - Access to url http://localhost:5000/
  </details>

<br>

##  ✅ To-do 2 : Kakao api
- 카카오 공유하기 기능은 Kakao javascript api key를 필요로 합니다. [자세한 내용](https://developers.kakao.com/)
  <details>
      <summary>상세 보기</summary>

    - kakao developers 애플리케이션 추가 후 JavaScript 키 사용
    - `share.js`에서 `Kakao.init (api_key)` 설정
    - 메시지의 형식은 `sendLink()` 내에서 `Kakao.Link.sendDefault()`로 설정
    - [자세한 내용](https://developers.kakao.com/docs/latest/ko/message/js)
  </details>

<br>

## 💖 Run
```
firebase serve
```

<br>

## 💖 Contributors
- wonkyeong lee 이원경 : Full Stack Development, Design
- [@billage_book](https://www.instagram.com/billage_book/) : PM, Design
