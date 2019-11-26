// var xhr,url,data,i=0;
// function createJSON(){
//     let result = document.querySelector('.result');
//     var internalNo = parseInt(document.getElementById('internalNo').value);
//     var co1 = parseInt(document.getElementById('co_1_total').value);
//     var co2 = parseInt(document.getElementById('co_2_total').value);
//     var co3 = parseInt(document.getElementById('co_3_total').value);
//     var co4 = parseInt(document.getElementById('co_4_total').value);
//     var co5 = parseInt(document.getElementById('co_5_total').value);
//     var co6 = parseInt(document.getElementById('co_6_total').value);
//     data = {
//         total_co:{
//         internalNo:internalNo,
//         co_1_total:co1,
//         co_2_total:co2,
//         co_3_total:co3,
//         co_4_total:co4,
//         co_5_total:co5,
//         co_6_total:co6,
//     },
//     student:[]
//     };
//     console.log(data);
    
// } 
// function addToStudentList()
// { 
//     var admNo = parseInt(document.getElementById('admNo').value);
//     var co1 = parseInt(document.getElementById('co_1').value);
//     var co2 = parseInt(document.getElementById('co_2').value);
//     var co3 = parseInt(document.getElementById('co_3').value);
//     var co4 = parseInt(document.getElementById('co_4').value);
//     var co5 = parseInt(document.getElementById('co_5').value);
//     var co6 = parseInt(document.getElementById('co_6').value);
//     data.student[i]={
//         admNo:admNo,
//         co_1:co1,
//         co_2:co2,
//         co_3:co3,
//         co_4:co4,
//         co_5:co5,
//         co_6:co6
//     }
//     i=i+1;
//     console.log(data);


// }

// function sendJSON(){
//     let result = document.querySelector('.result');
//     var dynamincId=document.getElementById('internalNo').value;
//     // Creating a XHR object

//     xhr = new XMLHttpRequest();
//     url = "/course/add_internal/"+dynamincId; 

//     // open a connection
//     xhr.open("POST", url, true);

//     // Set the request header i.e. which type of content you are sending
//     xhr.setRequestHeader("Content-Type", "application/json");

//     // Create a state change callback
//     // xhr.onreadystatechange = function () {
//     //     if (xhr.readyState === 4 && xhr.status === 200) {

//     //         // Print received data from server
//     //         result.innerHTML = this.responseText;

//     //     }
//     // };

//     // Converting JSON data to string
//     var sendFile = JSON.stringify(data);

//     // Sending data with the request
//     xhr.send(sendFile);
//     window.location.replace("/home");
// }


var xhr,url,data,i=0;
function createJSON(){
    let result = document.querySelector('.result');
    internalNo=parseInt(document.getElementById('internalNo').value);
    var co1 = parseInt(document.getElementById('co_1_total').value);
    var co2 = parseInt(document.getElementById('co_2_total').value);
    var co3 = parseInt(document.getElementById('co_3_total').value);
    var co4 = parseInt(document.getElementById('co_4_total').value);
    var co5 = parseInt(document.getElementById('co_5_total').value);
    var co6 = parseInt(document.getElementById('co_6_total').value);

    data = { 
       
        total_co:{
            internalNo:internalNo,
        co_1_total:co1,
        co_2_total:co2,
        co_3_total:co3,
        co_4_total:co4,
        co_5_total:co5,
        co_6_total:co6,
    },
    student:[]
    }; 
    console.log(data);
    
} 

function clear()
{
    document.getElementById('co_1').value = '';
    document.getElementById('co_2').value = '';
    document.getElementById('co_3').value = '';
    document.getElementById('co_4').value = '';
    document.getElementById('co_5').value = '';
    document.getElementById('co_6').value = '';
}

function addRow() {
  var studId = parseInt(document.getElementById('admNo').value);
  var tco1 = parseInt(document.getElementById('co_1_total').value);
  var tco2 = parseInt(document.getElementById('co_2_total').value);
  var tco3 = parseInt(document.getElementById('co_3_total').value);
  var tco4 = parseInt(document.getElementById('co_4_total').value);
  var tco5 = parseInt(document.getElementById('co_5_total').value);
  var tco6 = parseInt(document.getElementById('co_6_total').value);
  var co1 = parseInt(document.getElementById('co_1').value);
  var co2 = parseInt(document.getElementById('co_2').value);
  var co3 = parseInt(document.getElementById('co_3').value);
  var co4 = parseInt(document.getElementById('co_4').value);
  var co5 = parseInt(document.getElementById('co_5').value);
  var co6 = parseInt(document.getElementById('co_6').value);
  if(co1>=0 && co1<=tco1 && co2>=0 && co2<=tco2 && co3>=0 && co3<=tco3 && 
    co4>=0 && co4<=tco4 && co5>=0 && co5<=tco5 && co6>=0 && co6<=tco6)
  {
    
    console.log(data);
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var sId = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    sId.innerHTML = studId;
    cell1.innerHTML = co1;
    cell2.innerHTML = co2;
    cell3.innerHTML = co3;
    cell4.innerHTML = co4;
    cell5.innerHTML = co5;
    cell6.innerHTML = co6;
/*
        data.student[i]={
        co1:co1,
        co2:co2,
        co3:co3,
        co4:co4,
        co5:co5,
        co6:co6
    }
    i=i+1;


    console.log(data);

*/
    clear();

    // document.getElementById("studNo").value = studId+1;
    }
    else
    {
        alert("Attained CO not in range  ");
    }
}

function addToStudentList()
{ 
    var admNo = parseInt(document.getElementById('admNo').value);
    var co1 = parseInt(document.getElementById('co_1').value);
    var co2 = parseInt(document.getElementById('co_2').value);
    var co3 = parseInt(document.getElementById('co_3').value);
    var co4 = parseInt(document.getElementById('co_4').value);
    var co5 = parseInt(document.getElementById('co_5').value);
    var co6 = parseInt(document.getElementById('co_6').value);
    data.student[i]={
        admNo:admNo,
        co_1:co1,
        co_2:co2,
        co_3:co3,
        co_4:co4,
        co_5:co5,
        co_6:co6
    }
    i=i+1;
    console.log(data);
    addRow();


}

function sendJSON(){
    let result = document.querySelector('.result');
    var dynamincId=document.getElementById('internalNo').value;
    // Creating a XHR object

    xhr = new XMLHttpRequest();
    url = "/course/add_internal/"+"1"; 

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {

    //         // Print received data from server
    //         result.innerHTML = this.responseText;

    //     }
    // };

    // Converting JSON data to string
    var sendFile = JSON.stringify(data);

    // Sending data with the request
    xhr.send(sendFile);
    window.location.replace("/home");
}
