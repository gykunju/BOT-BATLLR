import React from 'react'
import BotsList from './BotsList'
import '../css/BotsDisplay.css'

function BotsDisplay({bots, handleAdd, handeleDelete}) {
  return (
    <div id='display'>
        {bots.map((bot)=>(
          <div key={bot.id}  >
            <BotsList
           
            image={bot.avatar_url}
            name={bot.name}
            catchphrase={bot.catchphrase}
            bot_class={bot.bot_class}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
            handleAdd={handleAdd}
            handleDelete={handeleDelete}
            bot={bot}

            />
          </div>
        ))}
    </div>
  )
}

export default BotsDisplay