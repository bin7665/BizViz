# BizViz

BizBot 지원사업 검색을 위한 웹페이지입니다.  
아래 코드를 통해 필요한 패키지를 다운받을 수 있습니다.  

```bash
$ pip install -r requirements.txt
```

<br/>

장고 프로젝트로 만들었으며 임시 관리자 계정은 admin/admin입니다.  
아래 코드를 통해 프로젝트를 실행할 수 있습니다.  

```bash
$ python manage.py runserver
```

<br/>

해야할 과제 목록
- [x] ~~장고 초기화~~
  - ~~urls, views 작성~~
  - ~~template 연결~~
  - ~~DB 초기화 및 임의 값~~
- [ ] 그래프에 들어갈 데이터 전처리
  - 인기지원사업 top 5
  - 공고를 많이 낸 기업 top 5
  - 각 부서별 통계
    - 세부 분야 파이 차트
    - 연도별 변화 라인 차트
- [ ] 장고 데이터 자바스크립트에 연결하기
- [ ] DB에 들어갈 Department 데이터들
  -  부서 이름
  -  부서 위치
  -  총 지원사업 개수
  -  예산
     -  세입
     -  세출
- [ ] 그래프 그리기
  - 인기지원사업 top 5
  - 공고를 많이 낸 기업 top 5
  - 각 부서별 통계
    - 세부 분야 파이 차트
    - 연도별 변화 라인 차트
- [ ] 검색 기능
  - 지역별
  - 분야별
  - 기업형태별
  - 보기 좋은 DropDown
- [ ] modal 구현
  - department 통계
  - 기업마당 지원사업
- [ ] 디자인
  - main color 설정
  - 유저 friendly
  - 웹 디자인
  - 모바일 디자인
- [ ] 보안
  - settings의 secret key