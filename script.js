// Get the form and suggestion section elements
const weatherForm = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Add an event listener to handle form submission
weatherForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the selected weather value from the dropdown
  const weather = document.getElementById('weather').value;

  // Get the temperature value from the input
  const temperature = document.getElementById('temperature').value;

  // Create a message based on the selected weather with emojis
  let message = '';

  if (weather === 'sunny') {
    message = '☀️ It\'s sunny! Don\'t forget sunscreen and sunglasses!';
  } else if (weather === 'cloudy' || weather === 'rainy') {
    // Use || (OR) to check if weather is cloudy OR rainy
    const emoji = weather === 'rainy' ? '🌧️' : '☁️';
    message = `${emoji} It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === 'snowy') {
    message = '❄️ It\'s snowy! Wear warm clothes and boots!';
  } else if (weather === 'windy') {
    message = '💨 It\'s windy! A jacket would be perfect!';
  }

  // Check if temperature is below 50°F and add a warm jacket suggestion
  if (temperature < 50) {
    message += ' 🧥 Also, wear a warm jacket!';
  }

  // Display the message in the suggestion section
  suggestionSection.textContent = message;
});
