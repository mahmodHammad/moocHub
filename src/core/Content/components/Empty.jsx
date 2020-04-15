import React from 'react'
import Typography from "@material-ui/core/Typography";

export default function Empty() {
    return (
        <div className="Empty">
        {/* will be extracted to a reusable component */}
        <Typography color="secondary" variant="h5" component="div">
          Empty
        </Typography>
      </div>
    )
}
