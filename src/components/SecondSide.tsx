import "../stylesheets/SecondSide.css";

import React, { useEffect, useState } from "react";

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

const isBrowser = typeof window !== "undefined";

const SecondSide = (props: { toggleFlip: () => void }) => {
  // state
  let minPixelsAvailiable: number;
  if (isBrowser) {
    minPixelsAvailiable =
      window.innerWidth > window.innerHeight
        ? window.innerHeight
        : window.innerWidth;
  } else {
    minPixelsAvailiable = 0;
  }
  const defaultGridSize = Math.floor(minPixelsAvailiable / 180);
  const [currentPage, changeCurrentPage] = useState(1);
  const [gridSize, changeGridSize] = useState(defaultGridSize);
  const [numPages, changeNumPages] = useState(
    Math.ceil(myApps.length / (defaultGridSize * defaultGridSize))
  );
  // functions
  const handleResize = () => {
    if (isBrowser) {
      minPixelsAvailiable =
        window.innerWidth > window.innerHeight
          ? window.innerHeight
          : window.innerWidth;
    } else {
      minPixelsAvailiable = 0;
    }
    const newGridSize = Math.floor(minPixelsAvailiable / 180);
    changeGridSize(newGridSize);
    changeNumPages(Math.ceil(myApps.length / (newGridSize * newGridSize)));
  };
  // useEffect
  if (isBrowser) {
    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  }
  // misc
  const widthOfCard = 0.85;
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
