import React from 'react'

// normar way to pass the props funtional components
// export default function Products(props) {
//   return (
//     <div>
//         <h2>Id: {props.id}</h2>
//         <h2>Name:{props.name}</h2>
//         <h2>Actual Price:{props.aprice}</h2>
//         <h2>Discount Price:{props.dprice}</h2>
//    </div>
//   )
// }


// Destructuring props way to pass the props
export default function Products({id, name, aprice, dprice}) {
  return (
    <div>
        <h2>Id : {id}</h2>
        <h2>Name :{name}</h2>
        <h2>Actual Price :{aprice}</h2>
        <h2>Discount Price :{dprice}</h2>
    </div>
  )
}
