# React-Flask-Redux-Boilerplate #

A simple boilerplate with login view and flask backend.

* Python 3.x
* Pytest
* Heroku
* Flask
* React
* Redux
* React-Router 
* React-Router-Redux
* Babel 
* SCSS processing
* Webpack


### Create DB


```
$ python manage.py create_db
$ python manage.py db upgrade
$ python manage.py db migrate
```

To update database after creating new migrations, use:

```sh
$ python manage.py db upgrade
```

### Install Front-End Requirements
```sh
$ cd static
$ npm install
```

### Run Back-End

```sh
$ python manage.py runserver
```

### Test Back-End

```sh
$ python test.py --cov-report=term --cov-report=html --cov=application/ tests/
```

### Run Front-End

```sh
$ cd static
$ npm start
```

### Build Front-End

```sh
$ npm run build:production
```

#### How to start ?


1. Create the database and tables

```
$ python manage.py create_db
```

Note: you do not need to run "python manage.py db upgrade" or "python manage.py db migrate" if its your first go at it

2. Run Back-End

```
$ python manage.py runserver
```

If all goes well, you should see ```* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)``` followed by a few more lines in the terminal.

3. open a new tab to the same directory and run the front end

```
$ cd static
$ npm install
$ npm start
```

4. open your browser to http://localhost:3000/register and setup your first account
5. enjoy! By this point, you should be able to create an account and login without errors. 




