CREATE TABLE IF NOT EXISTS comment (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    image_id INT(6) UNSIGNED NOT NULL,
    text VARCHAR(300) NOT NULL,
    date TIMESTAMP
)