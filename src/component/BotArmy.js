import React from 'react'
import ArmyDisplay from './ArmyDisplay'

function BotArmy({army, removeArmy}) {
  return (
    <div >
        <h4>BOT ARMY</h4>
        <div style={{borderStyle:'solid', backgroundColor:'#c9aa88',borderRadius:'10px',marginTop:"10px",paddingBottom:"10px", borderColor:'#c9aa88', display:"flex", flexDirection:'row'}}>
        {army.map((bot)=>{
        return <ArmyDisplay key={bot.id}
        id={bot.id}
        image={bot.avatar_url}
        name={bot.name}
        catchphrase={bot.catchphrase}
        health={bot.health}
        damage={bot.damage}
        armor={bot.armor}
        removeArmy={removeArmy}
        />})}
        </div>
    </div>
  )
}

export default BotArmy