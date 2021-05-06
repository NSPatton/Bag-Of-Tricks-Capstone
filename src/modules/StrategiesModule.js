const remoteURL = "http://localhost:8088"

export const getStrategiesByCharacterId = (characterId) => {
    return fetch(`${remoteURL}/strategies/?characterId=${characterId}`)
    .then(response => response.json())
}

export const deleteStrategy = (id) => {
    return fetch(`${remoteURL}/strategies/${id}`, {
    method: "DELETE"
    }).then(result => result.json())
}

export const addStrategy = (newStrategy) => {
    return fetch(`${remoteURL}/strategies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStrategy)
    }).then(response => response.json())
}

export const getStrategyById = (id) => {
    return fetch(`${remoteURL}/strategies/${id}`)
    .then(res => res.json())
}

export const updateStrategy = (editedStrategy) => {
    return fetch(`${remoteURL}/strategies/${editedStrategy.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(editedStrategy)
    }).then(data => data.json())
}