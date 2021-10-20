import React from 'react'
import { connect } from 'react-redux'

 function Button({add,sub}) {
    return (
        <div>
            <button onClick={()=>add()}>+</button>
            <button onClick={()=>sub()}>-</button>
            
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        add:()=>{
            dispatch({type:'ADD'})
        },
        sub:()=>{
            dispatch({type:'SUB'})
        }
    }
}

export default connect(null,mapDispatchToProps)(Button);
