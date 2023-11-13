from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Farmers
from .serializers import FarmersSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

class FarmersListCreateView(generics.ListCreateAPIView):
    queryset = Farmers.objects.all()
    serializer_class = FarmersSerializer
    permission_classes = [IsAuthenticated]

class FarmersDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Farmers.objects.all()
    serializer_class = FarmersSerializer
    permission_classes = [IsAuthenticated]

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_farmer(request, farmer_id):
    try:
        farmer = Farmers.objects.get(id=farmer_id)
        serializer = FarmersSerializer(farmer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Farmers.DoesNotExist:
        return Response({'message': 'Farmer not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_farmer(request, farmer_id):
    try:
        farmer = Farmers.objects.get(id=farmer_id)
        farmer.delete()
        return Response({'message': 'Farmer deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    except Farmers.DoesNotExist:
        return Response({'message': 'Farmer not found'}, status=status.HTTP_404_NOT_FOUND)
