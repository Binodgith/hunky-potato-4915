
let data
// let div2 = document.getElementsByClassName('basket_div');
document.getElementById('dropdown-content1').style.display = 'none';
document.getElementById('dropbtn1').addEventListener('click' , showSubMenu1);


function showSubMenu1 (){
  console.log("hello");
  let submenu = document.getElementById('dropdown-content1');
  if(submenu.style.display === 'none'){
    submenu.style.display = 'block'
    submenu.classList.add("animate");
  }else {
    submenu.style.display = 'none'
  }
}

document.getElementById('dropdown-content2').style.display = 'none';
document.getElementById('dropbtn2').addEventListener('click' , showSubMenu2);


function showSubMenu2 (){
  console.log("hello");
  let submenu = document.getElementById('dropdown-content2');
  if(submenu.style.display === 'none'){
    submenu.style.display = 'block'
    submenu.classList.add("animate");
  }else {
    submenu.style.display = 'none'
  }
}


document.getElementById('dropdown-content3').style.display = 'none';
document.getElementById('dropbtn3').addEventListener('click' , showSubMenu3);


function showSubMenu3 (){
  console.log("hello");
  let submenu = document.getElementById('dropdown-content3');
  if(submenu.style.display === 'none'){
    submenu.style.display = 'block'
    submenu.classList.add("animate");
  }else {
    submenu.style.display = 'none'
  }
}

document.getElementById('dropdown-content4').style.display = 'none';
document.getElementById('dropbtn4').addEventListener('click' , showSubMenu4);


function showSubMenu4 (){
  console.log("hello");
  let submenu = document.getElementById('dropdown-content4');
  if(submenu.style.display === 'none'){
    submenu.style.display = 'block'
    submenu.classList.add("animate");
  }else {
    submenu.style.display = 'none'
  }
}

document.getElementById('dropdown-content5').style.display = 'none';
document.getElementById('dropbtn5').addEventListener('click' , showSubMenu5);


function showSubMenu5 (){
  console.log("hello");
  let submenu = document.getElementById('dropdown-content5');
  if(submenu.style.display === 'none'){
    submenu.style.display = 'block'
    submenu.classList.add("animate");
  }else {
    submenu.style.display = 'none'
  }
}

document.getElementById('dropdown-content6').style.display = 'none';
document.getElementById('dropbtn6').addEventListener('click' , showSubMenu6);


function showSubMenu6 (){
  console.log("hello");
  let submenu = document.getElementById('dropdown-content6');
  if(submenu.style.display === 'none'){
    submenu.style.display = 'block'
    submenu.classList.add("animate");
  }else {
    submenu.style.display = 'none'
  }
}







document.getElementById('dropdown-content').style.display = 'none';

document.getElementById('dropbtn').addEventListener('click' , showSubMenu);


function showSubMenu (){
  console.log("hello");
  let submenu = document.getElementById('dropdown-content');
  if(submenu.style.display === 'none'){
    submenu.style.display = 'block'
    submenu.classList.add("animate");
  }else {
    submenu.style.display = 'none'
  }
}

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

  let men_data2 = [
   
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


  console.log(men_data.length);


  let total_product = document.getElementById('total_product');
  total_product.innerText = `${men_data.length} Products`


  let container = document.getElementById('prod_container');

  

  appendProducts (men_data);
  


  function appendProducts (data) {

    //  container.innerHTML = null;

    data.forEach(el => {

        let div = document.createElement('div');
        div.setAttribute('class' ,'prod_div')

        div.addEventListener('click' , function(){
            cartData(el);
        })
        
        div.onmouseover = function(el){
          
          
            hoverDiv.style.display = 'block';
          
        } ;

        div.onmouseout = function(el){
          
          
          hoverDiv.style.display = 'none';
   
      } ;
  
        let image = document.createElement('img');
        image.src = el.product_image;

        let rup =document.createElement('p');
        rup.innerText = el.rup;
        rup.setAttribute('class' , 'rupee');
        
        let price = document.createElement('h4');
        price.innerText = el.price;


        let name = document.createElement('p');
        name.innerText = el.name;
     

        let hoverDiv = document.createElement('div');
        hoverDiv.setAttribute('class' , 'basket_div')
        // hoverDiv.style.display = 'none';

        let quantity_div = document.createElement('div');
        quantity_div.setAttribute('class' , 'quantity_div')

         let color_select = document.createElement('div')
         color_select.setAttribute('class' , 'color_input')
          
         let color_button = document.createElement('button');
         color_button.setAttribute('class' , 'color_button')
         let black = document.createElement('p');
         black.setAttribute('class' , 'black')
         black.innerHTML = 'Black<i class="fa-solid fa-angle-down"></i>';
        

           let color_image = document.createElement('img')
           color_image.src = el.product_image;
           color_image.style.width = "20%"
           color_image.setAttribute('class','select_image')

           color_button.append(color_image ,black);

          color_select.append(color_button)


         let size_select = document.createElement('div')
         size_select.setAttribute('class' , 'size_input')

         let size_button = document.createElement('button');
         size_button.setAttribute('class' , 'size_button')
         let sizeText = document.createElement('p');
         sizeText.setAttribute('class' , 'sizeText')
         sizeText.innerHTML = 'Select Size<i class="fa-solid fa-angle-down"></i>'
         sizeText.style.color="grey";


         size_button.append(sizeText)
         size_select.append(size_button);


        let basketBtn_div = document.createElement('div'); 
        basketBtn_div.setAttribute('class' , 'basketBtn_div');

        let basketBtn = document.createElement('button');
        basketBtn.innerText = "ADD TO BASKET"
        basketBtn.setAttribute('class', 'addToBasket');

        basketBtn_div.append(basketBtn);







        quantity_div.append(color_select , size_select)

        hoverDiv.append(quantity_div , basketBtn_div)


       div.append(image , rup , price , name , hoverDiv);
       container.append(div);
        
    });


  }



  function sortLH(){

    men_data.sort(function(a, b){
      return (a.price - b.price)  
    
  });
       console.log(men_data);
       appendProducts(men_data);
    
     
     }


     
  function sortHL(){

    men_data.sort(function(a, b){
      return (b.price - a.price)  
    
  });
       console.log(men_data);
       appendProducts(men_data);
    
     
     }




  


  function sortAZ(){

    men_data.sort(function(a, b){
      if(a.name < b.name)  return -1; 
      if(a.name > b.name)  return 1;
      return 0;
  })
       console.log(men_data);
       appendProducts(men_data);
    
     
     }
  
  

     function loadmore(){
      appendProducts (men_data2);
     }

     
     function cartData(el){
      data = JSON.parse(localStorage.getItem('cart'))|| [];
      console.log(el)
      data.push(el);
      console.log(data);
      localStorage.setItem('cart' , JSON.stringify(data));
      
     }