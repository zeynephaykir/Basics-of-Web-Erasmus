var basket = new Array();

function validate() {
    const name = document.forms["myForm"]["name"].value;
    const lastname = document.forms["myForm"]["lastname"].value;

    const pass = document.forms["myForm"]["pass"].value;
    const pass1 = document.forms["myForm"]["pass1"].value;
    if (name == "") {
        alert("Please, enter your name");
        return false;
    }

    if (lastname == "") {
        alert("Please, enter your name");
        return false;
    }

    if (pass == "" || pass1 == "") {
        alert("Please, enter password");
        return false;
    } else {
        if (pass != pass1) {
            alert("The passwords do not match!");
            return false;
        }
    }

    return true;
}

function add(item, price, quantity, discount) {
    basket = JSON.parse(localStorage.getItem("basket"));

    if (basket == null) {
        basket = new Array();
    }

    const product = new Object();
    product.id = generateId();
    product.item = item;
    product.price = price;
    product.quantity = quantity;
    product.discount = discount;

    basket.push(product);

    console.log(basket);

    localStorage.setItem("basket", JSON.stringify(basket));
}

function generateId() {
    const newId = basket.length + 1;

    return newId;
}

function generateTable() {
    basket = JSON.parse(localStorage.getItem("basket"));

    if (basket == null) {
        basket = new Array();
    }

    //Create a HTML Table element.
    const table = document.createElement("TABLE");
    const attribute = document.createAttribute("class");        // Create a "class" attribute
    attribute.value = "table table-bordered table-striped table-hover";  // Set the value of the class attribute
    table.setAttributeNode(attribute);   

    //Add the header row.
    var row = table.insertRow(-1);
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "Item";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Price";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Quantity";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Discount";
    row.appendChild(headerCell);

    console.log(basket);

    //Add the data rows.
    for (var i = 0; i < basket.length; i++) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = basket[i].item;

        cell = row.insertCell(-1);
        cell.innerHTML = basket[i].price + " €";

        cell = row.insertCell(-1);
        cell.innerHTML = basket[i].quantity;

        cell = row.insertCell(-1);
        cell.innerHTML = basket[i].discount + " \%";
    }

    const dvTable = document.getElementById("table");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function clearBasket() {
    localStorage.clear();
    generateTable();
}