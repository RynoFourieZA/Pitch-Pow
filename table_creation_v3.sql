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
	confirm boolean NOT NULL DEFAULT false,
	biography varchar(250),
	profile_picture varchar(600),
	create_date date not null default CURRENT_DATE,
	modifyby varchar(50),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean NOT NULL DEFAULT false       
);

CREATE TABLE  category_type (
	id SERIAL PRIMARY KEY,
	name varchar(150),
	description varchar(150),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean NOT NULL DEFAULT false
);

CREATE TABLE pitch_type(
	id SERIAL PRIMARY KEY,
	pitch_type_name varchar(10),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean NOT NULL DEFAULT false
);

CREATE TABLE questions (
	id SERIAL PRIMARY KEY,
	questions varchar(250) NOT NULL,
	category_type_id int REFERENCES category_type(id),
	pitch_type_id int REFERENCES pitch_type(id),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean NOT NULL DEFAULT false
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comments varchar(500), 
	createby uuid REFERENCES users(id),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean NOT NULL DEFAULT false
);

CREATE TABLE pitch (
	id SERIAL PRIMARY KEY,
    pitch_string varchar(4500),
	pitch_type_id int REFERENCES pitch_type(id),
	student_number int NOT NULL,
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean DEFAULT false
);

CREATE TABLE answers (
	id SERIAL PRIMARY KEY,
	is_answered boolean NOT NULL DEFAULT false,
    question_id int REFERENCES questions(id),
    student_number int NOT NULL,
	pitch_id int REFERENCES pitch(id),
	comment_id int REFERENCES comments(id),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean DEFAULT false
);
