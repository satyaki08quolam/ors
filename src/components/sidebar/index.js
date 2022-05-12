// import React from 'react'


// import { useState } from 'react';

// const SideBar=(props)=>{

//     const [links]=useState([
//         {title:"home", id:1},
//         {title:"link one", id:2},
//         {title:"link two", id:3},
//         {title:"link three", id:4},
//         {title:"link four", id:5},
//         {title:"link five", id:6},
//         {title:"contract review", id:7},
//         {title:"link six", id:8}
//     ])  
    
//     return(
//         <React.Fragment>
//             <Down props={links} />
//         </React.Fragment>
//     )
// }


// const DropDown=(props)=>{

//     // const [open, setOpen]= useState(false);   
    
//     return(
//         <React.Fragment>
//             {/* <li className="subdown">
//                 <a className="trex" href="#top" onClick={()=>setOpen(!open)}>{props.con}</a>
//                 {open && props.children}
//             </li> */}
//         </React.Fragment>
//     )
// }

// const Down=(props)=>{
//     const [show, setShow]=useState(false)
//     console.log(show)
//     // const prop=props;
//     // console.log({title})
//     const propo=props.props
//     console.log(propo)

//     return(
//         <React.Fragment>
//             <div className="side_tab">
//                 {propo.map((p)=>(
//                     <ul key={p.id}>
//                         <li>{p.title}
//                             <a className="caret" onClick={()=>setShow(!show)}>
//                                 <div className="dropContainer">
//                                     <p>sub link1</p>
//                                     <p>sub link2</p>
//                                     <p>sub link3</p>
//                                 </div>
//                             </a>
//                         </li>
//                         {/* <div className="dropContainer">
//                             <a>sub link1</a>
//                             <a>sub link1</a>
//                             <a>sub link1</a>
//                         </div> */}
//                     </ul>
//                 ))}
//             </div>
//             <div onClick={()=>setShow(!show)}>tafgg
//                 <p>asdasd</p>
//             </div>
//         </React.Fragment>
//     )
// }






// export {SideBar, DropDown};