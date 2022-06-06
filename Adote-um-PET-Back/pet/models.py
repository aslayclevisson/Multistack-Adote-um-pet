from django.db import models


# Create your models here.
class Pet(models.Model):
    nome = models.CharField(blank=False, max_length=255, null=False)
    historia = models.TextField(blank=False, null=False) # não tem tamanho máximo
    foto = models.URLField(blank=False, null=False)
    