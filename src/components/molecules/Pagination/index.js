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
      <IconButton onClick={() => handlePagination("right")}>
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
      <span>{`${pagination - 19} - ${pagination}`}</span>
    </StyledWrapper>
  );
};

export default Pagination;
