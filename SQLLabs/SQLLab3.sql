use ITI 

--1-Create a view that displays student full name, course name if the student has a grade more than 50. 
create view stdInfo
as
select St_Fname +' '+ St_Lname as fullName , Crs_Name
from Student  , Course  , Stud_Course 
where  Stud_Course.Grade >50 and Stud_Course.Crs_Id = Course.Crs_Id and Student.St_Id= Stud_Course.St_Id


select * from stdInfo

--2.Create an Encrypted view that displays manager names and the topics they teach. 

create view IntructInfo 
with encryption 
as
select Ins_Name ,Top_Name 
from Instructor , Course, Ins_Course ,Department ,Topic 
where Instructor.Ins_Id = Ins_Course.Ins_Id and Ins_Course.Crs_Id = Course.Crs_Id  and Instructor.Ins_Id = Department.Dept_Manager
and Topic.Top_Id = Course.Top_Id 

select * from IntructInfo

--3.Create a view that will display Instructor Name, Department Name for the ‘SD’ or ‘Java’ Department 
create view InstDepart
as
select Ins_Name, Dept_Name 
from Instructor , Department 
where Instructor.Dept_Id = Department.Dept_Id and Dept_Name in ('SD','Java')

select * from InstDepart

--4.Create a view “V1” that displays student data for student who lives in Alex or Cairo. 
--Note: Prevent the users to run the following query 
--Update V1 set st_address=’tanta’
--Where st_address=’alex’;

create view V1 
as
select * from Student 
where St_Address in ('Cairo','Alex')
with check option

select * from V1

--error msg
--Msg 550, Level 16, State 1, Line 47
--The attempted insert or update failed because the target view either specifies WITH CHECK OPTION or spans a view that specifies 
--WITH CHECK OPTION and one or more rows resulting from the operation did not qualify under the CHECK OPTION constraint.
update V1
set St_Address = 'tanta'
where St_Address ='Alex'

--5.Create a view that will display the project name and the number of employees work on it. “Use SD database”
use SD5 

alter view ProjEmpl
as
select ProjectName ,count(emp.EmpNo) as num  
from Company.Project pro ,HumanResource.Employee emp ,Works_On  wor
where emp.EmpNo = wor.EmpNo and wor.ProjectNo = pro.ProjectNo 
group by ProjectName

select * from ProjEmpl

--6.Create index on column (Hiredate) that allow u to cluster the data in 
--table Department. What will happen?

--error msg
--Msg 1902, Level 16, State 3, Line 70
--Cannot create more than one clustered index on table 'Department'. Drop the existing
--clustered index 'PK_Department' before creating another.
create clustered index hireIndex on Department(Manager_hiredate)

--7.Create index that allow u to enter unique ages in student table. What will happen? 
--error msg
--Msg 1505, Level 16, State 1, Line 77
--The CREATE UNIQUE INDEX statement terminated because a duplicate key was found for the object name 'dbo.Student' and
--the index name 'ageIndex'. The duplicate key value is (21).
create unique index ageIndex on Student(St_Age)


--8.Using Merge statement between the following two tables [User ID, Transaction Amount]
create table DailyTransaction (DId int Primary key ,
DAmount int)
insert into DailyTransaction values (1,1000)
insert into DailyTransaction values (2,2000)
insert into DailyTransaction values (3,1000)

create table LastTransaction (LId int Primary key ,
LAmount int)
insert into LastTransaction values (1,4000)
insert into LastTransaction values (4,2000)
insert into LastTransaction values (2,10000)

Merge into LastTransaction as L
using DailyTransaction as D
on L.LId = D.DId

when matched then 
  update 
    set L.LAmount = D.DAmount
when not matched then
   insert values (DId,DAmount);

--9.Write a query to select the highest two salaries in Each Department for 
--instructors who have salaries. “using one of Ranking Functions”

select   *
from (select *,Row_number() over(Partition by Dept_Id order by Salary desc) as RN
     from Instructor) as newtable
	 where RN= 1 or RN =2
	
select *
from (select  *,Dense_rank() over(Partition by Dept_Id order by Salary desc) as DR
     from Instructor) as newtable
	 where DR= 1 or DR =2

--10 Write a query to select a random  student from each department.  “using one of Ranking Functions”
select   *
from (select *,Row_number() over(Partition by Dept_Id order by NEWID()) as RN
     from Student) as newtable
	 where RN= 1 

--Part2: use SD_DB
--1)	Create view named   “v_clerk” that will display employee#,project#, the date of hiring of all 
--the jobs of the type 'Clerk'.

create view v_clerk
as
select EmpNo,ProjectNo,Enter_Date
from Works_On 
where Job='Clerk'
select * from v_clerk

--2)Create view named  “v_without_budget” that will display all the projects data 
--without budget
create view v_without_budget
as
select ProjectNo ,ProjectName 
from Company.Project 

select * from v_without_budget

--3)Create view named  “v_count “ that will display the project name and the # of jobs in it
create view v_count
as
select ProjectName , count(Job) as NumOfJob
from Company.Project pro, Works_On work
where pro.ProjectNo = work.ProjectNo 
group by ProjectName

select * from v_count

--4)Create view named ” v_project_p2” that will display the emp#  for the project# ‘p2’
--use the previously created view  “v_clerk”


create view v_project_p2
as select * from v_clerk where ProjectNo ='p2'

select * from v_project_p2

--5)modifey the view named  “v_without_budget”  to display all DATA in project p1 and p2 

alter view v_without_budget
as
select ProjectNo ,ProjectName 
from Company.Project  
where ProjectNo ='p1'  or ProjectNo ='p2'

select * from v_without_budget


-- 6)Delete the views  “v_ clerk” and “v_count”

drop view v_clerk
drop view v_count

--7)Create view that will display the emp# and emp lastname who works on dept# is ‘d2’
create view empDe2
as
select EmpNo, Emp_LName from HumanResource.Employee 
where Dept_No ='d2'

select * from empDe2

--8)	Display the employee  lastname that contains letter “J”
--Use the previous view created in Q#7
select *
from empDe2
where Emp_LName like '%J%'

--9)Create view named “v_dept” that will display the department# and department name.
create view v_dept
as
select DeptNo, DeptName
from Company.Depart 

select * from v_dept

--10)using the previous view try enter new department data where dept# is ’d4’ and dept name is ‘Development’
insert into v_dept values ('d4','Development')

--11)Create view name “v_2006_check” that will display employee#, the project #where he works and the 
--date of joining the project which 
--must be from the first of January and the last of December 2006.

create view v_2006_check 
as
select EmpNo ,ProjectNo ,Enter_Date
from Works_On 
where Enter_Date between '2006-1-1' and '2006-12-30'

select * from v_2006_check



