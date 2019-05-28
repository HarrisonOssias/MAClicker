CREATE TABLE INSTRUCTOR_INFO (
    INSTR_ID INTEGER NOT NULL,
    FIRSTNAME VARCHAR(60) NOT NULL,
    LASTNAME VARCHAR(60) NOT NULL,

    PRIMARY KEY(INSTR_ID)
);

CREATE TABLE STUDENT_INFO (
    STUDENT_ID INTEGER NOT NULL,
    FIRSTNAME VARCHAR(60) NOT NULL,
    LASTNAME VARCHAR(60) NOT NULL,

    PRIMARY KEY(STUDENT_ID)
);

CREATE TABLE COURSES (
    COURSE_ID INTEGER NOT NULL,
    COURSE_NAME VARCHAR(60) NOT NULL,
    INSTR_ID VARCHAR(60) NOT NULL,

    FOREIGN KEY (INSTR_ID) REFERENCES INSTRUCTOR_INFO (INSTR_ID) ON DELETE CASCADE,
    PRIMARY KEY(COURSE_ID)
);

CREATE TABLE ENROLLMENT (
    COURSE_ID INTEGER NOT NULL,
    STUDENT_ID INTEGER NOT NULL,

    FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT_INFO (STUDENT_ID) ON DELETE CASCADE,
    FOREIGN KEY (COURSE_ID) REFERENCES COURSES (COURSE_ID) ON DELETE CASCADE,
    PRIMARY KEY(COURSE_ID, STUDENT_ID)
);

CREATE TABLE QUIZ_INFO (
    QUIZ_ID INTEGER NOT NULL AUTO_INCREMENT,
    COURSE_ID INTEGER NOT NULL,
    QUIZ_NAME VARCHAR(60) NOT NULL,
    QUIZ_TYPE ENUM('PR', 'MQUIZ', 'IQUIZ'), -- PEER REVIEW, MIDTERM TYPE QUIZ, INTERACTIVE QUIZ 
    QUIZ_ACTIVE ENUM('T','F'),
    WEIGHT TINYINT,
    QUIZ_TIME INTEGER,

    FOREIGN KEY (COURSE_ID) REFERENCES COURSES (COURSE_ID) ON DELETE CASCADE,
    PRIMARY KEY (QUIZ_ID)
);

CREATE TABLE QUIZ_QUESTIONS (
    QUESTION_ID INTEGER NOT NULL AUTO_INCREMENT,
    QUIZ_ID INTEGER NOT NULL,
    QUESTION_TEXT VARCHAR(60) NOT NULL, 
    QUESTION_TYPE ENUM('MC', 'TF', 'LA', 'SA', 'NUM', 'MAT') NOT NULL, -- MULTIPLE CHOICE, TRUE/FALSE, LONG ANSWER, SHORT ANSWER, NUMERICAL, MATCHING 
    QUIZ_TIME TIME, -- MIGHT CHANGE TO TIME TYPE LATER ,

    FOREIGN KEY (QUIZ_ID) REFERENCES QUIZ_INFO (QUIZ_ID) ON DELETE CASCADE,
    PRIMARY KEY(QUESTION_ID)
);

CREATE TABLE QUIZ_ANSWERS (
    ANSWER_ID INTEGER NOT NULL AUTO_INCREMENT,
    QUESTION_ID INTEGER NOT NULL,
    ANSWER_TEXT VARCHAR(60) NOT NULL, -- THE ACTUAL QUESTION STRING
    ABS_ANS BOOLEAN NOT NULL,

    FOREIGN KEY (QUESTION_ID) REFERENCES QUIZ_QUESTIONS (QUESTION_ID) ON DELETE CASCADE,
    PRIMARY KEY(ANSWER_ID)
);

CREATE TABLE PR_INFO (
    PR_ID INTEGER NOT NULL AUTO_INCREMENT,
    COURSE_ID INTEGER NOT NULL,
    PR_NAME VARCHAR(60) NOT NULL,
    PR_ACTIVE BOOLEAN NOT NULL,
    WEIGHT INTEGER,
    PR_TIME INTEGER, -- MIGHT CHANGE TO TIME TYPE LATER 

    FOREIGN KEY (COURSE_ID) REFERENCES COURSES (COURSE_ID) ON DELETE CASCADE,
    PRIMARY KEY(PR_ID)
);

CREATE TABLE PR_GROUPS (
    PR_GROUP_ID INTEGER NOT NULL AUTO_INCREMENT,
    PR_ID INTEGER NOT NULL,
    GROUP_NAME VARCHAR(60) NOT NULL,

    FOREIGN KEY (PR_ID) REFERENCES PR_INFO (PR_ID) ON DELETE CASCADE,
    PRIMARY KEY(PR_GROUP_ID)
);

CREATE TABLE PR_CONTENT (
    CONTENT_ID INTEGER NOT NULL AUTO_INCREMENT, -- SUCH AS PRESENTATION, SPEECH, RESEARCH, ETC
    PR_ID INTEGER NOT NULL,
    CONTENT_TEXT VARCHAR(60) NOT NULL, -- THE ACTUAL QUESTION STRING
    CONTENT_RANK INTEGER, -- RANK IS A DDL KEYWORD 

    FOREIGN KEY (PR_ID) REFERENCES PR_INFO (PR_ID) ON DELETE CASCADE,
    PRIMARY KEY(CONTENT_ID)
);

CREATE TABLE PR_SUBCONTENT (
    SUBCONTENT_ID INTEGER NOT NULL AUTO_INCREMENT, -- SUCH AS VISUAL, PACE, PITCH ETC
    CONTENT_ID INTEGER NOT NULL,
    SUBCONTENT_TEXT VARCHAR(60) NOT NULL, -- THE ACTUAL QUESTION STRING

    FOREIGN KEY (CONTENT_ID) REFERENCES PR_CONTENT (CONTENT_ID) ON DELETE CASCADE,
    PRIMARY KEY(SUBCONTENT_ID)
);

CREATE TABLE SUBMITTED_QUIZ (
	SUBMISSION_ID INTEGER NOT NULL AUTO_INCREMENT,
    STUDENT_ID INTEGER NOT NULL,
    QUIZ_ID INTEGER NOT NULL,
    TIME_SPENT INTEGER NOT NULL,
    GRADE TINYINT,
    
    FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT_INFO (STUDENT_ID) ON DELETE CASCADE,
    FOREIGN KEY (QUIZ_ID) REFERENCES QUIZ_INFO (QUIZ_ID) ON DELETE CASCADE,
    PRIMARY KEY (SUBMISSION_ID)
);

CREATE TABLE SUBMITTED_ANSWERS (
	SUBMISSION_ID INTEGER NOT NULL ,
    QUESTION_ID INTEGER NOT NULL,
    ANSWER VARCHAR(60),
    
	FOREIGN KEY (SUBMISSION_ID) REFERENCES SUBMITTED_QUIZ (SUBMISSION_ID) ON DELETE CASCADE,
	FOREIGN KEY (QUESTION_ID) REFERENCES QUIZ_QUESTIONS (QUESTION_ID) ON DELETE CASCADE,
    PRIMARY KEY (SUBMISSION_ID, QUESTION_ID)
);


DROP TABLE submitted_answers;
DROP TABLE SUBMITTED_QUIZ;
DROP TABLE PR_SUBCONTENT;
DROP TABLE PR_CONTENT;
DROP TABLE PR_GROUPS;
DROP TABLE PR_INFO;
DROP TABLE QUIZ_ANSWERS;
DROP TABLE QUIZ_QUESTIONS;
DROP TABLE ENROLLMENT;
DROP TABLE COURSES;
DROP TABLE QUIZ_INFO;
DROP TABLE STUDENT_INFO;
DROP TABLE INSTRUCTOR_INFO;


insert into Student_info (Student_ID, FirstName, LastName) values ("0", "Abby", "Johnson");
insert into Student_info (Student_ID, FirstName, LastName) values ("1", "Olivia", "Blake");
insert into Student_info (Student_ID, FirstName, LastName) values ("2", "Joe", "John");
insert into Student_info (Student_ID, FirstName, LastName) values ("3", "Chloe", "Mark");
insert into Student_info (Student_ID, FirstName, LastName) values ("4", "Mia", "Henry");
insert into Student_info (Student_ID, FirstName, LastName) values ("5", "Tyler", "Jacobs");
insert into Student_info (Student_ID, FirstName, LastName) values ("6", "Max", "Neesan");
insert into Student_info (Student_ID, FirstName, LastName) values ("7", "Dylan", "Troy");
insert into Student_info (Student_ID, FirstName, LastName) values ("8", "Lewis", "Fox");
insert into Student_info (Student_ID, FirstName, LastName) values ("9", "Esme", "Roberts");

insert into Student_info (Student_ID, FirstName, LastName) values ("0", "Abby", "Johnson");
insert into Student_info (Student_ID, FirstName, LastName) values ("1", "Olivia", "Blake");
insert into Student_info (Student_ID, FirstName, LastName) values ("2", "Joe", "John");
insert into Student_info (Student_ID, FirstName, LastName) values ("3", "Chloe", "Mark");
insert into Student_info (Student_ID, FirstName, LastName) values ("4", "Mia", "Henry");
insert into Student_info (Student_ID, FirstName, LastName) values ("5", "Tyler", "Jacobs");
insert into Student_info (Student_ID, FirstName, LastName) values ("6", "Max", "Neesan");
insert into Student_info (Student_ID, FirstName, LastName) values ("7", "Dylan", "Troy");
insert into Student_info (Student_ID, FirstName, LastName) values ("8", "Lewis", "Fox");
insert into Student_info (Student_ID, FirstName, LastName) values ("9", "Esme", "Roberts");


insert into Instructor_Info (Instr_ID, FirstName, LastName) values ("0", "Anne", "Johnson");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("1", "Tom", "Blake");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("2", "Jim", "John");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("3", "Shelly", "Mark");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("4", "May", "Henry");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("5", "Tye", "Jacobs");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("6", "Manny", "Neesan");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("7", "Darren", "Troy");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("8", "Larry", "Fox");
insert into Instructor_info (Instr_ID, FirstName, LastName) values ("9", "Jane", "Roberts");


insert into Courses (Course_ID, CourseName, Instr_ID) values ("0", "Comp Sci", "0");
insert into Courses (Course_ID, CourseName, Instr_ID) values ("1", "Eng1", "0");
insert into Courses (Course_ID, CourseName, Instr_ID) values ("2", "Politics", "1");

insert into ENROLLMENT(Course_ID, STUDENT_ID) values ("0", "0");

