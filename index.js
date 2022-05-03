let numeros = [1,2,4,6,-2,-3,0,-7]
function numerosNegativos (array){
  let resultado = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
      resultado += 1 
    }
  }return resultado
} console.log(numerosNegativos(numeros))


function somaNegativos (array){
 let resultado = 0
 for(let i = 0; i < array.length; i++){
  if(array[i]<0){
    resultado = resultado + array[i]
  }
 }
 return resultado 
} console.log(somaNegativos(numeros))

function parametroNum(number){
let resultado = []
for(let i = 0; i < number.length; i++){
  if (number[i]%2 === 0 ){
    resultado.push(number[i])
  }
}return resultado
}console.log(parametroNum(numeros))

function arrNegativos(array){
 let resultado = []
 for(let i = 0; i < array.length; i++){
  if(array[i]<0){
    resultado.push(array[i])
  }
 }
 return resultado 
}console.log(arrNegativos(numeros))

function somaElementos(array){
 let resultado = 0
 for(let i = 0; i < array.length; i++){
  resultado += array[i]
  if(resultado > array.length){
    resultado = true
  }
  else{
    resultado = false
  }
 }
 return resultado
}console.log(somaElementos(numeros))

function maisCinco(array){
 let resultado = []
 for(let i = 0; i < array.length; i++){
   resultado.push(array[i] + 5)
 }
 return resultado
} console.log(maisCinco(numeros))


function mediaValores(array){
let resultado = 0
let media = []
for (let i = 0; i < array.length; i++){
 resultado = resultado + array[i] 
}
for(let i = 0; i < array.length; i++){
  let mediaArr = resultado / array.length
  if(array[i] > mediaArr){
    media.push(array[i])
 }

}return media 
 
}console.log(mediaValores(numeros))


//// Arrays de Strings
let palavras = ["julia",'A','j','a','b','c']
function quantosA(str){
  let resultado = 0
  for(let i = 0; i < str.length; i++){
  if (str[i] === "a" || str[i] === "A"){
    resultado += 1
  }
  }return resultado 
} console.log(quantosA("Gabriella"))

function somaStrings(array){ 
let resultado = 0
for(let i = 0; i < array.length; i++){
   resultado += array[i].length
}
return resultado 
}console.log(somaStrings(palavras))

let fraseImpar = "Fui na padaria hoje"
function impar(str){
let array = str.split(" ")
let resultado = []
for(let i = 0; i < array.length; i++){
  if(array[i].length % 2 !== 0){
   resultado.push(array[i])
  }
}
return resultado
}console.log(impar(fraseImpar))

let frase = "Eu jogo futebol aos domingos"
function zeros(str){
  let array = str.split("")
  let resultado = ""
  for(let i = 0; i < array.length; i++){
    if (array[i] === "o" || array[i] === 'O'){
        resultado += array[i].replace(array[i],0)
    }
    else{
      resultado += array[i]
    }
  }return resultado
}console.log(zeros(frase))

let frase2 = 'Presentearei minha mãe com este prato preto'
function minMaiusculos(str){
 let array = str.split("")
 let resultado = "" 
 for(let i = 0; i < array.length; i++){
  if(array[i] === "p"){
      resultado += array[i].toUpperCase()
  }
  else{
    resultado += array[i]
  }
 }
 return resultado
}console.log(minMaiusculos(frase2))


