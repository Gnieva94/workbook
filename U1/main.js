// 1.Creá un programa que permita al usuario ingresar una lista de números y luego muestre el número más grande y el número más pequeño

// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");
// const btnResult = document.querySelector("#btnResult");
// const minMax = document.querySelector("#minMax");
// const numeros = [];

// btn.addEventListener("click", () => {
//     const valor = parseInt(input.value);
//     if (isNaN(valor)) {
//         alert("Ingrese un número");
//         return;
//     }
//     numeros.push(valor);
//     input.value = "";
//     input.focus();
// });
// btnResult.addEventListener("click", () => {
//     let min = Math.min(...numeros);
//     let max = Math.max(...numeros);
//     minMax.innerHTML = `El número más pequeño es ${min} y el más grande es ${max}`;
// });

// 2. Creá un programa que permita al usuario ingresar una lista de palabras y luego muestre cuántas de ellas comienzan con una letra específica.
// const inputPalabra = document.querySelector("#inputPalabra");
// const btnPalabra = document.querySelector("#btnPalabra");
// const inputLetra = document.querySelector("#inputLetra");
// const btnLetra = document.querySelector("#btnLetra");
// const lista = document.querySelector("#lista");
// const palabras = [];

// btnPalabra.addEventListener("click", () => {
//     const valor = inputPalabra.value;
//     if (valor === "") {
//         alert("Ingrese una palabra");
//         return;
//     }
//     palabras.push(valor);
//     inputPalabra.value = "";
//     inputPalabra.focus();
// });
// btnLetra.addEventListener("click", () => {
//     const letra = inputLetra.value;
//     lista.innerHTML = ''
//     if (letra === "") {
//         alert("Ingrese una letra");
//         return;
//     }
//     palabras.forEach((palabra) => {
//         let lower = palabra.toLowerCase();
//         let lowerLetra = letra.toLowerCase();
//         if (lower.charAt(0) === lowerLetra) {
//             lista.innerHTML += `<li>${palabra}</li>`;
//         }
//     });
//     if(lista.innerHTML === '') lista.innerHTML = `<li>No se encontraron palabras con la letra ${letra}</li>`
// });

// //PUNTO3
// const input = document.querySelector('#input')
// const btnAdd = document.querySelector('#btnAdd')
// const resultHolder = document.querySelector('#resultHolder')
// const palabras = []
// let palabrasMasLarga = ''

// btnAdd.addEventListener('click', ()=>{
//     if(input.value != ''){
//         palabras.push(input.value)
//         input.value = ''
//         input.focus()
//     }
//     palabras.forEach(palabra =>{
//         if(palabra.length > palabrasMasLarga.length){
//             palabrasMasLarga = palabra
//         }
//     })
//     if(palabras.length === 0){
//         resultHolder.innerHTML = `<h2>No hay palabras...</h2>`
//     }
//     else{
//         resultHolder.innerHTML = `<h2>La palabra más larga es: ${palabrasMasLarga}</h2>`
//     }
// })

// //PUNTO 4
// const btnMensaje = document.querySelector('#btnMensaje')
// const mostrar = document.querySelector('#mostrar')
// btnMensaje.addEventListener('click', ()=>{
//     if(mostrar.classList.contains('d-none')){
//         btnMensaje.textContent = 'Quitar'
//     }
//     else{
//         btnMensaje.textContent = 'Mostrar'
//     }
//     mostrar.classList.toggle('d-none')
// })

// //PUNTO 5
// const btnMsg = document.querySelector('#btnMsg')
// //const input = document.querySelector('#input')
// const txtArea = document.querySelector('#txtArea')
// txtArea.setAttribute('readonly','')
// const btnDlt = document.querySelector('#btnDlt')
// btnMsg.addEventListener('click',()=>{
//     //input.value = 'Mensaje predeterminado'
//     txtArea.value = 'Mensaje Predeterminado'
// })
// btnDlt.addEventListener('click',()=>{
//     //input.value = ''
//     txtArea.value = ''
// })

//PUNTO 6
// const image = document.querySelector('#image')
// const btnImg = document.querySelector('#btnImg')

// btnImg.addEventListener('click',()=>{
//     image.classList.toggle('imgChange')
// })

//PUNTO 7
// const image = document.querySelector('#image')
// const btnImg = document.querySelector('#btnImg')
// btnImg.addEventListener('click',()=>{
//     image.src = 'memo.svg'
// })

//PUNTO 8
// const inputMonto = document.querySelector('#inputMonto')
// const inputPercent = document.querySelector('#inputPercent')
// const btnCalc = document.querySelector('#btnCalc')
// const result = document.querySelector('#result')

// btnCalc.addEventListener('click',()=>{
//     let resultado = parseInt(inputMonto.value) * (parseInt(inputPercent.value)/100)
//     result.innerHTML = `<h2>El resultado es: ${resultado} $</h2>`
// })

//PUNTO 9
// let numRandom = Math.floor(Math.round(Math.random() * 100))
// const input = document.querySelector('#input')
// const btn = document.querySelector('#btn')
// const result = document.querySelector('#result')

// btn.addEventListener('click',()=>{
//     if(input.value != ''){
//         let num = parseInt(input.value)
//         result.innerHTML = num === numRandom ?`<h3>Muy bien! El numero era ${numRandom}</h3>` : num > numRandom ? `<h3>El número es menor</h3>` : `<h3>El número es mayor</h3>`
//         // if(num===numRandom){
//         //     result.innerHTML = `<h3>Muy bien! El numero era ${numRandom}</h3>`
//         // }
//         // else if(num > numRandom){
//         //     result.innerHTML = `<h3>El número es menor</h3>`
//         // }
//         // else{
//         //     result.innerHTML = `<h3>El número es mayor</h3>`
//         // }
//     }
//     input.value = ''
//     input.focus()
// })

//PUNTO 10
// const clock = document.querySelector('#clock')
// const timer = ()=>{
//     const date = new Date()
//     clock.innerHTML = date.toLocaleTimeString()
// }
// setInterval(timer, 1000)

//PUNTO 11

//PUNTO 12
// const form = document.querySelector('#form')
// const nombre = document.querySelector('#nombre')
// const email = document.querySelector('#email')
// const telefono = document.querySelector('#telefono')

// const previousSiblingColor = (element, color)=>{
//     element.previousElementSibling.style.color = color
// }

// const validarEmail = (element)=>{
//     return element.value.includes('@') && element.value.includes('.com')
// }

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     if(nombre.value != ''){
//         previousSiblingColor(nombre,'black')
//     }else{
//         previousSiblingColor(nombre,'red')
//     }

//     if(email.value != '' && validarEmail(email)){
//         previousSiblingColor(email,'black')
//     }else{
//         previousSiblingColor(email,'red')
//     }
//     if(telefono.value != '' && telefono.value.length == 10){
//         previousSiblingColor(telefono,'black')
//     }else{
//         previousSiblingColor(telefono,'red')
//     }
// })

//PUNTO 13
