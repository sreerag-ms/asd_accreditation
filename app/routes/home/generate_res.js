var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../models/internals');
var dyn = require('../../models/dynamic');
var stud_academics = require('../../models/student_academics');
var course_outcomes = require('../../models/course_outcomes');

var assignments = require('../../models/assignments');
var dynamicId;
var mark;
var assmntMark;
var noStudents=[0,0];
var noAssmntStudents=[0,0];


var co1=[0,0,0],co2=[0,0,0],co3=[0,0,0],co4=[0,0,0],co5=[0,0,0],co6=[0,0,0];
var assmntco1=[0,0,0],assmntco2=[0,0,0],assmntco3=[0,0,0],assmntco4=[0,0,0],assmntco5=[0,0,0],assmntco6=[0,0,0];

var internal=[{},{}];
var assignment=[{},{}];
var coAssignmentDiv=[0,0,0,0,0,0];
var coInternalDiv=[0,0,0,0,0,0];
var co=[0,0,0,0,0,0];
var semCount=0,semQualified=0;
var semCo=[0,0,0,0,0,0];
var semRes;
var courseCode;
var poDiv=[0,0,0,0,0,0,0,0,0,0,0,0];
var poTot=[0,0,0,0,0,0,0,0,0,0,0,0];


router.get('/:uid',(req,res)=>{
   dynamicId=parseInt(req.params.uid);
   


   dyn.findOne({
       raw:true,
       where:{dynamic_id:dynamicId},
       attributes:["internal_no","course_code"]

   }).then((noOfInternals)=>{
    courseCode=noOfInternals.course_code;
    var n=parseInt(noOfInternals.internal_no);

        
    internals.findAll({
        raw:true,
        where:{dynamic_id:dynamicId},
        attributes:["internal_no","co_1","co_1_total","co_2","co_2_total","co_3","co_3_total","co_4","co_4_total","co_5","co_5_total","co_6","co_6_total"],


    }).then((studMarks)=>{
        mark=studMarks;
        console.log(mark);
        console.log(dynamicId);
        
        
        for(var i=0;i<mark.length;i++){

            mark[i].co_1_avg=mark[i].co_1/mark[i].co_1_total;
            mark[i].co_2_avg=mark[i].co_2/mark[i].co_2_total;
            mark[i].co_3_avg=mark[i].co_3/mark[i].co_3_total;
            mark[i].co_4_avg=mark[i].co_4/mark[i].co_4_total;
            mark[i].co_5_avg=mark[i].co_5/mark[i].co_5_total;
            mark[i].co_6_avg=mark[i].co_6/mark[i].co_6_total;
            if(mark[i].internal_no==1){
                noStudents[0]++;
                if(mark[i].co_1_avg>=.6)
                    co1[0]++;
                    if(mark[i].co_2_avg>=.6)
                    co2[0]++;
                    if(mark[i].co_3_avg>=.6)
                    co3[0]++;
                    if(mark[i].co_4_avg>=.6)
                    co4[0]++;
                    if(mark[i].co_5_avg>=.6)
                    co5[0]++;
                    if(mark[i].co_6_avg>=.6)
                    co6[0]++;
            }
            if(mark[i].internal_no==2){
                noStudents[1]++;
                if(mark[i].co_1_avg>=.6)
                    co1[1]++;
                    if(mark[i].co_2_avg>=.6)
                    co2[1]++;
                    if(mark[i].co_3_avg>=.6)
                    co3[1]++;
                    if(mark[i].co_4_avg>=.6)
                    co4[1]++;
                    if(mark[i].co_5_avg>=.6)
                    co5[1]++;
                    if(mark[i].co_6_avg>=.6)
                    co6[1]++;
                }
        }

         for(var i=0;i<2;i++){
             if(co1[i]/noStudents[i]>.8){
                 internal[i].co1=3;
             }
             else if(co1[i]/noStudents[i]>.7){
                 internal[i].co1=2;
             }
            else if(co1[i]/noStudents[i]>.6){
                internal[i].co1=1;
            }
            else{
                internal[i].co1=0;
            }
            console.log(internal[i].co1);
            

         }
         for(var i=0;i<2;i++){
            if(co2[i]/noStudents[i]>.8){
                internal[i].co2=3;
            }
            else if(co2[i]/noStudents[i]>.7){
                internal[i].co2=2;
            }
           else if(co2[i]/noStudents[i]>.6){
               internal[i].co2=1;
           }
           else{
               internal[i].co2=0;
           }
           console.log(internal[i].co2);
           

        }
        for(var i=0;i<2;i++){
            if(co3[i]/noStudents[i]>.8){
                internal[i].co3=3;
            }
            else if(co3[i]/noStudents[i]>.7){
                internal[i].co3=2;
            }
           else if(co3[i]/noStudents[i]>.6){
               internal[i].co3=1;
           }
           else{
               internal[i].co3=0;
           }
           console.log(internal[i].co3);
           

        } for(var i=0;i<2;i++){
            if(co4[i]/noStudents[i]>.8){
                internal[i].co4=3;
            }
            else if(co4[i]/noStudents[i]>.7){
                internal[i].co4=2;
            }
           else if(co4[i]/noStudents[i]>.6){
               internal[i].co4=1;
           }
           else{
               internal[i].co4=0;
           }
           console.log(internal[i].co4);
           

        } for(var i=0;i<2;i++){
            if(co5[i]/noStudents[i]>.8){
                internal[i].co5=3;
            }
            else if(co5[i]/noStudents[i]>.7){
                internal[i].co5=2;
            }
           else if(co5[i]/noStudents[i]>.6){
               internal[i].co5=1;
           }
           else{
               internal[i].co5=0;
           }
           console.log(internal[i].co5);
           

        } for(var i=0;i<2;i++){
            if(co6[i]/noStudents[i]>.8){
                internal[i].co6=3;
            }
            else if(co6[i]/noStudents[i]>.7){
                internal[i].co6=2;
            }
           else if(co6[i]/noStudents[i]>.6){
               internal[i].co6=1;
           }
           else{
               internal[i].co6=0;
           }
           console.log(internal[i].co6);
           

        } 
        assignments.findAll({
            raw:true,
            where:{dynamic_id:dynamicId},
            attributes:["assignment_no","co_1","co_1_total","co_2","co_2_total","co_3","co_3_total","co_4","co_4_total","co_5","co_5_total","co_6","co_6_total"],

        }).then((studAssmnt)=>{
            assmntMark=studAssmnt;
            console.log(assmntMark);
            console.log(dynamicId);
            
            
            for(var i=0;i<assmntMark.length;i++){
    
                assmntMark[i].co_1_avg=assmntMark[i].co_1/assmntMark[i].co_1_total;
                assmntMark[i].co_2_avg=assmntMark[i].co_2/assmntMark[i].co_2_total;
                assmntMark[i].co_3_avg=assmntMark[i].co_3/assmntMark[i].co_3_total;
                assmntMark[i].co_4_avg=assmntMark[i].co_4/assmntMark[i].co_4_total;
                assmntMark[i].co_5_avg=assmntMark[i].co_5/assmntMark[i].co_5_total;
                assmntMark[i].co_6_avg=assmntMark[i].co_6/assmntMark[i].co_6_total;
                if(assmntMark[i].assignment_no==1){
                    noAssmntStudents[0]++;
                    if(assmntMark[i].co_1_avg>=.6)
                        assmntco1[0]++;
                        if(assmntMark[i].co_2_avg>=.6)
                        assmntco2[0]++;
                        if(assmntMark[i].co_3_avg>=.6)
                        assmntco3[0]++;
                        if(assmntMark[i].co_4_avg>=.6)
                        assmntco4[0]++;
                        if(assmntMark[i].co_5_avg>=.6)
                        assmntco5[0]++;
                        if(assmntMark[i].co_6_avg>=.6)
                        assmntco6[0]++;
                }
                if(assmntMark[i].assignment_no==2){
                    noAssmntStudents[1]++;
                    if(assmntMark[i].co_1_avg>=.6)
                        assmntco1[1]++;
                        if(assmntMark[i].co_2_avg>=.6)
                        assmntco2[1]++;
                        if(assmntMark[i].co_3_avg>=.6)
                        assmntco3[1]++;
                        if(assmntMark[i].co_4_avg>=.6)
                        assmntco4[1]++;
                        if(assmntMark[i].co_5_avg>=.6)
                        assmntco5[1]++;
                        if(assmntMark[i].co_6_avg>=.6)
                        assmntco6[1]++;
                    }
                    // if(assmntMark[i].internal_no==3){
                    //     int3++;
                    //     if(mark[i].co_1_avg>=.6)
                    //         co1[2]++;
                    //         if(mark[i].co_2_avg>=.6)
                    //         co2[2]++;
                    //         if(mark[i].co_3_avg>=.6)
                    //         co3[2]++;
                    //         if(mark[i].co_4_avg>=.6)
                    //         co4[2]++;
                    //         if(mark[i].co_5_avg>=.6)
                    //         co5[2]++;
                    //         if(mark[i].co_6_avg>=.6)
                    //         co6[2]++;
                    //     }
            }
            console.log("no"+noAssmntStudents[0]);

    
             for(var i=0;i<2;i++){
                 if(assmntco1[i]/noAssmntStudents[i]>.8){
                     assignment[i].co1=3;
                 }
                 else if(assmntco1[i]/noAssmntStudents[i]>.7){
                     assignment[i].co1=2;
                 }
                else if(assmntco1[i]/noAssmntStudents[i]>.6){
                    assignment[i].co1=1;
                }
                else{
                    assignment[i].co1=0;
                }
                console.log("assignment"+assignment[i].co1);
                
    
             }
             for(var i=0;i<2;i++){
                if(assmntco2[i]/noAssmntStudents[i]>.8){
                    assignment[i].co2=3;
                }
                else if(assmntco2[i]/noAssmntStudents[i]>.7){
                    assignment[i].co2=2;
                }
               else if(assmntco2[i]/noAssmntStudents[i]>.6){
                   assignment[i].co2=1;
               }
               else{
                   assignment[i].co2=0;
               }
               console.log("assignment"+assignment[i].co2);
               
    
            }
            for(var i=0;i<2;i++){
                if(assmntco3[i]/noAssmntStudents[i]>.8){
                    assignment[i].co3=3;
                }
                else if(assmntco3[i]/noAssmntStudents[i]>.7){
                    assignment[i].co3=2;
                }
               else if(assmntco3[i]/noAssmntStudents[i]>.6){
                   assignment[i].co3=1;
               }
               else{
                   assignment[i].co3=0;
               }
               console.log("assignment"+assignment[i].co3);
               
    
            } for(var i=0;i<2;i++){
                if(assmntco4[i]/noAssmntStudents[i]>.8){
                    assignment[i].co4=3;
                }
                else if(assmntco4[i]/noAssmntStudents[i]>.7){
                    assignment[i].co4=2;
                }
               else if(assmntco4[i]/noAssmntStudents[i]>.6){
                   assignment[i].co4=1;
               }
               else{
                   assignment[i].co4=0;
               }
               console.log("assignment"+assignment[i].co4);
               
    
            } for(var i=0;i<2;i++){
                if(assmntco5[i]/noAssmntStudents[i]>.8){
                    assignment[i].co5=3;
                }
                else if(assmntco5[i]/noAssmntStudents[i]>.7){
                    assignment[i].co5=2;
                }
               else if(assmntco5[i]/noAssmntStudents[i]>.6){
                   assignment[i].co5=1;
               }
               else{
                   assignment[i].co5=0;
               }
               console.log("assignment"+assignment[i].co5);
               
    
            } for(var i=0;i<2;i++){
                if(assmntco6[i]/noAssmntStudents[i]>.8){
                    assignment[i].co6=3;
                }
                else if(assmntco6[i]/noAssmntStudents[i]>.7){
                    assignment[i].co6=2;
                }
               else if(assmntco6[i]/noAssmntStudents[i]>.6){
                   assignment[i].co6=1;
               }
               else{
                   assignment[i].co6=0;
               }
               console.log("assignment"+assignment[i].co6);
               
    
            } 
            calcDiv();
            console.log(co);

            stud_academics.findAll({
                raw:true,
                dynamic_id:dynamicId,
                attributes:["sem_marks"]
            }).then((semMarks)=>{
                for(var i=0;i<semMarks.length;i++){
                    semCount++;
                    if(parseInt(semMarks[i].sem_marks)>6)
                        semQualified++;
                }


                    console.log("sem count : "+semCount);
                    console.log("sem qualified : "+semQualified);

                    
                    if(parseFloat(semQualified/semCount)>0.8){
                        semRes=3;
                    }
                    else if(parseFloat(semQualified/semCount)>0.7){
                        semRes=2;
                    }
                    else if(parseFloat(semQualified/semCount)>0.6){
                        semRes=1;

                    }else
                    {
                        semRes=0;
                    }
                for(var i=0;i<6;i++){
                    semCo[i]=(0.6*semRes)+(0.4*co[i]);
                }
                course_outcomes.findAll({
                    raw:true,
                    where:{course_code:courseCode},
                    
                }).then((coPo)=>{
                    // console.log(coPo);
                    for(var i=0;i<coPo.length;i++){
                       
                            poDiv[0]+=coPo[i].po_1;
                       
                            poDiv[1]+=coPo[i].po_2;
                       
                            poDiv[2]+=coPo[i].po_3;
                       
                            poDiv[3]+=coPo[i].po_4;
                       
                            poDiv[4]+=coPo[i].po_5;
                       
                            poDiv[5]+=coPo[i].po_6;
                       
                            poDiv[6]+=coPo[i].po_7;
                       
                            poDiv[7]+=coPo[i].po_8;
                       
                            poDiv[8]+=coPo[i].po_9;
                       
                        poDiv[9]+=coPo[i].po_10;
                       
                        poDiv[10]+=coPo[i].po_11;
                       
                        poDiv[11]+=coPo[i].po_12;
                    }
                    console.log(poDiv);
                    console.log("semCO  :: "+semCo);
                    
                    
                    for(var i=0;i<6;i++){
                        poTot[0]+=((coPo[i].po_1*semCo[i])*(1/poDiv[0]));
                        poTot[1]+=((coPo[i].po_2*semCo[i])*(1/poDiv[1]));
                        poTot[2]+=((coPo[i].po_3*semCo[i])*(1/poDiv[2]));
                        poTot[3]+=((coPo[i].po_4*semCo[i])*(1/poDiv[3]));
                        poTot[4]+=((coPo[i].po_5*semCo[i])*(1/poDiv[4]));
                        poTot[5]+=((coPo[i].po_6*semCo[i])*(1/poDiv[5]));
                        poTot[6]+=((coPo[i].po_7*semCo[i])*(1/poDiv[6]));
                        poTot[7]+=((coPo[i].po_8*semCo[i])*(1/poDiv[7]));
                        poTot[8]+=((coPo[i].po_9*semCo[i])*(1/poDiv[8]));
                        poTot[9]+=((coPo[i].po_10*semCo[i])*(1/poDiv[9]));
                        poTot[10]+=((coPo[i].po_11*semCo[i])*(1/poDiv[10]));
                        poTot[11]+=((coPo[i].po_12*semCo[i])*(1/poDiv[11]));
                        // console.log(poTot);
                        

                    }
                    console.log(poTot);
                    res.render('/result',{result:poTot,coPo:coPo,courseCode:courseCode});
                    
                    
                })

            })
            

    
        })

    })

   })
    
})

function calcDiv(){
    for(var i=0;i<2;i++){
        if(assignment[i].co1!=0)
        coAssignmentDiv[0]++
        if(assignment[i].co2!=0)
        coAssignmentDiv[1]++
        if(assignment[i].co3!=0)
        coAssignmentDiv[2]++
        if(assignment[i].co4!=0)
        coAssignmentDiv[3]++
        if(assignment[i].co5!=0)
        coAssignmentDiv[4]++
        if(assignment[i].co6!=0)
        coAssignmentDiv[5]++
        if(internal[i].co1!=0)
        coInternalDiv[0]++
        if(internal[i].co2!=0)
        coInternalDiv[1]++
        if(internal[i].co3!=0)
        coInternalDiv[2]++
        if(internal[i].co4!=0)
        coInternalDiv[3]++
        if(internal[i].co5!=0)
        coInternalDiv[4]++
        if(internal[i].co6!=0)
        coInternalDiv[5]++
        
    }
    for(var i=0;i<6;i++){
        if(coAssignmentDiv[i]==0){
            coAssignmentDiv[i]=1;
        }
        if(coInternalDiv[i]==0){
            coInternalDiv[i]=1;

        }
    }
    console.log(coInternalDiv,coAssignmentDiv);
    
    calcCo();
    

}
function calcCo(){
    for(var i=0;i<2;i++){

        co[0]+=(assignment[i].co1*(1/coAssignmentDiv[0]))*0.2+(internal[i].co1*(1/coInternalDiv[0]))*0.3;
        co[1]+=(assignment[i].co1*(1/coAssignmentDiv[1]))*0.2+(internal[i].co1*(1/coInternalDiv[1]))*0.3;
        co[2]+=(assignment[i].co1*(1/coAssignmentDiv[2]))*0.2+(internal[i].co1*(1/coInternalDiv[2]))*0.3;
        co[3]+=(assignment[i].co1*(1/coAssignmentDiv[3]))*0.2+(internal[i].co1*(1/coInternalDiv[3]))*0.3;
        co[4]+=(assignment[i].co1*(1/coAssignmentDiv[4]))*0.2+(internal[i].co1*(1/coInternalDiv[4]))*0.3;
        co[5]+=(assignment[i].co1*(1/coAssignmentDiv[5]))*0.2+(internal[i].co1*(1/coInternalDiv[5]))*0.3;

    }
}





module.exports=router;