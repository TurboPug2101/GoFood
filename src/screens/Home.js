import React,{useEffect,useState} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
//import Carousal from "../components/Carousal";


export default function Home() {

    const [foodcat,setfoodcat]=useState([]);
    const [foodItem,setfoodItem]=useState([]);
    const [search,setsearch]=useState('');

    const loadData=async()=>{
      let response= await fetch ("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    response=await response.json();
    setfoodcat(response[1]);
    setfoodItem(response[0]);
  }
    useEffect(()=>{
      loadData()
    },[])
  
  
  return (
    <div>
      <div>
        {" "}
        <Navbar></Navbar>
      </div>
      <div>
      <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    

    <div className="carousel-item active" data-bs-interval="10000" id='carousal'>
    <img src="https://source.unsplash.com/random/60×40/?burger" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="d-flex justify-content-center ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
           setsearch(e.target.value)
        }}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
      </div>
    </div>
    <div className="carousel-item" id='carousal' data-bs-interval="200 0"  >
    <img src="https://source.unsplash.com/random/60×40/?pizza" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
    <div className="carousel-item" id='carousal'>
    <img src="https://source.unsplash.com/random/60×40/?pastry" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
    
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      </div>
     
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
      </div>
      <div className="container">
        {
          foodcat!==[]
          ? foodcat.map((data)=>{
            return (
              <div className='row mb-3'>  
                <div key={data._id} className="fs-3 m-3"> {data.CategoryName}</div>
                <hr />
                 {foodItem!== []
                 ?
                 foodItem.filter((item)=>item.CategoryName== data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase() ))) 
                 .map(filterItems=>{
                  return (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                       <Cards foodItem={filterItems}
                       options={filterItems.options[0]}
                       imgsrc={filterItems.img}
                       
                       ></Cards>
                    </div>
                  )
                 })
          :<div>Nahi mila kuch</div>}
                  </div>        
          )
                }):null
                }

              </div>
              
     <div><Footer></Footer> </div>
        
      
    </div>
  );
}
