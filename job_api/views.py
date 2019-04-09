from rest_framework import viewsets, generics
from .models import Job, Category
from .serializers import JobsSerializer, CategorySerializer


class JobsView(generics.ListCreateAPIView):
    serializer_class = JobsSerializer
    queryset = Job.objects.all()


class JobsDetailView(generics.RetrieveAPIView):
    serializer_class = JobsSerializer
    queryset = Job.objects.all()


class CategoryView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
