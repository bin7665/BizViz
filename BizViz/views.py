from django.shortcuts import render, get_object_or_404
from django.template.loader import render_to_string
from .models import Department, Support


def index(request):
    supports = Support.objects.order_by('-register_date')
    context = {
        'supports': supports
    }
    return render(request, 'BizViz/index.html', context)


def statistics(request):
    # To Do: pk에 값을 넣는 게 아니라 원하는 값이 들어올 수 있도록
    depart_basic = get_object_or_404(Department, pk=1)
    depart_compare = get_object_or_404(Department, pk=2)

    context = {
        'basic': render_to_string('BizViz/department.html', {'depart': depart_basic}),
        'compare': render_to_string('BizViz/department.html', {'depart': depart_compare})
    }
    return render(request, 'BizViz/statistics.html', context)


def department(request, pk):
    depart = get_object_or_404(Department, pk=pk)
    return render(request, 'BizViz/department.html', {'depart': depart})


def content(request, pk):
    support = get_object_or_404(Support, pk=pk)
    URL = 'http://www.bizinfo.go.kr/see/seea/selectSEEA140Detail.do?pblancId={0}&menuId=80001001001'.format(
        support.project_url)
    # support_url = render_to_string(URL)
    context = {
        'support': support,
        'URL': URL
    }
    return render(request, 'BizViz/content.html', context)
