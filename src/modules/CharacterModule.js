const remoteURL = "http://localhost:8088"

export const getCharacterById = (charId) => {
    return fetch(`${remoteURL}/characters/${charId}`)
    .then(response => response.json())
}

export const getAllCharacters = () => {
    return fetch(`${remoteURL}/characters`)
    .then(response => response.json())
}

export const getCharactersByUser = (userId) => {
    return fetch(`${remoteURL}/characters?userId=${userId}&_expand=user`)
    .then(response => response.json())
}

export const addCharacter = (newCharacter) => {
    return fetch(`${remoteURL}/characters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCharacter)
    }).then(response => response.json())
}

export const deleteCharacter = (id) => {
    return fetch(`${remoteURL}/characters/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const updateCharacter = (editedCharacter) => {
    return fetch(`${remoteURL}/characters/${editedCharacter.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(editedCharacter)
    }).then(data => data.json())
}