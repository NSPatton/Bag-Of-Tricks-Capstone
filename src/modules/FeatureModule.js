const remoteURL = "http://localhost:8088"

export const getFeatureByCharacterId = (characterId) => {
    return fetch(`${remoteURL}/features?characterId=${characterId}`)
    .then(response => response.json())
}

export const deleteFeature = (id) => {
    return fetch(`${remoteURL}/features/${id}`, {
    method: "DELETE"
    }).then(result => result.json())
}

export const addFeature = (newFeature) => {
    return fetch(`${remoteURL}/features`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFeature)
    }).then(response => response.json())
}

