var imagebox=document.querySelector(".imagebox");
var details=document.querySelector(".details");
var btn=document.getElementById("btn");
// api link
var url=" https://random-data-api.com/api/v2/users?response_type=json";

var getuser=function(){

    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        imagebox.innerHTML=`<img src=${data.avatar}></img>`;

        details.innerHTML=`<h2>${data.first_name} ${data.last_name}</h2>
        <h3>${data.employment.title}</h3>
        <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>`;
    })

    var randomcolor="#" + ((Math.random() * 0Xffffff ) << 0).toString(16).padStart(6,'0');
    document.documentElement.style.setProperty("--theme-color",randomcolor);
}

btn.addEventListener("click",getuser);
getuser();