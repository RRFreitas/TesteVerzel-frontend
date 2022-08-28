import React from "react"
import ModuleCard from "../../components/ModuleCard/ModuleCard"
import SearchField from "../../components/SearchField"

const modules = [
    {
        id: 1,
        name: 'Python',
        description: 'Description python',
        classes: [
            'Python - aula 1',
            'Python - aula 2',
            'Python - aula 3',
        ]
    },
    {
        id: 2,
        name: 'C++',
        description: 'Description C++',
        classes: [
            'C++ - aula 1',
            'C++ - aula 2',
            'C++ - aula 3',
        ]
    },
    {
        id: 3,
        name: 'Java',
        description: 'Description java',
        classes: [
            'Java - aula 1',
            'Java - aula 2',
        ]
    },
    {
        id: 4,
        name: 'C#',
        description: 'Description C#',
        classes: [
            'C# - aula 1',
        ]
    }
]

const Home = (props) => {
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
                    <SearchField />
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
                    {modules.map(m => (
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