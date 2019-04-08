from django.urls import path
from . import views


urlpatterns = [
    path('api/job', views.JobsView.as_view()),
    path('api/job/<pk>', views.JobsDetailView.as_view()),
]