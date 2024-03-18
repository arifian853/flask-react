# Flask + React

This project is a template for creating Flask + React project. Contains 2 folder, backend and frontend.

### 1. Backend 
In this folder, you can found ``` server.py ``` file that contains Flask backend starting code. Before you run this as a backend, install: 
```
pip install Flask
```
```
pip install flask-cors
```
After that, run the server with: 
```
python server.py
```
The server will run at ``` localhost:5000```

Go to ``` localhost:5000/data``` to see the data provided by the backend.

### 2. Frontend
In this folder, you will found a simple Vite React page that already fetching the data from ``` localhost:5000/data``` to the main route of the page.
Before you can run the frontend server, install the dependency first with:

```
npm install
```
Then run with:
```
npm run dev
```
The server will run at ```localhost:5173``` and will serve the data from the backend.