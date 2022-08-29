import React from "react"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import { Button } from "@mui/material"

const ModuleCard = ({ module, style }) => {
    
    const numberOfClasses = module ? module.classes.length : 0

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
                <Button variant="outlined" color="white" full style={{margin: 'auto'}}>
                    Visualizar aulas
                </Button>
            </CardContent>
        </Card>
    )
}

export default ModuleCard  