import { Component } from "react";
import {
	Avatar,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Pagination,
	Tooltip,
	Typography,
} from "@mui/material";
import { myApps } from "./myInfo";
import "./stylesheets/SecondSide.css";

class SecondSide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
		};
	}

	handlePaginationChange = (event, value) => {
		this.setState(() => {
			return {
				currentPage: value,
			};
		});
	};

	render = () => {
		// from css
		const widthOfCard = 0.85;
		const minPixelsAvailiable =
			window.innerWidth > window.innerHeight
				? window.innerHeight
				: window.innerWidth;
		const gridSize = Math.floor(minPixelsAvailiable / 180);
		const numPages = Math.ceil(myApps.length / (gridSize * gridSize));
		const allowedIndices = [];
		for (
			let i = (this.state.currentPage - 1) * (gridSize * gridSize);
			i < this.state.currentPage * (gridSize * gridSize);
			i++
		) {
			allowedIndices.push(i);
		}
		return (
			<Card className="SecondSide" square>
				<CardContent className="SecondSide-content">
					<div
						className="SecondSide-avatars"
						style={{
							gridTemplateColumns: `repeat(${gridSize},1fr)`,
							gridTemplateRows: `repeat(${gridSize},1fr)`,
						}}
					>
						{myApps.map((myApp, idx) => {
							return (
								allowedIndices.includes(idx) && (
									<Tooltip title={myApp.title} key={myApp.key}>
										<CardActionArea
											href={myApp.link}
											target="_blank"
											className="SecondSide-avatarContainer"
										>
											<Avatar
												alt={myApp.title}
												src={myApp.previewImageSrc}
												variant="square"
												style={{
													height:
														((minPixelsAvailiable * widthOfCard) / gridSize) *
														0.3,
													width:
														((minPixelsAvailiable * widthOfCard) / gridSize) *
														0.3,
												}}
											/>
											<Typography>
												{myApp.title.length > 10
													? myApp.title.slice(0, 10) + "..."
													: myApp.title}
											</Typography>
										</CardActionArea>
									</Tooltip>
								)
							);
						})}
					</div>
					<Pagination
						count={numPages}
						onChange={this.handlePaginationChange}
						className="SecondSide-pagination"
					/>
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
	};
}
export default SecondSide;
