import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { alpha } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { openModal, setSelected } from '../../../../redux/actions';
import { listTypesModal, listTypesTable } from '../../../../utils/listTypes';

const EnhancedTableToolbar = ({ numSelected, listTypes }) => {
  const dispatch = useDispatch();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected.length > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected.length > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected.length} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          {listTypes === listTypesTable.orders
            ? 'Orders'
            : listTypes === listTypesTable.deletedOrders
            ? 'Deleted Orders'
            : 'Products'}
        </Typography>
      )}

      {numSelected.length > 0 ? (
        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              dispatch(openModal(listTypesModal.delete));
              dispatch(setSelected(numSelected));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
