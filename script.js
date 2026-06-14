document
  .getElementById("generateBtn")
  .addEventListener("click", () => {

    const genre =
      document.getElementById("genre").value;

    const mood =
      document.getElementById("mood").value;

    const theme =
      document.getElementById("theme").value;

    document.getElementById("styleOutput").value =
      `STYLE PROMPT:\nGenre: ${genre}\nMood: ${mood}\nTheme: ${theme}`;

    document.getElementById("lyricsOutput").value =
      `[intro]\n${theme} begins to echo...\n\n[chorus]\nLost inside ${theme}`;

    document.getElementById("settingsOutput").value =
      `Weirdness: 40%\nStyle Influence: 70%`;

});
