let container = document.getElementById('container');
let button = document.getElementById('button');
let input = document.getElementById('search');

button.addEventListener("click", function(){
  rows.innerHTML = "";
  let search="https://recipepuppyproxy.herokuapp.com/api/?q="  + input.value;

fetch(search)

.then(function(response) {
response.json().then(function(data){
  for (var i = 0; i < 12; i++) {
      if (data.results[i].thumbnail === "") {
      rows.innerHTML +=
      `
      <div class="box">
      <h4>${data.results[i].title}</h4>
      <img src="http://lorempixel.com/output/food-q-c-150-150-5.jpg"}>
      <a href="${data.results[i].href}"><span></span></a>
      </div>
      `;
    }else{

    rows.innerHTML +=
    `
    <div class="box">
    <h4>${data.results[i].title}</h4>
    <img src=${data.results[i].thumbnail}>
    <a href="${data.results[i].href}"><span></span></a>
    </div>
    `;

  }
  container.appendChild(rows);
};
}
)
.catch(function(err) {
  console.log("Fetch Error :-S", err);
})
})
})
