const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  getGuess: function () {
    let guess = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
    let parsedGuess = parseInt(guess)

      if(parsedGuess >= game.smallestNum && parsedGuess <= game.biggestNum) {
      console.log(parsedGuess)
      return parsedGuess
    }
  }
}

game.getGuess()

