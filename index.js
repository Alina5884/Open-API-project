
fetch('https://api.sampleapis.com/coffee/ice')
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
    }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem: ', error);
    })