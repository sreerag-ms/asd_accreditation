var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../models/internals');
var dyn = require('../../models/dynamic');
var assignments = require('../../models/assignments');
var dynamicId;
var mark;
var noStudents=[0,0];
var co1=[0,0,0],co2=[0,0,0],co3=[0,0,0],co4=[0,0,0],co5=[0,0,0],co6=[0,0,0];


router.get('/:uid',(req,res)=>{
   dynamicId=parseInt(req.params.uid);
   


   dyn.findOne({
       raw:true,
       where:{dynamic_id:dynamicId},
       attributes:["internal_no"]

   }).then((noOfInternals)=>{
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
                // if(mark[i].internal_no==3){
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
        console.log();

         for(var i=0;i<2;i++){
             if(co1[i]/noStudents[i]>.8){
                 interanl1.co1=3;
             }
             else if(co1[i]/noStudents[i]>.7){
                 interanl1.co1=2;
             }
            else if(co1[i]/noStudents[i]>.6){
                interanl1.co1=1;
            }
            else{
                interanl1.co1=0;
            }

         }

    })

   })
    
})







module.exports=router;