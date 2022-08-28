import React from "react"
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'

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
                        label={`${numberOfClasses} aula${numberOfClasses != 1 ? 's' : ''}`}
                        variant='outlined'
                        color='secondary'
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
            </CardContent>
        </Card>
    )
}

export default ModuleCard  