let container = document.getElementById('container');
let button = document.getElementById('button');
let input = document.getElementById('search');

button.addEventListener("click", function(){
  top_row.innerHTML = "";
  let search="https://recipepuppyproxy.herokuapp.com/api/?q="  + input.value;

fetch(search)

.then(function(response) {
response.json().then(function(data){
  for (var i = 0; i < 8; i++) {
      if (data.results[i].thumbnail === "") {
      top_row.innerHTML +=
      `
      <h4>${data.results[i].title}</h4>
      <img src=http://via.placeholder.com/150x150}>
      <a href="${data.results[i].href}">
      `;
    }else{

    top_row.innerHTML +=
    `
    <h4>${data.results[i].title}</h4>
    <img src=${data.results[i].thumbnail}>
    <a href="${data.results[i].href}">
    `;
  }
  container.appendChild(top_row);
};
}
)
.catch(function(err) {
  console.log("Fetch Error :-S", err);
})
})
})
