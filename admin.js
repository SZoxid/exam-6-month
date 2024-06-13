let products = [];

document.getElementById('add-product').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    if (title && price && description) {
        const newProduct = {
            id: Date.now(),
            title: title,
            price: parseFloat(price),
            description: description
        };

        products.push(newProduct);
        displayProducts();

        clearForm();
    } else {
        alert("Productni malumotlarini toliq kiriting");
    }
});

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Title: ${product.title}, Price: ${product.price}$, Description: ${product.description}`;
        productList.appendChild(li);
    });
}



function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('price').value = '';
    document.getElementById('description').value = '';
}
