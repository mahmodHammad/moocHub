import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CalendarToday from "@material-ui/icons/CalendarToday";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BarChart from "@material-ui/icons/BarChart";


const useStyles = makeStyles(theme => ({
    root:{
        padding:20
    },
  header: {
    margin: "5px 0px",
  },
  notes:{
      "& ul":{
          margin:"10px 0"
      },
      "& li":{
          padding:"4px 0"
      },
      "& b":{
          color:"#fff"
      }
  },Icon:{
      position:"relative",
      top:6
  },
  links:{
      marginTop:20
  }
}));

export default function MAcontent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography variant="h6" className={classes.header}>
            Important Notes: 
        </Typography>
        <ul className={classes.notes}>
            <li><BarChart color="secondary" className={classes.Icon}/> Navigate to the <b>samilarity check</b> between 2 paragraphs. incase you want to <b>compaire your modification over the citation with the original</b> one </li>
            <li>The <b>samilarity check</b> is based on an <b>AI</b> wirtten by <b>Microsoft</b> ,so it may be <b>accurate</b> engough! </li>
            <li>all results are from  <Link color="secondary" href="https://academic.microsoft.com">Microsoft Academics</Link>  </li>
            
            <li>I will  only display the content that we will may need without distraction like:
                <ul>
                    <li><b>Links</b> to the content related to the topic, some may be <b>PDF</b> ,and other may be <b>websites</b>, will be opened on a <b>new tab </b> </li>
                    <li><VisibilityIcon className={classes.Icon}/> clicking on it will show you a <b>preview</b> of the link _<i>if we did not consume our free plan 100 free requests/day</i> if we did then it will just display the URL instead</li>
                    <li><FormatQuoteIcon className={classes.Icon}/> means the number of <b>CITATIONS</b> of the paper</li>
                    <li><CalendarToday className={classes.Icon}/> means the <b>YEAR</b> of the publication of paper</li>                
                </ul>
            </li>
            
            <li>If you are not satisfied with my result you can see the <b>original results</b> at the MS Acadimics, click on the <b>More details...</b> Link , it will open it on a new tab for you</li>
            <li>If the results was not enought ,click on the <b>LOAD MORE DETALS</b> button at the bottom of the loaded content </li>
            <li className={classes.links}>Useful Links:

                <ul >
                    <li> <Link target="_blank" color="secondary" href=" https://www.facebook.com/photo.php?fbid=3149532118403983&set=a.497124656978089&type=1&theater">Facebook post (Dr Ramzy)</Link> </li>
                    <li> <Link target="_blank" color="secondary" href="https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en">Grammarly extension for chrome -> correct any spelling or grammar mistakes </Link> </li>
                    <li> <Link target="_blank" color="secondary" href="https://www.wikihow.com/Write-an-Academic-Essay?amp=1&fbclid=IwAR0aq2ydRF8k32bGvlQIl4SEghOS5sOB2kI4iSW6y2b2II8VbmmKg4sQyVc"> Wikihow -> how to write an Academic Essay </Link> </li>
                  
                    <li> <Link target="_blank" color="secondary" href="https://www.youtube.com/watch?v=jVbhfdvkSJc">Youtube -> how to write an Academic Essay WITHOUT any Citations (Arabic)  </Link> </li>
                    <li> <Link target="_blank" color="secondary" href="https://www.facebook.com/groups/Coursat2019/permalink/2872339322814347/"> Facebook post -> important Keybaord shortcuts</Link> </li>
                </ul>
            </li>
        </ul>
    </div>
  );
}
