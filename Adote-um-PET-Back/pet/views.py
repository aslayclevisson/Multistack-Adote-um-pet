from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Pet
from .serializers import PetSerializer


class PetList(APIView):  # List se usa quando retorna uma lista de dados
    def get(self, request, format=None):
        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        data = request.data
        serializer = PetSerializer(data=data)

        if serializer.is_valid():
            pet = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(
            {
                "errors": serializer.errors,
                "message": "Houveram erros durante o cadastro do pet.",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )


class PetDetail(APIView):
    def get(self, request, pk, format=None):
        pet = get_object_or_404(Pet, pk=pk)
        serializer = PetSerializer(pet, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
