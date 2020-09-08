const baseUrl = "https://api.publicapis.org"

export const getCategory = () => {
    return fetch(`${baseUrl}/entries?category=animals&https=true`, {
        method: "GET"
    });
}