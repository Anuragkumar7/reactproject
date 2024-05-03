// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const [cart, setCart] = useState(0);
// // Component will update
//   // useEffect(() => {
//   //   console.log("Your item is added ");
//   // }, [cart]);

// //componentDidMount
// // useEffect(() => {

// //     console.log("Your item is removed");  
// // },[])

// //component will unmount
// useEffect(() => {
//   return()=>{
//     console.log("Your item is removed");
//   }
// })


//   const handleIncrement = () => {
//     setCount(() => count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(() => count - 1);
//     }
//   };

//   const handleCart = () => {
//   setCart(() => cart+1)

//   };
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button className="" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button onClick={handleDecrement}>Decrement </button>
//       <div>
//         <h1>Cart: {cart}</h1>
//         <button onClick={handleCart}>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { Fragment, useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    (async function() {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setData(data);
    })()
  }, []);

  return (
    <Fragment>
      {data && data.map((val, i) => {
        console.log(val);
        return (
          <div key={i} className='flex flex-col'>
            <img src={val.image}  />
            <h3 className='bg-gradient-to-r from-cyan-500 to-blue-500'>{val.title}</h3>
            <h3>{val.price}</h3>
          </div>
        );
      })}
    </Fragment>
  );
}

export default App;
