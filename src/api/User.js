// Get auth user
export const getAuth = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/getAuth/${id}`)
    const data = await response.json()
    return data
}

// Add user to db
export const addUser = async userData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/addUser`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData),
    })

    const data = await response.json()
    return data
}


// Get all users
export const getAllUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/allUsers`)
    const data = await response.json()
    return data
}


// user role update to admin
export const updateRoleAdmin = async (id, role) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/updateRoleAdmin/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(role),
    })

    const data = await response.json()
    return data
}
// user role update to Student
export const updateRoleStudent = async (id, role) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/updateRoleStudent/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(role),
    })

    const data = await response.json()
    return data
}
// user role update to Instractor
export const updateRoleInstractor = async (id, role) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/updateRoleInstractor/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(role),
    })

    const data = await response.json()
    return data
}