/*const api_Url = 'https://jsonplaceholder.typicode.com/users';

const htmlresponse = document.querySelector("#app");
const ul = document.createElement("ul");
fetch(${api_url}, {mode: 'no-cors'})
fetch(`${api_Url}`)
  .then(response => response.json())
  .then((users) => {
    users.forEach((user)=>{
        let elem = document.createElement("li");
        elem.appendChild(document.createTextNode (`${user.name} ${user.email}`));
        ul.appendChild(elem);
    });
    htmlresponse.appendChild("ul");
  });
*/
const aplicacion =document.querySelector('container')
const Url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(respuesta=>respuestas.json())
.then(data => {
    data.foreach(usuario =>{
    console.log(usuario.name)    
    const p = document.createElement('p')
    p.innerHTML = usuario.name
    aplicacion.appendChild(p)
});
})
.catch(error => console.log(error))