

let paymentInfo = document.getElementById('paymentInfo');

paymentInfo.addEventListener('click', function(){
   

    
    let paymentData = document.getElementById('paymentData')
    placeOrder.style.display= 'none'
    paymentData.style.display= 'flex'

 })

 let data = JSON.parse(localStorage.getItem('newProducts')) || [];

 let sum = 0;

 let showInfo = document.getElementById('showInfo')

 data.forEach(function(el) {

    

    let price = document.createElement('label')
    price.id = 'price'
    sum= `Rs ${el.price}`


    price.innerText = sum

    showInfo.append(price)
 })

 let paymentData = document.getElementById('paymentData')


 let confirm = document.getElementById('confirm')
 confirm.addEventListener('click', function(e){
    e.preventDefault()
    
    let popUp = document.getElementById('popUp')
    popUp.style.display= 'flex'
    let time = Date()
    console.log(time)
    localStorage.setItem('dispatchTime', JSON.stringify(time))
 })

 let goToHome = document.getElementById('goToHome')
 goToHome.addEventListener('click', function(){
    location.href = 'index.html'
 })

 let placeOrder = document.getElementById('placeOrder')

 let cod = document.getElementById('cod')
 cod.addEventListener('click', function(){
   paymentData.style.display= 'none'

   placeOrder.style.display = 'flex'
   
 })

placeOrder.addEventListener('click', function(e){

   e.preventDefault()
   
    let popUp = document.getElementById('popUp')
    popUp.style.display= 'flex'
    let time = Date()
    console.log(time)
    localStorage.setItem('dispatchTime', JSON.stringify(time))
})