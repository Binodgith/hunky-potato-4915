let navbar=()=>{
    return `<div id="top_navbar">
    <div id="left_div">
        <div class="top_nav_left" title="On All Orders"><span><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNi4xMjUsMjEuNWMtOC44NjAzNSwwIC0xNi4xMjUsNy4yNjQ2NSAtMTYuMTI1LDE2LjEyNXY3NS4yNWMwLDguODYwMzUgNy4yNjQ2NSwxNi4xMjUgMTYuMTI1LDE2LjEyNWg2LjM4MjgxYzIuMjI1NTgsNi4yMTQ4NCA4LjE0NjQ5LDEwLjc1IDE1LjExNzE5LDEwLjc1YzYuOTcwNzEsMCAxMi44OTE2LC00LjUzNTE2IDE1LjExNzE5LC0xMC43NWg2Ni4yMjE2OGMyLjIyNTU5LDYuMjE0ODQgOC4xNDY0OSwxMC43NSAxNS4xMTcxOSwxMC43NWM2Ljk3MDcxLDAgMTIuODkxNiwtNC41MzUxNiAxNS4xMTcxOSwtMTAuNzVoNi42NzY3NmM4LjgxODM2LDAgMTYuMTI1LC03LjI2NDY1IDE2LjEyNSwtMTYuMTI1di0xOC4yMjQ2YzAsLTMuMTkxNDEgLTAuOTY1ODIsLTYuMzQwODIgLTIuNzI5NDksLTguOTg2MzNsLTE2Ljc1NDg5LC0yNC43MzM0Yy0zLjAyMzQ0LC00LjQ5MzE3IC04LjA2MjUsLTcuMTgwNjcgLTEzLjQzNzUsLTcuMTgwNjdoLTMxLjU3ODEydi0xNi4xMjVjMCwtOC44NjAzNSAtNy4yNjQ2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNMTYuMTI1LDMyLjI1aDc1LjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1djgwLjYyNWgtNDQuMDA3ODFjLTIuMjI1NTgsLTYuMjE0ODQgLTguMTQ2NDgsLTEwLjc1IC0xNS4xMTcxOSwtMTAuNzVjLTYuOTcwNywwIC0xMi44OTE2LDQuNTM1MTYgLTE1LjExNzE5LDEwLjc1aC02LjM4MjgxYy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzV2LTc1LjI1YzAsLTMuMDIzNDQgMi4zNTE1NiwtNS4zNzUgNS4zNzUsLTUuMzc1ek0xMDcuNSw2NC41aDMxLjU3ODEzYzEuODA1NjcsMCAzLjQ4NTM1LDAuOTIzODMgNC40OTMxNywyLjM5MzU1djAuMDQybDE2Ljc1NDg5LDI0LjczMzRjMC41ODc4OSwwLjg4MTgzIDAuOTIzODIsMS44ODk2NSAwLjkyMzgyLDIuOTgxNDV2MTguMjI0NmMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1aC02LjY3Njc2Yy0yLjIyNTU4LC02LjIxNDg0IC04LjE0NjQ4LC0xMC43NSAtMTUuMTE3MTksLTEwLjc1Yy02Ljk3MDcsMCAtMTIuODkxNTksNC41MzUxNiAtMTUuMTE3MTksMTAuNzVoLTExLjQ2Mzg2ek0zNy42MjUsMTE4LjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1YzAsMy4wMjM0NCAtMi4zNTE1Niw1LjM3NSAtNS4zNzUsNS4zNzVjLTMuMDIzNDQsMCAtNS4zNzUsLTIuMzUxNTYgLTUuMzc1LC01LjM3NWMwLC0zLjAyMzQ0IDIuMzUxNTYsLTUuMzc1IDUuMzc1LC01LjM3NXpNMTM0LjA4MTA1LDExOC4yNWMzLjAyMzQ0LDAgNS4zNzUsMi4zNTE1NiA1LjM3NSw1LjM3NWMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzVjMCwtMy4wMjM0NCAyLjM1MTU2LC01LjM3NSA1LjM3NSwtNS4zNzV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="></span> Shipping</div>
         
          
          <div class="top_nav_left" title="Visit To Your Nearest Store."><span><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0zNy42MjUsMTAuNzVjLTguODQyMjEsMCAtMTYuMTI1LDcuMjgyNzkgLTE2LjEyNSwxNi4xMjV2OC4xODg0OGwtMTAuNzUsMjIuODY0NzV2MS4xOTY3OGMwLDYuOTUzNzYgNC41MjUzOSwxMi44NzYwNyAxMC43NSwxNS4xMTcxOXY2MC4xMzI4MWMwLDguODQyMjEgNy4yODI3OSwxNi4xMjUgMTYuMTI1LDE2LjEyNWg4NmM4Ljg0MjIxLDAgMTYuMTI1LC03LjI4Mjc5IDE2LjEyNSwtMTYuMTI1di02MC4xMzI4MWM2LjIyNDYyLC0yLjI0MTEyIDEwLjc1LC04LjE2MzQzIDEwLjc1LC0xNS4xMTcxOXYtMS4xOTY3OGwtMTAuNzUsLTIyLjg2NDc1di04LjE4ODQ4YzAsLTguODQyMjEgLTcuMjgyNzksLTE2LjEyNSAtMTYuMTI1LC0xNi4xMjV6TTM3LjYyNSwyMS41aDUuMzc1djEwLjc1aC0xMC43NXYtNS4zNzVjMCwtMy4wMjU3OSAyLjM0OTIxLC01LjM3NSA1LjM3NSwtNS4zNzV6TTUzLjc1LDIxLjVoMTAuNzV2MTAuNzVoLTEwLjc1ek03NS4yNSwyMS41aDQ4LjM3NWMzLjAyNTc5LDAgNS4zNzUsMi4zNDkyMSA1LjM3NSw1LjM3NXY1LjM3NWgtNTMuNzV6TTI5LjY2NzQ4LDQzaDEwMS45MTUwNGw3Ljc2ODU2LDE2LjUyMzkzYy0wLjMxNDMxLDIuNjk5NzEgLTIuMTc0ODYsNC45NzYwNyAtNC45NzYwOCw0Ljk3NjA3Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0yLjgwMTIyLDAgLTQuNjYxNzcsLTIuMjc2MzYgLTQuOTc2MDcsLTQuOTc2MDd6TTM3LjYyNSw3MS4wMjk3OWMyLjg2NjE0LDIuNTkzMzIgNi42MjEwMSw0LjIyMDIxIDEwLjc1LDQuMjIwMjFjNC4xMjg5OSwwIDcuODgzODYsLTEuNjI2ODkgMTAuNzUsLTQuMjIwMjFjMi44NjYxNCwyLjU5MzMyIDYuNjIxMDEsNC4yMjAyMSAxMC43NSw0LjIyMDIxYzQuMTI4OTksMCA3Ljg4Mzg2LC0xLjYyNjg5IDEwLjc1LC00LjIyMDIxYzIuODY2MTQsMi41OTMzMiA2LjYyMTAxLDQuMjIwMjEgMTAuNzUsNC4yMjAyMWM0LjEyODk5LDAgNy44ODM4NiwtMS42MjY4OSAxMC43NSwtNC4yMjAyMWMyLjg2NjE0LDIuNTkzMzIgNi42MjEwMSw0LjIyMDIxIDEwLjc1LDQuMjIwMjFjNC4xMjg5OSwwIDcuODgzODcsLTEuNjI2ODkgMTAuNzUsLTQuMjIwMjFjMS41NTUyNywxLjQwNzIzIDMuMzY5MzksMi40OTAzIDUuMzc1LDMuMjEyNHY2MC4xMzI4MWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1aC04NmMtMy4wMjU3OSwwIC01LjM3NSwtMi4zNDkyMSAtNS4zNzUsLTUuMzc1di02MC4xMTE4MmMxLjk5NjY0LC0wLjczMjU2IDMuODE5NTksLTEuODI2MDQgNS4zNzUsLTMuMjMzNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="></span> To Store</div>
          <div class="top_nav_left" title="10% off instantly Buy Now" ><span><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0yNi44NzUsMzIuMjVjLTguODM5MzUsMCAtMTYuMTI1LDcuMjg1NjUgLTE2LjEyNSwxNi4xMjV2NzUuMjVjMCw4LjgzOTM1IDcuMjg1NjUsMTYuMTI1IDE2LjEyNSwxNi4xMjVoMTE4LjI1YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjV2LTc1LjI1YzAsLTguODM5MzUgLTcuMjg1NjUsLTE2LjEyNSAtMTYuMTI1LC0xNi4xMjV6TTI2Ljg3NSw0M2gzMi4yNXYxNi4xMjVoMTAuNzV2LTE2LjEyNWg3NS4yNWMzLjA0NDQzLDAgNS4zNzUsMi4zMzA1NyA1LjM3NSw1LjM3NXYzMi4yNWgtNDN2MTAuNzVoNDN2MzIuMjVjMCwzLjA0NDQzIC0yLjMzMDU3LDUuMzc1IC01LjM3NSw1LjM3NWgtNzUuMjV2LTI2Ljg3NWgtMTAuNzV2MjYuODc1aC0zMi4yNWMtMy4wNDQ0MywwIC01LjM3NSwtMi4zMzA1NyAtNS4zNzUsLTUuMzc1di03NS4yNWMwLC0zLjA0NDQzIDIuMzMwNTcsLTUuMzc1IDUuMzc1LC01LjM3NXpNNDMsNTkuMTI1Yy04LjgzOTM1LDAgLTE2LjEyNSw3LjI4NTY1IC0xNi4xMjUsMTYuMTI1YzAsOC44MzkzNSA3LjI4NTY1LDE2LjEyNSAxNi4xMjUsMTYuMTI1aDIuNTgyNTJjLTMuNjExMzMsMy43NzkzIC02LjY5Nzc2LDguNzEzMzggLTcuODczNTQsMTUuMTU5MThsMTAuNTgyMDMsMS45MzE2NGMxLjg4OTY1LC0xMC4zNzIwNyAxMi41NTU2NywtMTUuMjg1MTYgMTYuMTI1LC0xNi42NzA5YzMuNTI3MzQsMS40OTA3MiAxNC40NDUzMSw2Ljc4MTc0IDE2LjI5Mjk3LDE2LjcxMjg5bDEwLjU4MjAzLC0yLjAxNTYyYy0xLjIxNzc3LC02LjM4MjgxIC00LjM2NzE5LC0xMS4zMzc4OSAtOC4wNjI1LC0xNS4xMTcxOWgyLjc3MTQ4YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjVjMCwtOC44MzkzNSAtNy4yODU2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNWMtOS40MDYyNSwwIC0xNS43NDcwNyw3LjA3NTY4IC0xOS45MjUyOSwxMy4wMzg1N2MtMC41ODc4OSwwLjgzOTg0IC0xLjA3MDgsMS42MTY3IC0xLjU3NDcxLDIuNDM1NTVjLTAuNTAzOTEsLTAuODE4ODQgLTAuOTg2ODIsLTEuNTk1NyAtMS41NzQ3MSwtMi40MzU1NWMtNC4xNzgyMiwtNS45NjI4OSAtMTAuNTE5MDQsLTEzLjAzODU3IC0xOS45MjUyOSwtMTMuMDM4NTd6TTQzLDY5Ljg3NWMzLjM1OTM4LDAgNy43Njg1NiwzLjY3NDMyIDExLjE0ODkzLDguNDYxNDNjMC43NzY4NSwxLjEzMzc5IDAuNjI5ODgsMS4yMTc3NyAxLjI1OTc3LDIuMjg4NTdoLTEyLjQwODY5Yy0zLjA0NDQzLDAgLTUuMzc1LC0yLjMzMDU3IC01LjM3NSwtNS4zNzVjMCwtMy4wNDQ0MyAyLjMzMDU3LC01LjM3NSA1LjM3NSwtNS4zNzV6TTg2LDY5Ljg3NWMzLjA0NDQzLDAgNS4zNzUsMi4zMzA1NyA1LjM3NSw1LjM3NWMwLDMuMDQ0NDMgLTIuMzMwNTcsNS4zNzUgLTUuMzc1LDUuMzc1aC0xMi40MDg2OWMwLjYyOTg5LC0xLjA3MDggMC40ODI5MSwtMS4xNTQ3OSAxLjI1OTc3LC0yLjI4ODU3YzMuMzgwMzgsLTQuNzg3MTEgNy43ODk1NSwtOC40NjE0MyAxMS4xNDg5MywtOC40NjE0M3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" ></span><span> </span><a href="https://maxonline.woohoo.in/en-in/e-gift-card/max-online-e-gift-cards-5-off" style="color:white;"> Online Gift Card</a> </div>
      </div>
      <div id="right_div">
        <div class="top_nav_right" title="Download Our Apps"> Download Our Apps</div>
        <div class="top_nav_right" title="Store Locator"> | Store Locator</div>
        <div class="top_nav_right" title="Help">| Help</div>
    </div>
</div>  
    <!-- <------------------------------------top navbar ends----------------------->    

       
   

<!-- <-------------------------------bottom navbar starts------------------------------->  

  
<div id="bottom_navbar">
    <div id="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Kpf5lQ_01enwvEdx4jqx2rLmMfI_E0Id12TZJ02y&s" ></div>
      
   
    <div class="dropdown">
        <button class="dropbtn">Women</button>
        <div class="dropdown-content">
  
            <div class="row">
                <div class="column">
                    <h3>Online Exclusives</h3>
                    <a href="#">Tops</a>
                    <a href="product.html">Indian wear</a>
                    <a href="#">Sports wear</a>
                    <a href="product.html">Lingerie</a>
                    <a href="#">Dresses</a>
                    <a href="product.html">Bottom wear</a>
                    <a href="#">Sleep wear</a>
                </div>
                <div class="column">
                    <h3>Tops</h3>
                    <a href="product.html">Tops & tees</a>
                    <a href="#">Shirts</a>
                    <a href="#">Tunics</a>
                    <a href="product.html">Shrugs</a>
                    <a href="#">Zodiac Tees</a>
                    <a href="#">Curves (Plus Size)</a>
                    
                </div>
                <div class="column">
                    <h3>Dresses & Jumpsuits</h3>
                    <a href="product.html">Dresses</a>
                    <a href="#">Jumpsuits & Dungarees</a>
                    <a href="#">Curves (Plus size)</a>
                </div>

                <div class="column">
                    <h3>Indian wear</h3>
                    <a href="product.html">Kurtas & Kurtis</a>
                    <a href="#">Tops</a>
                    <a href="#">Dresses</a>
                    <a href="product.html">Fashion Bottoms</a>
                    <a href="#">Skirts</a>
                </div>
                <!-- </div> -->

                <div class="column">
                    <h3>Footwear</h3>
                    <a href="product.html">Ballerinas</a>
                    <a href="#">Flat Sandals</a>
                    <a href="#">Heels</a>
                    <a href="product.html">Casual Shoes</a>
                    <a href="#">Flip Flops</a>
                    <a href="#">Sports Shoes</a>
                    <a href="#">Boots</a>
                </div>
            </div>
        </div>


    </div> 


    <div class="dropdown">
        <button class="dropbtn">Men</button>
        <div class="dropdown-content">
            <div class="row">
                <div class="column">
                    <h3>Online Exclusives</h3>
                    <a href="#">Tops</a>
                
                    <a href="#">Sports wear</a>
   
                    <a href="product.html">Dresses</a>
                    <a href="#">Bottom </a>
                    <a href="#">Loungewear</a>
                    <a href="product.html">Shoes</a>
                </div>
                <div class="column">
                    <h3>Tops</h3>
                
                    <a href="product.html">T-Shirts</a>
                    <a href="#">Polos</a>
                    <a href="#">Casual Shirts</a>
                    <a href="product.html">Formal Shirts</a>
                
                </div>
                <div class="column">
                    <h3>Sportswear</h3>
                    <a href="#">Tees & Polos</a>
                    <a href="product.html">Trackpants & Joggers</a>
                    <a href="#">Shorts & 3/4ths</a>
                </div>

                <div class="column">
                    <h3>Innerwear</h3>
                    <a href="#">Vests</a>
                    <a href="#">Briefs</a>
                    <a href="#">Boxers</a>
                    
                </div>
                <div class="column">
                    <h3>Accessiories</h3>
                    <a href="#">Face Masks</a>
                    <a href="#">Bags</a>
                    <a href="#">Belts</a>
                    <a href="#">Caps</a>
                    <a href="#">Wallets</a>
                    <a href="#">Socks</a>
                </div>

                <div class="column">
                    <h3>Footwear</h3>
                    <a href="#">Casual Shoes</a>
                    <a href="#">Sports Shoes</a>
                    <a href="#">Sandals & Flip Flops</a>
                
                </div>

                <div class="column">
                    <h3>Indian Wear</h3>
                    <a href="#">Kurtas</a>
                    <a href="#">Jackets</a>
                    <a href="#">Bottoms</a>
                
                </div>
            </div>
        </div>
    </div> 

    <div class="dropdown">
        <button class="dropbtn">Girls</button>
        <div class="dropdown-content">
  
            <div class="row">
                <div class="column">
                    <h3>Online Exclusives</h3>
                    <a href="product.html">Tops</a>
                    <a href="product.html">Indian wear</a>
                    <a href="#">Sports wear</a>
                    <a href="#">Baby Girls</a>
                    <a href="product.html">Dresses</a>
                    <a href="#">Bottom wear</a>
                    <a href="product.html">Sleep wear</a>
                </div>
                <div class="column">
                    <h3>Bootoms</h3>
                    <a href="product.html">Jeans & Jeggings</a>
                    <a href="#">Leggings</a>
                    <a href="#">Trousers</a>
                    <a href="#">Track Pants & Joggers</a>
                    <a href="product.html">Shorts & Skirts</a>
                
                </div>
                <div class="column">
                    <h3>Footwear</h3>
                    <a href="product.html">Ballerinas</a>
                    <a href="#">Sandals & Flip Flops</a>
                    <a href="product.html">Casual Shoes</a>
                </div>

                <div class="column">
                    <h3>Indian wear</h3>
                    <a href="product.html">Dresses & Kurtas</a>
                    <a href="product.html">Sets</a>
                    
                </div>
            </div>
        </div>
    </div> 

    <div class="dropdown">
        <button class="dropbtn">Boys</button>
        <div class="dropdown-content">
  
            <div class="row">
                <div class="column">
                    <h3>Online Exclusives</h3>
                    <a href="#">Tops</a>
                    <a href="product.html">Indian wear</a>
                    <a href="#">Baby Boys</a>
                    
                    <a href="product.html">Dresses</a>
                    <a href="#">Bottom wear</a>
                    <a href="product.html">Accessories</a> 
                </div>
                <div class="column">
                    <h3>Tops</h3>
                    <a href="#">Tops & tees</a>
                
                    <a href="product.html">Tees & Polos</a>
                    <a href="product.html">Shirts</a>
                
                    
                </div>
                <div class="column">
                    <h3>Bottoms</h3>
                    <a href="product.html">Jeans</a>
                    <a href="#">Trousers</a>
                    <a href="product.html">Shorts & 3/4th</a>
                </div>

                <div class="column">
                    <h3>Footwear</h3>
                    <a href="product.html">Casual Shoes</a>
                    <a href="#">Boots</a>
                    <a href="product.html">Sandals & Flip Flops</a>
                    
                </div>

                <div class="column">
                    <h3>Indian Wear</h3>
                    <a href="product.html">Sets</a>
                    <a href="product.html">Jackets</a>
            
                </div>
            </div>
        </div>
    </div> 



    <div id="input">
        <input id="input_box" type="search" placeholder=" What are you looking for?" />
        <div id="suggestion">
            <ul></ul>
        </div>
    
    </div>

    <div id="more"><h4>More |</h4></div>
    <div id="sign">
        <h4 id="sign_up">Sign Up / Sign In</h4>
        <p id="user_icon"><i class="fa-regular fa-user"></i></p>
        <div id="acc_append">
            <p>Account</p>
            <p id="order_page_btn">Order History</p>
            <p>Payments</p>
            <p>Address</p>
            <p id="signout_btn">Sign Out</p>
        </div>
    </div>
    <div id="cart">
        <span ><i  class="fa-regular fa-heart"></i></span>
    </div>
    <div id="cart">
        <span id="cart_icon">
        <img src="https://img.icons8.com/windows/344/shopping-bag.png" alt=" cart logo">
        
        </span>
        <p id="counter">0</p>
    </div>
</div>


<!-- <-------------------------------bottom navbar starts------------------------------->  

  
<div id="bottom_navbar2">
    <div id="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Kpf5lQ_01enwvEdx4jqx2rLmMfI_E0Id12TZJ02y&s" ></div>
      
   
    


    <div id="input">
        <input id="input_box" type="search" placeholder=" What are you looking for?" />
        <div id="suggestion">
            <ul></ul>
        </div>
    
    </div>

    <div id="sign">
        
        <p id="user_icon"><i class="fa-regular fa-user"></i></p>
        <div id="acc_append">
            <p>Account</p>
            <p id="order_page_btn">Order History</p>
            <p>Payments</p>
            <p>Address</p>
            <p id="signout_btn">Sign Out</p>
        </div>
    </div>
    <div id="cart">
        <span ><i  class="fa-regular fa-heart"></i></span>
    </div>
    <div id="cart">
        <span id="cart_icon">
        <img src="https://img.icons8.com/windows/344/shopping-bag.png" alt=" cart logo">
        
        </span>
        <p id="counter">0</p>
    </div>
</div>
`
}

let footer=()=>{
    return ` <div id="button_div">

    <div class="side_div">
       <h2>Subscribe to our awesome emails.</h2>
       <p>Get our latest offers and news straight in your inbox.</p>
        <input type="email" placeholder="Please enter an email address" />
        <button>Subscribe</button>
    </div>

    <div class="side_div">
        <h2>Download our apps</h2>
        <p>Shop our products and offers on-the-go.</p>
        <img src="https://portal.mojopower.com.au/markup/images/badge-app-store.png" alt="" >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAACGCAMAAAARpzrEAAABzlBMVEUAAAD///+MjIy/v7/39/fj4+MtLS2Iz73Ly8t3d3eamppTwMFWwMFNvsHGxsadnZ2CgoLP455fwsBBvMJmxcA4uME0tMBux7+pqamTk5Mwrr/u7u4vqb54yb8upb3d3d2y2qK93aFDQ0MqnbvF4KD+0HUPDw+226IZGRnORmA4ODheXl4umLlTU1PU1NRKSkqj1KXTRVvMRmLDR2u1tbUnkre9R3B9vq2S0Kb8unf+xXe4SHVpaWkjIyPYRVaxSHz+xnelSIeKzqcjh7P6rXf8vHejSImI1b/gQ06bSZCNSZ10yKr5pXiKoLEigbFmxavswW0GIjUkWFQeRj4RRF9DlIMHHSgOHho/fm4capFGpa9WppA1ZlkgeqQfNy9tu59UrK83V0hnoIRXhGwhMylMcVuAuZY6Sjl7nXhwi2pedVeUtYZPYEesyJLWi25zRTfO1Jn7mXhRMye0c1c3JBuTYUfgl2xmRzG2gFfwu4G2iVbVpYPPn2GWhZKUiZUiGw9nVDDymWWRd0OujlBOQCTSq2HqUEr5q2idKi1LFRd1IysrDRCVMUF1Kj2gPF8gDBJYIjaMrbN2MFI9GiyQPnJUJUVvNGhCIURXLWAlEym2REAGAAAQPklEQVR4nO2di7vcRBmHc90mKWzCRZoltoGUhm3SzbawpRV2obRAoXBaFNCKCBUEEUSpCArSw00BERCQS/1vnWsyM0k22WvOJb8+T885m9lk8uabb2a+uUSSWzUhqekM7FJx3DW1p7RaiXqJVsLdU8dSqxXKVLUC7kbcdL52vmJD5K71ms7T7pAicDebztBukaKx3Fvsa1OP4e42nZndJDfl7neazstuUuhR7k7TWdldcgh3r+mM7DJFPubeevc1a4S5D5rOx27TGHOPms7HblNHg9z1tjWzbrXcm1HLvRm13JtRy70ZtdybUcu9GbXcm1Ej3DvmyOgquJM8trEcSQp6dvYHUWzbcZbIttke3rDXNdxxSNOhEQTTtrdF57sJ7kMfDywiUC4Z9fIBs3ToMUnT2rJsZYlkORsCDnt43GbUIenkAPxUZVlZ683MqSa4e4CyDQDpEBRAqhtAriQNVKML8pOgP4gsWe5JkpMYCXhQINkwPQJDHCMbnGsELR5y70oo4LQtYtoNcFdk2ZAQ8B7+wYICHCdsYswdKPJgkeBTgocw8XEZsMlYZcu9VIYsw2k6Q0eBxpvnzgXpUu5DgXsAygn86ciyLRHuxqTlXi4fe2IiwN2Nx2M6Yao2d5OMGsTYvwDuOnTtLfdSIe4ObJzAipVWmeRgbe49bOcMd0uVtbDlXirEPYGsVWl+7kqOux2BItByLxXibvbUlPtc/p36mQGupSF3kFjzWu5lSnALxNQod7bBPU+9Cvkj7h1d3i5zIxrg7mALZbmHQPhgbe4w5RiPzJN2pE16Xi33EgGrTGwX/D+SEHdfBbLxsfrcAWNtZIOzqH2JckfVRsu9RIFPogGkv0rjBFAidxwnABpq2K9ksvAXuxOSDrob2IndIXGCn/7smSfCJV913PUTl8TFXC4U1rNdrr8auzYOyXQsWwQaWok/imk6F3UBTNvdGXGxJ88fvHDhqSfWl6PdoSruPz9/HoK/8NQv1pipXaAq7k8C7uePAPAXLrbkl6gq7r+E3M8/DcH/6pk15munq4r7r89AYfAXnmvd/LJUjzsA/yjSU8+uMW87WTW5nzlDwD93cdltyt2p2twp+EcffaatYBdXJffjKfhLFPzzv1ljBneoqrifOZ7p0mmq53+3xizuSFVxP368EPzpF367xkzuQM3EnQX/0otrzOXOUyX3I6wA+JOE+8mTL73YNm3m1mzcAfiTjFo3P7equB8RxYE/+XLbppxPldwPCjpy6Sirky9sB/Im2kSqt4X215mZ+8GD+zjwR7d+BeuQ8S0jqE67LlVxP3ggp4MnePBHX53fzXfisQJHm1zFjFe0iDZ0XBdtcqSt5vzzaQ7uBw6cuEUg//J85M2RL2fSVXtVBonmGXQXOkU0HE6qU9XWXNwBeEFHfz+7mx/D2S66Mh4MhwMTb7vlJavZWA7tf2EsdApV05a5NVIV9wM/LlAB+Ftee2U28nECMI+yC4c9D08PWEXltwTu3eVuSTUXd6A9t+fIv/qHGa5rAso6j3iAbX4xPMXaftyfvrlEJ27Pq34FaxX6W4tOqlm2dhD3m/fcequAHXzwcr1wGeRg9POfG3KyklbNduR+U7FuvunsrQV67ZUaFx0AJ+MV2HUoG6uZubYNuZdgh9pz22158K//8U9V4bKOX7JvorOqDuU25P6jKeBPX3ebqNffunz5jT9PvybcMVSfnmTJ2o7cp+l0Dvtjl6He+Mu0a84wWbofDeM4DqKCIhR2AnBoGBVUEznluU+iIIgKOkKTAPm/MBooimIOMjAc934wBoedAa2MOkGQc5tFn2Wq4n7TDVMEwF/HCWB/DOvN90pPCc3dqzV5dGh38dpgr6sIjCJF9UjUxR4KXwsHppUJzmsVuY9dtM7Hd3PdNBut+DFV2odOF4gz3Ps9urmyNsIngOcXGwTgFF65TSzEHegkjz3TW38tOyW85aROn9sFZF3H6aFggs6VcgWuF3YcBQHwuInCoa1z+6xbgch9omqyPupicMI1Lch9xHzdI0814x4kzGFyAjm3J2Hg0RnkharifqmC+w2nC7E/AFRCPvbqxUqGGl1yIA3Q+hk1dTZRgtcspBCy1mcflKbEiW0c+BlZ+AwcdxP8itJb8Pn4vJ0C7rEheyr6NIJPnizNT7nD/BMjGMJigTLSA5/xJ8p/wmlh7jccTbE/kDHH+ltRBYv24VbLc0QEbk9L7XiIwFPb7PvpEwHGq7NMJyr5Vohslu5zwHJXstQF1S3g7stJ6gXhE8ct3pQ7XKcyYZJraBF0bj2bl+W3SItzv5aCf5shnpLPu3m7FndYTJmSO5CzyriTcOVlgPw8Saumv4Uqcx0GsEn2RUBCpYKralCXmcExoPwo97HMrfdxyTVG7GYWJMPTet6V3K+t1F7s49/mgP+E6k3xjG4t7r5QTJH5akP6K8sKb+uNKjjIl34coIKAbZThrrHP02ELBZKVefQsCcRDudvkUkQRKJbQ/0GvyH6vK5xX1BK4X4ss/u08cqgHH3yHN3nODkvliHVArFGrDsRque9RerBDlm11PMoulHFXZHYvFZcpKlhWzj3oOAXlPlB6HeEwarX4XIbhQ5/a3K/kvrcG971HMXaBONbdH3In7HdrcJ/k1+WhxwVdrZFrO+ClaRGGmt38BH0DQcm4+9m4U2T6sqY7fNfAYqoOLAU7lrJ+E+Uec41jq6rJVs29lv5eiPzBu6He5e4MV3hFQTFGY40zSyjsTUwphIds7lAkE7Md8V4DlQN09yl3WP8hvyBFFngEoxzKPPcAe7wq7rCyT82hr4t5FFXN/ZpK7b3myuHLopVTnTr1Dn9GZJ369GgvavPw3ANE0cYOh7+nkDga5MKYUdRRnrup4RQRaMJrvYLOW557x0NNliruMM8pR2j80wOrldyrsV+z98qxY8cuFxCHOvSu0KShhjtNblpTcjcI2Vk5l0ySJ8QXZU+0l+cOG1NaZBqy1i3OQZ5730A7crHcO2bPHRFplHukZ64xqfSk1dyvr9DevZuHDx87du8Hd2fMT1EdOvWR2JIcawXkoEKifh9bqrBcVcVwVbYlT4SKB7iJkcyVBTia7SOnknJHT62nWKWRzzx3WIp6LPeJy47Gy5Q7WnmOf4u06Y1IqQb3KuzXX3/ljjsAdwieI470UT5Ahjs6suDgJ4pHb0NzMEAhfugw3IXqAR0CThgZePaqEsjdyhKk3Kd53mLuNsMdjlDKetcxkcZeeiuhTNu3bkUjUloGd4Adc7/3g0MscqB/vl90SpdWg8y9xSMvMQwcjXKIZ+a3I8BzMVTSkOetCRWhBNeaDDc3bYun3FHJmBakKOauZNxhNgzGR+mZCY2Id4F7VVTFjBfmvnlnyv3hDw6xevz94gGQPqLL1zvRMOhMJvhNUhIxS77/grlb5HVfvJtAIZ+Efk+jd6Ol6VLu6AlNC4bmuU98tl6F/dcuW9oY7rQpOc5FffKq5H7jdF25k+HOgn/8w9JzYoM3Cp4K5Y53kuQdvInr2kjLO3hEE6XGrXxEezKCHgsr5Y6d3JTXmeS5R5gm4e6KNSbDnXgkWKtOb0RKC3PfvJPjnoH/6B/l18TuoOjuKfdACEBC9bAPx+0afs4dwooSTxB4TTVjO8ERqywBqi/w8fLeQ547sGJ9QrkDtML0JYY7vIwXwvKsVY7OL8Z94y6B+8efYMc+hbqUvigt7wMpd1IkOEejkhrRzH+3J2dWGPsaksw2RDPugVxQZTOyclFzFVcImDtwOvyAfOSxTQQUHbDrhFsX4L7vxs27RO4IfHF1KtwLNLvcTjEp94knVoAwCgPtTurjoSK2F57QkBlOORyiqDzzUiomLkYC82Vj75Ys0BiQVgrm3u8SL0YUwqhHxt2E1Yxe5/1AVdxv3FeujXsKuH/8yYflQ3xUeCOwvBtMuWNSrFUrqQHjDgDjDYb5M8ml3Mf4ymWxcUs4NjFIw4r49xFfHlC5zEwg1GQPFL6kesy3ivsU7Jv3FHB/+NPKS0JFZIRSN7ksZtxxmN5LXQWEzdWSmRfpFAwxyPyjYQc4iJPzY2LygcJ2jFGLKJuzBpuEGrJewt2UGQc/SGSf7yLhk9cYtK/kvn///n3kX/Yf/LFxXwH3T/9VfUmkkI5hGtm+4QOb4T5xWfCwpZh5JdxcdNKbz1svLk+pZeJh2KAzYHbW0rp2PIwV1ee8HYwDJ/CF1x3Qfx7ATdAIRcIdOhbNHUuhNHRUD5wz4bwKGoSps21YFfcT+0u0cV+e+711qaMspoPyng4DHYmnyZrcddK7QPuMa6PBpDOGm2ezVjn2sMlGncFIFlsYKIHM1p8OvRAeh+3RcW9Y/QpfBtwV2B7UPCCUAXLcIF4PRfs1ctDoiBvjQnOq89a9eblv3pfjfuyzGtdjFViGnkYHPN1QFb75NXETclg3hKIbWgY55BniqH1nYCo9UoEg0KFJX+lOXEtHJYdlfyS4YtyOHHdxAs13KRrLIK8f77s6vTJ8ELHmsaUNtDrlOstL5+QOrF3k/tm/a1xOVBCbDgRimoOgILudGB51zKK5lDGiaQ74r4Vm4qfPUi6dlxaAL7uWMs61s2n7PYD5MseFYAJyZfRHPx4M+O/XWlcyH/fN+wXuhz+fh/rSFcFi7o0QTltjXU1d5ftNM6njizGMEs3Dfc/G/QL3z2dx7KuT47Exqxj7g9lmNS7I3akcSiOq5L4nL4Cd5/7V1lgwD5v4KnPXeE7TtFkseS3IPan79Tm4bz7Ec/9igXwuU7AN4/MWAJtM9eyPajHucHJOPRucmfvZjYc47l/8d/5sLlfdfI8FjngnNVrTmRbinp81VqqZuW88wnL/8j9zZ3LZQgPe4tyJLnrpxwyal3u/35/AhaF1q/EZuZ/deITh/uVX82RxRUJxSvFGemI0uUrzcreNLqxNpk1F5TQb97NfP8Jw/2brGLuUjovwcmsMQXCyp86eLtUEz832ay9GnIk7tPaU+zdzZG+VQqEBoV6V9Lr1HFXYD+dpnPWtJElccQHEFM3C/ezX51Lu32yZ6pQKmxwfG3GWuyhpiZqB+9mNc5T7t1uOuoTngtFt+LEcrVaMqgnV5w6xY+7ffrfGDM4gHPz23DFahjY0t/I7EmtzB06GcP/uf2vM30xycEhG0/0ERcf81ezusQzV5Y6sHXL/fks1YkT1fLqozNPVLbS9Uk41uRPs577/YY15m0uBCd+e2ysKHW8l1eOOncy5cz9sjQDYDlAt7sTar64xXztdVdwvnqXWfnXLVqfbUVXcn4WhMOjYW+pLVeX7my5C7Fu/Ot1uqn5f2RNXr7bV6dLVxPv5WrXcm1LLvRm13JtRy70ZtdybUcu9GbXcmxHiXrWou9WyFWHuW3dcZocKTuWUFn0VQKuZ1cXcc/PbWq1UaOV0waaTrVYrtDAOcq+3b2yr5QhvzCXNsRyl1SLqZtxbT7M+kaW7mHsLfl2iK6YJ9xqbSLRaXB26xXnKXfaUNl6wYkVKtkd6yl2WE7dt16xQQ24nPoY7XLKvq61WIk/j3gfAc2+1NrXcm9H/AcEo0/0OTpgeAAAAAElFTkSuQmCC" alt="">
    </div>

</div>    
        
 <!-- <----------------------------------button div ends------------------------->  

<!-- <---------------------------------section div start ----------------------->   

<div id="section_div">
   <div class="sub_div">
    <h6>Women</h6>
    <a>Tops</a>
    <a>Dresses & Jumpsuits</a>
    <a>Sportswear</a>
    <a>Bottoms</a>
    <a>Winterwear</a>
    <a>Ethnicwear</a>
    <a>Lingerie</a>
    <a>Sleepwear</a>
    <a>Accessories</a>
    <a>Shoes</a> 
 </div>

   <div class="sub_div">
    <h6>Men</h6>
    <a>Tops</a>
    <a>Bottoms</a>
    <a>Sportswear</a>
    <a>Winterwear</a>
    <a>Accessories</a>
    <a>Shoes</a> 
   </div>

   <div class="sub_div">
    <h6>Boys</h6>
    <a>Tops</a>
    <a>Bottoms</a>
    <a>Indianwear</a>
    
    <a>Winterwear</a>
    <a>Essentials</a>
    
    <a>Accessories</a>
    <a>Shoes</a> 
   </div>

   <div class="sub_div">
    <h6>Girls</h6>
    <a>Tops</a>
    <a>Bottoms</a>
    <a>Indianwear</a>
    
    <a>Winterwear</a>
    <a>Essentials</a>
    
    <a>Accessories</a>
    <a>Shoes</a> 
   </div>
   <div class="sub_div">
    <h6>Explore</h6>
    <a>Offers</a>
    <a>Magazine</a>
   </div>
   <div class="sub_div">
    <h6>About</h6>
    <a>About us</a>
    <a>Write to us</a>
    <a>Careers</a>
    
    <a>Take a Tour</a>
    <a>Blog</a>
    
    <a>Store Locator</a>
    <a>Landmark Cares</a> 
    
   </div>
   <div class="sub_div">
    <h6>Help</h6>
    <a>Contact us</a>
    <a>Shipping</a>
    <a>Returns Process</a>
    
    <a>Returns Policy</a>
    <a>Help Center</a>
    
   </div>

</div>
<hr id="hr">


<!-- <---------------------------------section div ends -----------------------> 


<!-- <-----------------------------------footer div starts-------------------------> 

<div id="footer_div">
<div id="sub1_footer">
    <div class="sup_sub">
        <div class="sml">
            <div><i class="fa-solid fa-phone"></i></div>
             <div><a href="">Talk to us</a>
            <p>1800-123-1444</p></div>
        </div>
        <div ></div>
    </div>
    <div class="sup_sub">
        <div class="sml"><div><i class="fa-solid fa-circle-question"></i></div>
                         <div><a href="">Helpcenter</a>
                          <p>help.maxfashion.com</p>  
                        </div>
    </div>
        <div></div>
    </div>
    <div class="sup_sub">
        <div class="sml"><div><i class="fa-regular fa-envelope"></i></div>
                          <div><a href="">Write to us</a>
                               <p>help.in@maxfashion.com</p>
                        </div>  
    </div>
        <div></div>
    </div>
</div>
<div id="sub2_footer">
    <div class="social_icon"><i class="fa-brands fa-facebook-f"></i></div>
    <div class="social_icon"><i class="fa-brands fa-twitter"></i></div>
    <div class="social_icon"><i class="fa-brands fa-instagram"></i></div>
</div>
</div> 
<hr id="hr">  

<!-- <----------------------------------------footer div ends---------------------------------> 

<!-- <---------------------------------last div starts-------------------------->  

<div id="last_div">
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Kpf5lQ_01enwvEdx4jqx2rLmMfI_E0Id12TZJ02y&s" alt="logo"></div>
    <div><p>© 2022 Retail World Limited.</p>
         <a href="">Terms & Conditions </a><a href="">- Privacy Policy</a>
    </div>
</div>`
}

export {navbar, footer}