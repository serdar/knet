export default async function getGithubProfileStats() {
    const url = 'https://api.github.com/users/serdar'
    const response = await fetch(url);
    return response.json();
}