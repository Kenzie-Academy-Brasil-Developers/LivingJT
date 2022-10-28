export function getPostsPerPage(page) {
    const token = localStorage.getItem('localS');
    const pages = fetch(`https://m2-api-living.herokuapp.com/news?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorizarion: `Bearer ${token}`,
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                console.log(res.json().then((response) => response.message));
            }
        })
        return pages
}