import React from 'react'

function MyArmyDisplay({image, name, catchphrase, bot_class, health, damage, armor}) {
  return (
    
    <div id='my_army'>
        <h3>MyArmy</h3>
        <div >
            <img src={image} alt='bot' />
            <h3>{name}</h3>
            <p>catchphrase:{catchphrase}</p>
            <br/><br/><p>class:{bot_class}</p>
            <div>
                <p>health:{health}</p>
                <p>damage:{damage}</p>
                <p>armor:{armor}</p>
            </div>
        </div>
    </div>
  )
}

export default MyArmyDisplay