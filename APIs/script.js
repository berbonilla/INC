const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyAVjdIq0wUwjgWHs0flQH5_3V6Q19mZVhY");

function removeAsterisksAndFormatText(text) {
  text = text.replace(/\*/g, '');

  const div = document.createElement('div');
  div.textContent = text;  
  text = div.innerHTML;   

  return text;
}


async function submitPrompt() {
  var outputDiv = document.getElementById('output');
  var textboxValue = document.querySelector('.textbox').value;
  try {
    if (textboxValue.trim() !== "") {
      var outputDiv = document.getElementById('output');
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      const prompt = textboxValue;
      const result = await model.generateContent("Do not include asterisks in your responses: "+prompt);
      const response = await result.response;
      const text = response.text();
      const newText = removeAsterisksAndFormatText(text);
      outputDiv.innerHTML = newText;
      console.log(newText);
    }
  }

  catch{
    console.log("There is an error here!");
  }
}

window.submitPrompt = submitPrompt;

textInput.addEventListener('keydown', function(submitPrompt) {
  if (event.key === 'Enter') {
      event.preventDefault();  // Prevent default form submission
      processText();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var textbox = document.querySelector('.textbox');
  
  textbox.addEventListener('input', function() {
    this.style.height = 'auto'; 
    this.style.height = (this.scrollHeight) + 'px'; 
  });
});



