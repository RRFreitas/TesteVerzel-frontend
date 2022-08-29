import React from "react"
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ClassDialog = ({ module, isOpen, close }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
        >
        <DialogTitle>{module.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {module.description}
            <hr />
            <List>
                {module.classes.map((c, i) => (
                    <ListItem>
                        <ListItemText
                            primary={`${i+1} - ${c.name} ${c.date}`}
                        />
                    </ListItem>
                ))
                }
            </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    ) 
}

export default ClassDialog