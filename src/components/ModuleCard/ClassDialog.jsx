import React from "react"
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { format } from 'date-fns'

const ClassDialog = ({ module, isOpen, close }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
        >
        <DialogTitle>{module.name}</DialogTitle>
        <DialogContent
            style={{
                minWidth: 300,
            }}
        >
          <DialogContentText>
            {module.description}
          </DialogContentText>
            <hr />
            <List>
                {module.classes.map((c, i) => (
                    <ListItem>
                        <ListItemText
                            primary={`${i+1} - ${c.name}`}
                            secondary={format(new Date(c.date), 'yyyy-MM-dd HH:mm:SS')}
                        />
                    </ListItem>
                ))
                }
            </List>
        </DialogContent>
      </Dialog>
    ) 
}

export default ClassDialog