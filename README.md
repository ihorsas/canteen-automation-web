<p>
    <h1 align='center'> 🥙 Canteen2077 Project </h1>
</p>

<h4 align='center'> Repository for the project of the Ivan Franko National University Canteen ordering and queueing system. </h4>

<br>
<br>
<br>

## File Structure

```
.
├── LICENSE
├── README.md
├── canteenAutomation -> Project configurations
├── canteenDashboard -> React app for web dashboard
├── canteenGraphql -> Django app for web dashboard endpoints
├── canteenREST -> Deprecated Django REST API endpoints
├── manage.py
└── requirements.txt
```

## Technology Stack

#### Backend
- Django 2.1+ (Python 3.6+)
- Django GraphQL Framework
- Django REST Framework (Deprecated)
- Djoser authentication library

#### Frontend
- React 16.6+
- Material UI component library
- Axios for API calls to Django

## Build Instructions

#### Backend
```bash
  pip3 install -r requirements.txt
  python3 manage.py makemigrations
  python3 manage.py migrate
  python3 manage.py runserver
```

#### Frontend
```bash
  cd canteenFrontend
  npm install
  // on mac
  REACT_APP_GRAPHQL_ENDPOINT=http://127.0.0.1:8000 npm start
  // on windows 
  //TODO
```
Note: DO NOT RUN ```npm audit fix```

## Development Instructions

1. Before adding or commiting to git, please run `black .` inside this directory. This is important because we are using Black code formatter for this project and Travis build will fail otherwise.

2. The database we are using is sqllite3 for the prototype. We may change it to PostgreSQL later.

3. Please follow the directory structure for React JS.

4. You can optionally prettify React code using `npm run pretty` in `canteenDashboard/`.

## Team

#### Developers

1. Viktoriia Chumakevych (PM)
2. Ihor Sas (Key Dev)
3. Mykhailo Tsalan (Backend)
4. Bohdan Klymenko (Frontend)

## Old Team

#### Developers

1. Preet Shah (Backend)
2. Amogh Parab (Backend)
3. Atharva Tawate (Backend)
4. Nishay Madhani (DRF)
5. Chinmay Khamkar (Frontend)
6. Shreya Desai (Frontend)
7. Manav Shah (Frontend)
8. Jay Gala (Designer)
9. Vikrant Gajria (Full Stack)

#### Mentors

1. Ayush Kothari (Backend)
2. Fenil Doshi (Frontend)
3. Mudra Nagda (Design)
4. Parth Doshi (Backend)
5. Sahil Jajodia (Backend)

## License

> MIT License
> 
> Copyright (c) 2018 Unicode
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
