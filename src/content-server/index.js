// Defined API Base URL
const baseUrl = "https://api.publicapis.org"

// Make GET API Call using fetch()
export const getCategory = () => {
    return fetch(`${baseUrl}/entries?category=animals&https=true`, {
        method: "GET"
    });
}