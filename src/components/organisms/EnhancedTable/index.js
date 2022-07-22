import React, { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TablePagination from '@mui/material/TablePagination';
import EditIcon from '@mui/icons-material/Edit';
import { getComparator, stableSort } from './utils';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import { listTypesTable } from '../../../utils/listTypes';

const EnhancedTable = ({
  headCells,
  rows,
  listTypes,
  showProductsFromOrder,
  openModal,
  openModalEdit,
  selected,
  setSelected,
}) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const clearSelectedOrders = () => {
    setSelected([]);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = useCallback(
    (event, id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    },
    [selected],
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected}
          clearSelectedOrders={clearSelectedOrders}
          listTypes={listTypes}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              listTypes={listTypes}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order, index) => {
                  const isItemSelected = isSelected(order.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={order.id}
                      selected={isItemSelected}
                    >
                      {listTypes === listTypesTable.orders ? (
                        <>
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              onChange={(event) => handleClick(event, order.id)}
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          {Object.values(order).map((value, index) => {
                            if (index === 0) {
                              return (
                                <Tooltip title={order.id} key={index}>
                                  <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="normal"
                                  >
                                    ID
                                  </TableCell>
                                </Tooltip>
                              );
                            }
                            if (index === 2) {
                              return (
                                <TableCell align="left" key={index}>
                                  <IconButton
                                    onClick={() => {
                                      showProductsFromOrder(order.id);
                                      openModal();
                                    }}
                                  >
                                    <VisibilityIcon />
                                  </IconButton>
                                  {value}
                                </TableCell>
                              );
                            }
                            return (
                              <TableCell align="left" key={index}>
                                {value}
                              </TableCell>
                            );
                          })}
                          <TableCell align="left">
                            <IconButton
                              onClick={() => {
                                openModalEdit();
                                showProductsFromOrder(order.id);
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                          </TableCell>
                        </>
                      ) : listTypes === listTypesTable.deletedOrders ? (
                        <>
                          {Object.values(order).map((value, index) => {
                            if (index === 0) {
                              return (
                                <Tooltip title={order.id} key={index}>
                                  <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="normal"
                                    align="inherit"
                                  >
                                    ID
                                  </TableCell>
                                </Tooltip>
                              );
                            }
                            if (index === 2) {
                              return (
                                <TableCell align="left" key={index}>
                                  <IconButton
                                    onClick={() => {
                                      showProductsFromOrder(order.id);
                                      openModal();
                                    }}
                                  >
                                    <VisibilityIcon />
                                  </IconButton>
                                  {value}
                                </TableCell>
                              );
                            }
                            return (
                              <TableCell align="left" key={index}>
                                {value}
                              </TableCell>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          {Object.values(order).map((value, index) => {
                            if (index === 0) {
                              return (
                                <Tooltip title={order.id} key={index}>
                                  <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="normal"
                                    align="inherit"
                                  >
                                    ID
                                  </TableCell>
                                </Tooltip>
                              );
                            }
                            return (
                              <TableCell align="left" key={index}>
                                {value}
                              </TableCell>
                            );
                          })}
                        </>
                      )}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default EnhancedTable;
