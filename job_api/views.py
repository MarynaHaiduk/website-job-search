from rest_framework import viewsets, generics
from .models import Job
from .serializers import JobsSerializer


class JobsView(generics.ListCreateAPIView):
    serializer_class = JobsSerializer
    queryset = Job.objects.all()

class JobsDetailView(generics.RetrieveAPIView):
    serializer_class = JobsSerializer
    queryset = Job.objects.all()