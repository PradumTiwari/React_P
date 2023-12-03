import './shimmer.css';

const Shimmer=()=>{
  return (
    <div className="restaurant-list flex">
    {Array(20)
    .fill("")
      .map((e,index)=>(
       <div  key={index}  className="shimmer-card"></div>
    ))}
    </div>
  ); 
};

export default Shimmer;