import React,{useEffect} from 'react'
const Cockpit = (props)=>{
  useEffect( ()=>{
    console.log('[Cockpi.js] useEffect');
    setTimeout(()=>{
      alert('saved this data to cloude');
    },1000);
    return ()=>{
     
      console.log('[Cockpit.js] cleanup work with useeffect');

    };

  },[] );
  useEffect(()=>{
    console.log('[Cockpi.js] useEffect');
    return()=>{
      
      console.log(['Cockpit.js clean up 2nd use effect']);
    };
  });
    return(
        <div className="Cockpit">
        <h1> Hi, /I am React App</h1>
        <p>  This is realy Working</p>
        <button  onClick={props.clicked_toggle}>Togglar Button</button>
        </div>
    );
}
export default React.memo(Cockpit);