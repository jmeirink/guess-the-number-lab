const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      do {
        this.prevGuesses.push(this.getGuess())
        this.render(this.getGuess(), this.secretNum, this.prevGuesses.length)
        
        // Was using this to start the other 'commented out' render method
        // this.render() 
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },
  getGuess: function() {
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    let parsedGuess = parseInt(guess)
      if(parsedGuess >= this.smallestNum && parsedGuess <= this.biggestNum) {
      return parsedGuess
    }
  },

  // Not sure why the code block below isn't working
  // render: function() {
  //   if(this.getGuess() === this.secretNum) {
  //     alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses`)
  //   } else if(lastGuess > secret) {
  //     alert(`Your guess is too high! Previous guesses: ${this.prevGuesses.join()}`)
  //   } else {
  //     alert(`Your guess is too low! Previous guesses: ${this.prevGuesses.join()}`)
  //   }
  // }

  render: function(lastGuess, secret, numOfGuesses) {
    if(lastGuess === secret) {
      alert("Congrats! You guessed the number in " + numOfGuesses + " guesses")
    } else if(lastGuess > secret) {
      alert(`Your guess is too high! Previous guesses: ${this.prevGuesses.join()}`)
    } else {
      alert(`Your guess is too low! Previous guesses: ${this.prevGuesses.join()}`)
    }
  }

}

game.play()

