import React from 'react'
const CourseStatus=["ALL","ACTIVE","COMPLETed","UPCOMING"]
function Header() {
  return (
    <div>
    <h1>my courses (3)</h1>
    {/* {CourseStatus.map(t=>console.log(t))} */}
   
   <div className="course-status">
   {CourseStatus.map((status)=>(
    <div key={status}>{status}</div>
    ))}
   </div>
    
    </div>
  )
}

export default Header
