import React, { useEffect, useState } from 'react'
import BotsDisplay from './BotsDisplay'
import MyArmyDisplay from './MyArmyDisplay'


function FunctionHolder() {
    const [bots, setBots] = useState([])
    const [added, setAdded] = useState(false)
    
    useEffect(()=>{
        fetch('http://localhost:3000/bots')
        .then(resp=>resp.json())
        .then(data=>setBots(data))
    })

     function handleAdd(bot){
      setAdded(true)
      armyRender()
     }
      function armyRender(){
        {bots.filter((bot)=>{
        if(added === true){  
            <MyArmyDisplay
            key={bot.id}
            image={bot.avatar_url}
            name={bot.name}
            catchphrase={bot.catchphrase}
            bot_class={bot.bot_class}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
            bot={bot}
            />
      }else{
        return bot
      }
      })}}
      const handleDelete=(id) => {
        fetch(`http://localhost:3000/bots`,{
        method:"DELETE"
      }).then (() =>setBots ((previousData)=>previousData.filter(bot =>bot.id !== id)))
      }
  return (
    <div>
      
      <BotsDisplay bots={bots} handleAdd={handleAdd} handleDelete={handleDelete}/>
    </div>
  )
}


export default FunctionHolder