let balance = 1000;

// Update balance
function updateBalance() {
  document.getElementById('balance').innerText = `Balance: $${balance}`;
}

// Coin Flip Game
function flipCoin() {
  const bet = parseInt(document.getElementById('coin-bet').value);
  if (bet <= 0 || bet > balance) {
    alert('Invalid bet amount');
    return;
  }

  const coinResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
  const userGuess = prompt("Choose Heads or Tails").toLowerCase();
  
  if (coinResult.toLowerCase() === userGuess) {
    balance += bet;
    document.getElementById('coin-result').innerText = `You won! The coin landed on ${coinResult}.`;
  } else {
    balance -= bet;
    document.getElementById('coin-result').innerText = `You lost! The coin landed on ${coinResult}.`;
  }

  updateBalance();
}

// Slot Machine Game
function playSlot() {
  const bet = parseInt(document.getElementById('slot-bet').value);
  if (bet <= 0 || bet > balance) {
    alert('Invalid bet amount');
    return;
  }

  const symbols = ['🍒', '🍋', '🍉', '🍇', '🍊'];
  const spinResult = [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
  ];

  const isWinner = spinResult[0] === spinResult[1] && spinResult[1] === spinResult[2];
  if (isWinner) {
    balance += bet * 2;
    document.getElementById('slot-result').innerText = `You won! Result: ${spinResult.join(' | ')}`;
  } else {
    balance -= bet;
    document.getElementById('slot-result').innerText = `You lost! Result: ${spinResult.join(' | ')}`;
  }

  updateBalance();
}

// Roulette Game
function spinRoulette() {
  const bet = parseInt(document.getElementById('roulette-bet').value);
  if (bet <= 0 || bet > balance) {
    alert('Invalid bet amount');
    return;
  }

  const spinResult = Math.floor(Math.random() * 37);
  const userGuess = prompt("Guess a number between 0 and 36");

  if (userGuess == spinResult) {
    balance += bet * 35;
    document.getElementById('roulette-result').innerText = `You won! The ball landed on ${spinResult}.`;
  } else {
    balance -= bet;
    document.getElementById('roulette-result').innerText = `You lost! The ball landed on ${spinResult}.`;
  }

  updateBalance();
}

// Multiplayer (fake room joining)
function joinRoom() {
  document.getElementById('room-status').innerText = "Connected to a room!";
  document.getElementById('room-status').style.color = '#00ff00';
  // Placeholder for multiplayer logic - Add WebSocket or server-side logic here for actual multiplayer support
}
