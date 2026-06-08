# Python - Object-relational mapping

In this project, we will link two amazing worlds: Databases and Python!
In the first part, we will use the module `MySQLdb` to connect to a MySQL database and execute our SQL queries.
In the second part, we will use the module `SQLAlchemy` an Object Relational Mapper (ORM).

## Resources
- [Object-relational mappers](https://www.fullstackpython.com/object-relational-mappers-orms.html)
- [mysqlclient/MySQLdb documentation](https://mysqlclient.readthedocs.io/)
- [MySQLdb tutorial](https://www.mikusa.com/python-mysql-docs/index.html)
- [SQLAlchemy tutorial](https://docs.sqlalchemy.org/en/13/orm/tutorial.html)
- [SQLAlchemy](https://docs.sqlalchemy.org/en/13/)
- [mysqlclient/MySQLdb](https://github.com/PyMySQL/mysqlclient)
- [introduction to SQLAlchemy](https://www.youtube.com/watch?v=woKYyhLCcnU)
- [Flask SQLAlchemy](https://www.youtube.com/playlist?list=PLXmMXHVSvS-BlLA5beNJojJLlpE0PJgCW)
- [10 common stumbling blocks for SQLAlchemy newbies](https://alextechrants.blogspot.com/2013/11/10-common-stumbling-blocks-for.html)
- [Python SQLAlchemy Cheatsheet](https://www.pythonsheets.com/notes/database/python-sqlalchemy.html)
- [SQLAlchemy ORM Tutorial for Python Developers](https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers/)

## Learning Objectives
- How to connect to a MySQL database from a Python script
- How to `SELECT` rows in a MySQL table from a Python script
- How to `INSERT` rows in a MySQL table from Python script
- What ORM means
- How to map a Python Class to a MySQL table

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- All our files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.8.5)
- Our files will be executed with `MySQLdb` version `2.0.x`
- Our files will be executed with `SQLAlchemy` version `1.4.x`
- All our files should end with a new line
- The first line of all our files should be exactly `#!/usr/bin/python3`
- A `README.md` file, at the root of the folder of the project, is mandatory
- Our code should use the pycodestyle (version 2.7.x)
- All our files must be executable
- The length of our files will be tested using `wc`
- All our modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__'`)
- All our classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__'`)
- All our functions (inside and outside a class) should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__'`) and (`python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)
- A documentation is not a simple word, it's a real sentence explaining what's the purpose of the module, class or method (the length of it will be verified)
- We are not allowed to use `execute` with sqlalchemy

## Scripts Descriptions
- [`0-select_states.py`](./0-select_states.py): This scripts lists all `states` from the database `hbtn_0e_0_usa`:
    - The script should take 3 arguments: `mysql username`, `mysql password` and `database name` (no argument validation needed)
    - We must use the module `MySQLdb` (`import MySQLdb`)
    - Our script should connect to a MySQL server running on `localhost` at port `3306`
    - Results must be sorted in ascending order by `states.id`
    - Results must be displayed as they are in the example below
    - Your code should not be executed when imported
