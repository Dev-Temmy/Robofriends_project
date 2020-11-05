import React from 'react';

const Scroll= (props)=> {
    return ( 
        <div className= 'overflow-y-scroll-ns { overflow-y: scroll; }'>
        {props.childern} 
        
        </div>
        );
};
export default Scroll;

//style = {{overflowY: 'scroll', border: '1px solid black', height: '500px'}