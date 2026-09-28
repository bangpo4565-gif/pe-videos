# 오늘의 체육수업 - 영역별 영상

체육 교과 5개 영역(건강·도전·경쟁·표현·여가)별로 영상을 모아 보여주는 사이트입니다.
데이터베이스 없이 `src/videos.js` 파일에 영상 목록을 직접 적어두는 방식이라 구조가 단순합니다.

## 영상 추가/수정 방법

`src/videos.js` 파일을 열어서 아래 형태로 항목을 추가하면 됩니다.

```js
{
  id: 6,                      // 겹치지 않는 숫자
  domain: '건강',              // 건강 / 도전 / 경쟁 / 표현 / 여가 중 하나
  title: '영상 제목',
  youtubeId: 'abcdEFGH123',   // 유튜브 주소 v= 뒤에 오는 부분
  startSec: 0,                 // 영상 시작 시간(초), 처음부터면 0
  grade: '1학년',              // 선택 사항, 없으면 빈 문자열 ''
  description: '영상 설명',
}
```

앞으로는 유튜브 주소만 알려주면 이 파일을 수정해서 다시 배포해드립니다.

## 내 컴퓨터에서 실행해보기

```
npm install
npm run dev
```

## Netlify에 배포하기

1. 이 폴더를 GitHub 저장소로 올립니다.
2. [netlify.com](https://netlify.com) 에서 **Add new site > Import an existing project** 로 그 저장소를 선택합니다.
3. Build command는 자동으로 `npm run build`, Publish directory는 `dist` 로 잡힙니다 (netlify.toml에 이미 설정되어 있음).
4. Deploy 누르면 몇 분 뒤 실제 주소가 생깁니다.
