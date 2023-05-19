--1.	Create a scalar function that takes date and returns Month name of that date.
alter function getMonth(@currDate date)
returns nvarchar(20)
begin
declare @name nvarchar(20)
	select @name =  format(@currDate ,'MMM')
return @name 	
end 


select dbo.getMonth(getdate()) as "name"

--Create a multi-statements table-valued function that takes 2 integers and returns the values between them.

create function rangeNums(@min int, @max int)
RETURNS @numbers TABLE(number int)
AS
BEGIN
	Declare @n1 int = @min
	Insert Into @numbers Values(@min)
	WHILE (@n1<@max)
	BEGIN 
		set @n1 = 1 + @n1

		Insert Into @numbers Values(@n1)
	END	
	RETURN 
END
 select * from dbo.rangeNums(1,6) 

 --Create inline function that takes Student No and returns Department Name with Student full name.
 create function getnameAndDepart(@sid int)
returns nvarchar(40)
begin
declare @name nvarchar(40)
		select @name= CONCAT( Dept_Name ,'__', st_fname,'__',St_Lname)  from Student ,Department  where St_Id = 5;
			
return @name 	
end

 select  dbo.getnameAndDepart(5) 

 --4.	Create a scalar function that takes Student ID and returns a message to user 
--a.	If first name and Last name are null then display 'First name & last name are null'
--b.	If First name is null then display 'first name is null'
--c.	If Last name is null then display 'last name is null'
--d.	Else display 'First name & last name are not null'

alter function displayResult(@studentId int)
returns nvarchar(45)
begin
declare @name nvarchar(45), @f_name nvarchar(40),@l_name nvarchar(40)
select @f_name =  St_Fname  from Student where St_Id = @studentId
select @l_name =  St_Lname  from Student where St_Id = @studentId;

      select @name =  CASE 
	   when  @f_name IS NULL and @l_name IS NULL
	      then   'First name & last name are null'
       when @f_name IS NULL and @l_name IS NOT NULL
	      then  'first name is null'
       when @l_name IS NULL and @f_name IS NOT NULL
	      then   'last name is null'
      else 
	     'First name & last name are not null'
     end
		
			
return @name 	
end

 select  dbo.displayResult(5) 

--5Create inline function that takes integer which represents manager ID and displays department name, Manager Name and hiring date 
alter function getManagerInfo(@mgId int)
returns nvarchar(40)
begin
declare @name nvarchar(40)
		select @name= CONCAT( Dept_Name ,'__', Ins_Name,'__',Manager_hiredate )  from Instructor ,Department  where Ins_Id  = @mgId and
		Instructor.Dept_Id = Department.Dept_Id ;
			
return @name 	
end

 select  dbo.getManagerInfo(3)

 --Create multi-statements table-valued function that takes a string
--If string='first name' returns student first name
--If string='last name' returns student last name 
--If string='full name' returns Full Name from student table 
--Note: Use “ISNULL” function

create function checkString(@format varchar(20))
RETURNS @numbers TABLE(name varchar(20))
AS
BEGIN

	if @format ='first name'
	  insert into @numbers 
	     select isnull(St_FName,'') from Student
    else if @format ='last name'
	    insert into @numbers 
	      select isnull(St_LName,'')e from Student
	 else if @format ='full name'
	    insert into @numbers 
	      select isnull(St_FName,'')+  ' ' + isnull(St_LName,'') as fullName from Student
	RETURN 
END


select  * from dbo.checkString('first name') 

--7-Write a query that returns the Student No and Student first name without the last char

select St_Id, substring(St_Fname ,1,Len(St_Fname) -1) from Student   --start--length 

--8.	Wirte query to delete all grades for the students Located in SD Department 
 update Stud_Course 
   set Grade = NULL 
   where st_Id in (select St_Id from Student where Student.Dept_Id = (select Dept_Id from Department where Dept_Name ='SD'))
 

