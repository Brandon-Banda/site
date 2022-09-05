import React from "react";
import moment from 'moment';
import "../styles.scss";

moment().format();

var beardStart = moment("2022-08-10", "YYYY-MM-DD");
var dietStart = moment("2022-07-28", "YYYY-MM-DD");
var current = moment().startOf('day');

var dietCounter = Math.abs(moment.duration(dietStart.diff(current)).asDays()) + 1;
var beardCounter = Math.abs(moment.duration(beardStart.diff(current)).asDays()) + 1;

function Counters() {
    return(
        <>
        
        <div style={{ fontSize: 20, color: 'white', maxWidth: 200 }}>
            {dietCounter} days since starting the diet.
        </div>
        <h3>
            august 19th CFA
            <br></br>
            <br></br>
            {beardCounter} days since growing the beard.
        </h3>
            
        </>
    );
  }
export default Counters;
