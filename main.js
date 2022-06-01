const btn = document.getElementById('answ_a');
const btn2 = document.getElementById('answ_b');
const btn3 = document.getElementById('answ_c');

btn.addEventListener('click', function onClick() {
  // 👇️ Change text color for clicked element only
    btn.style.color = '#E6007E';
    btn2.style.color = '#FFFFFF';
    btn3.style.color = '#FFFFFF';
});

btn2.addEventListener('click', function onClick() {
    // 👇️ Change text color for clicked element only
    btn.style.color = '#FFFFFF';
    btn2.style.color = '#E6007E';
    btn3.style.color = '#FFFFFF';
  });

  btn3.addEventListener('click', function onClick() {
    // 👇️ Change text color for clicked element only
    btn.style.color = '#FFFFFF';
    btn2.style.color = '#FFFFFF';
    btn3.style.color = '#E6007E';
  });
