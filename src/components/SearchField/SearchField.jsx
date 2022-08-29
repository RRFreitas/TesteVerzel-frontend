import React from "react"
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  })

const SearchField = ({ }) => {
    return (
        <CssTextField
            id="input-with-icon-textfield"
            placeholder="Filtrar módulos"
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon color="white"/>
                    </InputAdornment>
                ),
                style:{
                    backgroundColor: '#2A1149',
                    color: 'white'
                } 
            }}
            variant="outlined"
      />
    )
}

export default SearchField