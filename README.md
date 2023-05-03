# JC-LoveTour


## 작업 규칙
 - **master에 직접 올리지 마세요 !**
 - **Force-commit 이나 hard 옵션 등을 사용하지 마세요 !**
 - **질문 및 건의사항은 슬랙을 적극 사용해주세요 ! :+1:**
 - 작업 branch는 feature/[이름약자]-[작업내용] 형태로 올려주세요. 
   - ex) feature/[TJ]-ProfilePage
   - **Branch 유지 기간은 일주일을 넘기지 마세요. (충돌방지)**
 - Commit Message는 한글로 최대한 자세히 적어주세요.
 - 작업물을 push 후에 pull requests를 진행해주세요.


## 작업 기간 ( 예시 )
### 📖 Gantt :fire:

```mermaid
gantt 
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section 버전관리
    git 제작 및 버전설정 : a1, 2022-05-23, 10d
    slack 관리 및 Repositories, branches 관리 : after a1, 2022-07-20
    도커 제작 및 배포   : 2022-07-21, 10d
    
    section Front-end
    초기 설계 및 개발서 제작 :a1,2022-05-23  , 10d
    개발 및 구축 : after a1,  2022-07-20
    오류 수정 및 보수 :2022-07-21, 10d
```
- 2022.05.23 ~ 2022.05.29 외관 보수 및 MEMBER 페이지 개발
  - [X] **개발환경 구축 및 버전 관리**
  - [X] 예시
  - [X] 예시

## Installation ( 예시 )
```
 > git clone https://github.com/TaekJinJang/JC-LoveTour.git
 
 > cd front
 
 > npm i
 
 > npm run start
```

## Docker Repositories ( 예시 )

> https://hub.docker.com/r/xorwls150/ices-web-docker



## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last version| last version| last version| last version| last version
