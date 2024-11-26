let cartItems = JSON.parse(localStorage.getItem('cartItems')); 

let container = document.querySelector('.container');


if (cartItems && cartItems.length > 0) {
  // Loop through each product ID in cartItems
  cartItems.forEach(itemId=> {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then(res => res.json())
      .then((item) => {
        container.innerHTML += `
          <div class="card" style="width: 18rem;" data-aos="fade-up" data-aos-duration="3000">
            <img src="${item.images[0]}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <p class="card-text"><strong>Price:</strong> $${item.price}</p>
            </div>
          </div>
        `;

      })
      .catch(error => {
        console.log('Error fetching item details:', error);
      });
  });
} else {
  container.innerHTML = "<p>No items in your cart.</p>";
}

