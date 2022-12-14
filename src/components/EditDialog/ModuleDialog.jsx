import React, { useState, useEffect } from "react"
import { Button, TextField } from "@mui/material"
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useAxios from "../../hooks/useAxios"
import api from '../../api'

const ModuleDialog = ({ isOpen, close, creating, editing, module, fetchModules }) => {

    const axiosInstance = useAxios()

    const [moduleDraft, setModuleDraft] = useState({
        name: '',
        description: ''
    })

    useEffect(() => {
        if(editing && module) {
            setModuleDraft({
                id: module.id,
                name: module.name,
                description: module.description,
            })
        }
    }, [editing])

    const handleSave = () => {
        if(editing) {
            editModule()
        } else if(creating) {
            createModule()
        } else {
            console.error("Component should be creating or editing")
        }
        close()
    }

    const createModule = async () => {
        try {
            await api.createModule(axiosInstance, moduleDraft)
            fetchModules()
        } catch(err) {
            alert(err)
        }
    }

    const editModule = async () => {
        try {
            await api.updateModule(axiosInstance, moduleDraft)
            fetchModules()
        } catch(err) {
            alert(err)
        }
    }
    
    const handleDelete = async () => {
        try {
            await api.deleteModule(axiosInstance, moduleDraft.id)
            fetchModules()
            close()
        } catch(err) {
            alert(err)
        }
    }

    const handleName = (event) => {
        setModuleDraft({
            ...moduleDraft,
            name: event.target.value
        })
    }
    
    const handleDescription = (event) => {
        setModuleDraft({
            ...moduleDraft,
            description: event.target.value
        })
    }

    return (
    <Dialog
        open={isOpen}
        onClose={close}
    >
        <DialogTitle>{creating ? "Novo m??dulo" : "Editar m??dulo"}</DialogTitle>
        <DialogContent>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: editing ? 350 : 300,
                    minHeight: 200,
                    justifyContent: 'space-between',
                }}
            >
                <TextField label="Nome" variant="standard" value={moduleDraft.name} onChange={handleName}/>
                <TextField label="Descri????o" multiline variant="standard" value={moduleDraft.description} onChange={handleDescription}/>
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

export default ModuleDialog