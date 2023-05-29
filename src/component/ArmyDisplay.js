import React from 'react'

function ArmyDisplay({id, image, name, catchphrase, health, damage, armor, removeArmy}) {
  return (
    <div >
      <div className='army_cont'>
        <div>
            <img src={image} alt='bot'/>
        </div>
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
        <div style={{display:"flex", flexDirection:"column"}}>
            <span style={{color:"green"}}>
              <i className=''/>
              <b><small>HEALTH:{health}</small></b>
            </span>
            <span style={{color:"#960018"}}>
              <i className=''/>
              <b><small>DAMAGE:{damage}</small></b>
            </span>
            <span style={{color:"blue"}}>
              <i className=''/>
              <b><small>ARMOR:{armor}</small></b>
            </span>
        </div>
        <div>
            <button className='remove'onClick={()=>removeArmy(id)}>Remove</button>
        </div>
        </div>
    </div>
  )
}

export default ArmyDisplay