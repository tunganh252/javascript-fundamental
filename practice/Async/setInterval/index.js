function countDown(seconds) {
  if (!seconds) return 0;

  let currentSecond = seconds;

  const intervalId = setInterval(() => {
    console.log(currentSecond);

    if (currentSecond <= 0) clearInterval(intervalId);

    currentSecond--;
  }, 1000);

  return currentSecond;
}

countDown(10);
