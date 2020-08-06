from . import views
from django.urls import path

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('statistics/', views.statistics, name='statistics'),
    path('statistics/<str:pk>/', views.department, name='department'),
    path('support/<int:pk>/', views.content, name='content'),
]
