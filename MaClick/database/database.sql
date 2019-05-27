-- Create a new database called 'DBtest'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'DBTest'
)
CREATE DATABASE DBTest
GO
----------------------------------------------
 --DDL Statements for table INSTRUCTOR_INFO
------------------------------------------------
CREATE TABLE INSTRUCTOR_INFO (
    INSTR_ID INTEGER NOT NULL,
    FIRSTNAME VARCHAR(60) NOT NULL,
    LASTNAME VARCHAR(60) NOT NULL,

    PRIMARY KEY(INSTR_ID)
);

------------------------------------------------
--  DDL Statements for table STUDENT_INFO
------------------------------------------------
CREATE TABLE STUDENT_INFO (
    STUDENT_ID INTEGER NOT NULL,
    FIRSTNAME VARCHAR(60) NOT NULL,
    LASTNAME VARCHAR(60) NOT NULL,

    PRIMARY KEY(STUDENT_ID)
);

------------------------------------------------
--  DDL Statements for table COURSES
------------------------------------------------
CREATE TABLE COURSES (
    COURSE_ID INTEGER NOT NULL,
    COURSE_NAME VARCHAR(60) NOT NULL,
    INSTR_ID VARCHAR(60) NOT NULL,

    FOREIGN KEY (INSTR_ID) REFERENCES INSTRUCTOR_INFO (INSTR_ID) ON DELETE CASCADE,
    PRIMARY KEY(COURSE_ID)
);

------------------------------------------------
--  DDL Statements for table ENROLLMENT
------------------------------------------------
CREATE TABLE ENROLLMENT (
    COURSE_ID INTEGER NOT NULL,
    STUDENT_ID INTEGER NOT NULL,

    FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT_INFO (STUDENT_ID) ON DELETE CASCADE,
    FOREIGN KEY (COURSE_ID) REFERENCES COURSES (COURSE_ID) ON DELETE CASCADE,
    PRIMARY KEY(COURSE_ID, STUDENT_ID)
);

------------------------------------------------
--  DDL Statements for table QUIZ_INFO
------------------------------------------------
CREATE TABLE QUIZ_INFO (
    QUIZ_ID INTEGER NOT NULL,
    COURSE_ID INTEGER NOT NULL,
    QUIZ_NAME VARCHAR(60) NOT NULL,
    QUIZ_TYPE varchar(10)
        CHECK( QUIZ_TYPE IN ('PR', 'MQUIZ', 'IQUIZ')), --PR: peer review, MQUIZ: midterm quiz, IQuiz: interactive 
    ACTIVE varchar(1)
        CHECK( ACTIVE IN ('T','F')),
    WEIGHT TINYINT,
    TIME INTEGER, -- MIGHT CHANGE TO TIME TYPE LATER 

    FOREIGN KEY COURSE_ID REFERENCES COURSES COURSE_ID,
    PRIMARY KEY QUIZ_ID 
);

------------------------------------------------
--  DDL Statements for table QUIZ_QUESTIONS
------------------------------------------------
CREATE TABLE QUIZ_QUESTIONS (
    QUESTION_ID INTEGER NOT NULL IDENTITY(1,1),
    QUIZ_ID INTEGER NOT NULL,
    QUESTION_TEXT VARCHAR(60) NOT NULL, --THE ACTUAL QUESTION STRING
    QUESTION_TYPE ENUM('MC', 'TF', 'LA', 'SA', 'NUM', 'MAT') NOT NULL, -- MULTIPLE CHOICE, TRUE/FALSE, LONG ANSWER, SHORT ANSWER, NUMERICAL, MATCHING 
    QUIZ_TIME TIME, -- MIGHT CHANGE TO TIME TYPE LATER ,

    FOREIGN KEY (QUIZ_ID) REFERENCES QUIZ_INFO (QUIZ_ID) ON DELETE CASCADE,
    PRIMARY KEY(QUESTION_ID)
);

------------------------------------------------
--  DDL Statements for table QUIZ_ANSWERSz
------------------------------------------------
CREATE TABLE QUIZ_ANSWERS (
    ANSWER_ID INTEGER NOT NULL IDENTITY(1,1),
    QUESTION_ID INTEGER NOT NULL,
    ANSWER_TEXT VARCHAR(60) NOT NULL, --THE ACTUAL QUESTION STRING
    ABS_ANS BOOLEAN NOT NULL,

    FOREIGN KEY (QUESTION_ID) REFERENCES QUIZ_QUESTIONS (QUESTION_ID) ON DELETE CASCADE,
    PRIMARY KEY(ANSWER_ID)
);

------------------------------------------------;
--  DDL Statements for table PR_INFO
------------------------------------------------
CREATE TABLE PR_INFO (
    PR_ID INTEGER NOT NULL IDENTITY(1,1),
    COURSE_ID INTEGER NOT NULL,
    PR_NAME VARCHAR(60) NOT NULL,
    ACTIVE BOOLEAN NOT NULL,
    WEIGHT INTEGER,
    TIME INTEGER, -- MIGHT CHANGE TO TIME TYPE LATER 

    FOREIGN KEY (COURSE_ID) REFERENCES COURSES (COURSE_ID) ON DELETE CASCADE,
    PRIMARY KEY(PR_ID)
);

------------------------------------------------
--  DDL Statements for table PR_GROUPS
------------------------------------------------
CREATE TABLE PR_GROUPS (
    PR_GROUP_ID INTEGER NOT NULL IDENTITY(1,1),
    PR_ID INTEGER NOT NULL,
    GROUP_NAME VARCHAR(60) NOT NULL,

    FOREIGN KEY (PR_ID) REFERENCES PR_INFO (PR_ID) ON DELETE CASCADE,
    PRIMARY KEY(PR_GROUP_ID)
);

------------------------------------------------
--  DDL Statements for table PR_CONTENT
------------------------------------------------
CREATE TABLE PR_CONTENT (
    CONTENT_ID INTEGER NOT NULL IDENTITY(1,1), --SUCH AS PRESENTATION, SPEECH, RESEARCH, ETC
    PR_ID INTEGER NOT NULL,
    CONTENT_TEXT VARCHAR(60) NOT NULL, --THE ACTUAL QUESTION STRING
    CONTENT_RANK INTEGER, --RANK IS A DDL KEYWORD 

    FOREIGN KEY (PR_ID) REFERENCES PR_INFO (PR_ID) ON DELETE CASCADE,
    PRIMARY KEY(CONTENT_ID)
);

------------------------------------------------
--  DDL Statements for table PR_SUBCONTENT
------------------------------------------------
CREATE TABLE PR_SUBCONTENT (
    SUBCONTENT_ID INTEGER NOT NULL IDENTITY(1,1), --SUCH AS VISUAL, PACE, PITCH ETC
    CONTENT_ID INTEGER NOT NULL,
    SUBCONTENT_TEXT VARCHAR(60) NOT NULL, --THE ACTUAL QUESTION STRING

    FOREIGN KEY (CONTENT_ID) REFERENCES PR_CONTENT (CONTENT_ID) ON DELETE CASCADE,
    PRIMARY KEY(SUBCONTENT_ID)
);

------------------------------------------------
--  DDL Statements for table COMPLETED_QUIZ
------------------------------------------------
CREATE TABLE COMPLETED_QUIZ (
    QUIZ_ID INTEGER NOT NULL,
    STUDENT_ID INTEGER NOT NULL,
    COMPLETED_QUIZ_ID INTEGER NOT NULL IDENTITY(1,1),
    TIME_SPENT INTEGER,
    GRADE INTEGER NOT NULL,

    FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT_INFO (STUDENT_ID) ON DELETE CASCADE,
    FOREIGN KEY (QUIZ_ID) REFERENCES QUIZ_INFO (QUIZ_ID) ON DELETE CASCADE,
    PRIMARY KEY(SUBCONTENT_ID)
);

------------------------------------------------
--  DDL Statements for table COMPLETED_QUIZ_ANSWERS
------------------------------------------------
CREATE TABLE COMPLETED_QUIZ (
    COMPLETED_QUIZ_ID INTEGER NOT NULL,
    TIME_SPENT INTEGER,
    GRADE INTEGER NOT NULL,

    FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT_INFO (STUDENT_ID) ON DELETE CASCADE,
    FOREIGN KEY (QUIZ_ID) REFERENCES QUIZ_INFO (QUIZ_ID) ON DELETE CASCADE,
    PRIMARY KEY(SUBCONTENT_ID);
);

------------------------------------------------
--  DDL Statements for table QUIZ_GRADE
------------------------------------------------
CREATE TABLE COMPLETED_QUIZ (
    COMPLETED_QUIZ_ID INTEGER NOT NULL,
    TIME_SPENT INTEGER,
    GRADE INTEGER NOT NULL,

    FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT_INFO (STUDENT_ID) ON DELETE CASCADE,
    FOREIGN KEY (QUIZ_ID) REFERENCES QUIZ_INFO (QUIZ_ID) ON DELETE CASCADE,
    PRIMARY KEY(SUBCONTENT_ID)
);

