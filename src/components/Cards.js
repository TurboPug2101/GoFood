import React ,{useEffect, useRef,useState} from 'react'

import { useDispatchCart,useCart } from './ContextReducer';

export default function Cards(props) {

  let data=useCart();

  let dispatch=useDispatchCart();
  let options=props.options;
  let priceOptions=Object.keys(options);
  let foodItem=props.item;

  
  const priceRef=useRef();
  const[qty,setqty]=useState(1);
  const [size,setsize]=useState("")

const handleAddtoCart=async ()=>{
  let food=[];
  for(const item of data){
    if(item.id===props.foodItem._id){
      food=item;
      break;
    }
  }

  if(food!==[]){
    if(food.size===size){
      await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty })
      return
    }
  
  else if(food.size!==size){
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    return
  }
  return
}
  await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})

    //console.log(data)
  }
  let finalPrice=qty*parseInt(options[size]);
  useEffect(()=>{
    setsize(priceRef.current.value)
  },[])
  return (
    <div>
       <div
          className="card mt-3 container "
          style={{ width: "20rem",margin:"1em" ,maxHeight: "430px" }}
        >
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body container">
          <img src={props.foodItem.img} className="d-block w-100"  style={{ width: "16rem", height: "14rem" }} alt="..."/>

            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text" style={{maxHeight: "80px" ,fs:"5px"}}>
              Some quick example text to build on the card titleand make up the 
              
            </p>
            <div className="container m-0 w-100"  style={{maxHeight: "100px" }}>
              <select className="m-1 w-40 h-80 fs-10" onChange={(e)=>setqty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 w-80 h-80" ref={priceRef} onChange={(e)=>setsize(e.target.value)} style={{margin:"30px", maxHeight: "160px" }}>
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}> {data}</option>
                })}
              </select>
              <div className="d-inline fs-6">Rs {finalPrice}</div>
            </div>
            <button className={'btn btn-success justify-center m-1'} onClick={handleAddtoCart} >Add To Cart</button>
          </div>
        </div>
    </div>
  )
}
