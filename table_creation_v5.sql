CREATE EXTENSION "uuid-ossp";

CREATE TABLE role_type (
	id SERIAL PRIMARY KEY,
	role_name varchar(10)
);

CREATE TABLE users (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	role_type_id int REFERENCES role_type(id),
	name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	password varchar(255) NOT NULL,
	student_number int,
	biography varchar(250),
	profile_picture varchar(600),
	created_date date,
	modified_by varchar(50),
	modified_date date,
	is_delete boolean not null DEFAULT false 
);

CREATE TABLE  category_type (
	id SERIAL PRIMARY KEY,
	name varchar(150),
	description varchar(250),
	created_by varchar(50),
	created_date date,
	modified_by varchar(50),
	modified_date date,
	is_delete boolean not null DEFAULT false
);

CREATE TABLE pitch_type(
	id SERIAL PRIMARY KEY,
	pitch_type_name varchar(10),
	created_by varchar(50),
	created_date date,
	modified_by varchar(50),
	modified_date date,
	is_delete boolean not null DEFAULT false
);

CREATE TABLE questions (
	id SERIAL PRIMARY KEY,
	questions varchar(250) NOT NULL,
	category_type_id int REFERENCES category_type(id),
	pitch_type_id int REFERENCES pitch_type(id),
	created_by varchar(50),
	created_date date,
	modified_by varchar(50),
	modified_date date,
	is_delete boolean not null DEFAULT false
);

CREATE TABLE answers (
	id SERIAL PRIMARY KEY,
	answer varchar(150),
	question_id int REFERENCES questions(id),
    users_id uuid REFERENCES users(id),
    student_number int NOT NULL,
    created_by varchar(50),
	created_date date,
	modified_by varchar(50),
	modified_date date,
	is_delete boolean not null DEFAULT false
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comment varchar(500),
    answer_id int REFERENCES answers(id),
    users_id uuid REFERENCES users(id),
    created_by varchar(50),
	created_date date,
	modified_by varchar(50),
	modified_date date,
	is_delete boolean not null DEFAULT false
);