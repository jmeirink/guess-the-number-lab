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
        console.log(this.prevGuesses)
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)

  },
  getGuess: function () {
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    let parsedGuess = parseInt(guess)

      if(parsedGuess >= this.smallestNum && parsedGuess <= this.biggestNum) {
      return parsedGuess
    }
  }
  
}

game.play()
