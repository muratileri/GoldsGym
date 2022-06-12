export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '83b8a08f2bmsh0b9b996d3c4c22dp1526dbjsn39b874351cfd'
    }
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}