import React, { useState, useEffect } from "react"
import { Button, IconButton, Paper, List, ListItem, ListItemText } from "@mui/material"
import { Add, Edit } from "@mui/icons-material"
import api from '../../api'
import useAxios from "../../hooks/useAxios"

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Row = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.description}</TableCell>
        <TableCell align="right">
            <IconButton>
                <Edit />
            </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Aulas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.classes.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell component="th" scope="row">
                        {c.name}
                      </TableCell>
                      <TableCell>{c.date}</TableCell>
                      <TableCell align="center">
                        <IconButton>
                            <Edit />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                        <IconButton>
                            <Add color="#0f0" />
                        </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Admin = () => {

    const [modules, setModules] = useState([])
    const axiosInstance = useAxios()

    useEffect(() => {
        const fetchModules = async () => {
            const m = (await api.getModules(axiosInstance)).data
            setModules(m)
        }

        fetchModules()
    }, [])

    return (
        <Paper
            style={{
                width: '40%',
                minWidth: 200,
                margin: 'auto',
                marginTop: 50,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 20,
            }}
        >
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Modulo</TableCell>
                        <TableCell>Descricao</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {modules.map((m) => (
                        <Row key={m.id} row={m} />
                    ))}
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                <IconButton>
                                    <Add color="#0f0" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
        </Paper>
    )
}

export default Admin