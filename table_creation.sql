drop table resourses;
drop table competitions;
drop table pitch;
drop table draft_pitch;
drop table pitch_questions;
drop table question_type;
drop table "comments";
drop table mentors;
drop table students;
drop table roles;

CREATE TABLE students (
	id  int PRIMARY KEY, 
	Full_name varchar(50) NOT NULL,
	Email varchar(50) NOT NULL,
	Password varchar(255) NOT NULL,
	Roles varchar(15) NOT NULL,
	Confirm varchar(10) DEFAULT false,
	Tell_about_yourself varchar(250),
	profile_picture varchar(250)
);

CREATE TABLE mentors (
	id  SERIAL PRIMARY KEY,
	Full_name varchar(50) NOT NULL,
	Email varchar(50) NOT NULL,
	Password varchar(255) NOT NULL,
	Roles varchar(15) NOT NULL,
	Tell_about_yourself varchar(250),
	profile_picture varchar(250)
);

CREATE TABLE question_type (
	id SERIAL PRIMARY KEY,
	name varchar(10) NOT NULL
);

CREATE TABLE pitch_questions (
	id SERIAL PRIMARY KEY,
	question_type integer REFERENCES question_type(id),
	Business_description  varchar(250),
	Innovation varchar(250),
	Market_Analysis varchar(250),
	Product_or_Service_Analysis varchar(250),
	Competition varchar(250),
	Marketing_Strategy varchar(250),
	Operations varchar(250),
	Finances varchar(250),
	Management_And_Technical_complexity varchar(250)
);

CREATE TABLE draft_pitch (
	id SERIAL PRIMARY KEY,
	pitch_questions_id integer REFERENCES pitch_questions(id),
	student_no int REFERENCES students(id),
	questions varchar(250),
	answers varchar(150)
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	mentor_id integer REFERENCES mentors(id),
	comment varchar(255) NOT NULL,
	student_no integer REFERENCES students(id)
);

CREATE TABLE pitch (
	id SERIAL PRIMARY KEY,
	student_no integer REFERENCES students(id),
	pitch varchar(4150) NOT NULL,
	comment_id integer REFERENCES comments(id),
	draft_pitch_id integer REFERENCES draft_pitch(id)
);

CREATE TABLE competitions (
	id SERIAL PRIMARY KEY,
	title varchar(255) NOT NULL,
	article TEXT NOT NULL,
	mentor_id integer REFERENCES mentors(id)
);

CREATE TABLE resourses (
	id SERIAL PRIMARY KEY,
	title varchar(255) NOT NULL,
	article TEXT NOT NULL,
	mentor_id integer REFERENCES mentors(id)
);
