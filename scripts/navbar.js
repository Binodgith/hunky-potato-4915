import { navbar,footer } from "../Components/navbar.js";
document.getElementById("nav_append").innerHTML=navbar();

document.getElementById("foot_append").innerHTML=footer();




import {signin_page} from "../components/signin_page.js";
document.querySelector("#signin_popup").innerHTML=signin_page()


let signin_div=document.getElementById("signin_div")
let otp_div=document.getElementById("otp_div")
let details_div=document.getElementById("details_div")

document.querySelector("#sign>#sign_up").addEventListener("click",()=>{
    signin_div.style.visibility="visible"
})
document.querySelector("#signin_div button").addEventListener("click",()=>{
    otp_div.style.visibility="visible"
    signin_div.style.visibility="hidden"
})
document.querySelector("#otp_div button").addEventListener("click",()=>{
    let otp_value=document.querySelectorAll("#otp_div .otp_box input")
    
    let bag=""
    otp_value.forEach((ele)=>{
        let x=ele.value
        bag+=x
    })

    let empty_otp=()=>{
        otp_value.forEach((ele)=>{
            ele.value=""
    
        })
    }

    if(bag=="97789"){
        details_div.style.visibility="visible"
        otp_div.style.visibility="hidden"
    }else{
        alert("Invalid OTP !");
        empty_otp()
    }
    
    
})
document.querySelector("#details_div>.btn").addEventListener("click",()=>{
    let firstname=document.getElementById("F_name").value
    let lastname=document.getElementById("L_name").value
    let sign_obj={
        firstname:firstname,
        lastname:lastname,
    }
    localStorage.setItem("user", JSON.stringify(sign_obj))

    details_div.style.visibility="hidden"
    location.reload()
    
})
let close_btn=document.querySelectorAll(".signin>i")

close_btn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        signin_div.style.visibility="hidden";
        otp_div.style.visibility="hidden";
        details_div.style.visibility="hidden"
    })
})


let users=JSON.parse(localStorage.getItem("user"))

if(users!=undefined){
  document.querySelector("#sign>#user_icon").style.visibility="visible"
  document.querySelector("#sign>#sign_up").style.visibility="hidden"
}else{
  document.querySelector('#sign>#user_icon').style.visibility="hidden"
  document.querySelector("#sign>#sign_up").style.visibility="visible"
}



document.getElementById("user_icon").addEventListener("mouseover",()=>{
  document.getElementById("acc_append").style.visibility="visible"
})
document.querySelector("body").addEventListener("click",()=>{
  document.querySelector("#acc_append").style.visibility="hidden"
  document.querySelector("#suggestion>ul").innerHTML=null

})

document.querySelector("#cart_icon").addEventListener("click",()=>{
  window.location.href="addToBasket.html"
})
document.querySelector("#logo").addEventListener("click",()=>{
  window.location.href="index.html"
})


document.querySelector("#order_page_btn").addEventListener("click",()=>{
  window.location.href="order.html"
})
document.querySelector("#signout_btn").addEventListener("click",()=>{
    localStorage.removeItem("user")
    location.reload()
})



let datas = JSON.parse(localStorage.getItem('cart'))|| []

document.getElementById("counter").innerText=datas.length






let men_data = [
   
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Green-MAX-Men-Striped-Band-Collar-Slim-Fit-Short-Kurta/p/1000011359476-Green-OLIVEGREEN",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011359476-Green-OLIVEGREEN-1000011359476-15092022_01-2100.jpg",
    "rup": "₹",
    "price": 999,
    "name": "MAX Men Striped Band Collar Slim Fit Short Kurta",
  
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Olive-Green-MAX-Men-Striped-Band-Collar-Slim-Fit-Short-Kurta/p/1000011722997-Green-OLIVEGREEN",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722997-Green-OLIVEGREEN-1000011722997-02092022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Striped Band Collar Slim Fit Short Kurta",
    "price": 799
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Maroon-MAX-Men-Floral-Printed-Mandarin-Collar-Kurta/p/1000011722831-Red-MAROON",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722831-Red-MAROON-1000011722831-02092022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Floral Printed Mandarin Collar Kurta",
    "price": 799
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Blue-MAX-Men-Printed-Mandarin-Collar-Kurta/p/1000011722805-Blue-NAVY",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722805-Blue-NAVY-1000011722805-26082022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Printed Mandarin Collar Kurta",
    "price": 899
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Beige-MAX-Men-Printed-Short-Kurta/p/1000011722792-Beige-BEIGE",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722792-Beige-BEIGE-1000011722792-02092022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Printed Short Kurta",
    "price": 899
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Green-MAX-Men-Solid-Full-Sleeves-Short-Kurta/p/1000011450312-Red-MAROON",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011450312-Red-MAROON-1000011450312-09072022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Solid Full Sleeves Short Kurta",
    "price": 599
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Red-MAX-Men-Kalamkari-Printed-Short-Kurta/p/1000011722857-Yellow-YELLOW",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722857-Yellow-YELLOW-1000011722857-02092022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Kalamkari Printed Short Kurta",
    "price": 799
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Red-MAX-Men-Striped-Short-Kurta/p/1000011450343-Red-MAROON",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011450343-Red-MAROON-1000011450343-27062022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Striped Short Kurta",
    "price": 699
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Red-MAX-Men-Printed-Regular-Fit-Short-Kurta/p/1000011359502-Red-MAROON",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011359502-Red-MAROON-1000011359502-27062022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Printed Regular Fit Short Kurta",
    "price": 899
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Yellow-MAX-Men-Textured-Band-Collar-Short-Kurta/p/1000011444067-Yellow-YELLOW",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011444067-Yellow-YELLOW-1000011444067-09082022_01-2100.jpg",
    "rup": "₹",
    "price": 799,
    "name": "MAX Men Textured Band Collar Short Kurta",
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-White-MAX-Men-Solid-Shirt-Kurta-with-Band-Collar/p/1000010122132-White-White",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010122132-White-White-1000010122132-2202021_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "MAX Men Solid Shirt Kurta with Band Collar",
    "price": 799
  },
  {
    "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Rust-orange-MAX-Men-Striped-Short-Kurta/p/1000011722984-Orange-RUST",
    "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722984-Orange-RUST-1000011722984-13092022_01-2100.jpg",
    "MuiBox-root": "New",
    "rup": "₹",
    "name": "AMAX Men Striped Short Kurta",
    "price": 999
  },
 
  
  ] 



let container=document.getElementById("input_box");

container.addEventListener("input",()=>{
  let x=document.getElementById("input_box").value;
  // console.log(x)
  let filtered=men_data.filter(function(ele){

    if(ele.name.includes(x)){
        return ele
    }
  })
  // console.log(filtered)
  debounce(filtered)
  // search_suggestion(filtered)
  
});






function search_suggestion(data){
 

document.querySelector("#suggestion>ul").innerHTML=null
data.map(function(ele){
    let li=document.createElement("li")
    li.innerText=ele.name
    li.addEventListener("click",function(){
        document.getElementById("input_box").value=ele.name
        // submit()
        // location.href="product.html"
        // appendProducts(data)
        
        document.querySelector("#suggestion>ul").innerHTML=""
    })
    
    document.querySelector("#suggestion>ul").append(li)
})
}

let id;

function debounce(data){
document.querySelector("#suggestion>ul").innerHTML=null
  if(id){
      clearTimeout(id)
  }
  
  id=setTimeout(function(){
      search_suggestion(data)
      // appendProducts(data)
      console.log(data)
  },1000)
}
