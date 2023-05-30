# Generated by Django 4.1.7 on 2023-05-30 03:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0013_remove_customuser_is_professor_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userprofile",
            name="user",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_query_name="profile",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
