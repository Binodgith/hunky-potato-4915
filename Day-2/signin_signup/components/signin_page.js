

let signin_page=()=>{
    return `<div class="signin" id="signin_div">
        <i class="fa-solid fa-xmark"></i>
        <div class="heading">
            <h1>Sign up or Sign in</h1>
            <p>Enjoy the convenience of a single account across all participating brands</p>
        </div>
        <div class="input">
            <p>Mobile Number</p>
            <div>
                <p>+91</p>
                <hr>
                <input type="number" placeholder="Enter your Mobile Number">

            </div>
        </div>

        <p class="t-c">By creating your account you agree to our <a href="">Terms & Condition</a></p>

        <hr>
        
        <div class="btn">
            <button>CONTINUE</button>
        </div>
    </div>

    <div class="signin" id="otp_div">
        <i class="fa-solid fa-xmark"></i>
        <div class="heading">
            <h1>Sign up or Sign in</h1>
            <p>Enjoy the convenience of a single account across all participating brands</p>
        </div>
        <div class="input">
            <p>Verify with OTP</p>
            <div class="otp_box">
                <input type="password"  maxlength="1">
                <input type="password" maxlength="1">
                <input type="password" maxlength="1">
                <input type="password" maxlength="1">
                <input type="password" maxlength="1">

            </div>
        </div>
        <p class="t-c">By creating your account you agree to our <a href="">Terms & Condition</a></p>

        <hr>
        
        <div class="btn">
            <button>Verify</button>
        </div>

    </div>


    <div class="signin" id="details_div">
        <i class="fa-solid fa-xmark"></i>
        <div class="heading">
            <h1>Sign up or Sign in</h1>
            <p>Enjoy the convenience of a single account across all participating brands</p>
        </div>
        <div class="input">
            <p>Fill Personal details</p>
            <div class="name_box">
                <input type="text" placeholder="Enter First Name">
                <input type="text" placeholder="Enter Last Name">
                

            </div>
        </div>

        <p class="t-c">By creating your account you agree to our <a href="">Terms & Condition</a></p>

        <hr>
        
        <div class="btn">
            <button>Sign Up</button>
        </div>
    </div>`
}

// export {signin_page};


// import {signin_page} from "../components/signin_page.js";
document.getElementById("signin_popup").innerHTML=signin_page()


let signin_div=document.getElementById("signin_div")
let otp_div=document.getElementById("otp_div")
let details_div=document.getElementById("details_div")

document.getElementById("demo").addEventListener("click",()=>{
    signin_div.style.visibility="visible"
})
document.querySelector("#signin_div button").addEventListener("click",()=>{
    otp_div.style.visibility="visible"
    signin_div.style.visibility="hidden"
})
document.querySelector("#otp_div button").addEventListener("click",()=>{
    details_div.style.visibility="visible"
    otp_div.style.visibility="hidden"
})
document.querySelector("#details_div>.btn").addEventListener("click",()=>{
    details_div.style.visibility="hidden"
    location.href="index.html"
    
})
let close_btn=document.querySelectorAll(".signin>i")

close_btn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        signin_div.style.visibility="hidden";
        otp_div.style.visibility="hidden";
        details_div.style.visibility="hidden"
    })
})