onmessage = () => {
  let i = 0;
  for (i = 0; i <= 100000000000; i++) {}
  postMessage(i);
};
