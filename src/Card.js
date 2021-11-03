import React, { Component } from "react";
import {
	IconButton,
	Typography,
	CardActionArea,
	CardActions,
	CardContent,
	Card as MUICard,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./stylesheets/Card.css";

class Card extends Component {
	render() {
		return (
			<MUICard className="Card" square>
				<CardContent className="Card-content">
					<span className="Card-title">thePmSquare</span>
					<div className="Card-iconsContainer">
						<IconButton>
							<EmailIcon />
						</IconButton>
						<IconButton>
							<GitHubIcon />
						</IconButton>
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
