from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django import forms
from .serializers import UserSerializer
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def registration_view(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# login view
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        print("Login successful")
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        print("Invalid credentials")
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
    # get all registered users
    
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_registered_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
