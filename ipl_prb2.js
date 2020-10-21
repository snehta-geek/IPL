                               /*Top 10 economical bowler of all seasons*/

const csvtojson=require('csvtojson');
const fs=require('fs');


const econObj={},sortedEconObj={};
var sortArr=[]

csvtojson().fromFile("./deliveries.csv").then(deliv_arr_obj => {
     
          deliv_arr_obj.forEach(deliv_obj_itr =>{
               if(econObj.hasOwnProperty(deliv_obj_itr.bowler))
               {
                   
                    econObj[deliv_obj_itr.bowler]+=((parseInt(deliv_obj_itr.total_runs))/(parseInt(deliv_obj_itr.over)))

               }
               else{
               
                    econObj[deliv_obj_itr.bowler]=0
               }

          })
          // console.log(econ_Obj)

          for(var key in econObj)                     //converting obj into array
          {
               sortArr.push([key,econObj[key]])
          }

          sortArr.sort((a,b) =>{                       //sort arr in desc
               return b[1] - a[1]
          })
          

          sortArr.slice(0,10).forEach(item => {              //slice d array  & convert d array into obj
               sortedEconObj[item[0]]=item[1]

          })

          console.log(sortedEconObj)
          
     })




// var a=[40,100,1,5,25,10]
// a.sort((p,q) => {
//      console.log(p-q)
// })

