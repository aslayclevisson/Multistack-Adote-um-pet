from django.urls import path

from .views import PetDetail, PetList

urlpatterns = [
    path("", PetList.as_view(), name="pet-list"),
    path("<int:pk>", PetDetail.as_view(), name="pet-detail"),
]
