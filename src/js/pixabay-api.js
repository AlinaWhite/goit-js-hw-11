const URL = 'https://pixabay.com/api/';


export const fetchImages = (searchValueImput) => {
    const urlParams = new URLSearchParams({
        q: searchValueImput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: '46938898-491ce0dea342e81df1da49dcf',
    });

return fetch(`${URL}?${urlParams}`)
.then (response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
});
};