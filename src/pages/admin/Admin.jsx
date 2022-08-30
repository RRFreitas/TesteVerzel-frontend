import React, { useState, useEffect } from "react"
import { IconButton, Paper, CircularProgress } from "@mui/material"
import { Add, Edit } from "@mui/icons-material"
import api from '../../api'
import useAxios from "../../hooks/useAxios"

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EditDialog from "../../components/EditDialog/EditDialog"
import { format } from 'date-fns'

const ClassRow = ({ row, fetchModules }) => {
    const [openEdit, setOpenEdit] = useState(false)

    return (
    <TableRow>
        <EditDialog fetchModules={fetchModules} _class={row} type="class" moduleId={row.module} editing isOpen={openEdit} close={() => setOpenEdit(false)} />
        <TableCell component="th" scope="row">
            {row.name}
        </TableCell>
        <TableCell>{format(new Date(row.date), 'yyyy-MM-dd HH:mm:SS')}</TableCell>
        <TableCell align="center">
            <IconButton onClick={() => setOpenEdit(true)}>
                <Edit />
            </IconButton>
        </TableCell>
    </TableRow>
    )
}

const ModuleRow = ({ row, fetchModules }) => {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  return (
    <React.Fragment>
      <EditDialog fetchModules={fetchModules} module={row} type="module" editing isOpen={openEdit} close={() => setOpenEdit(false)}/>
      <EditDialog fetchModules={fetchModules} type="class" moduleId={row.id} creating isOpen={openCreate} close={() => setOpenCreate(false)}/>
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
            <IconButton onClick={() => setOpenEdit(true)}>
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
                    <ClassRow key={c.id} fetchModules={fetchModules} row={c} />
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                        <IconButton onClick={() => setOpenCreate(true)}>
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
    const [openCreate, setOpenCreate] = useState(false)
    const [fetching, setFetching] = useState(false)
    const axiosInstance = useAxios()

    const fetchModules = async () => {
      try {
        setFetching(true)
        const m = (await api.getModules(axiosInstance)).data
        setModules(m)
        setFetching(false)
      } catch(err) {
        alert(err)
      }
    }

    useEffect(() => {
        fetchModules()
    }, [])

    if(fetching) {
        return (
            <CircularProgress />
        )
    }

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
            <EditDialog fetchModules={fetchModules} type="module" creating isOpen={openCreate} close={() => setOpenCreate(false)}/>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Módulo</TableCell>
                        <TableCell>Descrição</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {modules.map((m) => (
                        <ModuleRow key={m.id} row={m} fetchModules={fetchModules} />
                    ))}
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                <IconButton onClick={() => setOpenCreate(true)}>
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