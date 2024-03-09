var bname = document.getElementById("bname");
var btn = document.getElementById("btn");
var adjNum = Math.floor(Math.random()*3);
var nameNum = Math.floor(Math.random()*3);
var wordNum = Math.floor(Math.random()*3);

btn.addEventListener("click", (e)=>{
    businessName = adj[adjNum] + " " + shopName[nameNum] + " " + word[wordNum];
    bname.textContent = businessName;
})
 
adj = {
    "0" : "Crazy",
    "1" : "Amazing",
    "2" : "Fire"
}
shopName = {
    "0" : "Engine",
    "1" : "Food",
    "2" : "Garments"
}
word = {
    "0" : "Bros",
    "1" : "Limited",
    "2" : "Hub"
}