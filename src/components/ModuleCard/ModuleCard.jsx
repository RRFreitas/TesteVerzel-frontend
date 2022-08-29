import React, { useState } from "react"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import { Button } from "@mui/material"
import ClassDialog from "./ClassDialog"

const ModuleCard = ({ module, style }) => {

    const [isOpen, setIsOpen] = useState(false)
    
    const numberOfClasses = module ? module.classes.length : 0

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <Card
            variant="outlined"
            style={{
                backgroundColor: '#2A1149',
                border: '1px solid #C995E1',
                color: 'white',
                ...style,
            }}
        >
            <ClassDialog
                module={module}
                isOpen={isOpen}
                close={handleClose}
            />
            <CardContent
                style={{
                    padding: 0,
                    paddingBottom: 10,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography 
                    gutterBottom 
                    style={{
                        backgroundColor: '#FFF',
                        color: '#2A1149',
                        padding: 10,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                    fontSize='1.2rem'
                    fontWeight="bold"
                >
                    {module.name}
                    <Chip
                        label={`${numberOfClasses} aula${numberOfClasses !== 1 ? 's' : ''}`}
                        variant='outlined'
                        color='secondary'
                        icon={<OndemandVideoIcon />}
                    />
                </Typography>
                <p
                    style={{
                        padding: 10,
                        minHeight: 70,
                    }}
                >
                    {module.description}
                </p>
                <Button variant="outlined" color="white" style={{margin: 'auto'}} onClick={handleOpen}>
                    Visualizar aulas
                </Button>
            </CardContent>
        </Card>
    )
}

export default ModuleCard  