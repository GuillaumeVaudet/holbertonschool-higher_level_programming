#!/usr/bin/python3

"""
Takes and displays all values in the states table of hbtn_0e_0_usa
where name matches the argument.
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

    my_query = "SELECT * FROM states WHERE name = '{}'".format(searching_value)

    cursor.execute(my_query)

    states = cursor.fetchall()

    for state in states:
        print(state)

    cursor.close()
    db_connection.close()
