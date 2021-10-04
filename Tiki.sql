CREATE TABLE USERS (
    id INT UNIQUE AUTO_INCREMENT,
    email varchar(100),
    username varchar(100),
    password varchar(100),
    fullname varchar(100),
    first_name varchar(100),
    last_name varchar(100),
    dob varchar(100),
    address varchar(100),
    phone_number varchar(100),
    PRIMARY KEY (id)
);

INSERT INTO USERS VALUES(null, 'user1@gmail.com', 'user1', 'harry1234', 'Harry Potter', 'Harry', 'Potter', '01/01/2000', 'Hogwarts', '9999999');
INSERT INTO USERS VALUES(null, 'user2@gmail.com', 'user2', 'lankhanh1504', 'Khanh Khuat', 'Khanh', 'Khuat', '01/05/2004', 'TP.HCM', '8888888');


