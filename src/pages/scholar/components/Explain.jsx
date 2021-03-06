import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CalendarToday from "@material-ui/icons/CalendarToday";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BarChart from "@material-ui/icons/BarChart";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20
  },
  header: {
    margin: "5px 0px"
  },
  notes: {
    "& ul": {
      margin: "10px 0"
    },
    "& li": {
      padding: "4px 0"
    },
    "& b": {
      color: "#fff"
    }
  },
  links: {
    marginTop: 20
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
        <li>
          <BarChart color="secondary" className={classes.Icon} /> Navigate to
          the <b>samilarity check</b> between 2 paragraphs. incase you want to{" "}
          <b>compaire your modification over the citation with the original</b>{" "}
          one
        </li>
        <li>
          The <b>samilarity check</b> is based on an <b>AI</b> wirtten by{" "}
          <b>Microsoft</b> ,so it may be <b>accurate</b> engough!{" "}
        </li>
        <li>
          all results are from{" "}
          <Link color="secondary" href="https://academic.microsoft.com">
            Microsoft Academics
          </Link>
        </li>

        <li>
          I will only display the content that we may need without distraction
          like:
          <ul>
            <li>
              <b>Links</b> to the content related to the topic, some may be{" "}
              <b>PDF</b> ,and other may be <b>websites</b>, will be opened on a{" "}
              <b>new tab </b>
            </li>
            <li>
              <VisibilityIcon className="iconPos" /> clicking on it will show
              you a <b>preview</b> of the link{" "}
              <i>if we did not consume our free plan 100 free requests/day</i>{" "}
              if we did then it will just display the URL instead
            </li>
            <li>
              <FormatQuoteIcon className="iconPos" /> means the number of{" "}
              <b>CITATIONS</b> of the paper
            </li>
            <li>
              <CalendarToday className="iconPos" /> means the <b>YEAR</b> of the
              publication of paper
            </li>
          </ul>
        </li>

        <li>
          If you are not satisfied with my result you can see the{" "}
          <b>original results</b> at the MS Acadimics, click on the{" "}
          <b>More details...</b> Link , it will open it on a new tab for you
        </li>
        <li>
          If the results was not enought ,click on the <b>LOAD MORE DETALS</b>{" "}
          button at the bottom of the loaded content{" "}
        </li>
        <li className={classes.links}>
          Useful Links:
          <ul>
            <li>
              <Link
                target="_blank"
                color="secondary"
                href=" https://www.facebook.com/photo.php?fbid=3149532118403983&set=a.497124656978089&type=1&theater"
              >
                Facebook post (Dr_Ramzy)
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                color="secondary"
                href="https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en"
              >
                Grammarly extension for chrome
              </Link>{" "}
              helpful if you will use{" "}
              <Link
                target="_blank"
                color="secondary"
                href="https://docs.google.com/document/u/0/"
              >
                Google Docs
              </Link>
              . Else write directly at their{" "}
              <Link
                target="_blank"
                color="secondary"
                href="https://app.grammarly.com"
              >
                {" "}
                website
              </Link>
            </li>

            <li>
              Plagiarism checker{" "}
              <Link
                target="_blank"
                color="secondary"
                href="https://smallseotools.com/plagiarism-checker"
              >
                website (free){" "}
              </Link>{" "}
              OR{" "}
              <Link
                target="_blank"
                color="secondary"
                href="https://play.google.com/store/apps/details?id=com.plagiarism_checker.duplicate"
              >
                Android App (Limited to 10 requests)
              </Link>{" "}
              OR{" "}
              <Link
                target="_blank"
                color="secondary"
                href="https://www.facebook.com/photo.php?fbid=2936060563147020&set=a.118967304856374&type=3&theater"
              >
                Desktop App (CRACKED والعياذ بالله)
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                color="secondary"
                href="https://www.facebook.com/amrkhaled69/posts/10157428378651733"
              >
                Facebook post (Eng_Amr_Khaled)
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                color="secondary"
                href="https://www.wikihow.com/Write-an-Academic-Essay"
              >
                Wikihow -> how to write an Academic Essay
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                color="secondary"
                href="https://www.youtube.com/watch?v=jVbhfdvkSJc"
              >
                Youtube -> how to write an Academic Essay WITHOUT Noticeable
                Citations (Arabic)
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                color="secondary"
                href="https://www.facebook.com/IMFarouq/posts/2595378997342196"
              >
                Facebook post -> how to mention the resources in your Academic
                Essay
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                color="secondary"
                href="https://www.facebook.com/groups/Coursat2019/permalink/2872339322814347/"
              >
                Facebook post -> important Keybaord shortcuts
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                color="secondary"
                href="https://drive.google.com/file/d/1i9o5Z_WCe93j2pLy9HItgmjP8iQx2v5k/view?fbclid=IwAR3KQiLFZTkSdFbDUw9VjWLv1PEhVv3mqeUZx9Cwq3UdpwX37LFQEy-dlcA"
              >
                Signal processing Course Project
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
