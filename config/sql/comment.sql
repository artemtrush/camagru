CREATE TABLE IF NOT EXISTS comment (
    user_id INT(6) UNSIGNED NOT NULL,
    image_id INT(6) UNSIGNED NOT NULL,
    text VARCHAR(300) NOT NULL,
    date TIMESTAMP
)