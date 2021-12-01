const text = document.querySelector('.text');

text.innerHTML = text.innerText.split("").map(
  (char, i) => `<span style="transform:rotate(${i * 8.8}deg)">${char}</span>`
).join("");
