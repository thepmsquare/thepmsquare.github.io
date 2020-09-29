import React, { Component } from "react";
import {
  getTheme,
  Text,
  DefaultButton,
  TooltipHost,
  IconButton,
  DocumentCard,
  DocumentCardType,
  DocumentCardPreview,
  DocumentCardDetails,
  DocumentCardTitle,
  DocumentCardActions,
} from "@fluentui/react";
import { myApps, myCurrentEmail, myGithubUsername } from "./myInfo";
import "./stylesheets/Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.theme = getTheme();
    // found this online.
    this.randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.state = {
      open: false,
    };
  }
  handleShowMore = () => {
    this.props.removeCss();
    this.setState(() => {
      return {
        open: true,
      };
    });
  };
  handleShowLess = () => {
    this.props.addCss();
    this.setState(() => {
      return {
        open: false,
      };
    });
  };
  render = () => {
    return (
      <div
        className="Card"
        style={{
          boxShadow: this.theme.effects.elevation64,
        }}
      >
        <Text className="Card-main" style={{ color: this.randomColor }} block>
          thePmSquare
        </Text>

        <div className="Card-links">
          <TooltipHost content={myCurrentEmail}>
            <DefaultButton
              iconProps={{ iconName: "Mail" }}
              href={`mailto:${myCurrentEmail}`}
              target="_blank"
            >
              E-mail
            </DefaultButton>
          </TooltipHost>
          <TooltipHost content={myGithubUsername}>
            <DefaultButton
              iconProps={{ iconName: "GitGraph" }}
              href={`https://www.github.com/${myGithubUsername}`}
              target="_blank"
            >
              Github
            </DefaultButton>
          </TooltipHost>
        </div>
        {!this.state.open && (
          <TooltipHost content="Show more?">
            <IconButton
              iconProps={{ iconName: "ChevronDown" }}
              ariaLabel="Show more."
              className="Card-showMore"
              onClick={this.handleShowMore}
            />
          </TooltipHost>
        )}
        {this.state.open && (
          <div>
            <div className="Card-container">
              {myApps.map((app) => {
                return (
                  <DocumentCard
                    key={app.key}
                    aria-label={app.ariaLabel}
                    type={DocumentCardType.compact}
                    className="Card-App"
                  >
                    <DocumentCardPreview
                      previewImages={[
                        {
                          previewImageSrc: app.previewImageSrc,
                          // :(
                          height: 108,
                        },
                      ]}
                    />
                    <DocumentCardDetails>
                      <DocumentCardTitle title={app.title} shouldTruncate />
                      <DocumentCardActions
                        actions={[
                          {
                            iconProps: { iconName: "OpenInNewWindow" },
                            onClick: () => {
                              window.open(app.link, "_blank");
                            },
                            ariaLabel: app.linkAriaLabel,
                          },
                        ]}
                      />
                    </DocumentCardDetails>
                  </DocumentCard>
                );
              })}
            </div>
            <TooltipHost content="Show Less?">
              <IconButton
                iconProps={{ iconName: "ChevronUp" }}
                ariaLabel="Show less."
                className="Card-showLess"
                onClick={this.handleShowLess}
              />
            </TooltipHost>
          </div>
        )}
      </div>
    );
  };
}

export default Card;
