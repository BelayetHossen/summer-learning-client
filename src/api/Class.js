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

// Get instructor classes
export const instuctorClasss = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/instuctorClasss/${email}`);
    const data = await response.json();
    return data;
};
// Get instructor classes
export const instuctorClasssFront = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/instuctorClasssFront/${email}`);
    const data = await response.json();
    return data;
};

// class status update to Approved
export const updateClassApproved = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/updateClassApproved/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(status),
    })

    const data = await response.json()
    return data
}
// class status update to Pending
export const updateClassPending = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/updateClassPending/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(status),
    })

    const data = await response.json()
    return data
}
// class status update to Denied
export const updateClassDenied = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/updateClassDenied/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(status),
    })

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
