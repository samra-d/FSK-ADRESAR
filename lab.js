function getStudentsFromStorage() {
    return JSON.parse(sessionStorage.getItem("students"));
  }
  
  function setStudentToStorage(students) {
    sessionStorage.setItem("students", JSON.stringify(students));
  }
  
  
  
  function insertStudentToStorage(
    firstName,
    lastName,
    studentID,
    department,
    cycle,
    semester
  ) {
    var students = [];
    var studentsFromStorage = JSON.parse(sessionStorage.getItem("students"));
    if (studentsFromStorage != null) students = studentsFromStorage;
    let student = {
      firstName: firstName,
      lastName: lastName,
      studentID: studentID,
      department: department,
      cycle: cycle,
      semester: semester,
    };
    students.push(student);
    setStudentToStorage(students);
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("studentID").value = "";
    document.getElementById("department").value = "";
    document.getElementById("cycle").value = "";
    document.getElementById("semester").value = "";
  }
  
  function outputStudentFromStorage(studentID) {
    console.log(getStudentsFromStorage());
    var wantedStudent = findStudent(studentID);
    if (wantedStudent === undefined) {
      document.getElementById("output").innerHTML =
        "Wanted student couldn't be found";
    } else {
      document.getElementById("output").innerHTML =
        wantedStudent.firstName + " " + wantedStudent.lastName;
    }
    console.log(wantedStudent);
  }
  function findStudent(studentID) {
    var studentsFromStorage = JSON.parse(sessionStorage.getItem("students"));
    if (studentsFromStorage != null) {
      return getStudentsFromStorage().find(
        (student) => student.studentID == studentID
      );
    } else return undefined;
  }
  
  
  function listStudents() {
    var students = getStudentsFromStorage();
    var studentsTableHTML = "";
    for (let i = 0; i < students.length; i++) {
      studentsTableHTML += `Student ID: ${students[i].studentID} <br> First Name:
  ${students[i].firstName} <br> Last Name: ${students[i].lastName} <br> <br> `;
    }
    document.getElementById("output1").innerHTML = studentsTableHTML;
  }
  