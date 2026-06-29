#!/usr/bin/python3
"""
Lists all states from a MySQL database in ascending order by id.
Takes lysql username, password and database name as arguments.
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

    cursor.execute("""SELECT * FROM states ORDER BY id ASC;""")
    states = cursor.fetchall()

    for state in states:
        print(state)

    cursor.close()
    db_connection.close()
