import React from "react";
import { Grid, CardContent, Button, Card ,Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
export default function DisplaySubjects({ folder }) {

  console.log(folder)
  if(folder.hasNestedFolder){
    console.log("fuck",folder.nestedFolder)
  }
  
  return (
    
    <Grid item xs={12} md={6} key={folder.id}>
      {folder.hasNestedFolder?(
        <Card>
        <CardContent>
        <Typography variant="h5" align="center">
          {folder.name}
        </Typography>
        
            <Button
              component={Link}
              to={`/subject/${folder.name}/${folder.id}`}
              fullWidth
              variant="contained"
              color="primary"
            >
              {folder.name}
            </Button>
        </CardContent>
      </Card>
      ):<Card>
        <CardContent>
            <Button
              component={Link}
              to={`/subject/${folder.name}/${folder.id}`}
              fullWidth
              variant="contained"
              color="primary"
            >
              {folder.name}
            </Button>
        </CardContent>
      </Card>
      }
    </Grid>
  );
}
