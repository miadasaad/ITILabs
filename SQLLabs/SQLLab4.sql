use ITI
--1.Create a stored procedure without parameters to show the number of students per department name.[use ITI DB] 
create procedure NumOfStd
as
select count(St_Id) as Num_of_std, Dept_Name
from Student ,Department where Student.Dept_Id = Department.Dept_Id 
group by Dept_Name 

NumOfStd

--2.Create a stored procedure that will check for the # of employees in the project p1 if they are more than 3 print message
--to the user “'The number of employees in the project p1 is 3 or more'” if they are less display a message to 
--the user “'The following employees work for the project p1'” 
--in addition to the first name and last name of each one. [Company DB] 
use SD5
create procedure msgNumOfEmployee
as
   declare @num int
   select @num  =  count(EmpNo)
   from Works_On  
   where ProjectNo ='p1'
   if @num >= 3
       select 'The number of employees in the project p1 is 3 or more'
   else
       select 'The following employees work for the project p1' ,Emp_FName,Emp_LName 
	   from HumanResource.Employee emp ,Works_On  wor
	   where emp.EmpNo  = wor.EmpNo and ProjectNo ='p1'

msgNumOfEmployee


--3.Create a stored procedure that will be used in case there is an old employee has left the project 
--and a new one become instead of him. The procedure should take 3 parameters (old Emp. number, new Emp. 
--number and the project number) and it will be used to update works_on table. [Company DB]
alter Proc hr.getstbyadd @add varchar(20)
with encryption
as
	select st_id,st_fname
	from Student
	where St_Address=@add

alter procedure AddRemEmp @oldEmp int, @newEmp int ,@proNo varchar(20) 
as
update Works_On 
set EmpNo = @newEmp 
where EmpNo = @oldEmp and ProjectNo = @proNo

AddRemEmp 18316,9031,'p2'

--4.add column budget in project table and insert any draft values in it then 
--then Create an Audit table with the following structure 
use SD5 
create table Audit_table (
ProjectNo varchar(20) ,
UserName varchar(20) ,
ModifiedDate date,
OldBudget int,
newBudget int
)

create trigger tr_6
on Company.Project
instead of update
as
if update(Budget)
  begin
    declare @oldBud int,@newBud int,@proNum varchar(20)
	select @oldBud = Budget from deleted 
	select @proNum = ProjectNo  from deleted 
	select @newBud = Budget from inserted 
	insert into Audit_table values (
	@proNum,SUSER_NAME(),getdate(),@oldBud,@newBud
	)
  end

update Company.Project 
set Budget = 5555
where ProjectNo ='p3'
--5.Create a trigger to prevent anyone from inserting a new record in the Department table [ITI DB]
--“Print a message for user to tell him that he can’t insert a new record in that table”
use ITI

create trigger  tr_3
on Department 
instead of insert
as
select 'you can’t insert a new record in that table'

--testing 
insert into Department values (5,'SD','java','Alex',5,'2008-5-5')

--6.Create a trigger that prevents the insertion Process for Employee table in March [Company DB].
use SD5 
create trigger tr_5 
on HumanResource.Employee
instead of insert 
as
if format(getdate(),'MMM') = 'march'
   select 'Not allowed'
else
  insert into HumanResource.Employee
    select * from inserted


--7.Create a trigger on student table after insert to add Row in Student Audit table (Server User Name , Date, Note)
--where note will be “[username]
--Insert New Row with Key=[Key Value] in table [table name]”
use ITI
create table StudentAudit(
ServerUserName varchar(100) ,
currDate date,
Note varchar(100)
)

create trigger stdTrigger
on Student
after insert
as 

    declare @note varchar(100), @id int
	select @id = St_Id from inserted
	select @note =concat(SUSER_NAME(),' Insert New Row with Key= ',cast(@id as varchar(20)) ,' in table StudentAudit' )
	insert into StudentAudit values (
	SUSER_NAME(),getdate(),@note
	)


insert into Student values(15,'Mayada','Saad','Alex',25,10,6) 

--8.Create a trigger on student table instead of delete to add Row in Student Audit table
--(Server User Name, Date, Note) where note will
--be“ try to delete Row with Key=[Key Value]”
alter trigger stdRemove
on Student
instead of delete
as 
    declare @note varchar(100), @id int
	select @id = St_Id from deleted
	select @note =concat('try to delete row with key = ',cast(@id as varchar(20))  )
	insert into StudentAudit values (
	SUSER_NAME(),getdate(),@note
	)


delete from Student where St_Id = 14



