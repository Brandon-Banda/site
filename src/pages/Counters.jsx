import React, { useEffect, useState } from "react";
import moment from 'moment';
import "../styles.scss";

moment().format();

var dietStart = moment("2022-07-28", "YYYY-MM-DD");
var current = moment().startOf('day');

var dietCounter = Math.abs(moment.duration(dietStart.diff(current)).asDays()) + 1;

function Counters() {
    return(
        <div style={{ fontSize: 20, color: 'white'}}>
            {dietCounter} days since starting the diet.
        </div>
    );
  }
  // august 19th CFA
  // beard when did i let it grow
export default Counters;
