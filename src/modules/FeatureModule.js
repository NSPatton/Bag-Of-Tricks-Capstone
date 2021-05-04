const remoteURL = "http://localhost:8088"

export const getFeatureByCharacterId = (characterId) => {
    return fetch(`${remoteURL}/features/?characterId=${characterId}`)
    .then(response => response.json())
}
