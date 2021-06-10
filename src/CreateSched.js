import React from 'react';
import arrayMove from 'array-move';

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

//code search
function pluckSearch(code, techlist){
    for (const tech of techlist)  {
        if (tech.CURRENT === "" && tech.PREV !== code ) {
            tech.CURRENT = code;
            return tech;
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

    console.log(tasks);
}

//SECOND PERIOD
function secondPeriod(tasks, techs){

    console.log(tasks);

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
            case "1P":
                let result1 = pluckSearch(element.CODE, techs);
                if (result1 !== undefined){ //if task is not assigned a tech yet
                    element.SECOND = result1.NAME; //set assigned tech
                }
                else { break; } //else move to next task
                break;
            default: //set everything else
                let result2 = secondSearch(element.CODE, techs); //searching available techs
                if (result2 !== undefined){ //if task is not assigned a tech yet
                    element.SECOND = result2.NAME; //set assigned tech
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

    let tasks1 = arrayMove(tasks,7,-1);
    let tasks2 = arrayMove(tasks1,8,-1);
    tasks1 = arrayMove(tasks2,7,-1);
    tasks2 = arrayMove(tasks1,-2,12);
    tasks1 = arrayMove(tasks2,-5,13);
    tasks2 = arrayMove(tasks1,19,-1);
    //tasks1 = arrayMove(tasks2,-2,0);
    
    secondPeriod(tasks2, techs);
}

const CreateSched = ({ tasks , techs, theme }) => {

    create(tasks, techs);

    return(
        <div style={{ flexGrow: 1 }}>
            <DisplaySched tasklist={tasks} theme={theme} />
        </div>
    )
}

export default CreateSched;