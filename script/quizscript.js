function validateForm() {
    // Quiz validation logic goes here
    // For simplicity, let's assume all answers are correct for demonstration purposes
   
    const numQuestions = 10;
    let correctAnswers = 0;
    let wrongAnswers = 0;
  
    for (let i = 1; i <= numQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === 'a') {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    }
  
    // Display the answer sheet
    const answerSheet = `Correct Answers: ${correctAnswers}\nWrong Answers: ${wrongAnswers}`;
    alert(answerSheet);
  
    // Display the thank you card
    const thankYouCard = 'Thank you for attending the quiz! Click OK to return to the home page.';
    if (confirm(thankYouCard)) {
        window.location.href = 'index.html'; // Redirect to the home page
    }
  
    // Prevent the form from submitting and reloading the page
    return false;
  }
  

