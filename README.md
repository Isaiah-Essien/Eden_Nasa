# Eden – Empowering Smallholder Farmers through Digital Agriculture

## Project Description:
Smallholder farmers globally face challenges such as limited market access, low income, and insufficient resources for optimal crop management. Eden addresses these issues by introducing a digital marketplace that connects farmers directly with consumers, promoting fair trade practices and sustainable agriculture.
## Installation Process
## Backend
### Prerequisites
Python 3. x
Node.js and npm
Create a virtual environment: python -m venv venv
Activate the Virtual Environment
.\venv\Scripts\activate (Note this will depend on the device you're using, On macOS/Linux: source venv/bin/activate
)
### Install Django and Other Dependencies:
pip install django, djangorestframework, pillow

### Create Django Project and Apps

django-admin startproject backend
cd backend
python manage.py startapp addproduct
python manage.py startapp authentication
python manage.py startapp farmer
python manage.py startapp contact
### Configure Installed Apps in settings.py:
Add the following under installed apps. 
INSTALLED_APPS = [
    # ...
    'addproduct',
    'authentication',
    'farmer',
    'contact',
    'rest_framework',
    # ...
]
###Created nessaly files like views and forms and we added codes to the ones that were there which are urls,models, admin ect
### Apply Migrations:
python3 manage.py migrate
python3 manage.py migrate
### Run the server
python3 manage.py runserver
You can stop and create the super user and rerun the app again

## Frontend Installation
Prerequisites
Node.js and npm
Vs Code or any other IDE you prefer

### Create a React App:
npm create-react-app frontend
cd frontend
#### Install Required Frontend Libraries:
npm install @fortawesome/react-fontawesome axios dom bosstract react-icons react-router-dom react-scripts web-vitals jext
npm install @fortawesome/react-fontawesome axios bosstract react-icons react-router-dom react-scripts web-vitals jest-dom

## TO ACCESS THE DJANGO APP
Clone the git repo using: https://github.com/Isaiah-Essien/Eden_Nasa
then cd Eden_Nasa
## For backend 
cd backend 
install all the dependencies needed:
Django: pip install Django
Rest framework API: pip install Django rest framework
cors headers: pip install Django-cors-headers
pip install pillow
After you install all dependencies, you will be able to access the Django endpoint APIs, that we connected to the backend to be able to fetch data to the frontend. 
![Screenshot from 2023-12-14 16-09-09](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/a72ec132-11c5-48df-9222-2335b5fcec0e)
![Uploading Screenshot from 2023-12-14 16-09-09.png…]()
From here you can interact with different endpoints by adding the endpoint routes to the browser. 

### To access frontend
After cloning the given link
do:
cd frontend
cd eden-pages
inatll rewired dependecies by running npm install
and run application by command: npm run start
It will start your application:

## Features and Functionalities


## Log In & Sign Up In the backend
api end point for login:http://127.0.0.1:8000/api/auth/api/login/
api end point for Signup: http://127.0.0.1:8000/api/auth/api/signup/

Through api/auth route you can be able to log in and create an account. The information should be sent in JSON format and the request should be posted:
{
"username": "new_username",
"password": "new_password",
"email": "user@example.com"
}
and when you want to logIn credentials should be in this format:
{
"username": "new_username",
"password": "new_password",
}
## Product Routs
Add product: http://127.0.0.1:8000/product/create/list/
Remove a product: http://127.0.0.1:8000/product/details/1/ (by adding an id of product you want to remove
Update the product: http://127.0.0.1:8000/product/update/2/
Product list:  http://127.0.0.1:8000/product/list

## Famers Routes:
Add product: http://127.0.0.1:8000/farmers/farmers/
Remove a product:http://127.0.0.1:8000/farmers/farmers/1/
Update the product: http://127.0.0.1:8000/famer/update/2/
Product list:  http://127.0.0.1:8000/famer/list


## Frontend
We have connected our API endpoint to the fronted for the app to have a life. 
### screenshoots
![Screenshot from 2023-12-14 15-47-36](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/ecd8c3b1-732d-4e52-8055-86b7eaef707f)
![Screenshot from 2023-12-14 15-47-55](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/e80b8d2b-2d3d-4054-913e-51862a1f8dd3)
![Screenshot from 2023-12-14 15-48-26](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/a3f7991f-adde-4e94-9d7e-044709c269b2)

![Screenshot from 2023-12-14 15-48-53](https://github.com/Isaiah-Essien/Eden_Nas![Screenshot from 2023-12-14 15-49-21](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/b760bc56-cf14-40f2-849f-647ae22d0852)
a/assets/79199207/ac896c17-4f98-4e82-9eb1-4649399fd79b)




### Additional Documentation
[Revised WORK Proposal_TEAM NASA](https://docs.google.com/document/d/14awVArsnLxLCLDtbUrCJu0RsygbR8Fbw1dzcGUHgciI/edit)https://docs.google.com/document/d/14awVArsnLxLCLDtbUrCJu0RsygbR8Fbw1dzcGUHgciI/edit
[Conceptual design Document- Team NASA_Eden
](https://docs.google.com/document/d/12l1VykdkdKpIGzazneN4A8kAS3eYT78zzlc6hJzG4Jw/edit#heading=h.xeimghfs9srl)https://docs.google.com/document/d/12l1VykdkdKpIGzazneN4A8kAS3eYT78zzlc6hJzG4Jw/edit#heading=h.xeimghfs9srl








