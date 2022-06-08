from django.db import models
from pet.models import Pet


# Create your models here.
class Adocao(models.Model):
    valor = models.DecimalField(
        null=False, blank=False, max_digits=5, decimal_places=2
    )  # 999.99 max
    email = models.EmailField(null=False, blank=False, max_length=255)
    pet = models.ForeignKey(Pet, null=False, on_delete=models.CASCADE)
