
function perform(){
let ip1=document.getElementById('State').value 
let ip2=document.getElementById('Season').value 
let ip3=parseFloat(document.getElementById('Land').value )

let ip4=parseFloat(document.getElementById('Budget').value )

const n=["Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"]
let p=0;
let x="";
const s=["Andhra Pradesh","Goa","Karnataka","Kerala","Tamil Nadu","Telangana"]

if (ip2 === "Kharif") {
    if (n.includes(ip1)) {
        if (ip3 >= 10 && ip4 > 50000) {
            x = "img/Sugarcane.png";
        } else {
            x = "img/Rice.png"; 
        }
    } else if (s.includes(ip1)) {
        if (ip3 >= 10 && ip4 > 50000) {
            x = "img/Cotton.png";
        } else {
            x = "img/Maize.png";
        }
    }
} else if (ip2 === "Rabi") {
    if (n.includes(ip1)) {
        if (ip3 >= 10 && ip4 > 50000) {
            x = "img/Wheat.png";
        } else {
            x = "img/Mustard.png";
        }
    } else if (s.includes(ip1)) {
        if (ip3 >= 10 && ip4 > 50000) {
            x = "img/Banana.png";
        } else {
            x = "img/Chickpea.jpeg";
        }
    }
} else {
    if (n.includes(ip1)) {
        if (ip3 >= 10 && ip4 > 50000) {
            x = "img/Cucumber.png";
        } else {
            x = "img/Jute.png";
        }
    } else if (s.includes(ip1)) {
        if (ip3 >= 10 && ip4 > 50000) {
            x = "img/Pumpkin.png";
        } else {
            x = "img/Tomato.png";
        }
    }
}

// Debugging output
window.location.href = `result.html?image=${encodeURIComponent(x)}`;
}
