                                     /*Find out matches per year per team*/


const csvtojson=require('csvtojson');
const fs=require('fs');
const { match } = require('assert');


const Matches_per_team_per_year={}

csvtojson().fromFile("./matches.csv").then(match_arr_obj=> {
   

    match_arr_obj.forEach(match_itr => {
        if(Matches_per_team_per_year.hasOwnProperty(match_itr.season))
        {
            
            if((Matches_per_team_per_year[match_itr.season].hasOwnProperty(match_itr.team1)) && (Matches_per_team_per_year[match_itr.season].hasOwnProperty(match_itr.team2)))
              {
                Matches_per_team_per_year[match_itr.season][match_itr.team1]+=1
                Matches_per_team_per_year[match_itr.season][match_itr.team2]+=1


              }
              else{
                Matches_per_team_per_year[match_itr.season][match_itr.team1]=0
                Matches_per_team_per_year[match_itr.season][match_itr.team2]=0

              }
            }
        
        else{
            Matches_per_team_per_year[match_itr.season]={}
        }
    })

    console.log(Matches_per_team_per_year)
})