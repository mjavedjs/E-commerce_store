
let container = document.querySelector('.container');

let globalArray = [];
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

console.log(cartItems);
 cartItems.forEach((itemId) => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        res.quantity = 1; 
        globalArray.push(res); 
        renderCartItem(); 
      })
      .catch((err) => {
        console.error(`Error fetching product with ID ${itemId}:`, err);
      });
  });


 function renderCartItem(){
    container.innerHTML = "";
    globalArray.map((item,index)=>{
        container.innerHTML +=`
        <div class="card" style="width: 18rem;" data-aos="fade-up" data-aos-duration="3000">
            <img src="${item.images[0]}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
             <h5 class="card-title">${item.title}</h5>              
              <p class="card-text">${item.description}</p>
             <p class="card-text"><strong>Price:</strong> $${(item.price * item.quantity).toFixed(2)}</p>
             <div class="button-group">
             <a href="#" class="btn btn-primary" onclick="inc(${index})">+</a>
             <a href="#" class="btn btn-primary" onclick="dec(${index})">-</a>
           </div>
            </div>
           </div>
        `
    })
 }

 function inc(index){
   console.log(index)
   globalArray[index].quantity++;
   updateLocalStorage()
   renderCartItem()
 }
 function dec(index){
    if(globalArray[index].quantity>1){
    globalArray[index].quantity--;
    updateLocalStorage()
    renderCartItem()
    }
 }
 function updateLocalStorage() {
    const updatedCartItems = globalArray.map((item) => item.id); 
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); 
  }
 container.innerHTML = "<p>No items in your cart.</p>";


