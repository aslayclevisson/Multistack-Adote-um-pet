from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Adocao
from .serializers import AdocaoSerializer


# Create your views here.
class AdocaoList(APIView):
    def get(self, request, format="none"):
        adocao = Adocao.objects.all()
        serializer = AdocaoSerializer(adocao, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class AdocaoDetail(APIView):
    def get(self, request, pk, format="none"):
        adocao = get_object_or_404(Adocao, pk=pk)
        response = AdocaoSerializer(adocao, many=False)

        return Response(response.data, status=status.HTTP_200_OK)


class AdocaoCreate(APIView):
    def post(self, request, format="none"):
        data = request.data
        serializer = AdocaoSerializer(data=data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(
            {
                "errors": serializer.errors,
                "message": "Houveram erros durante o cadastro da adoção.",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )


# class AdocaoUpdate(APIView):
#     def put(self, request, pk, format="none"):
#         data = request.data

#         serializers = AdocaoSerializer(data=data)

#         if serializers.is_valid():
#             serializers.save()
#             return Response(serializers.data, status=status.HTTP_204_NO_CONTENT)
#         return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
