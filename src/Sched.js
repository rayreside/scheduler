import React from 'react';
import Shift from './Shift';

//code search
function search(code, techlist){
    for (const tech of techlist)  {
        if (tech.QUAL.find(element => element === code) && tech.CURRENT === "") {
            tech.CURRENT = code;
            return tech;
        }
    }
}

//code search
function secondsearch(code, techlist){
    for (const tech of techlist)  {
        if (tech.QUAL.find(element => element === code) && tech.CURRENT === "" && tech.PREV !== code ) {
            if (tech.PREV === "4O" && code === "5O") {
                //skip
            }
            else if (tech.PREV === "5O" && code === "4O") {
                //skip
            }
            else {
                tech.CURRENT = code;
                return tech;
            }
        }
    }
}

//FIRST PERIOD
function firstperiod(tasks, techs){
    for (const element of tasks)  { //task loop
        switch (element.CODE) {
            case "AD": //set admin
                element.FIRST = "NC";
                break;
            case "2L": //set assessment lead
                element.FIRST = "TT";
                break;
            case "1L": //set psp lead
                element.FIRST = "SB";
                break;
            case "5L": //set cutting lead
                element.FIRST = "MLS";
                break;
            default: //set everything else
                let result = search(element.CODE, techs); //searching available techs
                if (result !== undefined){ //if task is not assigned a tech yet
                    element.FIRST = result.NAME; //set assigned tech
                }
                else { break; } //else move to next task
        }
    }

    for (const element of techs) { //tech loop
        element.PREV = element.CURRENT; //set previous task for next period
        element.CURRENT = ""; //clear current task
    }
}

//SECOND PERIOD
function secondperiod(tasks, techs){
    for (const element of tasks)  { //task loop
        switch (element.CODE) {
            case "AD": //set admin
                element.SECOND = element.FIRST;
                break;
            case "2L": //set assessment lead
                element.SECOND = element.FIRST;
                break;
            case "1L": //set psp lead
                element.SECOND = element.FIRST;
                break;
            case "5L": //set cutting lead
                element.SECOND = element.FIRST;
                break;
            default: //set everything else
                let result = secondsearch(element.CODE, techs); //searching available techs
                if (result !== undefined){ //if task is not assigned a tech yet
                    element.SECOND = result.NAME; //set assigned tech
                }
                else { break; } //else move to next task
        }
    }
    
    for (const element of techs) { //tech loop
        element.PREV = element.CURRENT; //set previous task for next period
        element.CURRENT = ""; //clear current task
    }
}

function createSched(tasks, techs){
    firstperiod(tasks, techs);
    secondperiod(tasks, techs);
}

const Sched = ({ tasks , techs, setTasks }) => {

    createSched(tasks, techs);

    return(
        <div>
            <Shift tasklist={tasks}/>
        </div>
    )
}

export default Sched;