# Generated by Django 4.2.7 on 2023-12-10 13:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('farmers', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='farmers',
            old_name='phone_number',
            new_name='phoneNumber',
        ),
    ]