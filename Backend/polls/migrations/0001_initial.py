# Generated by Django 4.1.7 on 2023-03-14 08:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('groupNr', models.IntegerField(default=921)),
                ('groupNickname', models.CharField(default='unknown name', max_length=200)),
                ('language', models.CharField(default='romana', max_length=200)),
                ('year', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject_name', models.CharField(max_length=200)),
                ('subject_year', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('TeachingSubject', models.CharField(max_length=200)),
                ('years_of_experience', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_type', models.CharField(max_length=200)),
                ('day', models.CharField(max_length=200)),
                ('starting_hour', models.IntegerField(default=8)),
                ('group_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='polls.group')),
                ('subject_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='polls.subject')),
                ('teacher_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='polls.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('favoriteNumber', models.IntegerField(default=0)),
                ('favorite_colour', models.CharField(default='blue', max_length=200)),
                ('GroupId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='students', to='polls.group')),
            ],
            options={
                'unique_together': {('name', 'firstname', 'GroupId')},
            },
        ),
    ]
