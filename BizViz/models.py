from datetime import datetime
from django.db import models


class Support(models.Model):
    ''' 지원사업 데이터베이스 모델
        project_name: 지원사업 제목
        peirod_date: 지원 기간인데 string으로 넘겨주면 front에서 처리해서 보여줌
        project_depart: 지원사업 담당 기관
        project_url: 지원사업 연결 url
        project_hits: 지원사업 조회수
        register_date: 지원사업이 기업마당에 등록된 날짜, 시간  '''

    project_name = models.CharField(max_length=200)
    period_date = models.CharField(max_length=50)
    project_depart = models.CharField(max_length=50)
    project_url = models.CharField(max_length=30)
    project_hits = models.IntegerField(default=0)
    register_date = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return self.project_name


class Department(models.Model):
    ''' 지원사업 담당하는 부서들(부처 + 지자체)
        다 따로 찾아서 database에 넣어야 함
        depart_name: 부서 이름
        depart_image: 부서 사진, url을 통해 경로 설정
        depart_loc: 부서 위치, 주소 + 우편번호
        total_project: 부서에서 지금까지 낸 지원사업의 총 개수
        tax_income: 부서 총 예산, 작년 세입? 위키백과에 나옴
        tax_outcome: 부서 총 예산, 작년 세출? 위키백과에 나옴    '''

    depart_name = models.CharField(max_length=50)
    depart_image = models.CharField(max_length=100)
    depart_loc = models.CharField(max_length=100)
    total_project = models.IntegerField(default=0)
    tax_income = models.IntegerField(default=0)
    tax_outcome = models.IntegerField(default=0)

    def __str__(self):
        return self.depart_name
