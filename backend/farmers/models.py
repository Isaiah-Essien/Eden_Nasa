from django.db import models

class Farmers(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    product = models.CharField(max_length=100)

    def __str__(self):
        return self.name
