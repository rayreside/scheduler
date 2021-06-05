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

//DAY 1 FIRST SHIFT
function firstshift(tasks, techs){
    for (const element of tasks)  {
        let result = search(element.CODE, techs);
        if (result !== undefined){
            element.ASSIGNED = result.NAME;
        }
        else { break; }
    }

    for (const element of techs) {
        element.PREV = element.CURRENT;
        element.CURRENT = "";
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