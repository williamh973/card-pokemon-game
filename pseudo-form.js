  let firstPlayerName;
  let firstPlayerScore = 0;
    
  const firstPlayer = document.getElementById('first-player');
  const secondPlayer = document.getElementById('second-player');
    
  const playerFormContainer = document.getElementById('playerFormContainer');

  const playerNameInput = document.getElementById('playerName');
  
  const submitButton = document.getElementById('submitButton');
    
  submitButton.disabled = true;

  submitButton.addEventListener('click', (event) => { 
  event.preventDefault();
  
domElementInFormPlayer.firstPlayer.innerText = ` ${firstPlayerName} : ${domElementInFormPlayer.firstPlayerScore} points`;

    playerFormContainer.style.display = 'none';
  });
  
playerNameInput.addEventListener('input', () => {
  if (playerNameInput.value === '') {
   submitButton.disabled = true;
  } else {
    firstPlayerName = playerNameInput.value;
   submitButton.disabled = false;
  };
});


export const domElementInFormPlayer = {
  playerFormContainer : document.getElementById('playerFormContainer'),
    firstPlayer : document.getElementById('first-player'),
    secondPlayer : document.getElementById('second-player'),
    firstPlayerScore,
    playerNameInput
};
