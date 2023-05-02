import React from 'react'
import '../css/BotsList.css'
function BotsList({image, name, catchphrase, bot_class, health, damage, armor, handleAdd, handleDelete, bot}) {
  return (
    <div id='list' >
        <img src={image} alt='bot'/>
        <h3>{name}</h3>
        <p>Catchphrase:{catchphrase}</p>
        <br/><br/><p>Class:{bot_class}</p>
        <div>
            <p>Health:{health}</p>
            <p>Damage:{damage}</p>
            <p>Armor:{armor}</p>
        </div>
        <button onClick={handleAdd(bot)} id='add'>ADD ARMY</button>
        <button id='delete'>DELETE</button>
    </div>
  )
}

export default BotsList