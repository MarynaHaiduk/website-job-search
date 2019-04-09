# Generated by Django 2.2 on 2019-04-05 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListJobs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('company', models.CharField(max_length=100, verbose_name='Company')),
                ('location', models.CharField(max_length=50, verbose_name='Location')),
                ('rating', models.IntegerField(verbose_name='Job Level')),
                ('salary', models.CharField(blank=True, max_length=100)),
                ('description', models.TextField()),
                ('experience', models.CharField(blank=True, max_length=200)),
                ('requirements', models.CharField(blank=True, max_length=200)),
                ('benefits', models.CharField(blank=True, max_length=200)),
                ('job_type', models.CharField(blank=True, max_length=50)),
                ('additional_info', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('job_actual', models.BooleanField(default=True)),
                ('category', models.ForeignKey(on_delete=None, to='job_api.Category')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]