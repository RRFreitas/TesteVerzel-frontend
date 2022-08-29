import React, { useContext } from "react";
import Button from "@mui/material/Button"
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom"
import logo from "../../assets/logo_verzel.svg"
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    return(<div 
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
            <Link to='/'>
                <img
                    src={logo}
                />
            </Link>
        </div>
        <div
            style={{
                display:'flex',
                marginRight: '5%',
                height: '30%',
                marginTop: 15
            }}
        >
            { user ?
                <div>
                    <Link to="/admin" style={{marginRight: 20}}>
                        <Button
                            variant="outlined"
                            startIcon={<PersonIcon />}
                            color="purple"
                        >
                            Admin
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button
                            variant="outlined"
                            startIcon={<PersonIcon />}
                            color="purple"
                            onClick={logoutUser}
                        >
                            Sair
                        </Button>
                    </Link>
                </div>
                :
                <Link to='/login'>
                    <Button
                        variant="outlined"
                        startIcon={<PersonIcon />}
                        color="purple"
                    >
                        Entrar
                    </Button>
                </Link>
            }
        </div>
    </div>)
}

export default Navbar