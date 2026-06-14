document
  .getElementById("generateBtn")
  .addEventListener("click", () => {

    const genre =
      document.getElementById("genre").value;

    const mood =
      document.getElementById("mood").value;

    const theme =
      document.getElementById("theme").value;

    alert(
      `Genre: ${genre}\nMood: ${mood}\nTheme: ${theme}`
    );

});
