let userdata = JSON.parse(localStorage.getItem('card'));
let container = document.querySelector(".container-1");

fetch(`https://dummyjson.com/products/${userdata}`)
  .then(res => res.json())
  .then((res) => {
    container.innerHTML = `
    <div class="card mb-4 shadow-sm">
  <img src="${res.images[0]}" class="card-img-top" alt="${res.title}">
  <div class="card-body">
    <h5 class="card-title text-primary">${res.title}</h5>
    <p class="card-text">${res.description}</p>
  </div>
</div>`
  
  })
  .catch((err) => {
    console.log('Error:', err);
  });


  