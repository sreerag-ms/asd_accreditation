var xhr,url,data,i=0;
data={
    student:[]
} ;
function addToStudentList()
{ 
    var admNo = parseInt(document.getElementById('admNo').value);
    var grade = document.getElementById('grade').value;
    data.student[i]={
        admNo:admNo,
        grade:grade
    }
    i=i+1;
    console.log(data);


}

function sendJSON(){
    let result = document.querySelector('.result');
    // var dynamincId=document.getElementById('assignmentNo').value;
    // Creating a XHR object

    xhr = new XMLHttpRequest();
    url = "/course/add_sem/"; 

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Converting JSON data to string
    var sendFile = JSON.stringify(data);

    // Sending data with the request
    xhr.send(sendFile);
    window.location.replace("/home");
}