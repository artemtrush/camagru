CREATE TABLE IF NOT EXISTS image (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) UNSIGNED NOT NULL,
    path VARCHAR(100) NOT NULL
)