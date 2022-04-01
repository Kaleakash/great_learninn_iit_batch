
insert into users(username,password) values('raj','$2a$12$qnex3xsV9aTRXTspDO8wpe3jYpZ2fQhBZ9fJ9HTs/em65Q4iHR7GG');
insert into users(username,password) values('admin','$2a$12$6/INNItxuTXsG615DX0AXOxD8rP1nCf/foMJMg1EazXDS7wIpbzk.');

insert into roles(name) values('USER');
insert into roles(name) values('ADMIN');


insert into book(name,category,author) values('Java','Web','James Gosling');
insert into book(name,category,author) values('Python','Core','Guido van Rossum');


insert into users_roles(user_id,role_id) values(1,1);
insert into users_roles(user_id,role_id) values(2,2);
