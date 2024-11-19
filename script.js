// Sample car data (you can replace this with your actual data)
const carData = [
    { id: 1, imageUrl: 'car1.jpg', likes: 0 },
    { id: 2, imageUrl: 'car2.jpg', likes: 0 },
    // Add more car objects as needed
];

document.addEventListener('DOMContentLoaded', function () {
    const carGallery = document.getElementById('carGallery');
    const feedbackInput = document.getElementById('feedbackInput');

    // Display initial cars
    displayCars(carData);

    // Listen for search input
    document.getElementById('searchInput').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredCars = carData.filter(car => car.imageUrl.toLowerCase().includes(searchTerm));
        displayCars(filteredCars);
    });
});

function displayCars(cars) {
    const carGallery = document.getElementById('carGallery');
    carGallery.innerHTML = '';

    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = car.imageUrl;
        img.alt = `Car ${car.id}`;

        const likeButton = document.createElement('button');
        likeButton.innerText = `Like (${car.likes})`;
        likeButton.addEventListener('click', function () {
            car.likes++;
            likeButton.innerText = `Like (${car.likes})`;
        });

        card.appendChild(img);
        card.appendChild(likeButton);
        carGallery.appendChild(card);
    });
}

function submitFeedback() {
    const feedback = feedbackInput.value.trim();
    if (feedback !== '') {
        // Handle feedback submission (you can send it to a server or store it locally)
        alert('Feedback submitted: ' + feedback);
        feedbackInput.value = '';
    }
}
