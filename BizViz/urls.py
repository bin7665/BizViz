from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('statistics/', views.statistics, name='statistics'),
    path('statistics/<int:pk>/', views.department, name='department'),
    path('support/<int:pk>/', views.content, name='content'),
]
