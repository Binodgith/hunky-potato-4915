let order_items=[
    {
      "jss6255_htref": "https://www.maxfashion.in/in/en/SHOP-Max-Black-MAX-Men-Solid-Elasticated-Joggers/p/1000010541037-Black-Black",
      "jss6256_src": "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541037-Black-Black-1000010541037-7092021_01-2100.jpg",
      "MuiBox_root_2": "40% OFF",
      "MuiBox_root_3": "₹",
      "MuiBox_root_4": 419,
      "MuiBox_root_5": "₹",
      "MuiBox_root_6": "699",
      "jss6257": "MAX Men Solid Elasticated Joggers"
    },
    {
      "jss6255_htref": "https://www.maxfashion.in/in/en/SHOP-Max-Blue-MAX-Men-Solid-Slim-Fit-Polo-T-shirt/p/1000010533095-Yellow-Mustard",
      "jss6256_src": "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010533095-Yellow-Mustard-1000010533095-7092021_01-2100.jpg",
      "MuiBox_root_2": "30% OFF",
      "MuiBox_root_3": "₹",
      "MuiBox_root_4": 349,
      "MuiBox_root_5": "₹",
      "MuiBox_root_6": "499",
      "jss6257": "MAX Men Solid Slim Fit Polo T-shirt"
    },
    {
      "jss6255_htref": "https://www.maxfashion.in/in/en/SHOP-Max-Black-MAX-Men-Printed-Elasticated-Waist-Shorts/p/1000010541186-Blue-Navy",
      "jss6256_src": "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541186-Blue-Navy-1000010541186-7092021_01-2100.jpg",
      "MuiBox_root_2": "40% OFF",
      "MuiBox_root_3": "₹",
      "MuiBox_root_4": 269,
      "MuiBox_root_5": "₹",
      "MuiBox_root_6": "449",
      "jss6257": "MAX Men Printed Elasticated Waist Shorts"
    },
    {
      "jss6255_htref": "https://www.maxfashion.in/in/en/SHOP-Max-Blue-MAX-Men-Solid-Lounge-Pants/p/1000011366129-Blue-NAVY",
      "jss6256_src": "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011366129-Blue-NAVY-1000011366129-22062022_01-2100.jpg",
      "MuiBox_root_2": "30% OFF",
      "MuiBox_root_3": "₹",
      "MuiBox_root_4": 489,
      "MuiBox_root_5": "₹",
      "MuiBox_root_6": "699",
      "jss6257": "MAX Men Solid Lounge Pants"
    },
    {
      "jss6255_htref": "https://www.maxfashion.in/in/en/SHOP-Max-Black-MAX-Men-Solid-Slim-Fit-Track-Pants/p/1000010930469-Green-GREEN",
      "jss6256_src": "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010930469-Green-GREEN-1000010930469-25072022_01-2100.jpg",
      "MuiBox_root_2": "₹",
      "MuiBox_root_3": "599",
      "MuiBox_root_4": null,
      "MuiBox_root_5": "",
      "MuiBox_root_6": "",
      "jss6257": "MAX Men Solid Slim Fit Track Pants"
    }
   ]

let time=Date()
let append_order_item=(data)=>{
    data.map((ele)=>{
        let main_div1=document.createElement("div")
        main_div1.setAttribute("class", "order_box" )
        // let main_div2=document.createElement("div")
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")


        let image=document.createElement("img")
        image.src=ele.jss6256_src

        let title=document.createElement("h3")
        title.innerText= ele. MuiBox_root_4 + ele.jss6257

        let price=document.createElement("p")
        price.innerText="Total: "+ele.MuiBox_root_5+" "+ ele.MuiBox_root_4

        let order_place=document.createElement("p")
        order_place.innerHTML="<b>Order Placed on:</b> "+time

        let delivery=document.createElement("h4")
        delivery.innerText="Delivered within 5 Days"

        let track_btn=document.createElement("button")
        track_btn.innerText="Track Package"

        div1.append(image)
        div2.append(title,order_place)
        div3.append(price)
        div4.append(delivery,track_btn)
        main_div1.append(div1,div2,div3,div4)
        
        document.getElementById("order_items").append(main_div1)
    })
}
append_order_item(order_items)