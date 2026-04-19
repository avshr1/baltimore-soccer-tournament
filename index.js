/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button

let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);




/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button");
let count = 3;

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let team = document.getElementById("team").value;

    let newParticipant = document.createElement("p");
    newParticipant.textContent = "✨ " + name + " is cheering for " + team + "!";
    let participantsList = document.getElementById("rsvp-participants");
    participantsList.appendChild(newParticipant);

    let oldCount = document.getElementById("rsvp-count");
    oldCount.remove();

    count = count + 1;

    let newCount = document.createElement("p");
    newCount.id = "rsvp-count";
    newCount.textContent = "⭐ " + count + " people are ready to watch the games!";
    participantsList.appendChild(newCount);
}
    


// Step 3: Add event listener to the button
let rsvpForm = document.getElementById("rsvp-form");
rsvpForm.addEventListener("submit", addParticipant);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
