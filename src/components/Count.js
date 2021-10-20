import React from 'react'
import { connect } from 'react-redux'

 function Count({count}) {
    return (
        <div>
            <h1>{count}</h1>
            
        </div>
    )
}

function mapStateToProps(state){
    return{
        count:state.count,
       
    }
}

export default connect(mapStateToProps)(Count);
