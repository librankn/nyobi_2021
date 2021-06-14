let classes = ['A組', 'B組', 'C組', 'D組'];

for (let grade = 0; grade < 4; grade++) {
  for (let i = 0; i < classes.length; i++) {
    // <p>○年○組</p>という文字列を作る
    document.write('<p>' + grade + '年' + classes[i] + '</p>');
  }
}
