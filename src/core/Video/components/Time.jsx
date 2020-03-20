import React from 'react'
import Duration from "../Duration";
import Button  from '@material-ui/core/Button';


export default function Time({handleRemaining , isRemaining ,duration ,played}) {
    return (
        <Button
        onClick={ handleRemaining}
      >
        {isRemaining ? (
          <span>
            <Duration seconds={duration * played} /> /
            <Duration seconds={duration} />
          </span>
        ) : (
          <span>
            -<Duration seconds={duration * (1 - played)} />
            </span>
        )}
      </Button>

    )
}
