import React from "react";
import { StyledSingleEmail } from "./StyledSingleEmail";
import Paragraph from "../../../../atoms/Paragraph";

const SingleEmail = ({ from, subject, date, isChecked }) => {
  const makeShorter = (str, length) => {
    if (str.length > length) {
      return str.slice(0, length).concat("...");
    } else {
      return str;
    }
  };

  const email = () => {
    return (
      <StyledSingleEmail>
        <Paragraph
          size="l"
          color="grey"
          align="left"
          bold={isChecked === false && "700"}
        >
          {makeShorter(from, 20)
            .split(" ")
            .filter((word) => word[0] !== "<")
            .join(" ")}
        </Paragraph>
        <Paragraph
          size="l"
          color="grey"
          align="left"
          bold={isChecked === false && "700"}
        >
          {makeShorter(subject, 40)}
        </Paragraph>
        <Paragraph
          size="l"
          color="grey"
          align="left"
          bold={isChecked === false && "700"}
        >
          {date}
        </Paragraph>
      </StyledSingleEmail>
    );
  };
  return <>{email()}</>;
};

export default SingleEmail;
