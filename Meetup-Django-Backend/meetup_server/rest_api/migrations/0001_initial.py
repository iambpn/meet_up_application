# Generated by Django 3.2.4 on 2021-06-05 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MeetUps',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.TextField()),
                ('description', models.TextField()),
                ('address', models.CharField(max_length=255)),
            ],
        ),
    ]
