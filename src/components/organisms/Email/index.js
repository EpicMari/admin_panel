import React, { useState } from "react";
import Pagination from "../../molecules/Pagination";
import EmailContainer from "./EmailContainer";
import LabelEmail from "./LabelEmail";
import { StyledContainer } from "./StyledEmail";
import Spinner from "../../molecules/Spinner";

const messagessByPage = 20;

const Email = ({ messages }) => {
  const [pagination, setPagination] = useState(messagessByPage);

  const handlePagination = (direction) => {
    if (direction === "left" && pagination !== messagessByPage) {
      setPagination((prev) => prev - messagessByPage);
    } else if (direction === "right" && messages.length > pagination) {
      setPagination((prev) => prev + messagessByPage);
    }
  };
  console.log(messages);
  return messages?.length === 0 ? (
    <Spinner />
  ) : (
    <StyledContainer>
      <LabelEmail />
      <EmailContainer
        messages={messages}
        pagination={pagination}
        messagessByPage={messagessByPage}
      />
      <Pagination handlePagination={handlePagination} pagination={pagination} />
    </StyledContainer>
  );
};

export default Email;
