import React from 'react';

import DisplaySched from './DisplaySched.js';

//code search
function firstSearch(code, techlist){
    for (const tech of techlist)  {
        if (tech.QUAL.find(element => element === code) && tech.CURRENT === "") {
            tech.CURRENT = code;
            return tech;
        }
    }
}

//code search
function secondSearch(code, techlist){
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
function firstPeriod(tasks, techs){
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
                let result = firstSearch(element.CODE, techs); //searching available techs
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
function secondPeriod(tasks, techs){
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
                let result = secondSearch(element.CODE, techs); //searching available techs
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

function create(tasks, techs){
    firstPeriod(tasks, techs);
    secondPeriod(tasks, techs);
}

const CreateSched = ({ tasks , techs, setTasks }) => {

    create(tasks, techs);

    return(
        <div style={{ flexGrow: 1 }}>
            <DisplaySched tasklist={tasks} />
        </div>
    )
}

export default CreateSched;