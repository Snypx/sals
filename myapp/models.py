from django.db import models

class Product(models.Model):
    product_id = models.CharField(max_length=20)
    product_name = models.CharField(max_length=100)
    sales = models.IntegerField()
    date = models.DateField()