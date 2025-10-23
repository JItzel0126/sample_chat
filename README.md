# ☢️ LAST CHAT - feat. PapayaTalk

> **"세상이 무너질 때, 마지막 연락은 메시지였다."**

📱 **인터랙티브 챗픽션 실험 프로젝트**

> ** "텍스트만으로, 종말을 느낄 수 있을까?" **

- 현재 기획 및 프로토타입 설계 중인 PapayaTalk 엔진 기반 텍스트 어드벤처입니다.
- '톡' UI로 진행되는 종말 서사를 목표로,
- 플레이어는 메시지를 통해 생존 방향을 선택함하고 종말의 도시에서 살아남아야 합니다.

---

## 🧭 프로젝트 개요
| 항목    | 내용                                                  |
| ----- | --------------------------------------------------- |
| 장르    | 인터랙티브 챗픽션 (Interactive Chat Fiction Game)           |
| 형식    | 대화창 UI 기반 선택지형 텍스트 어드벤처                             |
| 플랫폼   | Web / Mobile Web                                    |
| 엔진    | HTML + JavaScript (Twine 구조 참고, React 기반 커스텀 엔진 예정) |
| 예상 기간 | 약 2개월 (웹 완성 기준) + 1~2개월 앱 전환(선택)                    |

---

## ✨ 핵심 컨셉 (USP)
- `톡 UI` : 실제 메신저처럼 보이는 인터페이스 (시간, 읽음, 이미지, 알림 등 연출)
- `감정 선택지` : 믿음/냉소/망설임 등 감정 기반 분기로 서사 변동
- `사운드 연출` : 진동, 정적, 알림음 등 ‘소리의 공백’을 이용한 감정 설계
- `로그 기반 멀티엔딩` : 플레이어의 선택 기록에 따라 해석이 달라지는 결말
- `스토리 매트릭스` : Twine 시각화를 통한 시나리오 분기 관리 및 협업 용이성
- `진행 저장` : DB/스토리지 연동을 통한 재접속 시 이어하기 기능 구상

---

## 🧪 현재 기획 진행 상황

- [x] 기본 톡 UI 콘셉트 정립
- [x] 첫 메시지 연출 시나리오 설계
- [ ] 선택지 → 대사 분기 구조 설계
- [ ] 엔진 구조 (React + Vite + Tailwind 기반) 프로토타입 구상 중
- [ ] 분기 트리 / 엔딩 플로우 시각화

---

## 🚀 비전 & 확장 로드맵

- `엔진/스토리 분리` : 공용 엔진으로 제작 후 시나리오 교체만으로 다른 작품 제작
- `앱 빌드 확장` : Capacitor/Cordova를 통한 모바일 알림·오프라인 기능 추가
- `스토리 크리에이터 온보딩` : JSON 업로드 → 미리보기 → 자동 배포 시스템
- `버전별 시나리오 확장` : 살아남기 시리즈(ex - 회사에서 살아남기, 조별과제에서 살아남기 등)
- `실험적 포맷 테스트` : 시간 지연 메시지, 가짜 전화, ARG 이벤트 등

---

## 👨‍💻 개발자

> **By @JItzel0126**
- “혼돈 속에서도 유머는 사라지지 않는다.”
- 현재 콘셉트 및 시나리오 구조를 실험 중입니다.
- (⚙️ 피드백, 협업 제안, 아이디어 환영!)

---

## 🛠 Sample Chat 환경

- ⚛ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🐱 GitHub + Git Bash

---

## 🧭 Sample 실행 방법

```bash
npm install
npm run dev```

---

## 🗂️ Sample 폴더 구조

📦 MYCHATEX
├─ 🧠 src/                    # 메인 소스 디렉토리
│  ├─ 🎨 assets/              # 이미지, 폰트, 사운드 등 에셋 모음
│  │
│  ├─ 🧩 components/          # 공통 UI 컴포넌트 모듈
│  │  ├─ 🔘 ChoiceButton/     # 선택지 버튼 (분기 선택)
│  │  ├─ 🧭 FooterNav/        # 하단 네비게이션
│  │  ├─ 🧑‍🤝‍🧑 FriendCard/       # 친구 리스트 카드
│  │  ├─ 🪶 Header/           # 상단 헤더 (타이틀, 아이콘)
│  │  └─ 💬 MessageBubble/    # 채팅 말풍선 UI
│  │
│  ├─ 🧾 pages/               # 페이지 단위 구성요소
│  │  ├─ 📱 ChatListScreenn/  # 채팅 목록 화면 (친구/대화방 리스트)
│  │  ├─ 💭 ChatRoom/         # 실제 대화방 (메시지 인터랙션)
│  │  ├─ 🏠 HomeScreen/       # 홈 진입/메뉴 화면
│  │  └─ 🌅 SplashScreens/    # 스플래시 / 로딩 / 인트로 화면
│  │
│  ├─ ⚛ App.jsx               # 전체 앱 라우팅 및 구조 설정
│  ├─ 🎨 index.css            # 전역 스타일 (Tailwind 기본 스타일 포함)
│  └─ 🚀 main.jsx             # React 진입 파일 (렌더링 시작점)

---

## 🖼 Sample 스크린샷

<img width="320" height="600" alt="image" src="https://github.com/user-attachments/assets/84450d44-05f6-4eef-b9b0-13d497acd28f" />
<img width="320" height="600" alt="image" src="https://github.com/user-attachments/assets/a173ef0c-aa61-40df-befc-20c040bcea2c" />
<img width="320" height="600" alt="image" src="https://github.com/user-attachments/assets/a6e22ed7-80d9-4228-a60f-9e7acbd684dc" />

