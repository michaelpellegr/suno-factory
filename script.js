const API_KEY = "deepseek/deepseek-chat";


document
  .getElementById("generateBtn")
  .addEventListener("click", () => {

    const genre =
      document.getElementById("genre").value;

    const mood =
      document.getElementById("mood").value;

    const theme =
      document.getElementById("theme").value;

    console.log(genre, mood, theme);

});
