# Generated by Django 4.1.7 on 2023-05-29 06:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0010_remove_customuser_email_confirmed_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="student_id",
            field=models.CharField(blank=True, max_length=9, null=True),
        ),
    ]
