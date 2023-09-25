import Student from './components/Student'
import { studentsList } from './data/data'
import './App.css'

const App = () =>{
  return(
    <div>
    <h4
    // style ='text-color:red'

    style={{
      color:"indianred"
    }}
    
    onClick={()=>alert('Hello React')}>Hello React</h4>






    {studentsList.map((student)=>{
      return(
        <Student
name={student.name}
course={student.course}
        />
      
      )
    })}

    <Student
name='Pinto'
course='BCA (4th  year)'
    />
    <Student
name='Vivek'
course='B Tech (4th  year)'
    />
    <Student
name="Sam"
course='B Tech (4th  year)'
    />
   
    </div>
  )
}

export  default App









