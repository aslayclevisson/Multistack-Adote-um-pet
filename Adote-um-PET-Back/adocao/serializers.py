from pet.models import Pet
from pet.serializers import PetSerializer
from rest_framework import serializers

from .models import Adocao


class AdocaoSerializer(serializers.ModelSerializer):
    pet = PetSerializer(read_only=True, many=False)
    pet_id = serializers.PrimaryKeyRelatedField(
        write_only=True,
        queryset=Pet.objects.all(),
        many=False
    )
    class Meta:
        model = Adocao
        fields = ['id', 'valor', 'email', 'pet', 'pet_id']
    
    def create(self, validated_data):
        # ou coloco o pet_id no fields para receber ele no validated_data e logo após,
        # dou um pop(validated_data['pet_id']) para retornar o valor para validated_data['pet']
        # exemplo: validated_data['pet'] = validated_data.pop('pet_id')
        validated_data["pet"] = validated_data.pop('pet_id')
        return super().create(validated_data)
    
    def validate_valor(self, valor): # para outras validações, só a gente colocar validate_nome_do_campo
        if valor < 1:
            raise serializers.ValidationError('O valor precisa ser maior do que 0.')
        
        elif valor > 999:
            raise serializers.ValidationError('O valor precisa ser menor do que 999.')

        return valor
