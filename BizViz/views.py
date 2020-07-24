from django.shortcuts import render, get_object_or_404
from .models import Department, Support


def index(request):
    # supports = Support.objects
    return render(request, 'BizViz/index.html')


def statistics(request):
    return render(request, 'BizViz/statistics.html')


def department(request, pk):
    depart = get_object_or_404(Department, pk=pk)
    return render(request, 'BizViz/department.html', {'depart': depart})


def content(request, pk):
    support = get_object_or_404(Support, pk=pk)
    return render(request, 'BizViz/content.html', {'support': support})
