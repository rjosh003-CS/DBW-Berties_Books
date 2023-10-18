
DELIMITER //

-- Check if the user 'appuser'@'localhost' exists.
SELECT COUNT(*) INTO @user_count FROM mysql.user WHERE user = 'appuser' AND host = 'localhost';

-- Create a stored procedure to handle user creation and privilege assignment.
CREATE PROCEDURE CreateUserAndGrantPrivileges()
BEGIN
  -- Create the user if it does not exist.
  IF @user_count = 0 THEN
    CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'app2027';
  END IF;

  -- Grant privileges to the user on the 'myBookshop' database.
  GRANT ALL PRIVILEGES ON myBookshop.* TO 'appuser'@'localhost';
END //

DELIMITER ;
-- Flush privileges to apply the changes.
FLUSH PRIVILEGES;