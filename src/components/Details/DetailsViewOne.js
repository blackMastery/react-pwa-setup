import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";



 const DetailsViewOne =(props)=>{
     console.log(props.details)

 return (
     <Button colo="primary">
            first view
     </Button>
 )


}

const mapStateToProps =(state,ownProps) =>({
    details:state
})

export default connect(mapStateToProps,null)(DetailsViewOne);