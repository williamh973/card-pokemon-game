  let firstPlayerName;
  let firstPlayerScore = 0;
    
  const mainContainer = document.getElementById('main');
    
  const playerFormContainer = document.getElementById('playerFormContainerForStart');

  const playerNameInput = document.getElementById('playerName');
  
  const submitButton = document.getElementById('submitButton');
    
  submitButton.disabled = true;

  submitButton.addEventListener('click', (event) => { 
  event.preventDefault();
  
  domElementInFormPlayer.firstPlayer.innerText = ` ${firstPlayerName} : ${domElementInFormPlayer.firstPlayerScore} points`;

    playerFormContainer.style.display = 'none';
    mainContainer.style.display = 'block';
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
    playerFormContainer : document.getElementById('playerFormContainerForStart'),
    firstPlayer : document.getElementById('first-player'),
    secondPlayer : document.getElementById('second-player'),
    firstPlayerScore,
    playerNameInput
};
