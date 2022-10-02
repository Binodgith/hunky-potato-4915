




// HardCoded products to work on functionality part


let data = JSON.parse(localStorage.getItem('cart')) || [];


let priceNumber1 = document.querySelector('.priceNumber1')
let priceNumber2 = document.querySelector('.priceNumber2')
let totalPrice = document.querySelector('#totalPrice')



// appending the products from LS/Cart
let selectBtn;
let sum=0;
let productQuantity =1;
let appendData = () => {

let productsDiv = document.getElementById('products')


let totalProducts = data.length
let countProducts = document.getElementById('countProducts')
countProducts.innerText = totalProducts



data.forEach(function(el, index){
    
    let div1= document.createElement('div');
    div1.id = 'productDiv'
    div1.style.padding = '10px'

    let div2= document.createElement('div');
    div2.id = 'productDivPart1'


    let div3 = document.createElement('div');
    div3.id = 'remDiv'

    let image = document.createElement('img');
    image.id = 'productImg'
    image.src = el.product_image
    image.style.width = '100px'
    image.style.height = '120px'



    let name = document.createElement('p');
    name.innerText = el.name
    
    

    let price = document.createElement('p');
    price.innerText = `₹${el.price}`;

    // console.log(productQuantity)
    // console.log(el.price * productQuantity)


    let deliveryDate = document.createElement('p');
    deliveryDate.id= 'deliveryDate'
    deliveryDate.innerText = 'Enter Pincode above'

    let deliveryIn = document.createElement('p')
    deliveryIn.id = 'deliveryIn'
    deliveryIn.innerText = '- Delivery In'

// loop to build select Quantity option---

    let quantityArray = [1,2,3,4,5,6,7,8,9,10]
    
    selectBtn = document.createElement('select');
    selectBtn.id = 'selectBtn';
    
    selectBtn.style.height= '25px';
    selectBtn.style.marginTop = '125px'
    
    let option;
    
    for(let i=0; i<quantityArray.length; i++){
        option = document.createElement('option');
        option.value = quantityArray[i];
        option.innerHTML = `Qty:<span> ${quantityArray[i]} </span>`;
        selectBtn.append(option)
        
    }
    
     

    sum = sum + el.price

    

    let remBtn = document.createElement('p')
    remBtn.innerText = 'Remove'
    remBtn.id= 'remBtn'
    remBtn.addEventListener('click' , function(event) {
        event.target.parentNode.remove()
        data.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(data)); 
        location.reload()

    })
    


    


    div3.append(deliveryDate,deliveryIn,remBtn)
    div2.append(name,price,div3)
    div1.append(image,div2,selectBtn)
    productsDiv.append(div1)
    

    
});

}






appendData()


let newdata;
let newSum = 0


priceNumber1.append(`₹ ${sum}`)
totalPrice.append(`₹${sum}`)
let val = (num, index) => {
    
    data.forEach( function(el, i){
    if (index == i){
        newSum = el.price * (num-1)
        // priceNumber1.append(`₹ ${sum}`)
        console.log(newSum + sum)
        let full = newSum + sum
        priceNumber1.innerHTML = null
        priceNumber1.append(`₹ ${full}`)

        totalPrice.innerHTML = null
        totalPrice.append(`₹${full}`)

        let applyBtn1 = document.querySelector('.applyBtn1').addEventListener("click", function(){
            discount = Math.floor((10 * full)/100)
            priceNumber2.innerHTML = null
            
            priceNumber2.append(`₹ ${discount}`)
        
            totalPrice.innerHTML = null
            totalPrice.append(`₹${full-discount}`)
        applyDisc()
        
        })

        let applyBtn2 = document.querySelector('.applyBtn2').addEventListener("click", function(){
            discount = Math.floor((7 * full)/100)
            priceNumber2.innerHTML = null
            
            priceNumber2.append(`₹ ${discount}`)
            totalPrice.innerHTML = null
            totalPrice.append(`₹${full-discount}`)
        applyDisc()
        
        })

    }
    })
}


let productQuant= 1

let select_value=document.querySelectorAll("#selectBtn")

select_value.forEach((ele, index)=>{
    ele.addEventListener("change",()=>{

       val(Number(ele.value), index)
        // console.log(index)
    })
    
    
})



let checkBtn = document.getElementById('checkBtn')
checkBtn.addEventListener('click', function(){
    let inputVal = document.getElementById('pincodeInp').value
    
    // console.log(inputVal)
    
    let pincodeAppend = document.getElementById('pincodeAppend');
    pincodeAppend.innerHTML = null
    pincodeAppend.innerText = `Your pincode ${inputVal} is in deliverable area`
    
})





let popup = document.querySelector('.popup')
let discountBtn = document.getElementById('SelectBtn')
discountBtn.addEventListener('click', function(e){
    // console.log('working')
    e.preventDefault()
    
    popup.style.display = 'flex'
    
})

// priceNumber1.append(`₹ ${sum}`)
// totalPrice.append(`${sum}`)


let discount = 0;
priceNumber2.append(`₹ ${discount}`)

let applyBtn1 = document.querySelector('.applyBtn1').addEventListener("click", function(){
    discount = Math.floor((10 * sum)/100)
    priceNumber2.innerHTML = null
    
    priceNumber2.append(`₹ ${discount}`)

    totalPrice.innerHTML = null
    totalPrice.append(`₹${sum-discount}`)
    localStorage.setItem('new_amount',Number(sum-discount))
applyDisc()

})

let applyBtn2 = document.querySelector('.applyBtn2').addEventListener("click", function(){
    discount = Math.floor((7 * sum)/100)
    priceNumber2.innerHTML = null
    
    priceNumber2.append(`₹ ${discount}`)
    totalPrice.innerHTML = null
    totalPrice.append(`₹${sum-discount}`)
    localStorage.setItem('new_amount',Number(sum-discount))
applyDisc()

})



const applyDisc = () => {
        
    popup.style.display = 'none'
    let appliedCoupon = document.getElementById('appliedCoupon')
    appliedCoupon.innerHTML = null
    appliedCoupon.innerText = 'Hurray! Coupon is successfully applied'
    appliedCoupon.style.fontSize = '16px'
    appliedCoupon.style.color = 'Green'
    
}

let checkoutBtn = document.getElementById('checkoutBtn')
checkoutBtn.addEventListener('click', function(){

    localStorage.setItem('newProducts', JSON.stringify(data))
    location.href = 'billing.html' 
})










