document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("survey-form");
  const surveyList = document.getElementById("survey-list");

  //Function to load and display surveys 
  function loadSurveys() {
    fetch("/api/surveys")
      .then(res => res.json())
      .then(surveys => {
        surveyList.innerHTML = "";
        surveys.forEach(survey => {
          const div = document.createElement("div");
          div.classList.add("survey-item");
          div.innerHTML = `
            <h3>${survey.title}</h3>
            <p>${survey.description}</p>
            <ul>
              ${survey.questions.map(q => `<li><strong>${q.questionText}:</strong> ${q.options.join(", ")}</li>`).join("")}
            </ul>
            <button class="answer-btn" data-id="${survey._id}">Απάντησε</button>
          `;
          surveyList.appendChild(div);
        });
      })
      .catch(err => console.error("Σφάλμα φόρτωσης surveys:", err));
  }


  loadSurveys();

  // submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

     if (!currentSurveyId) {
      alert("Επέλεξε πρώτα ένα survey πατώντας το κουμπί 'Απάντησε'!");
      return;
    }

    const title = document.getElementById("name").value;
    const description = document.getElementById("bio").value;

    //dropdown
    const dropdown = document.getElementById("dropdown");
    const favouriteAttacker = Array.from(dropdown.selectedOptions).map(o => o.text);
    //radio buttons
    const visit = Array.from(document.querySelectorAll('input[name="visit"]:checked')).map(i => i.value);
    //checkboxes
    const trophies = Array.from(document.querySelectorAll('input[name="trophy"]:checked')).map(i => i.value);

    // Create answers object from form inputs
    const answers = [
      { questionText: "Favourite Attacker", answer: favouriteAttacker.join(", ") },
      { questionText: "Visited Toumba", answer: visit.join(", ") },
      { questionText: "Trophies", answer: trophies.join(", ") }
    ];

    fetch(`/api/surveys/${currentSurveyId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Responses saved:", data); 
        alert("Απαντήσεις υποβλήθηκαν επιτυχώς!");
        form.reset();                  
        currentSurveyId = null;        
        loadSurveys();                 
      })

    const formData = {
      title,
      description,
      questions: [
        { questionText: "Favourite Attacker", options: favouriteAttacker, answers: [] },
        { questionText: "Visited Toumba", options: visit, answers: [] },
        { questionText: "Trophies", options: trophies, answers: [] }
      ]
    };

    fetch("/api/surveys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert("Survey υποβλήθηκε επιτυχώς!");
        form.reset();
        loadSurveys();
      })
      .catch(err => {
        console.error("Σφάλμα:", err);
        alert("Κάτι πήγε στραβά!");
      });
  });
});

