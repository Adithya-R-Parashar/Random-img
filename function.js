const accessKey = '';

const form = document.querySelector('mainForm');
const input = document.querySelector('search');
const image = document.querySelector('random-image');
const image1 = document.querySelector('1random-image');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();
  const query = input.value;
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=2`;

  
    try{
      const response = await fetch(url);
      const data = await response.json();
      
      image.src = data.results[0].urls.regular;
      image1.src = data.results[1].urls.regular;
    }catch (err) {
      console.log(err);
    }
});
