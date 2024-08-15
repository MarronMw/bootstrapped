# Generated by Django 5.0.8 on 2024-08-15 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Destination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=1024)),
                ('image', models.ImageField(default='img.png', upload_to='')),
            ],
        ),
    ]
