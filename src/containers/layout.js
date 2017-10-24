import React from 'react'
import Sidebar from '../components/sidebar'
export default (props) => {
  return (
   <div className="container">
     <div className="row">
       <div className="col-xs-4">
         <Sidebar/>
       </div>
       <div className="col-xs-8">
        {props.children}
       </div>
     </div>
   </div>
  )
}