import React from 'react'

const SnakeLadderDisplay = (prop) => {
    return (
        <div>
            <div>
            {prop.number}
            {prop.snake}
            {prop.ladder}
            </div>
            <p><span>
              {prop.playerEmoji}
            </span></p>
            

        </div>
    )
}

export default SnakeLadderDisplay