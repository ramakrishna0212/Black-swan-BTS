function submit() {
   var score = 0;
   var q1 = document.querySelector('input[name="q1"]:checked');
   var q2 = document.querySelector('input[name="q2"]:checked');
   var q3 = document.querySelector('input[name="q3"]:checked');
   var q4 = document.querySelector('input[name="q4"]:checked');
   var q5 = document.querySelector('input[name="q5"]:checked');
   // Removed reference to q5

   if (q1 && q1.value === "2") {
      score++;
   }
   if (q2 && q2.value === "3") {
      score++;
   }
   if (q3 && q3.value === "1") {
      score++;
   }
   if (q4 && q4.value === "2") {
       score++;
   }
   if (q5 && q5.value === "3") {
      score++;
      alert("Your score is: " + score);
  }
}
function toggleFullscreen() {
   var doc = window.document;
   var docEl = doc.documentElement;

   var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
   var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

   if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
       requestFullScreen.call(docEl);
   } else {
       cancelFullScreen.call(doc);
   }
}
function verify(){
    if(pin.value === "0212"){
      window.location.href = "1start.html";
      
    } else{
       alert("Wrong pin")
       window.location.href = "#section1";

    }
 }
 document.getElementById('quiz-form').addEventListener('submit', function(event) {
   event.preventDefault();
   let score = 0;
   const answers = ['a', 'c', 'a', 'a', 'd', 'a', 'b', 'd', 'a', 'a'];
   for (let i = 1; i <= 10; i++) {
     const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
     if (selectedOption) {
       if (selectedOption.value === answers[i - 1]) {
         score++;
       }
     }
   }
   document.getElementById('score').textContent = `You scored ${score} out of 10.`;
   document.getElementById('result').style.display = 'block';
   setTimeout(function() {
     window.open('', '_self').close();
   }, 10000);
 });