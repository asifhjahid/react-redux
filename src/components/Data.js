import React from 'react'
import { connect } from 'react-redux'

 function Data({name}) {
    return (
        <div>
            <h1>Hi, I am {name}</h1>
        </div>
    )
}

function mapToStateProps(state){
    return{
        name:state.name
    }
}


export default connect(mapToStateProps)(Data);