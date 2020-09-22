const Hangman =function(word,remaingusses){
    this.word=word.toLowerCase().split('')
    this.remaingusses=remaingusses
    this.gessleter=[]
    this.status="playing"
    
    
}

Hangman.prototype.calstatus = function(){
  //const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

  const finished =this.word.every((letter)=>{
    return this.gessleter.includes(letter) || letter===''
})

  if (this.remaingusses === 0) {
      this.status = 'failed'
  } 
  else if (finished) {
      this.status = 'finished'
  
  } else {
      this.status = 'playing'
     
  }
  this.statusmsg()
}

Hangman.prototype.statusmsg= function(){
  const joinword= this.word.join('')
  
  if(this.status === 'playing'){

    return `Gusses left ${this.remaingusses}`

  } else if(this.status === 'failed'){

     return `Nice try the word is ${joinword}`
  }else{
    return `Great work you guess the word`
  }
  
}
Hangman.prototype.getpuzzel=function(){
    let puzzle=''
  this.word.forEach((letter)=>{
   
    if(this.gessleter.includes(letter)|| letter===''){
        puzzle= puzzle + letter
    }  else{
        puzzle= puzzle + '*'
    }

  })
    return puzzle
}


Hangman.prototype.makeguss =function(gusses){
     gusses = gusses.toLowerCase()
 
    const isunique = !this.gessleter.includes(gusses)
    const isbadguess = !this.word.includes(gusses)
      if (this.status !== "playing"){
         return
       }
      if (isunique){
      //this.gessleter.push(gusses) 
      this.gessleter = [...this.gessleter, gusses]
      }
      if (isunique && isbadguess){
        this.remaingusses --
        
      }
     this.calstatus()
     
        }

   
export { Hangman as default}


