import React, {useState} from 'react';


function LarryComp (props) {
    console.log(props)
    function myOnClickCount(e) {

        console.log("you clicked in LarryComp");
        props.countFunc();

    }
    return (
        <div>
            <h1 onClick={myOnClickCount}>Hello from LarryComp {props.countx}</h1>
            {/* <h1 onClick={myOnClickCount}> Hello World: count {count}</h1> */}
        </div>
    )
}

export default LarryComp;