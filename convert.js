                              /*Find Out Matches played total per year*/


const CsvToJson=require('csvtojson');
const fs=require('fs');


const matchesPlayedTotal={};

CsvToJson().fromFile("./matches.csv").then(match_arr_obj => {
  

match_arr_obj.forEach(arr_iterator => {
  if((matchesPlayedTotal.hasOwnProperty(arr_iterator.season)))
   {     
      matchesPlayedTotal[arr_iterator.season]+= 1;
     
   }
   else{ 
      matchesPlayedTotal[arr_iterator.season]=0;
   }
  
})
console.log(matchesPlayedTotal)

});


