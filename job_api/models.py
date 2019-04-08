from django.db import models


SHORT_DESCRIPTION = 100


class Category(models.Model):
    category_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.category_name


class Job(models.Model):
    title = models.CharField(verbose_name="Title", max_length=100)
    company = models.CharField(verbose_name="Company", max_length=100)
    location = models.CharField(verbose_name="Location", max_length=50)
    rating = models.IntegerField(verbose_name="Job Level")
    salary = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    experience = models.CharField(max_length=200, blank=True)
    requirements = models.CharField(max_length=200, blank=True)
    benefits = models.CharField(max_length=200, blank=True)
    job_type = models.CharField(max_length=50, blank=True)
    additional_info = models.TextField()
    category = models.ForeignKey(Category, on_delete=None)
    created_at = models.DateTimeField(auto_now_add=True)
    job_actual = models.BooleanField(default=True)


    def __str__(self):
        return self.title


    def get_short_text(self):
        if len(self.description) > SHORT_DESCRIPTION:
            return self.description[: SHORT_DESCRIPTION]
        else:
            return self.description


    class Meta:
        ordering = ['-created_at']