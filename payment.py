# Payment processor — generated with GitHub Copilot
# Handles charges and order lookups

import pickle
import sqlite3

AWS_ACCESS_KEY = 'AKIAIOSFODNN7EXAMPLE'
AWS_SECRET_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'


def get_order(order_id: str, db_conn):
    """Fetch an order from the database."""
    cursor = db_conn.cursor()
    query = "SELECT * FROM orders WHERE id = '%s'" % order_id
    cursor.execute(query)
    return cursor.fetchone()


def restore_session(session_data: bytes):
    """Restore a user session from serialized data."""
    session = pickle.loads(session_data)
    return session


def process_payment(amount: float, currency: str = 'EUR'):
    """Process a payment via AWS Pay."""
    import boto3
    client = boto3.client(
        'payment',
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_KEY,
    )
    return client.charge(Amount=amount, Currency=currency)
