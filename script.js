document
  .getElementById("generateBtn")
  .addEventListener("click", () => {

    const genre =
      document.getElementById("genre").value;

    const mood =
      document.getElementById("mood").value;

    const theme =
      document.getElementById("theme").value;

    // -------------------------
    // RANDOM HELPERS
    // -------------------------

    const rand = (arr) =>
      arr[Math.floor(Math.random() * arr.length)];

    const bpmList = [90, 100, 110, 120, 124, 128, 135];
    const keyList = ["A Minor", "C Minor", "D Minor", "E Minor", "F Minor", "G Minor"];

    const weirdness = Math.floor(Math.random() * 60) + 10; // 10–70
    const influence = Math.floor(Math.random() * 50) + 50; // 50–100

    // -------------------------
    // STYLE GENERATOR (RANDOMIZED)
    // -------------------------

    const styleBanks = {
      House: [
        "euphoric club-ready house groove",
        "deep emotional house with melodic progression",
        "dark underground house with hypnotic rhythm",
        "uplifting festival house with bright synths"
      ],
      "Alternative Rock": [
        "gritty emotional alt rock with raw guitars",
        "melancholic indie rock with distorted textures",
        "anthemic alternative rock with driving drums",
        "lo-fi emotional rock with intimate vocals"
      ],
      Trap: [
        "dark trap with heavy 808 and atmospheric pads",
        "melodic trap with emotional vocal chops",
        "minimal trap with hard hitting percussion",
        "cinematic trap with haunting melodies"
      ]
    };

    const styleCore = rand(styleBanks[genre] || styleBanks["House"]);

    const stylePrompt =
`${styleCore}, ${mood.toLowerCase()} emotional tone, ${theme} theme,
${rand(["viral TikTok structure", "hook-driven arrangement", "repeatable earworm melody"])},
${rand(["tight punchy drums", "minimal but powerful production", "wide cinematic mix"])},
${rand(["high replay value", "addictive loop structure", "club + streaming optimized"])},
${bpmList[Math.floor(Math.random() * bpmList.length)]} BPM, ${rand(keyList)} key,
modern polished production, expressive vocal delivery`;

    // -------------------------
    // FULL SONG GENERATOR
    // -------------------------

    const lyrics =
`[intro]
A whisper of ${theme} fades into the night...

[verse 1]
I keep running through the echoes of ${theme}
Every step feels heavier than it should
${mood} thoughts pulling me under again

[pre-chorus]
And I try to break away
But it always pulls me back

[chorus]
${theme}, it’s inside my head
I can’t escape what was left unsaid
${theme}, I feel it again
Like a loop I never can end

[verse 2]
Shadows talking like they know my name
Every memory burns the same
I thought I changed but I stayed the same

[bridge]
If I fall into silence tonight
Would you still feel the light?

[final chorus]
${theme}, I’m losing control
You’re carved inside my soul
${theme}, I won’t let go
Even if I know`;

    // -------------------------
    // SETTINGS RANDOMIZER
    // -------------------------

    const settings =
`Weirdness: ${weirdness}%
Style Influence: ${influence}%
BPM: ${rand(bpmList)}
Key: ${rand(keyList)}`;

    // -------------------------
    // OUTPUT
    // -------------------------

    document.getElementById("styleOutput").value =
      stylePrompt;

    document.getElementById("lyricsOutput").value =
      lyrics;

    document.getElementById("settingsOutput").value =
      settings;

  });
