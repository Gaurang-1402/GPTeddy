# Generated by Django 4.1.7 on 2023-04-22 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user_management", "0002_prompts_filters"),
    ]

    operations = [
        migrations.RenameField(
            model_name="prompts",
            old_name="prompt",
            new_name="personality",
        ),
        migrations.AddField(
            model_name="prompts",
            name="age",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="prompts",
            name="message_count",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="prompts",
            name="subjects",
            field=models.CharField(blank=True, max_length=512, null=True),
        ),
        migrations.DeleteModel(
            name="Filters",
        ),
    ]