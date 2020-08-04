from django.shortcuts import render, get_object_or_404
from django.template.loader import render_to_string
from .models import Department, Support


def index(request):
    supports = Support.objects.order_by('-register_date')
    context = {
        'supports': supports,
    }
    depart_names = [i['depart_name']
                    for i in Department.objects.all().values()]
    depart_statistics = [get_object_or_404(
        Department, pk=i) for i in depart_names]
    for i in range(len(depart_names)):
        context[depart_names[i]] = render_to_string(
            'BizViz/department.html', {'depart': depart_statistics[i]})
    # print(context)
    return render(request, 'BizViz/index.html', context)


def statistics(request):
    # To Do: pk에 값을 넣는 게 아니라 원하는 값이 들어올 수 있도록
    depart_basic = get_object_or_404(Department, pk="중소벤처기업부")
    depart_compare = get_object_or_404(Department, pk="산업통상자원부")

    context = {
        'basic': render_to_string('BizViz/department.html', {'depart': depart_basic}),
        'compare': render_to_string('BizViz/department.html', {'depart': depart_compare})
    }
    return render(request, 'BizViz/statistics.html', context)


def department(request, pk):
    depart = get_object_or_404(Department, pk=pk)
    return render(request, 'BizViz/department.html', {'depart': depart})


def content(request, pk):
    # window 크기가 작으면 'http://m.bizinfo.go.kr/sem/sema/selectSEMA140Detail.do?pblancId={0}'.format(support.project_url)로 보낼 수 있도록
    support = get_object_or_404(Support, pk=pk)
    EURL = 'http://www.bizinfo.go.kr/see/seea/selectSEEA140Detail.do?pblancId={0}&menuId=80001001001'.format(
        support.project_url)
    MURL = 'http://m.bizinfo.go.kr/sem/sema/selectSEMA140Detail.do?pblancId={0}'.format(
        support.project_url)
    # support_url = render_to_string(URL)
    context = {
        'support': support,
        'EURL': EURL,
        'MURL': MURL
    }
    return render(request, 'BizViz/content.html', context)
