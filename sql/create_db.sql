-- Check if the database 'myBookshop' exists, and if it does, drop it.
DROP DATABASE IF EXISTS myBookshop;

-- Create the database 'myBookshop'.
CREATE DATABASE myBookshop;

-- Switch to the 'myBookshop' database.
USE myBookshop;

-- Create a table named 'books' with the specified columns.
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(5, 2) UNSIGNED
);

-- Insert data into the 'books' table.
INSERT INTO books (name, price) VALUES
  ('database book', 40.25),
  ('Node.js book', 25.00),
  ('Express book', 31.99);