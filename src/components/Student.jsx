

const Student = ({name ,course ,address}) =>{
    return(
<div className=" col l3  s6 ">
  

      <div className="student_wrap white">
      <h6>{name}</h6>
      <p>{course}</p>
      <p>{address}</p>
      </div>
</div>
    )
  
  }
  


  export default  Student
