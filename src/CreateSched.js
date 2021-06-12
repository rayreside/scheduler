import React from 'react';
import arrayMove from 'array-move';

import DisplaySched from './DisplaySched.js';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function applyCode(code, techname, techlist, key){
    for (const tech of techlist)  {
        if (tech.NAME === techname) {
            const a = key;
            tech[a] = code;
        }
    }
}

//code search
function evenSearch(code, techlist, key){
    for (const tech of techlist)  {
        if (tech.QUAL.find(element => element === code) && tech[key] === undefined) {
            return tech;
        }
    }
}

//code search
function oddSearch(code, techlist, key){
    for (const tech of techlist)  {
        if (tech.QUAL.find(element => element === code) && tech[key] === undefined && tech[key-1] !== code ) {
            if (tech[key-1] === "4O" && code === "5O") {
                //skip
            }
            else if (tech[key-1]=== "5O" && code === "4O") {
                //skip
            }
            else {
                return tech;
            }
        }
    }
}

//code search
function pluckSearch(techlist, key){
    for (const tech of techlist)  {
        if (tech[key] === undefined && tech[key-1] !== "1P" ) {
            return tech;
        }
    }
}

//FIRST PERIOD
function firstPeriod(tasks, techs, key){
    for (const element of tasks)  { //task loop
        switch (element.CODE) {
            case "AD": //set admin
                element[key] = "NC";
                break;
            case "2L": //set assessment lead
                element[key] = "TT";
                break;
            case "1L": //set psp lead
                element[key] = "SB";
                break;
            case "5L": //set cutting lead
                element[key] = "MLS";
                break;
            default: //set everything else
                let result = evenSearch(element.CODE, techs, key); //searching available techs
                if (result !== undefined){ //if task is not assigned a tech yet
                    element[key] = result.NAME; //set assigned tech
                    applyCode(element.CODE, result.NAME, techs, key);
                }
                else { break; } //else move to next task
        }
    }
}

//SECOND PERIOD
function secondPeriod(tasks, techs, key){

    for (const element of tasks)  { //task loop
        switch (element.CODE) {
            case "AD": //set admin
                element[key] = element[key-1];
                break;
            case "2L": //set assessment lead
                element[key] = element[key-1];
                break;
            case "1L": //set psp lead
                element[key] = element[key-1];
                break;
            case "5L": //set cutting lead
                element[key] = element[key-1];
                break;
            case "1P":
                let result1 = pluckSearch(techs, key);
                if (result1 !== undefined){ //if task is not assigned a tech yet
                    element[key] = result1.NAME; //set assigned tech
                    applyCode(element.CODE, result1.NAME, techs, key);
                }
                else { break; } //else move to next task
                break;
            default: //set everything else
                let result2 = oddSearch(element.CODE, techs, key); //searching available techs
                if (result2 !== undefined){ //if task is not assigned a tech yet
                    element[key] = result2.NAME; //set assigned tech
                    applyCode(element.CODE, result2.NAME, techs, key);
                }
                else { break; } //else move to next task
        }
    }
}

function create(tasks, techs, key){

    firstPeriod(tasks, techs, key);

    let tasks1 = arrayMove(tasks,7,-1);
    let tasks2 = arrayMove(tasks1,8,-1);
    tasks1 = arrayMove(tasks2,7,-1);
    tasks2 = arrayMove(tasks1,-2,12);
    tasks1 = arrayMove(tasks2,-5,13);
    tasks2 = arrayMove(tasks1,19,-1);
    //tasks1 = arrayMove(tasks2,-2,0);
    
    secondPeriod(tasks2, techs, key+1);
}

const CreateSched = ({ tasks , techf, techp }) => {

    const tech1 = shuffle(techf);
    
    const tech2 = shuffle(techp);
    let techs = tech2.concat(tech1);

    for (var i = 1; i < 8; i+=2) {
        create(tasks, techs, i);
        const techa = shuffle(techs.slice(-8));
        const techb = shuffle(techs.slice(0,9));
        techs = techb.concat(techa);
        console.log(techs);
    }

    return(
        <div style={{ flexGrow: 1 }}>
            <DisplaySched tasklist={tasks} />
        </div>
    )
}

export default CreateSched;