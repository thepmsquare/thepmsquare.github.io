import React, { Component } from "react";
import {
  getTheme,
  Separator,
  Text,
  DefaultButton,
  Link,
  TooltipHost,
  IconButton,
} from "@fluentui/react";
import "./stylesheets/Card.css";

class Card extends Component {
  // Change this in case email or github account changes.
  myCurrentEmail = "thepmsquare@gmail.com";
  myGithubUsername = "thepmsquare";
  theme = getTheme();

  render = () => {
    // found this online.
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return (
      <div
        className="Card"
        style={{ boxShadow: this.theme.effects.elevation64 }}
      >
        <div>
          <Text className="Card-main" style={{ color: randomColor }} block>
            thePmSquare
          </Text>
          <Separator />
        </div>

        <div className="Card-links">
          <TooltipHost content={this.myCurrentEmail}>
            <Link href={`mailto:${this.myCurrentEmail}`} target="_blank">
              <DefaultButton iconProps={{ iconName: "Mail" }}>
                E-mail
              </DefaultButton>
            </Link>
          </TooltipHost>
          <TooltipHost content={this.myGithubUsername}>
            <Link
              href={`https://www.github.com/${this.myGithubUsername}`}
              target="_blank"
            >
              <DefaultButton iconProps={{ iconName: "GitGraph" }}>
                Github
              </DefaultButton>
            </Link>
          </TooltipHost>
        </div>
        <TooltipHost content="Show more?">
          <IconButton
            iconProps={{ iconName: "ChevronDown" }}
            ariaLabel="Show more."
            className="Card-showMore"
          />
        </TooltipHost>
      </div>
    );
  };
}

export default Card;
