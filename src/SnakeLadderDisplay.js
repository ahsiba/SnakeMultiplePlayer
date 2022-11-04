import React from 'react'

const SnakeLadderDisplay = (prop) => {
    return (
        <div>
            <div>
            {prop.number}
            {prop.snake}
            {prop.ladder}
            </div>
            <span>
              {prop.playerEmoji}
            </span>
            

        </div>
    )
}

export default SnakeLadderDisplay