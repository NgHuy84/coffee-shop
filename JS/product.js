// Đổi ảnh lớn khi bấm ảnh nhỏ
function changeImage(src) {
    document.getElementById("mainImage").src = src;
}

// Số lượng
let quantity = 1;
const qtyInput = document.getElementById("qty");

function plus() {
    quantity++;
    qtyInput.value = quantity;
}

function minus() {
    if (quantity > 1) {
        quantity--;
        qtyInput.value = quantity;
    }
}

// Chọn Size
document.querySelectorAll(".option-group").forEach(group => {
    const buttons = group.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});

// Thêm vào giỏ hàng
document.querySelector(".btn-buy").addEventListener("click", () => {

    alert("Đã thêm sản phẩm vào giỏ hàng!");

    // Sau này có thể lưu localStorage ở đây
});
const products = [
    {
        id: 1,
        name: "Espresso",
        category: "Espresso",
        price: 45000,
        image: "IMG/coffee/espresso.jpg",
        description: "Espresso đậm đà chuẩn Ý."
    },
    {
        id: 2,
        name: "Latte",
        category: "Latte",
        price: 55000,
        image: "IMG/coffee/latte.jpg",
        description: "Espresso kết hợp sữa tươi."
    },
    {
        id: 3,
        name: "Cappuccino",
        category: "Latte",
        price: 60000,
        image: "IMG/coffee/cappuccino.jpg",
        description: "Lớp bọt sữa mịn thơm."
    },
    {
        id: 4,
        name: "Mocha",
        category: "Latte",
        price: 65000,
        image: "IMG/coffee/mocha.jpg",
        description: "Chocolate hòa quyện Espresso."
    },
    {
        id: 5,
        name: "Americano",
        category: "Espresso",
        price: 50000,
        image: "IMG/coffee/americano.jpg",
        description: "Espresso pha loãng nhẹ."
    },
    {
        id: 6,
        name: "Cold Brew",
        category: "Cold Brew",
        price: 58000,
        image: "IMG/coffee/coldbrew.jpg",
        description: "Ủ lạnh 18 giờ."
    },
    {
        id: 7,
        name: "Matcha Latte",
        category: "Tea",
        price: 62000,
        image: "IMG/coffee/matcha.jpg",
        description: "Matcha Nhật Bản."
    },
    {
        id: 8,
        name: "Tiramisu",
        category: "Cake",
        price: 55000,
        image: "IMG/cake/tiramisu.jpg",
        description: "Bánh Tiramisu truyền thống."
    }
];