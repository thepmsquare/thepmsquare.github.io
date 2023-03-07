import { Component } from "react";
import {
  Card,
  Tooltip,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { myCurrentEmail, myGithubUsername } from "./utils/myInfo";
import "./stylesheets/FirstSide.css";
class FirstSide extends Component {
  render() {
    return (
      <Card className="FirstSide" square>
        <CardContent className="FirstSide-content">
          <span className="FirstSide-title">thePmSquare</span>
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
          onClick={this.props.toggleFlip}
        >
          <CardActions className="FirstSide-actions">
            <Typography variant="button">projects</Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    );
  }
}
export default FirstSide;
