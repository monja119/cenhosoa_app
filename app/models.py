from django.db import models


class Mofonaina(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=100)
    date = models.DateField(auto_now=True)
    content = models.TextField()
