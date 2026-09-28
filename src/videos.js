// 체육 교과 5개 영역별 영상 목록
// 유튜브 주소를 알려주면 이 파일에 새 영상을 추가/수정해서 다시 배포합니다.
//
// youtubeId: 유튜브 주소에서 v= 뒤에 오는 부분
//   예) https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  dQw4w9WgXcQ
// startSec: 영상에서 이 활동이 시작되는 시간(초). 처음부터면 0.

export const domains = [
  { key: '건강', label: '건강', color: '#2e9e5b' },
  { key: '도전', label: '도전', color: '#e2622a' },
  { key: '경쟁', label: '경쟁', color: '#c62839' },
  { key: '표현', label: '표현', color: '#8a3fc7' },
  { key: '여가', label: '여가', color: '#1d7fc4' },
]

export const videos = [
  {
    id: 1,
    domain: '건강',
    title: '체력 운동 준비운동',
    youtubeId: 'dQw4w9WgXcQ',
    startSec: 0,
    grade: '',
    description: '수업 시작 전 몸풀기용 예시 영상입니다. 실제 영상 주소로 교체해주세요.',
  },
  {
    id: 2,
    domain: '도전',
    title: '뜀틀 도전 활동',
    youtubeId: 'dQw4w9WgXcQ',
    startSec: 0,
    grade: '',
    description: '예시 영상입니다. 실제 영상 주소로 교체해주세요.',
  },
  {
    id: 3,
    domain: '경쟁',
    title: '피구 기초 규칙',
    youtubeId: 'dQw4w9WgXcQ',
    startSec: 0,
    grade: '',
    description: '예시 영상입니다. 실제 영상 주소로 교체해주세요.',
  },
  {
    id: 4,
    domain: '표현',
    title: '창작 표현 활동',
    youtubeId: 'dQw4w9WgXcQ',
    startSec: 0,
    grade: '',
    description: '예시 영상입니다. 실제 영상 주소로 교체해주세요.',
  },
  {
    id: 5,
    domain: '여가',
    title: '여가 스포츠 소개',
    youtubeId: 'dQw4w9WgXcQ',
    startSec: 0,
    grade: '',
    description: '예시 영상입니다. 실제 영상 주소로 교체해주세요.',
  },
]
