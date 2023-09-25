import Student from './components/Student'
//import { studentsList } from './data/data'
import './App.css'




const studentsList = [
  { name: "John Doe", age: 20, course: "Computer Science", country: "USA" },
  { name: "Jane Doe", age: 22, course: "Mathematics", country: "Canada" },
  { name: "David Smith", age: 21, course: "Physics", country: "UK" },
  { name: "Sarah Johnson", age: 19, course: "Biology", country: "Australia" },
  { name: "Michael Lee", age: 23, course: "Chemistry", country: "New Zealand" },
  { name: "Laura Brown", age: 20, course: "History", country: "Germany" },
  { name: "James Wilson", age: 22, course: "English Literature", country: "USA" },
  { name: "Emma Taylor", age: 21, course: "Psychology", country: "Canada" },
  { name: "Daniel Davis", age: 24, course: "Economics", country: "UK" },
  { name: "Olivia Miller", age: 19, course: "Sociology", country: "Australia" }
];

const App = () =>{
  return(
    <div>
    <h4
   

    style={{
      color:"indianred"
    }}
    
    onClick={()=>alert('Hello React')}>Hello React</h4>




<div className="container">
<div className="row">
{studentsList.map((student)=>{
  return(
    <Student
name={student.name}
course={student.course}
    />
  
  )
})}
</div>

</div></div>
  )
}

export  default App









