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
	create_date date not null default CURRENT_DATE,
	modifyby varchar(50),
	modify_date date not null default CURRENT_DATE,
	confirm boolean NOT NULL DEFAULT false,
	is_delete boolean not null DEFAULT false 
);

CREATE TABLE  category_type (
	id SERIAL PRIMARY KEY,
	name varchar(150),
	description varchar(250),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean not null DEFAULT false
);

CREATE TABLE pitch_type(
	id SERIAL PRIMARY KEY,
	pitch_type_name varchar(10),,
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
    is_delete boolean not null DEFAULT false
);

CREATE TABLE questions (
	id SERIAL PRIMARY KEY,
	questions varchar(250) NOT NULL,
	category_type_id int REFERENCES category_type(id),
	pitch_type_id int REFERENCES pitch_type(id),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
    is_delete boolean not null DEFAULT false
);

CREATE TABLE answers (
	id SERIAL PRIMARY KEY,
	answer varchar(150),
    student_number int NOT NULL,
    createby uuid REFERENCES users(id),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
    is_delete boolean not null DEFAULT false
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comments varchar(500),
    createby uuid REFERENCES users(id),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
    is_delete boolean not null DEFAULT false
);

CREATE TABLE pitch (
	id SERIAL PRIMARY KEY,
    student_number int NOT NULL,
	question_id int REFERENCES questions(id),
	answer_id int REFERENCES answers(id),
	pitch_type_id int REFERENCES pitch_type(id),
	comment_id int REFERENCES comments(id),
	user_id uuid REFERENCES users(id),
	create_date date not null default CURRENT_DATE,
	modifyby uuid REFERENCES users(id),
	modify_date date not null default CURRENT_DATE,
	is_delete boolean not null DEFAULT false
);