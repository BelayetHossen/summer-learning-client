// Add class to db
export const addClass = async classData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/addClass`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}

// Get single class
export const singleClass = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/mySingleClass/${id}`)
    const data = await response.json()
    return data
}

// / update class to db
export const updateClass = async (classData, id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/mySingleClass/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classData),
    });

    const data = await response.json();
    return data;
};

// Delete a class
export const deleteClass = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/deleteClass/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}