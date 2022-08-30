import React from "react"
import ModuleDialog from "./ModuleDialog"
import ClassDialog from "./ClassDialog"

const EditDialog = ({ type, ...rest }) => (
    <React.Fragment>
        {(type === 'module') && <ModuleDialog {...rest} />}
        {(type === 'class') && <ClassDialog {...rest} />}
    </React.Fragment>
)

export default EditDialog