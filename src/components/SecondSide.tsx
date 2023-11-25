import React, { useState } from "react";
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
import { myApps } from "../utils/myInfo";
import "../stylesheets/SecondSide.css";
const isBrowser = typeof window !== "undefined";

const SecondSide = (props: { toggleFlip: () => void }) => {
  const [currentPage, changeCurrentPage] = useState(1);
  const widthOfCard = 0.85;

  let minPixelsAvailiable: number;
  if (isBrowser) {
    minPixelsAvailiable =
      window.innerWidth > window.innerHeight
        ? window.innerHeight
        : window.innerWidth;
  } else {
    minPixelsAvailiable = 0;
  }

  const gridSize = Math.floor(minPixelsAvailiable / 180);
  const numPages = Math.ceil(myApps.length / (gridSize * gridSize));
  const allowedIndices: number[] = [];
  for (
    let i = (currentPage - 1) * (gridSize * gridSize);
    i < currentPage * (gridSize * gridSize);
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
        {numPages > 1 && (
          <Pagination
            count={numPages}
            onChange={(_, newPageNumber) => changeCurrentPage(newPageNumber)}
            className="SecondSide-pagination"
          />
        )}
      </CardContent>
      <CardActionArea
        className="SecondSide-actionArea"
        onClick={props.toggleFlip}
      >
        <CardActions className="SecondSide-actions">
          <Typography variant="button">back</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default SecondSide;
