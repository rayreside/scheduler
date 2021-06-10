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

//DAY 1 FIRST PERIOD
function firstshift(tasks, techs){
    for (const element of tasks)  { //task loop
        let result = search(element.CODE, techs); //searching available techs
        if (result !== undefined){ //if task is not assigned a tech yet
            element.ASSIGNED = result.NAME; //set assigned tech
        }
        else { break; } //else move to next task
    }

    for (const element of techs) { //tech loop
        element.PREV = element.CURRENT; //set previous task for next period
        element.CURRENT = ""; //clear current task
    }
}

/*const swap = (arr, a, b) => 
    arr.map( (curr,i) => i === a ? arr[b] : curr )
       .map( (curr,i) => i === b ? arr[a] : curr )*/

const Sched = ({ tasks , techs, setTasks }) => {

    firstshift(tasks, techs);

    //let arr1 = tasks.slice(-3);
    //let arr2 = tasks.slice(0, 15);
    //tasks = arr1.concat(arr2);
    //console.log(tasks);

    return(
        <div>
            <Shift tasklist={tasks}/>
        </div>
    )
}

export default Sched;