#!/usr/bin/python3
"""
Display all rows from the states table of a given database where
name matches the argument, using a parameterized query to prevent
SQL injection.
"""

import sys
import MySQLdb

if __name__ == "__main__":
    my_host = 'localhost'
    my_port = 3306
    my_user = sys.argv[1]
    my_password = sys.argv[2]
    my_db = sys.argv[3]
    searching_value = sys.argv[4]

    db_connection = MySQLdb.connect(
        host=my_host,
        port=my_port,
        user=my_user,
        passwd=my_password,
        db=my_db
    )

    cursor = db_connection.cursor()

    my_query = "SELECT * FROM states WHERE BINARY name = %s"

    cursor.execute(my_query, (searching_value,))

    states = cursor.fetchall()

    for state in states:
        print(state)

    cursor.close()
    db_connection.close()
