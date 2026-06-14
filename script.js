document
  .getElementById("generateBtn")
  .addEventListener("click", () => {

    const genre =
      document.getElementById("genre").value;

    const mood =
      document.getElementById("mood").value;

    const theme =
      document.getElementById("theme").value;

    // SUNO STYLE GENERATOR (rule-based v1)
    const stylePrompt =
      `${genre} music, ${mood.toLowerCase()} tone, ${theme} theme, ` +
      `120-130 BPM, modern polished production, addictive hook, ` +
      `tight drum groove, emotional vocal delivery, ` +
      `viral TikTok structure, earworm melody, minimal but powerful instrumentation, ` +
      `drop focused arrangement, high replay value.`;

    // SUNO LYRIC ENGINE (simple but structured)
    const lyrics =
`[intro]
${theme} in my head again...

[verse 1]
I feel the weight of ${theme}

[pre-chorus]
It pulls me under

[chorus]
I'm lost inside ${theme}, I can't escape it`;

    const settings =
`Weirdness: 35%
Style Influence: 80%
BPM: 124
Key: Auto`;

    document.getElementById("styleOutput").value = stylePrompt;
    document.getElementById("lyricsOutput").value = lyrics;
    document.getElementById("settingsOutput").value = settings;

  });
