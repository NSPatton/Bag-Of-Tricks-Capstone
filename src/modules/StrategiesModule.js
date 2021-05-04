const remoteURL = "http://localhost:8088"

export const getStrategiesByCharacterId = (characterId) => {
    return fetch(`${remoteURL}/strategies/?characterId=${characterId}`)
    .then(response => response.json())
}