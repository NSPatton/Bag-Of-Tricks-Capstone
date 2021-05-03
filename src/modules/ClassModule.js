const remoteURL = "http://localhost:8088"

export const getAllClasses = () => {
    return fetch(`${remoteURL}/classes`)
    .then(res => res.json())
}