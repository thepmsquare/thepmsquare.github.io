import "../stylesheets/FirstSide.css";

import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import { myCurrentEmail, myGithubUsername } from "../utils/myInfo";

const FirstSide = (props: { toggleFlip: () => void }) => {
  return (
    <Card className="FirstSide" square>
      <CardContent className="FirstSide-content">
        <Typography variant="h3" component="h1" className="FirstSide-title">
          thePmSquare
        </Typography>
        <div className="FirstSide-iconsContainer">
          <Tooltip title={`mailto:${myCurrentEmail}`}>
            <IconButton href={`mailto:${myCurrentEmail}`} target="_blank">
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={`https://www.github.com/${myGithubUsername}`}>
            <IconButton
              href={`https://www.github.com/${myGithubUsername}`}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </div>
      </CardContent>
      <CardActionArea
        className="FirstSide-actionArea"
        onClick={props.toggleFlip}
      >
        <CardActions className="FirstSide-actions">
          <Typography variant="button">projects</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default FirstSide;
