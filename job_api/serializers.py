from rest_framework import serializers
from .models import Job, Category


class JobsSerializer(serializers.ModelSerializer):
   class Meta:
       model = Job
       fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
   class Meta:
       model = Category
       fields = '__all__'
