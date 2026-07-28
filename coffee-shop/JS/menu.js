function displayProducts(list) {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    list.forEach(product => {

        productList.innerHTML += `
        <div class="col-lg-3 col-md-6">

            <div class="card h-100">

                <img src="${product.image}" class="card-img-top">

                <div class="card-body">

                    <h5>${product.name}</h5>

                    <p>${product.description}</p>

                    <h4>${product.price.toLocaleString("vi-VN")}đ</h4>

                    <button class="btn-cart"
                        onclick="viewProduct(${product.id})">

                        Xem chi tiết

                    </button>

                </div>

            </div>

        </div>
        `;

    });

}

displayProducts(products);
const productList = document.getElementById("product-list");

function displayProducts(products) {

    productList.innerHTML = "";

    products.forEach(product => {

        productList.innerHTML += `

        <div class="col-lg-3 col-md-6">

            <div class="card h-100">

                <img src="${product.image}" class="card-img-top">

                <div class="card-body d-flex flex-column">

                    <h5 class="card-title">${product.name}</h5>

                    <p class="card-text">${product.description}</p>

                    <div class="star">★★★★★</div>

                    <div class="price">
                        ${product.price.toLocaleString("vi-VN")}₫
                    </div>

                    <button class="btn-cart mt-auto"
                        onclick="viewProduct(${product.id})">

                        <i class="bi bi-cart-plus"></i>

                        Xem chi tiết

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

displayProducts(products);

function viewProduct(id) {

    localStorage.setItem("productID", id);

    window.location.href = "product.html";

}