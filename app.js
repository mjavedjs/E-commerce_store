let container = document.querySelector(".container");
let icon = document.querySelector("#icon");
let btn=document.querySelector("#btn")
let iconCount = 0
 globalArray = []
 
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
     res.products.map((item,index)=>{
     let imgurl= item.images [0]
     container.innerHTML += `
    <div class="card" style="width: 18rem; ">
      <img src="${imgurl}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="d-flex justify-content-between">
  <a href="#" class="btn btn-primary" onclick="seeMore(${item.id})">See More...</a>
  <a href="#" class="btn btn-primary" onclick="addcart(${item.id})">Go AddCart</a>
</div>

      </div>
    </div>
  `;
     })
    
})

function seeMore(id){
    let data = JSON.stringify(id)
    localStorage.setItem('card',data);
    window.location = 'card.html'
}

function addcart(id) {
  iconCount++; 
  globalArray.push(id);
  console.log("Items in Cart:", globalArray);
  icon.innerHTML = `
    <a class="nav-link" href="#">
      <i class="fa-solid fa-truck"></i> <span>${iconCount}</span>
    </a>
  `;
  console.log(`Item added to cart: ${id}`);
  Swal.fire({
    title: "Good job!",
    text: "Item added to the cart!",
    icon: "success"
  }); 
}


// function checkout(id) {
//   localStorage.setItem('userid', JSON.stringify(id));
//   window.location = 'add.html';
// }


function checkout() {
  localStorage.setItem('cartItems', JSON.stringify(globalArray)); 
  window.location = 'add.html'; // Redirect to the checkout page
}

