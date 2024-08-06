const clickMe = document.getElementById("clickMe");
const doNotClickMe = document.getElementById("doNotClickMe");
const ok = document.getElementById("ok");
const notOk = document.getElementById("notOk");

//Code without worker thread
// clickMe.addEventListener("click", () => {
//   let i;
//   for (i = 0; i <= 100000000000; i++) {}
//     ok.innerHTML = i;

// });

//Code with worker thread
const worker = new Worker('worker.js');

clickMe.addEventListener("click", () => {
  worker.postMessage("");

  worker.onmessage = (e) => {
    ok.innerHTML = e.data;
  };
});

doNotClickMe.addEventListener("click", () => {
  notOk.innerHTML = "Second button was clicked";
});
