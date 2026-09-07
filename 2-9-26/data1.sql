-- use company;


  ALTER TABLE tasks
ADD CONSTRAINT fk_tasks_project
 FOREIGN KEY (project_id)
 REFERENCES projects(id);

 CREATE TABLE project_members (
     project_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,

     PRIMARY KEY (project_id, user_id),

   FOREIGN KEY (project_id)
         REFERENCES projects(id),

   FOREIGN KEY (user_id)
         REFERENCES users(id)
);
 INSERT INTO project_members (project_id, user_id)
 VALUES
 (1, 1),
 (1, 2),
 (1, 3),
 (2, 1),
 (2, 3),
(3, 1);
      select * from project_members
      
       
-- -- -- use company;
-- -- -- desc tasks;

-- -- -- --