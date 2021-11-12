export const getDog = () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((res) => res.message)
        .catch((e) => console.error(e))
}