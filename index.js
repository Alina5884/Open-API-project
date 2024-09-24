const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_BTGnClEhh8cJ5SJAnzh2eSLm9DcXxfmdC0pEAIobHIiX3dMDpzs247li0BmjD38l"
});

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

async function fetchDogImages() {
    const response = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5", requestOptions);
    if (!response.ok) {
        throw new Error('Network response was not ok!!!');
    }
    return response.json();
}

async function fetchCatImages() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5", requestOptions);
    if (!response.ok) {
        throw new Error('Network response was not ok!!!');
    }
    return response.json();
}

function displayImages(data, type) {
    const imageContainer = document.getElementById('image-container');
    const messageElement = document.getElementById('message');
    imageContainer.innerHTML = ''; 

    const imagesToShow = data.length > 5 ? data.slice(0, 5) : data;

    imagesToShow.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = "Pet Image";
        imageContainer.appendChild(img);
    });

    if (type === 'dog') {
        messageElement.textContent = " 🤩 Aren't they adorable? 🤩";
    } else {
        messageElement.textContent = "😻 Look how cute they are! 😻";
    }
}


document.getElementById('dog-person').addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const data = await fetchDogImages();
        displayImages(data, 'dog');
    } catch (error) {
        console.error('Error fetching dog images:', error);
    }
});

document.getElementById('cat-person').addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const data = await fetchCatImages();
        displayImages(data, 'cat');
    } catch (error) {
        console.error('Error fetching cat images:', error);
    }
});


const body = document.querySelector('body');
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement('footer');
body.appendChild(footer);
const copyright = document.createElement('p');
copyright.innerHTML = "&copy; " + thisYear + " Alina Dalantaeva";
footer.appendChild(copyright);
    