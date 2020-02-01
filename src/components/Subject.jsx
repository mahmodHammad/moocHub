import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    col:{
        color:"#f62",
        padding:"140px"
    }
}

class Subject extends Component {
    render() {
        console.log(this.props)
        const{classes}=this.props
        return (
            <Card>
                <CardContent>
                    <Typography className={classes.col} variant="h3" component={Link} to="/cat" color="secondary">
                        Electronics
                    </Typography>
                </CardContent>
            </Card>

        )
    }
}
export default withStyles(styles)(Subject)