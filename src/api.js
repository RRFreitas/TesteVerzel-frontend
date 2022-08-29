const getModules = (axiosInstance) => {
    return axiosInstance.get('/modules')
}

export default {
    getModules,
}