

sp_addtype locat, 'nchar(2)' ;
create default def as 'NY';
sp_bindefault def ,locat


create rule r as @x IN ('NY','KS','DW');
sp_bindrule r ,locat

--1234567890()*@
create table Depart(
DeptNo varchar(10) Primary key ,
DeptName varchar(20),
Location locat)

insert into Depart VALUES ('d1','Research','NY');
insert into Depart VALUES ('d2','ACCounting','DW');
insert into Depart VALUES ('d3','Marketting','KS');

create table Employee (
EmpNo int Primary key,
Emp_Fname varchar(20) not null ,
Emp_Lname varchar(20) not null,
Salary int ,
Dept_No varchar(10) ,
constraint c5 foreign key (Dept_No) references Depart(DeptNo),
constraint c1 unique(Salary)
)

create rule r1 as @y<6000

sp_bindrule r1,'Employee.Salary'

Add  TelephoneNumber column to the employee table[programmatically]
2-drop this column[programmatically]

Alter table HumanResource.Employee add phoneNum varchar(10);

ALTER TABLE HumanResource.Employee  DROP COLUMN phoneNum;
create schema Company;


alter schema Company transfer Depart;
alter schema Company transfer Project;

create schema HumanResource
alter schema HumanResource transfer Employee

-- display all constraints
SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME='Employee';

--sysnonym
create synonym Employ
for  HumanResource.Employee
1.	Create Synonym for table Employee as Emp and then run the following queries and describe the results
a.	Select * from Employee


-- worked
select * from HumanResource.Employee

Select * from [Human Resource].Employee

--worked
select * from Employ

Select * from Emp

--worked
Select * from [HumanResource].Employee

Select * from [Human Resource].Emp

-- didn't work
Select * from [HumanResource].Employ

--2.	Increase the budget of the project where the manager number is 10102 by 10%.

update Company.Project  
  set Budget = Budget + Budget*.10
  where Company.Project.ProjectNo  = (select Works_On.ProjectNo from Works_On where Works_On.EmpNo  = 10102 and Works_On.Job ='Manager');

--3.	Change the name of the department for which the employee named James works.The new department name is Sales.

update Company.Depart
  set DeptName ='Sales'
  where DeptNo= (select Dept_No from HumanResource.Employee where Emp_Fname ='James');

--4.	Change the enter date for the projects for those employees who work in project p1 and belong to department ‘Sales’. The new date is 12.12.2007.

update Works_On 
  set Enter_Date = '12.12.2007'
  where ProjectNo ='p1' and EmpNo in (select EmpNo from HumanResource.Employee where
  Dept_No =(select Dept_No from Company.Depart where DeptName ='Sales'))
