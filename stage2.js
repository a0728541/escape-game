const voiceText = `
還記得我們第一次逛街的時候，是在中山區徒步區裡。
我那天其實很緊張，想牽你的手又不太敢。
明明很害羞又裝鎮定,而且還偷偷勃起
明明是個直男還裝作像個常逛街有型的男人,現在想想真是個好笑的回憶。
`;

function playVoice() {
  const utterance = new SpeechSynthesisUtterance(voiceText);
  utterance.lang = 'zh-TW';
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

function checkAnswer() {
  const ans = document.getElementById("answer").value.trim();
  const msg = document.getElementById("resultMsg");
  if (ans === "勃起") {
    msg.innerText = "答對了，原來妳還記得，請前往到我房間💗";
    msg.style.color = "green";
  } else {
    msg.innerText = "還記得我說了什麼嗎？再聽一次提示吧～";
    msg.style.color = "red";
  }
}
