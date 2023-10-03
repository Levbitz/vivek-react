import React ,{useState ,useEffect} from 'react'
const url = "https://fakestoreapi.com/products"

function HomePage() {
    const  [products ,setProducts] = useState([])
    const  [loading, setLoading] = useState(true)

//asynchronus - 

    useEffect(()=>{
    setLoading(true)    
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
    setProducts(data)
    setLoading(false)
})
    },[])






    console.log(products.length)

  return (
    <div>
    <div className="container">
    <div className="row">
    
    {loading  ?
        (
            <>
            
            

          <h1 className="center">    Products loading .....</h1>
            </>
        ) 
        : (
            products.map((product)=>{
                return(
                    <div className="col l3">
                <div>
    <img  
    style={{
        height:200,
        width:200,
        objectFit:"contain"
    }}
    src={product.image}  />
                <p className="truncate">{product.title} </p>
                <h5>{product.price} Rs. </h5>
                </div>
                    </div>
                )
            })
        )
        }
    
    </div>
    </div>
    



    
    </div>
  )
}

export default HomePage




/// high order function is a function that returns another function as a argument /parameter

//forEach , map , filter ,reduce
