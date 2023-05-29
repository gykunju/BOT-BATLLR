import React from 'react'
import BotDisplay from './BotDisplay'

function BotCard({bots, addBotArmy, handleDelete}) {
    const DisplayBots=bots.map((bot)=>{
        return(
        <BotDisplay
        key={bot.id}
        id={bot.id}
        image={bot.avatar_url}
        name={bot.name}
        catchphrase={bot.catchphrase}
        health={bot.health}
        damage={bot.damage}
        armor={bot.armor}
        addBotArmy={addBotArmy}
        handleDelete={handleDelete}
        />
        )
    })
  return (
    <div style={{borderStyle:'solid', borderColor:'#c9aa88', borderRadius:'50px', marginTop:"20px"}}>
        <div>
          <h2>Bot Display</h2>
        </div>
        {DisplayBots}
    </div>
  )
}

export default BotCard