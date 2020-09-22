
import validator from 'validator'
import Hangman from './hangman'
import getpuzzel1 from './request'

console.log(validator.isEmail('anupama.kushwaha@gmail.com'))

const puzzelEl=document.querySelector("#puzzel")
const gussEl=document.querySelector("#gusses")

let game1 
window.addEventListener('keypress', function(e){
    const guess = e.key
    game1.makeguss(guess)
    render()
   })
 const render = ()=>{
    puzzelEl.textContent=game1.getpuzzel()
    gussEl.textContent=game1.statusmsg()
    }
 const startgame=async()=>{
   const puzzle = await getpuzzel1("2")
   //console.log(puzzle)
   game1 =new Hangman(puzzle,"6")
   render()
 }

 document.querySelector("#reset").addEventListener('click',startgame)
  startgame()
