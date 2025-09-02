setInterval(step, 1000);

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function step() {
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Set the time
  document.getElementById('hours').innerHTML  = pad(hours, 2);
  document.getElementById('minutes').innerHTML  = pad(minutes, 2);

  $('#divider').toggleClass('black',100);

}
