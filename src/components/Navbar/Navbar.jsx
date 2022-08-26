import React from "react";
import Button from "@mui/material/Button"
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom"
import logo from "../../assets/logo_verzel.svg"

const Navbar = () => (
    <div 
        style={{
            width: '100%',
            height: 130,
            backgroundColor: 'white',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        }}
    >
        <div 
            style={{
                marginLeft: '5%'
            }} 
        >
            <img
                src={logo}
            />
        </div>
        <div
            style={{
                display:'flex',
                marginRight: '5%',
                height: '30%',
                marginTop: 15
            }}
        >
            <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                color="purple"
            >
                Login / Administrativo
            </Button>
        </div>
    </div>
)

export default Navbar