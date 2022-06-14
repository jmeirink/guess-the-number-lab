// We can always refer to the most recent guess with:
// this.prevGuesses[this.prevGuesses.length - 1] 

// Remember, the this keyword will let us access methods or properties of the parent object (game)

const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function () {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.prevGuesses.push(this.getGuess())
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },
  getGuess: function () {
    let guess // initialize guess variable
    // while the guess is invalid (not a number & not within the set range)...
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
      // continue to prompt the user to enter in a new guess
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    }
    return guess // return the valid input
  },
  render: function () {
    // if the most recent guess matches the secret num...
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      alert("Congrats! You guessed the number in " + this.prevGuesses.length + " guesses")
    } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      alert(`Your guess is too high! Previous guesses: ${this.prevGuesses.join()}`)
    } else {
      alert(`Your guess is too low! Previous guesses: ${this.prevGuesses.join()}`)
    }
  }
}

game.play()