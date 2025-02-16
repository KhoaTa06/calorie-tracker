import psycopg2
from config import DB_CONFIG

class DatabaseInterface:
    def __init__(self):
        self.conn = psycopg2.connect(**DB_CONFIG)
        self.conn.close()

    def create_table(self):
        queries = ["""
        CREATE TABLE IF NOT EXISTS users (
                user_id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL,
                pw_hash TEXT NOT NULL,
                dob VARCHAR(20) NOT NULL);
        """,
        """
        CREATE TABLE IF NOT EXISTS food (
            food_id SERIAL PRIMARY KEY,
            fc_food_id INT UNIQUE NOT NULL,
            fc_serving_id INT UNIQUE NOT NULL,
            fc_image_url TEXT NOT NULL,
            name VARCHAR(100) NOT NULL,
            brand VARCHAR(100),
            calories INT NOT NULL,
            protein INT NOT NULL,
            carbs INT NOT NULL,
            fat INT NOT NULL,
            sodium FLOAT,
            potassium FLOAT,
            fiber FLOAT,
            sugar FLOAT,
            vitamin_a FLOAT,
            vitamin_c FLOAT,
            calcium FLOAT,
            iron FLOAT,
            vitamin_d FLOAT,
            metric_serving_amount FLOAT NOT NULL,
            metric_serving_unit VARCHAR(50) NOT NULL,
        );
        """,
        """
        CREATE TABLE IF NOT EXISTS food_logs (
            log_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
            food_id INTEGER REFERENCES food(food_id) ON DELETE CASCADE,
            quantity FLOAT NOT NULL,
            log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """,
        """
        CREATE TABLE IF NOT EXISTS daily_summary (
            summary_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
            date DATE NOT NULL,
            total_calories FLOAT DEFAULT 0,
            total_carbs FLOAT DEFAULT 0,
            total_protein FLOAT DEFAULT 0,
            total_fat FLOAT DEFAULT 0,
            sodium FLOAT DEFAULT 0,
            potassium FLOAT DEFAULT 0,
            fiber FLOAT DEFAULT 0,
            sugar FLOAT DEFAULT 0,
            vitamin_a FLOAT DEFAULT 0,
            vitamin_c FLOAT DEFAULT 0,
            calcium FLOAT DEFAULT 0,
            iron FLOAT DEFAULT 0,
            vitamin_d FLOAT DEFAULT 0,
            UNIQUE(user_id, date)
        );
        """,
        """
        CREATE TABLE IF NOT EXISTS goals (
            goal_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
            daily_calories FLOAT NOT NULL,
            daily_protein FLOAT NOT NULL,
            daily_carbs FLOAT NOT NULL,
            daily_fat FLOAT NOT NULL,
        );
        """,
                """
        CREATE TABLE IF NOT EXISTS workout_log (
            workout_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
            type VARCHAR(255) NOT NULL,
            repetition INTEGER NOT NULL,
            weight INTEGER NOT NULL,
            duration FLOAT NOT NULL,
        );
        """
        ]
                
        cur = self.conn.cursor()

        for query in queries:
            cur.execute(query)

        self.conn.commit()
        cur.close()



