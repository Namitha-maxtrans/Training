-- 
create database company;

show databases;
use company;
-- drop table users
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
); --created users table

desc users;


CREATE TABLE projects (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
);---created projects table
show tables;
desc projects;


create table tasks(
   id bigint primary key auto_increment,
   project_id bigint not null,
   title varchar(200) not null,
   status varchar(20) not null default 'pending',
   due_date date,
   created_at datetime not null default current_timestamp
   
  );--created task table
  show tables;

  insert into users(name,email,password)
  values
  ("manikanta",'mani@gmail.com','mani325'),
  ('namitha','nami@gmail.com','nami65'),
  ('vignesh','vignesh34@gmail.com','vignes67'); --inserted values into users table
  desc users;
  select *
  from users;

insert into projects( user_id,name, description)
VALUES
(1, 'E-Commerce App', 'Online shopping application'),
(1, 'Portfolio Website', 'Personal portfolio'),
(2, 'Task Manager', 'Task management application'),
(3, 'Blog App', 'Blogging platform'); --inserted values into  projects table
select *
from projects;


INSERT INTO tasks(project_id, title,  status, due_date)
VALUES
(1, 'Create database',  'completed', '2026-08-25'),
(1, 'Create API',  'in_progress', '2026-09-05'),
(1, 'Testing',  'pending', '2026-09-10'),

(2, 'Create homepage',  'pending', '2026-08-20'),
(2, 'Add projects',  'pending', '2026-09-08'),

(3, 'Create login',  'in_progress', '2026-09-03'),
(3, 'Create dashboard',  'pending', '2026-09-15'),

(4, 'Create blog page',  'pending', '2026-09-12');
select *
from tasks;

-- get all users
select *
from users;
-- finding users by email
select name
from users
where email='mani@gmail.com';
-- //getting users project
select *
from projects
where user_id in (1,2);
-- get projects tasks
select *
from tasks
where project_id =2;
-- Count	tasks	by	status
select status,count(*) as task
from tasks
group by status;
--- -overdue tasks--


select *
from tasks
where due_date < current_date   -- duedate should before of currentdate
and  status != 'completed';
-- pagination:

select *
from projects
limit 2 offset 0; 
-- search

select *
from users
where name like '%a';
select *
from tasks
where title like 'create%'



--