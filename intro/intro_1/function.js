let myBirthTIme = new Date(1982, 11, 17, 12, 30);
function updateParagraph() {
  let now = new Date();
  let seconds = (now.getTime() - myBirthTIme.getTime()) / 1000;
  document.getElementById('birth-time').innerText =
    '生まれてから' + seconds + '秒経過';
}
setInterval(updateParagraph, 50);
