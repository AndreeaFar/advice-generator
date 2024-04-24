const diceBtn = document.querySelector('.button-section');
const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.quotes');
const spinner = document.querySelector('.spinner');
const apiUrl = 'https://api.adviceslip.com/advice';

async function requestData() {
  try {
    spinner.style.display = 'block';

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Take id and advice
    const slipId = data.slip.id;
    const advice = data.slip.advice;

    // Update the DOM
    updateAdvice(slipId, advice);
  } catch (error) {
    console.log(error);
  }
  spinner.style.display = 'none';
}

function updateAdvice(slipId, advice) {
  adviceNumber.textContent = `Advice #${slipId}`;
  adviceText.textContent = advice;
}
// Event listener
diceBtn.addEventListener('click', requestData);

document.addEventListener('DOMContentLoaded', requestData);
