const express = require('express');const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change to your desired port

const cors = require('cors');

// Enable CORS
app.use(cors());


// PostgreSQL database configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'afn-8188',
    port: 5432, // Default PostgreSQL port
});

// Middleware for parsing JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create the table if it doesn't exist
pool.query(
	'CREATE TABLE IF NOT EXISTS pessoas (id serial PRIMARY KEY, name VARCHAR(255), numero VARCHAR(20))',
	(error, result) => {
		if (error) {
			console.error('Error creating table:', error);
		} else {
			console.log('Table created or already exists:', result);
		}
	}
);

// Define a route to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, name2, email2 } = req.body;

  // Insert the first set of data into the PostgreSQL database
  pool.query(
    'INSERT INTO pessoas (name, numero) VALUES ($1, $2)',
    [name, email],
    (error, result) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'An error occurred while inserting data.' });
      } else {
        console.log('First set of data inserted successfully:', result);

        // Insert the second set of data into the PostgreSQL database
        pool.query(
          'INSERT INTO pessoas (name, numero) VALUES ($1, $2)',
          [name2, email2],
          (error2, result2) => {
            if (error2) {
              console.error('Error inserting data:', error2);
              res.status(500).json({ error: 'An error occurred while inserting data.' });
            } else {
              console.log('Second set of data inserted successfully:', result2);
              res.status(200).json({ message: 'Data inserted successfully.' });
            }
          }
        );
      }
    }
  );
});


// Start the Express server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
