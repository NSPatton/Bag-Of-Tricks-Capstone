const remoteURL = "http://localhost:8088"

export const getFeatureByCharacter = () => {
    return fetch(`${remoteURL}/`)
}