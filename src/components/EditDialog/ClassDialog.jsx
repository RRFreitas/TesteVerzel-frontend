import React, { useState, useEffect } from "react"
import { Button, TextField } from "@mui/material"
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useAxios from "../../hooks/useAxios"
import api from '../../api'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { format } from 'date-fns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const BasicDateTimePicker= ({selectedDate, handleDateChange}) =>{
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        label="Data"
        showTodayButton
        renderInput={(params) => <TextField {...params} />}
        inputFormat="YYYY-MM-DD HH:mm"
      />
    </LocalizationProvider>
  );
}

const ClassDialog = ({ isOpen, close, creating, editing, _class, moduleId, fetchModules }) => {

    const axiosInstance = useAxios()

    const [classDraft, setClassDraft] = useState({
        name: '',
        date: format(new Date(),'yyyy-MM-dd HH:mm'),
        module: moduleId || -1,
    })

    useEffect(() => {
        if(editing && _class) {
            setClassDraft({
                id: _class.id,
                name: _class.name,
                date: _class.date,
                module: _class.module
            })
            console.log(_class)
        }
    }, [editing])


    const handleSave = () => {
        if(editing) {
            editClass()
        } else if(creating) {
            createClass()
        } else {
            console.error("Component should be creating or editing")
        }
        close()
    }

    const createClass = async () => {
        try {
            await api.createClass(axiosInstance, classDraft)
            fetchModules()
        } catch(err) {
            alert(err)
        }
    }

    const handleDelete = async () => {
        try {
            await api.deleteClass(axiosInstance, classDraft.id)
            fetchModules()
            close()
        } catch(err) {
            alert(err)
        }
    }

    const editClass = async () => {
        try {
            await api.updateClass(axiosInstance, classDraft)
            fetchModules()
        } catch(err) {
            alert(err)
        }
    }

    const handleName = (event) => {
        setClassDraft({
            ...classDraft,
            name: event.target.value
        })
    }
    
    const handleDate = (newDate) => {
        setClassDraft({
            ...classDraft,
            date: format(newDate.$d, 'yyyy-MM-dd HH:mm')
        })
    }

    return (
    <Dialog
        open={isOpen}
        onClose={close}
    >
        <DialogTitle>{creating ? "Nova aula" : "Editar aula"}</DialogTitle>
        <DialogContent>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 300,
                    minHeight: (editing ? 250 : 200),
                    justifyContent: 'space-between',
                }}
            >
                <TextField label="Nome" variant="standard" value={classDraft.name} onChange={handleName}/>
                <BasicDateTimePicker
                    selectedDate={classDraft.date}
                    handleDateChange={handleDate}
                />
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Salvar
                </Button>
                {
                    editing && 
                    <Button variant="contained" color="error" onClick={handleDelete}>
                        Remover 
                    </Button>
                }
            </div>
        </DialogContent>
    </Dialog>
    )
}

export default ClassDialog