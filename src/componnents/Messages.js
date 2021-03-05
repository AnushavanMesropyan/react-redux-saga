import React from 'react';
export const Messages=({message})=>{
    console.log(message)
    return (<div className="alert alert-warning" role="alert">
        {message}
    </div>)
}