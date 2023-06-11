

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
// user role update to instructor
export const updateRoleInstructor = async (id, role) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/updateRoleInstructor/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(role),
    })

    const data = await response.json()
    return data
}

// select class for student
export const selectClass = async (userId, classId) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/selectClass/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ classId })
    });

    const data = await response.json();
    return data;
};

// Delete a class from selected class
export const deleteSelectedClass = async (userId, classId) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/deleteSelectedClass/${userId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classId),
    })
    const result = await response.json()
    return result
}