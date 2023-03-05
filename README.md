# 100년 다이어리

---

# 📄 Intro
한 눈에 보는 나의 인생.

> 100년 다이어리를 소개합니다.
Next.JS와 Firebase를 이용하여 제작한, CRUD가 가능한 다이어리 앱입니다.
> 

`Next.js` `TypeScript` `friebase` `antd` `emotion` `day.js` `AWS S3`

# 💻 웹 배포 링크 (AWS S3)
http://100diary.site

# 📁 Outline

### 100년 다이어리 프로젝트 소개

- 100년 다이어리는 내가 살아온 동안의 생각과 경험을 되돌아볼 수 있는 다이어리 앱입니다.
- 매일 기분과 생각을 달력에 기록하고, 한 해 동안 적어온 나의 감정들을 한 눈에 볼 수 있습니다.
- 개발 인원 : 1인 (본인)
- 개발 기간 : 2023.02 ~ 2022.02 (약 1주)

# 📖 Review

<aside>
🌏 개발 일지

[시리즈 | [ Next.js ] 100년 다이어리 앱 제작 - lekosk.dev](https://velog.io/@lekosk2001/series/다이어리-앱-기획)

</aside>

# 🔎 Feature

### [01] 달력 페이지.

<img width="554" alt="01" src="https://user-images.githubusercontent.com/68801887/222952729-2199e35e-0cdd-4ece-b4e4-a821faa3d456.png">

▲ 달력페이지는 연도 별로 나뉘며, 내가 기록한 그 날의 감정들을 한 눈에 보여줍니다.

### [02] 피드 페이지 / 날짜 페이지.

![02](https://user-images.githubusercontent.com/68801887/222952710-dd475ef1-a1d2-4d73-a591-9202f273d59f.png)

▲ 피드 페이지는 지금까지 작성된 모든 글들을 최신순으로 보여줍니다.

![03](https://user-images.githubusercontent.com/68801887/222952763-43680a4d-0727-485c-9e5e-4ab54f20bde7.png)

▲ 날짜 페이지는 해당 날짜에 작성된 다이어리만 보여줍니다.

### [03] 글쓰기 페이지 / 수정 페이지.

![04](https://user-images.githubusercontent.com/68801887/222952775-ea70c63b-f9e0-4216-9176-9005943b9220.png)

▲ 하루의 기분을 선택하고, 이미지를 업로드하며, 생각을 작성할 수 있습니다.

![05](https://user-images.githubusercontent.com/68801887/222952790-97f72b1b-b27d-4648-88c4-3dfee9b38881.png)
▲ 수정 페이지는 해당 글에 대한 작성된 정보를 불러오고 수정할 수 있습니다.

### [04] 통계 페이지.

![06](https://user-images.githubusercontent.com/68801887/222952807-094969f7-25e2-4dd7-bdaf-366bac382006.png)

▲ 내가 설정한 생일을 기준으로, 지금까지 살아온 날에 대한 정보를 알려줍니다. 또한 지금까지 작성된 게시글들의 각 기분 별 갯수를 나타내줍니다.

### [05] 설정 페이지.

![07](https://user-images.githubusercontent.com/68801887/222952810-8463e579-3eca-46f5-a44f-9ec3ae5665a6.png)

![08](https://user-images.githubusercontent.com/68801887/222952813-1dac9131-2232-44f5-93b2-3eef664b3603.png)

▲ 로컬 스토리지에 내가 설정한 사항을 저장합니다.

![09](https://user-images.githubusercontent.com/68801887/222952819-f0f758ee-49f9-463c-bc25-ddaa80c6abdc.png)

▲ 화면 축소 토글을 이용하여 화면을 축소할 수 있습니다.

![10](https://user-images.githubusercontent.com/68801887/222952821-23adf7f1-f42e-4bf7-aa18-c5cb74f68f64.png)

▲ `@media (prefers-color-scheme: dark)` 를 이용하여 다크모드를 구현하였습니다.

---
