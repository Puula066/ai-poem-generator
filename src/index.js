function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructioins");
  let apiKey = "d6ad63cf3f10b394t922ccb401aocfc5";
  let prompt = `Generate a poem about spirituality ${instructionsInput.value}`;
  let context =
    "You are an african spirituality poet.Your mission is to generate 5 line poem in basic HTML. Make sure you follow the user instructions. Sign the poem with 'Puula AI' inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
