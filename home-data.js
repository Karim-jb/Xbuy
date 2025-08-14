let div4 = document.getElementsByClassName("data-div");
let detail4 = document.getElementById("detail4");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    let product = data.products;
    console.log(product);

    for (let i = 0; i < 4; i++) {
      div4[i].innerHTML = `<img src="${product[i].images[0]}" alt="${product[i].title}" />
                         <h1>${product[i].title}</h1>                                    
                         <h3>Price: ${product[i].price}$</h3>
                         <h3>Category: ${product[i].category}</h3>
                         <h3>Rating: ${product[i].rating}/5</h3>
                         <h3 style="text-decoration:none";>Stock: ${product[i].stock}</h3>
                         `;
    }

    for (let i = 0; i < 4; i++) {
      div4[i].addEventListener("click", () => {
        window.location.href = `details.html?id=${product[i].id}`;
      });
    }
  });
