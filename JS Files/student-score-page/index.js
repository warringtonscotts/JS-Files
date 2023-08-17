


const image = document.createElement("img");
image.src = "grade-img.jpeg";


const studentGrades = [];

let varSubmitGrade = document.getElementById("submitGrade");


varSubmitGrade.onclick = function(){

    

    let studentName = document.getElementById("studentName").value;

    let studentScore = "";

    let studentScores = document.getElementsByName("grade");

    for (score of studentScores){

        if (score.checked){
            studentScore = score.value;
            console.log(studentScore);
        }
    }


    // let studentScore = document.getElementById("grade").value;
    // console.log(studentScore);

    studentGrades.push(studentName, studentScore);
    alert(`Student: ${studentName} and their score: ${studentScore} has been added.`);


}

document.getElementById("clearName").onclick = function(){
    document.getElementById("studentName").value = "";
    document.getElementById("grade").value = "NA";
}


document.getElementById("btnShowGrades").onclick = function(){

    
    let lstStudentGrades = [...studentGrades];
    
    document.getElementById("showGrades").innerHTML = lstStudentGrades;
}

document.getElementById("changeGrade").onclick = function(){

    let studentIndex = studentGrades.indexOf(document.getElementById("updateName").value);
    console.log(studentIndex);

    if (studentIndex < 0){
        alert("No such student exists, please try again");
    }
    else {
      
        studentGrades[studentIndex+1] = document.getElementById("updateGrade").value;
        alert("Student Grade has been updated");
    }
}   

document.getElementById("btnDeleteStudent").onclick = function(){

    let studentIndex = studentGrades.indexOf(document.getElementById("deleteStudent").value);
    console.log(studentIndex);

    if (studentIndex < 0){
        alert("No such student exists, please try again");
    }
    else {
        studentGrades.splice(studentIndex, 2);
        alert("Student has been deleted.");
    }
}

