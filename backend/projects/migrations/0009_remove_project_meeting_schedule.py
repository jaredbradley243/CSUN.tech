# Generated by Django 4.1.7 on 2023-06-09 23:21

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("projects", "0008_alter_meetingtime_day_of_week"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="project",
            name="meeting_schedule",
        ),
    ]
