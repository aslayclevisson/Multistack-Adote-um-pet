from django.urls import path

from .views import AdocaoCreate, AdocaoDetail, AdocaoList

urlpatterns = [
    path("", AdocaoList.as_view(), name="adocao-list"),
    path("<int:pk>/", AdocaoDetail.as_view(), name="adocao-detail"),
    path("cad/", AdocaoCreate.as_view(), name="adocao-create"),
]
