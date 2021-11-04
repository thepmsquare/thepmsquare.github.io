import { Component } from "react";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

import "./stylesheets/SecondSide.css";
class SecondSide extends Component {
	render() {
		return (
			<Card className="SecondSide" square>
				<CardContent className="SecondSide-content">
					<Typography>my projects</Typography>
				</CardContent>
				<CardActionArea
					className="SecondSide-actionArea"
					onClick={this.props.toggleFlip}
				>
					<CardActions className="SecondSide-actions">
						<Typography variant="button">more</Typography>
					</CardActions>
				</CardActionArea>
			</Card>
		);
	}
}
export default SecondSide;
