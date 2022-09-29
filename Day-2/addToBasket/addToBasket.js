

// HardCoded products to work on functionality part

let mensData = [
    {
        "product_image": "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011346095-Grey-GREY-1000011346095-15092022_01-2100.jpg",
        "price": 599,
        "name": "MAX Men Solid Slim Fit Polo T-shirt"
      },
      {
        "product_image": "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011623637-Red-MAROON-1000011623637-15092022_01-2100.jpg",
        "price": 799,
        "name": "MAX Men Colourblocked Hooded Pullover Sweatshirt"
      }
]

let products = localStorage.setItem('products', JSON.stringify(mensData));

let data = JSON.parse(localStorage.getItem('products'));

console.log(data)

// total number of products in the cart


let totalProducts = data.length
let countProducts = document.getElementById('countProducts')
countProducts.innerText = totalProducts



// appending the products from LS/Cart


let appendData = () => {

let productsDiv = document.getElementById('products')


data.forEach(el => {
    
    let div1= document.createElement('div');
    div1.id = 'productDiv'
    div1.style.padding = '10px'

    let div2= document.createElement('div');
    div2.id = 'productDivPart1'

    let image = document.createElement('img');
    image.id = 'productImg'
    image.src = el.product_image
    image.style.width = '100px'
    image.style.height = '120px'



    let name = document.createElement('p');
    name.innerText = el.name
    
    

    let price = document.createElement('p');
    price.innerText = `₹${el.price}`;
    


// loop to build select Quantity option---

    let selectArray = [1,2,3,4,5,6,7,8,9,10]
    
    let selectBtn = document.createElement('select');
    selectBtn.id = 'selectBtn';
    selectBtn.style.height= '20px';
    selectBtn.style.marginTop = '100px'
    
    
    for(let i=0; i<selectArray.length; i++){
        let option = document.createElement('option');
        option.value = selectArray[i];
        option.text = `Qty: ${selectArray[i]}`;
        selectBtn.append(option)
    }


    

    // let remBtn = document.createElement('p')
    // remBtn.innerText = 'Remove'
    // remBtn.id= 'remBtn'


    



    div2.append(name,price)
    div1.append(image,div2,selectBtn)
    productsDiv.append(div1)
    


});

}

appendData()