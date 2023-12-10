from django.db import models

class Farmers(models.Model):
    name = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=15)
    location = models.CharField(max_length=100)
    product = models.CharField(max_length=100)

    def __str__(self):
        return self.name
