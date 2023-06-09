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