                                   /*Find out Total extra runs in 2016*/

const CsvToJson=require('csvtojson');
const fs=require('fs');

var tot_xtra_run=0

CsvToJson().fromFile("./matches.csv").then(match_arr_obj => {
   
    CsvToJson().fromFile("./deliveries.csv").then(deliv_arr_obj => {

match_arr_obj.forEach(match_itr =>
        {
            deliv_arr_obj.forEach(deliv_itr =>
                {
                    if(match_itr.id===deliv_itr.match_id)
                    {

                      if(match_itr.season==='2016')
                        {
         
                          tot_xtra_run+=parseInt(deliv_itr.extra_runs)
                        }
                    }

                })
        })
       
       console.log(tot_xtra_run)
    })
    
    
});
