

let paymentInfo = document.getElementById('paymentInfo');

paymentInfo.addEventListener('click', function(){
   

    
    let paymentData = document.getElementById('paymentData')
    placeOrder.style.display= 'none'
    paymentData.style.display= 'flex'

 })

 let data = JSON.parse(localStorage.getItem('newProducts')) || [];
 let new_amount=localStorage.getItem("new_amount")
 let sum = 0;
 
 let showInfo = document.getElementById('showInfo')

 data.forEach(function(el) {

    

    let price = document.createElement('label')
    price.id = 'price'
    sum+=Number(el.price) 


    price.innerText = sum

    
 })
 if(new_amount!=undefined){
   showInfo.innerText= ` ${new_amount}/-`
 }else{
   showInfo.innerText=` ${sum}/-`
 }
  


 let paymentData = document.getElementById('paymentData')


 let confirm = document.getElementById('confirm')
 confirm.addEventListener('click', function(e){
    e.preventDefault()
    
    let popUp = document.getElementById('popUp')
    popUp.style.display= 'flex'
    let time = Date()
    console.log(time)
    localStorage.setItem('dispatchTime', time)
    localStorage.removeItem("cart")
    
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
    localStorage.setItem('dispatchTime', time)
    localStorage.removeItem("cart")
})