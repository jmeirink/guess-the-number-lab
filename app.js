const game = {
  title: 'Guess the Number!',
  biggestNum: 10, // Change this number back to 100 after testing
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      do {
        this.prevGuesses.push(this.getGuess())
        this.render(this.getGuess(), this.secretNum, this.prevGuesses.length)
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },
  getGuess: function() {
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    let parsedGuess = parseInt(guess)
      if(parsedGuess >= this.smallestNum && parsedGuess <= this.biggestNum) {
      return parsedGuess
    }
  },
  render: function(lastGuess, secret, totalGuessAmount) {
    if(lastGuess === secret) {
      alert("Congrats! You guessed the number in " + totalGuessAmount + " guesses")
    } else if(lastGuess > secret) {
      alert("Your guess is too high!")
    } else {
      alert("Your guess is too low!")
    }
  }

}

game.play()

