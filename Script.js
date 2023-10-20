const script = document.createElement("script"),
  text = document.createTextNode("console.log('foo')");

script.appendChild(text);
document.body.appendChild(script);  

fetch("Homepage.html")
.then(response => response.text())
.then(data => {
    document.querySelector("header").innerHTML = data;
})
fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.querySelector("footer").innerHTML = data;
})
fetch("contactforms.html")
.then(response => response.text())
.then(data => {
    document.querySelector("main").innerHTML = data;
})
fetch("benevole.html")
.then(response => response.text())
.then(data => {
    document.querySelector ("section").innerHTML = data;
})