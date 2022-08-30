import React, { useState, useEffect } from "react"
import ModuleCard from "../../components/ModuleCard/ModuleCard"
import SearchField from "../../components/SearchField"
import api from '../../api'
import useAxios from "../../hooks/useAxios"

const Home = () => {

    const [modules, setModules] = useState([])
    const [searchPattern, setSearchPattern] = useState('')
    const axiosInstance = useAxios()

    useEffect(() => {
        const fetchModules = async () => {
            const m = (await api.getModules(axiosInstance)).data
            setModules(m)
        }

        fetchModules()
    }, [])
    
    return (
        <React.Fragment>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}     
            >
                <div
                    style={{
                        marginTop: 50,
                        width: '60%'
                    }}
                >
                    <SearchField searchPattern={searchPattern} setSearchPattern={setSearchPattern} />
                </div>

                <div
                    style={{
                        marginTop: 20,
                        width: '75%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'
                    }}     
                >
                    {modules.filter(m => m.name.toLowerCase().startsWith(searchPattern.toLowerCase())).map(m => (
                        <ModuleCard
                            key={m.id}
                            module={m}
                            style={{
                                marginTop: 30,
                                width: '30%'
                            }}
                        />
                    ))} 
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home