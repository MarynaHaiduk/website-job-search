from django.shortcuts import render, get_object_or_404
from job_api.models import Category, Job

def home(request):
    jobs_list = Job.objects.all()
    all_categories = Category.objects.all()
    context = {
        'jobs_list': jobs_list,
        'all_categories': all_categories
    }
    return render(request, 'pages/index.html', context)


# def view_job(request, job_id):
#     job = get_object_or_404(Job, id=job_id)
#     context = {
#         'job': job
#     }
#     return render(request, 'pages/view_job.html', context)
#
#
# def categories(request, category):
#     category_info = Category.objects.get(id=category)
#     data = Job.objects.get(category=category)
#     context = {
#         'category_info': category_info,
#         'data': data
#     }
#     return render(request, 'pages/categories.html', context)