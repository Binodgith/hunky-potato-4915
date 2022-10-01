let top_navbar = () =>{
    return `
    <div id="left_div">
            <div class="top_nav_left" title="On All Orders"><span><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNi4xMjUsMjEuNWMtOC44NjAzNSwwIC0xNi4xMjUsNy4yNjQ2NSAtMTYuMTI1LDE2LjEyNXY3NS4yNWMwLDguODYwMzUgNy4yNjQ2NSwxNi4xMjUgMTYuMTI1LDE2LjEyNWg2LjM4MjgxYzIuMjI1NTgsNi4yMTQ4NCA4LjE0NjQ5LDEwLjc1IDE1LjExNzE5LDEwLjc1YzYuOTcwNzEsMCAxMi44OTE2LC00LjUzNTE2IDE1LjExNzE5LC0xMC43NWg2Ni4yMjE2OGMyLjIyNTU5LDYuMjE0ODQgOC4xNDY0OSwxMC43NSAxNS4xMTcxOSwxMC43NWM2Ljk3MDcxLDAgMTIuODkxNiwtNC41MzUxNiAxNS4xMTcxOSwtMTAuNzVoNi42NzY3NmM4LjgxODM2LDAgMTYuMTI1LC03LjI2NDY1IDE2LjEyNSwtMTYuMTI1di0xOC4yMjQ2YzAsLTMuMTkxNDEgLTAuOTY1ODIsLTYuMzQwODIgLTIuNzI5NDksLTguOTg2MzNsLTE2Ljc1NDg5LC0yNC43MzM0Yy0zLjAyMzQ0LC00LjQ5MzE3IC04LjA2MjUsLTcuMTgwNjcgLTEzLjQzNzUsLTcuMTgwNjdoLTMxLjU3ODEydi0xNi4xMjVjMCwtOC44NjAzNSAtNy4yNjQ2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNMTYuMTI1LDMyLjI1aDc1LjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1djgwLjYyNWgtNDQuMDA3ODFjLTIuMjI1NTgsLTYuMjE0ODQgLTguMTQ2NDgsLTEwLjc1IC0xNS4xMTcxOSwtMTAuNzVjLTYuOTcwNywwIC0xMi44OTE2LDQuNTM1MTYgLTE1LjExNzE5LDEwLjc1aC02LjM4MjgxYy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzV2LTc1LjI1YzAsLTMuMDIzNDQgMi4zNTE1NiwtNS4zNzUgNS4zNzUsLTUuMzc1ek0xMDcuNSw2NC41aDMxLjU3ODEzYzEuODA1NjcsMCAzLjQ4NTM1LDAuOTIzODMgNC40OTMxNywyLjM5MzU1djAuMDQybDE2Ljc1NDg5LDI0LjczMzRjMC41ODc4OSwwLjg4MTgzIDAuOTIzODIsMS44ODk2NSAwLjkyMzgyLDIuOTgxNDV2MTguMjI0NmMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1aC02LjY3Njc2Yy0yLjIyNTU4LC02LjIxNDg0IC04LjE0NjQ4LC0xMC43NSAtMTUuMTE3MTksLTEwLjc1Yy02Ljk3MDcsMCAtMTIuODkxNTksNC41MzUxNiAtMTUuMTE3MTksMTAuNzVoLTExLjQ2Mzg2ek0zNy42MjUsMTE4LjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1YzAsMy4wMjM0NCAtMi4zNTE1Niw1LjM3NSAtNS4zNzUsNS4zNzVjLTMuMDIzNDQsMCAtNS4zNzUsLTIuMzUxNTYgLTUuMzc1LC01LjM3NWMwLC0zLjAyMzQ0IDIuMzUxNTYsLTUuMzc1IDUuMzc1LC01LjM3NXpNMTM0LjA4MTA1LDExOC4yNWMzLjAyMzQ0LDAgNS4zNzUsMi4zNTE1NiA1LjM3NSw1LjM3NWMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzVjMCwtMy4wMjM0NCAyLjM1MTU2LC01LjM3NSA1LjM3NSwtNS4zNzV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="></span> Shipping</div>
             
              
              <div class="top_nav_left" title="Visit To Your Nearest Store."><span><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0zNy42MjUsMTAuNzVjLTguODQyMjEsMCAtMTYuMTI1LDcuMjgyNzkgLTE2LjEyNSwxNi4xMjV2OC4xODg0OGwtMTAuNzUsMjIuODY0NzV2MS4xOTY3OGMwLDYuOTUzNzYgNC41MjUzOSwxMi44NzYwNyAxMC43NSwxNS4xMTcxOXY2MC4xMzI4MWMwLDguODQyMjEgNy4yODI3OSwxNi4xMjUgMTYuMTI1LDE2LjEyNWg4NmM4Ljg0MjIxLDAgMTYuMTI1LC03LjI4Mjc5IDE2LjEyNSwtMTYuMTI1di02MC4xMzI4MWM2LjIyNDYyLC0yLjI0MTEyIDEwLjc1LC04LjE2MzQzIDEwLjc1LC0xNS4xMTcxOXYtMS4xOTY3OGwtMTAuNzUsLTIyLjg2NDc1di04LjE4ODQ4YzAsLTguODQyMjEgLTcuMjgyNzksLTE2LjEyNSAtMTYuMTI1LC0xNi4xMjV6TTM3LjYyNSwyMS41aDUuMzc1djEwLjc1aC0xMC43NXYtNS4zNzVjMCwtMy4wMjU3OSAyLjM0OTIxLC01LjM3NSA1LjM3NSwtNS4zNzV6TTUzLjc1LDIxLjVoMTAuNzV2MTAuNzVoLTEwLjc1ek03NS4yNSwyMS41aDQ4LjM3NWMzLjAyNTc5LDAgNS4zNzUsMi4zNDkyMSA1LjM3NSw1LjM3NXY1LjM3NWgtNTMuNzV6TTI5LjY2NzQ4LDQzaDEwMS45MTUwNGw3Ljc2ODU2LDE2LjUyMzkzYy0wLjMxNDMxLDIuNjk5NzEgLTIuMTc0ODYsNC45NzYwNyAtNC45NzYwOCw0Ljk3NjA3Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyNTc5LDAgLTUuMzc1LC0yLjM0OTIxIC01LjM3NSwtNS4zNzV2LTUuMzc1aC0xMC43NXY1LjM3NWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1Yy0yLjgwMTIyLDAgLTQuNjYxNzcsLTIuMjc2MzYgLTQuOTc2MDcsLTQuOTc2MDd6TTM3LjYyNSw3MS4wMjk3OWMyLjg2NjE0LDIuNTkzMzIgNi42MjEwMSw0LjIyMDIxIDEwLjc1LDQuMjIwMjFjNC4xMjg5OSwwIDcuODgzODYsLTEuNjI2ODkgMTAuNzUsLTQuMjIwMjFjMi44NjYxNCwyLjU5MzMyIDYuNjIxMDEsNC4yMjAyMSAxMC43NSw0LjIyMDIxYzQuMTI4OTksMCA3Ljg4Mzg2LC0xLjYyNjg5IDEwLjc1LC00LjIyMDIxYzIuODY2MTQsMi41OTMzMiA2LjYyMTAxLDQuMjIwMjEgMTAuNzUsNC4yMjAyMWM0LjEyODk5LDAgNy44ODM4NiwtMS42MjY4OSAxMC43NSwtNC4yMjAyMWMyLjg2NjE0LDIuNTkzMzIgNi42MjEwMSw0LjIyMDIxIDEwLjc1LDQuMjIwMjFjNC4xMjg5OSwwIDcuODgzODcsLTEuNjI2ODkgMTAuNzUsLTQuMjIwMjFjMS41NTUyNywxLjQwNzIzIDMuMzY5MzksMi40OTAzIDUuMzc1LDMuMjEyNHY2MC4xMzI4MWMwLDMuMDI1NzkgLTIuMzQ5MjEsNS4zNzUgLTUuMzc1LDUuMzc1aC04NmMtMy4wMjU3OSwwIC01LjM3NSwtMi4zNDkyMSAtNS4zNzUsLTUuMzc1di02MC4xMTE4MmMxLjk5NjY0LC0wLjczMjU2IDMuODE5NTksLTEuODI2MDQgNS4zNzUsLTMuMjMzNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="></span> To Store</div>
              <div class="top_nav_left" title="10% off instantly Buy Now" ><span><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0yNi44NzUsMzIuMjVjLTguODM5MzUsMCAtMTYuMTI1LDcuMjg1NjUgLTE2LjEyNSwxNi4xMjV2NzUuMjVjMCw4LjgzOTM1IDcuMjg1NjUsMTYuMTI1IDE2LjEyNSwxNi4xMjVoMTE4LjI1YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjV2LTc1LjI1YzAsLTguODM5MzUgLTcuMjg1NjUsLTE2LjEyNSAtMTYuMTI1LC0xNi4xMjV6TTI2Ljg3NSw0M2gzMi4yNXYxNi4xMjVoMTAuNzV2LTE2LjEyNWg3NS4yNWMzLjA0NDQzLDAgNS4zNzUsMi4zMzA1NyA1LjM3NSw1LjM3NXYzMi4yNWgtNDN2MTAuNzVoNDN2MzIuMjVjMCwzLjA0NDQzIC0yLjMzMDU3LDUuMzc1IC01LjM3NSw1LjM3NWgtNzUuMjV2LTI2Ljg3NWgtMTAuNzV2MjYuODc1aC0zMi4yNWMtMy4wNDQ0MywwIC01LjM3NSwtMi4zMzA1NyAtNS4zNzUsLTUuMzc1di03NS4yNWMwLC0zLjA0NDQzIDIuMzMwNTcsLTUuMzc1IDUuMzc1LC01LjM3NXpNNDMsNTkuMTI1Yy04LjgzOTM1LDAgLTE2LjEyNSw3LjI4NTY1IC0xNi4xMjUsMTYuMTI1YzAsOC44MzkzNSA3LjI4NTY1LDE2LjEyNSAxNi4xMjUsMTYuMTI1aDIuNTgyNTJjLTMuNjExMzMsMy43NzkzIC02LjY5Nzc2LDguNzEzMzggLTcuODczNTQsMTUuMTU5MThsMTAuNTgyMDMsMS45MzE2NGMxLjg4OTY1LC0xMC4zNzIwNyAxMi41NTU2NywtMTUuMjg1MTYgMTYuMTI1LC0xNi42NzA5YzMuNTI3MzQsMS40OTA3MiAxNC40NDUzMSw2Ljc4MTc0IDE2LjI5Mjk3LDE2LjcxMjg5bDEwLjU4MjAzLC0yLjAxNTYyYy0xLjIxNzc3LC02LjM4MjgxIC00LjM2NzE5LC0xMS4zMzc4OSAtOC4wNjI1LC0xNS4xMTcxOWgyLjc3MTQ4YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjVjMCwtOC44MzkzNSAtNy4yODU2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNWMtOS40MDYyNSwwIC0xNS43NDcwNyw3LjA3NTY4IC0xOS45MjUyOSwxMy4wMzg1N2MtMC41ODc4OSwwLjgzOTg0IC0xLjA3MDgsMS42MTY3IC0xLjU3NDcxLDIuNDM1NTVjLTAuNTAzOTEsLTAuODE4ODQgLTAuOTg2ODIsLTEuNTk1NyAtMS41NzQ3MSwtMi40MzU1NWMtNC4xNzgyMiwtNS45NjI4OSAtMTAuNTE5MDQsLTEzLjAzODU3IC0xOS45MjUyOSwtMTMuMDM4NTd6TTQzLDY5Ljg3NWMzLjM1OTM4LDAgNy43Njg1NiwzLjY3NDMyIDExLjE0ODkzLDguNDYxNDNjMC43NzY4NSwxLjEzMzc5IDAuNjI5ODgsMS4yMTc3NyAxLjI1OTc3LDIuMjg4NTdoLTEyLjQwODY5Yy0zLjA0NDQzLDAgLTUuMzc1LC0yLjMzMDU3IC01LjM3NSwtNS4zNzVjMCwtMy4wNDQ0MyAyLjMzMDU3LC01LjM3NSA1LjM3NSwtNS4zNzV6TTg2LDY5Ljg3NWMzLjA0NDQzLDAgNS4zNzUsMi4zMzA1NyA1LjM3NSw1LjM3NWMwLDMuMDQ0NDMgLTIuMzMwNTcsNS4zNzUgLTUuMzc1LDUuMzc1aC0xMi40MDg2OWMwLjYyOTg5LC0xLjA3MDggMC40ODI5MSwtMS4xNTQ3OSAxLjI1OTc3LC0yLjI4ODU3YzMuMzgwMzgsLTQuNzg3MTEgNy43ODk1NSwtOC40NjE0MyAxMS4xNDg5MywtOC40NjE0M3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" ></span><span> </span><a href="https://maxonline.woohoo.in/en-in/e-gift-card/max-online-e-gift-cards-5-off" style="color:white;"> Online Gift Card</a> </div>
          </div>
          <div id="right_div">
            <div class="top_nav_right" title="Download Our Apps"> Download Our Apps</div>
            <div class="top_nav_right" title="Store Locator"> | Store Locator</div>
            <div class="top_nav_right" title="Help">| Help</div>
        </div>`
}

let bottom_navbar = () =>{
    return `<div id="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Kpf5lQ_01enwvEdx4jqx2rLmMfI_E0Id12TZJ02y&s" ></div>
          
       
    <div class="dropdown">
<button class="dropbtn">Women

</button>
<div class="dropdown-content">
  
<div class="row">
  <div class="column">
    <h3>Online Exclusives</h3>
    <a href="#">Tops</a>
    <a href="#">Indian wear</a>
    <a href="#">Sports wear</a>
    <a href="#">Lingerie</a>
    <a href="#">Dresses</a>
    <a href="#">Bottom wear</a>
    <a href="#">Sleep wear</a>
  </div>
  <div class="column">
    <h3>Tops</h3>
    <a href="#">Tops & tees</a>
    <a href="#">Shirts</a>
    <a href="#">Tunics</a>
    <a href="#">Shrugs</a>
    <a href="#">Zodiac Tees</a>
    <a href="#">Curves (Plus Size)</a>
    
  </div>
  <div class="column">
    <h3>Dresses & Jumpsuits</h3>
    <a href="#">Dresses</a>
    <a href="#">Jumpsuits & Dungarees</a>
    <a href="#">Curves (Plus size)</a>
  </div>

  <div class="column">
      <h3>Indian wear</h3>
      <a href="#">Kurtas & Kurtis</a>
      <a href="#">Tops</a>
      <a href="#">Dresses</a>
      <a href="#">Fashion Bottoms</a>
      <a href="#">Skirts</a>
    </div>
</div>

<div class="column">
      <h3>Footwear</h3>
      <a href="#">Ballerinas</a>
      <a href="#">Flat Sandals</a>
      <a href="#">Heels</a>
      <a href="#">Casual Shoes</a>
      <a href="#">Flip Flops</a>
      <a href="#">Sports Shoes</a>
      <a href="#">Boots</a>
    </div>
</div>
</div>


</div>  <div class="dropdown">
<button class="dropbtn">Men

</button>
<div class="dropdown-content">
  
<div class="row">
  <div class="column">
    <h3>Online Exclusives</h3>
    <a href="#">Tops</a>
   
    <a href="#">Sports wear</a>
   
    <a href="#">Dresses</a>
    <a href="#">Bottom </a>
    <a href="#">Loungewear</a>
    <a href="#">Shoes</a>
  </div>
  <div class="column">
    <h3>Tops</h3>
   
    <a href="#">T-Shirts</a>
    <a href="#">Polos</a>
    <a href="#">Casual Shirts</a>
    <a href="#">Formal Shirts</a>
   
    
  </div>
  <div class="column">
    <h3>Sportswear</h3>
    <a href="#">Tees & Polos</a>
    <a href="#">Trackpants & Joggers</a>
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
<button class="dropbtn">Girls

</button>
<div class="dropdown-content">
  
<div class="row">
  <div class="column">
    <h3>Online Exclusives</h3>
    <a href="#">Tops</a>
    <a href="#">Indian wear</a>
    <a href="#">Sports wear</a>
    <a href="#">Baby Girls</a>
    <a href="#">Dresses</a>
    <a href="#">Bottom wear</a>
    <a href="#">Sleep wear</a>
  </div>
  <div class="column">
    <h3>Bootoms</h3>
    <a href="#">Jeans & Jeggings</a>
    <a href="#">Leggings</a>
    <a href="#">Trousers</a>
    <a href="#">Track Pants & Joggers</a>
    <a href="#">Shorts & Skirts</a>
   
    
  </div>
  <div class="column">
    <h3>Footwear</h3>
    <a href="#">Ballerinas</a>
    <a href="#">Sandals & Flip Flops</a>
    <a href="#">Casual Shoes</a>
  </div>

  <div class="column">
      <h3>Indian wear</h3>
      <a href="#">Dresses & Kurtas</a>
      <a href="#">Sets</a>
      
    </div>
</div>
</div>
</div> 

<div class="dropdown">
<button class="dropbtn">Boys

</button>
<div class="dropdown-content">
  
<div class="row">
  <div class="column">
    <h3>Online Exclusives</h3>
    <a href="#">Tops</a>
    <a href="#">Indian wear</a>
    <a href="#">Baby Boys</a>
    
    <a href="#">Dresses</a>
    <a href="#">Bottom wear</a>
    <a href="#">Accessories</a>
  </div>
  <div class="column">
    <h3>Tops</h3>
    <a href="#">Tops & tees</a>
   
    <a href="#">Tees & Polos</a>
    <a href="#">Shirts</a>
   
    
  </div>
  <div class="column">
    <h3>Bottoms</h3>
    <a href="#">Jeans</a>
    <a href="#">Trousers</a>
    <a href="#">Shorts & 3/4th</a>
  </div>

  <div class="column">
      <h3>Footwear</h3>
      <a href="#">Casual Shoes</a>
      <a href="#">Boots</a>
      <a href="#">Sandals & Flip Flops</a>
     
    </div>

    <div class="column">
    <h3>Indian Wear</h3>
    <a href="#">Sets</a>
    <a href="#">Jackets</a>
  
  </div>
</div>
</div>
</div> 



<div id="input"><div><input id="input_box" type="search" placeholder=" What are you looking for?" /></div>
<div ><i class="fa-solid fa-magnifying-glass"></i></div>
</div>

<div id="more"><h4>More |</h4></div>
<div id="sign"><h4 id="sign_up">Sign Up / Sign In</h4><p id="user_icon"><i class="fa-regular fa-user"></i></p></div>
<div id="cart"><span><i class="fa-regular fa-heart"></i></span></div>
<div id="cart"><span><img src="https://img.icons8.com/windows/344/shopping-bag.png" alt=" cart logo"></span></div>
    `
}

export {top_navbar , bottom_navbar};