import React ,{useState} from 'react'

function FirstHook() {
   // const state ="ICE"
   const [currentState ,setCurrentState ] = useState("ice")

   const stateHandler = () =>{
    //  setCurrentState("water")
    if(currentState === "ice"){
        setCurrentState("water")
    }else{
        setCurrentState("ice")
    
    }
   
   }


// count example
const  [count ,setCount] =useState(0)




  return (
    <div>
    <h4>First Hook(Use State Hook)</h4>
    
 <h1 className='center'>{currentState}</h1>

 <button 
 onClick={stateHandler}
 className='btn red'>Change  States</button>





 <div style={{
    marginTop:20,
    padding:"20px  0px"
 }} className="row white">
 <div className="col l4 s4">
 <button>Decrease</button>
 </div>
 <div className="col l4 s4">
 <h1>{count}</h1>
 </div>
 <div className="col l4 s4">
 <button 
 onClick={()=>setCount(count+1)}
 
 >increase</button>
 </div>
 </div>


<button>Reset</button>
    </div>
  )
}

export default FirstHook
