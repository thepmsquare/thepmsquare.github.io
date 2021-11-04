import React, { Component } from "react";
import {
	IconButton,
	Typography,
	CardActionArea,
	CardActions,
	CardContent,
	Card as MUICard,
	Tooltip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { myCurrentEmail, myGithubUsername } from "./myInfo";
import "./stylesheets/Card.css";

class Card extends Component {
	render() {
		return (
			<MUICard className="Card" square>
				<CardContent className="Card-content">
					<span className="Card-title">thePmSquare</span>
					<div className="Card-iconsContainer">
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
				<CardActionArea className="Card-actionArea">
					<CardActions className="Card-actions">
						<Typography variant="button">more</Typography>
					</CardActions>
				</CardActionArea>
			</MUICard>
		);
	}
}

export default Card;
