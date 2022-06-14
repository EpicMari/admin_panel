import React from "react";
import TreeView from "@mui/lab/TreeView";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ReportIcon from "@mui/icons-material/Report";
import StyledTreeItem from "./StyledThreeItem";
import { useDispatch } from "react-redux";
import { setMessagesLabel } from "../../../../redux/actions";

const LabelEmail = () => {
  const dispatch = useDispatch();

  return (
    <TreeView
      aria-label="gmail"
      sx={{
        height: "fit-content",
        flexGrow: 1,
        maxWidth: 200,
        overflowY: "auto",
      }}
      defaultSelected="1"
    >
      <StyledTreeItem
        nodeId="1"
        labelText="All Mail"
        labelIcon={MailIcon}
        setLabel={() => dispatch(setMessagesLabel("INBOX"))}
      />
      <StyledTreeItem
        nodeId="2"
        labelText="Sent"
        labelIcon={SendIcon}
        setLabel={() => dispatch(setMessagesLabel("SENT"))}
      />
      <StyledTreeItem
        nodeId="3"
        labelText="Spam"
        labelIcon={ReportIcon}
        setLabel={() => dispatch(setMessagesLabel("SPAM"))}
      />
      <StyledTreeItem
        nodeId="4"
        labelText="Trash"
        labelIcon={DeleteIcon}
        setLabel={() => dispatch(setMessagesLabel("TRASH"))}
      />
    </TreeView>
  );
};

export default LabelEmail;
