#!/usr/bin/python3
"""
Lists all states that starts with 'N' from a mysql database in ascending
order by id. Takes mysql username, password and database name as args
"""
import sys
import MySQLdb

if __name__ == "__main__":
    my_host = 'localhost'
    my_port = 3306
    my_user = sys.argv[1]
    my_password = sys.argv[2]
    my_db = sys.argv[3]

    db_connection = MySQLdb.connect(
        host=my_host,
        port=my_port,
        user=my_user,
        passwd=my_password,
        db=my_db
    )

    cursor = db_connection.cursor()

    cursor.execute(
        """SELECT id, name FROM states WHERE name LIKE 'N%' ORDER BY id ASC"""
        )
    states = cursor.fetchall()

    for state in states:
        print(state)

    cursor.close()
    db_connection.close()
