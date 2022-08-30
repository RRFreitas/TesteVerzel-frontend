const getModules = async (axiosInstance) => {
    return axiosInstance.get('/modules/')
}

const createModule = async (axiosInstance, module) => {
    return axiosInstance.post('/modules/', module)
}

const updateModule = async (axiosInstance, module) => {
    return axiosInstance.put(`/modules/${module.id}/`, module)
}

const deleteModule = async (axiosInstance, id) => {
    return axiosInstance.delete(`/modules/${id}/`)
}

const createClass = async (axiosInstance, _class) => {
    return axiosInstance.post('/classes/', _class)
}

const updateClass = async (axiosInstance, _class) => {
    return axiosInstance.put(`/classes/${_class.id}/`, _class)
}

const deleteClass = async (axiosInstance, id) => {
    return axiosInstance.delete(`/classes/${id}/`)
}

export default {
    getModules,
    createModule,
    updateModule,
    deleteModule,
    createClass,
    updateClass,
    deleteClass,
}