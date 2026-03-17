function generateCover(){

    
    let assignmentNo=document.getElementById("assignmentNo").value;
    let assignmentTitle=document.getElementById("assignmentTitle").value;
    let courseTitle=document.getElementById("courseTitle").value;
    let courseCode=document.getElementById("courseCode").value;

    let teacherName=document.getElementById("teacherName").value;
    let designation=document.getElementById("designation").value;

    let studentName=document.getElementById("studentName").value;
    let studentId=document.getElementById("studentId").value;
    let batch=document.getElementById("batch").value;
    let section=document.getElementById("section").value;
    let date=document.getElementById("date").value;

    document.getElementById("content").innerHTML=`
    <hr>

    
    <p><b>Assignment No:</b> ${assignmentNo}</p>
    <p><b>Assignment Title:</b> "${assignmentTitle}"</p>
    <p><b>Course Title:</b> ${courseTitle}</p>
    <p><b>Course Code:</b> ${courseCode}</p>

    <h3><u>Submitted To</u></h3>
    <p><b>Name:</b> ${teacherName}</p>
    <p><b>Designation:</b> ${designation}</p>
    <p>Metropolitan University, Sylhet</p>

    <h3><u>Submitted By</u></h3>
    <p><b>Name:</b> ${studentName}</p>
    <p><b>ID:</b> ${studentId}</p>
    <p><b>Batch:</b> ${batch}</p>
    <p><b>Section:</b> ${section}</p>
    <p><b>Dept:</b> Computer Science and Engineering</p>

    <br><br>

    <p><b>Date of Submission:</b> ${date}</p>
`;

}

function downloadPDF(){
let element=document.getElementById("coverPage");
html2pdf().from(element).save("assignment-cover.pdf");
}
