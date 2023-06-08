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