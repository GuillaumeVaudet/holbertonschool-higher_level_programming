#!/usr/bin/python3
"""
Display all cities from databases ordered by states
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

    my_query = """
               SELECT cities.id, cities.name, states.name FROM states
                INNER JOIN cities ON cities.states_id = states.id
                ORDER BY cities.id ASC
               """

    cursor.execute(my_query)

    cities = cursor.fetchall()

    for city in cities:
        print(city)

    cursor.close()
    db_connection.close()
