import React from "react";
import SingleEmail from "./SingleEmail";
import { StyledWrapper } from "./StyledEmailContainer";

const EmailContainer = ({ messages, pagination, messagessByPage }) => {
  return (
    <StyledWrapper>
      {messages?.map(
        ({ messagesArr, id, subject, date, from, isChecked }, index) =>
          index >= pagination - messagessByPage && index < pagination ? (
            <SingleEmail
              key={id}
              from={from}
              subject={subject}
              date={date}
              isChecked={isChecked}
            />
          ) : null
      )}
    </StyledWrapper>
  );
};

export default EmailContainer;
