// Declaring variables and storing data for student 1
let student1FirstName = "Juan";
let student1MiddleName = "Gamoso";
let student1LastName = "Dela Cruz";
let student1BirthDate = "January 1, 2001";
let student1BirthPlace = "Upper Bonifacio, Baguio City, Benguet, Philippines 2600";
let student1Address = "San Nicolas, Candon City, Ilocos Sur, Philippines 2710";
let student1CourseYear = "Bachelor of Science in Computer Science";
let student1DreamJob = "Software Engineer";

// Declaring variables and storing data for student 2
let student2FirstName = "Carlos Emmanuel";
let student2MiddleName = "Mercado";
let student2LastName = "Garrido";
let student2BirthDate = "February 2, 2002";
let student2BirthPlace = "Science City of Muñoz, Nueva Ecija, Philippines 3120";
let student2Address = "Patac, Galimuyod, Ilocos Sur, Philippines 2709";
let student2CourseYear = "Bachelor of Science in Computer Science";
let student2DreamJob = "Web Developer";

// Formatting student1FullName in uppercase
let student1FullName = student1FirstName.toUpperCase() + " " + student1MiddleName.toUpperCase() + " " + student1LastName.toUpperCase();
// Creating the sentence format of student1 in string concatenation
let student1Details = "[" + student1FullName + "]" + " was born [" + student1BirthDate + "] at [" + student1BirthPlace + "], and currently living at [" + student1Address + "]. " + 
student1FirstName.toLowerCase() + " " + student1MiddleName.toLowerCase() + " " + student1LastName.toLowerCase() + " is taking up [" + 
student1CourseYear + "] and dreams to be [" + student1DreamJob + "] after graduation.";

// Formatting student2FullName in uppercase
let student2FullName = student2FirstName.toUpperCase() + " " + student2MiddleName.toUpperCase() + " " + student2LastName.toUpperCase();
// Creating the sentence format of student2 in string concatenation
let student2Details = "[" + student2FullName + "]" + " was born [" + student2BirthDate + "] at [" + student2BirthPlace + "], and currently living at [" + student2Address + "]. " + 
student2FirstName.toLowerCase() + " " + student2MiddleName.toLowerCase() + " " + student2LastName.toLowerCase() + " is taking up [" + 
student2CourseYear + "] and dreams to be [" + student2DreamJob + "] after graduation.";

// Displaying output for both students
console.log(student1Details);
console.log(student2Details);
