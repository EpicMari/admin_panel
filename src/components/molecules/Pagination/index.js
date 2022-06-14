import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { IconButton } from "@mui/material";
import { StyledWrapper } from "./StyledPagination";

const Pagination = ({ handlePagination, pagination }) => {
  return (
    <StyledWrapper>
      <IconButton onClick={() => handlePagination("left")}>
        <ArrowBackIosOutlinedIcon />
      </IconButton>
      <IconButton>
        <ArrowForwardIosOutlinedIcon
          onClick={() => handlePagination("right")}
        />
      </IconButton>
      <span>{`${pagination - 19} - ${pagination}`}</span>
    </StyledWrapper>
  );
};

export default Pagination;
