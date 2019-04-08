from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', include('frontend.urls')),
    path('', include("job_api.urls")),
    path('admin/', admin.site.urls),
]

