// Set up variables for Unsplash API access
const accessKey = 'UMLdXRoV90m30YFNw7mqrjEEYingBVy7nsFF9bPEqj4'; // Replace with your Unsplash access key
const apiUrl = 'https://api.unsplash.com/photos/random/';

// Set up function to fetch a random image
async function getRandomImage() {
  // Fetch data from Unsplash API
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Client-ID ${accessKey}`
    }
  });
  const data = await response.json();
  
  // Return the image URL
  return data.urls.regular;
}

// Call the function to get a random image URL
getRandomImage().then(imageUrl => {
    const imgElement = document.getElementById('random-image'); // Replace 'my-image' with the ID of your <img> element
    imgElement.src = imageUrl;
  });
  
  getRandomImage().then(imageUrl2 => {
    const imgElement2 = document.getElementById('random-image2'); // Replace 'my-image' with the ID of your <img> element
    imgElement2.src = imageUrl2;
  });

  

  