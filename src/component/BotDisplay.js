import React from 'react'
import '../css/BotDisplay.css'
function BotDisplay({id, image, name, catchphrase, health, damage, armor, addBotArmy, handleDelete}) {
  // const deleteHandler = (e)=>{
  //   handleDelete(e.id)
  // }
  // const addHandler = (e)=>{
  //   handleAdd(e.id)
  // }

  return (
    <div key={id}className='bot_cont'  style={{marginTop:'20px', display:'inline-block', borderRadius:'25px black', padding:'0px', width:'350px',height:'300px', backgroundColor:'grey', marginRight:'20px', marginBottom:"10px"}}>
      <div >
        <div>
            <img src={image} alt='bot'/>
        </div>
        <div style={{background:'#fff7'}}>
        <div>
            <h2>{name}</h2>
        </div>
        <div>
            <span>
              <i className=''/>
            
            </span>
        </div>
        <div>
            <small>{catchphrase}</small>
        </div>
        <div style={{display:'flex' , flexDirection:'column', marginTop:'10px'}}>
            <span style={{color:"green"}}>
              <i className=''/>
              HEALTH:{health}
            </span>
            <span style={{color:"red"}}>
              <i className=''/>
             DAMAGE:{damage}
            </span>
            <span style={{color:"blue"}}>
              <i className=''/>
              ARMOR:{armor}
            </span>
        </div>
        <div className='button_cont'>
        <div>
          <button style={{backgroundColor:'#fff'}} onClick={()=>addBotArmy(id)}>ADDARMY</button>
        </div>
        <div>
          <button onClick={()=> handleDelete(id)} style={{backgroundColor:'#fff'}}>DELETE</button>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BotDisplay