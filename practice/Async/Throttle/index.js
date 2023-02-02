function trigger() {
  console.log("Tada!");
}

/**
 * @description hàm throttle sẽ đảm bảo cứ sau một khoảng time được truyền vào thì sẽ thực hiện 1 trigger
tương ứng, vd: click 500 lần (time throttle 500ms) --> chỉ trigger ~100 lần (500ms mới trigger 1 lần)
----> Thường dùng cho các trường hợp về scroll, nhằm hạn chế trigger liên tục khi scroll....
 * @param {Function} callback
 * @param {Number} wait
 * @returns Function
*/
function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return; // 2, 3, 4.... come here

    isThrottling = true; // 1 come hear
    setTimeout(() => {
      callback();

      isThrottling = false;
    }, wait);
  };
}

const runThrottle = throttle(trigger, 500);

// 0 --> 500
runThrottle(); // setTimeout 500 --> call --> turn off flag throttle
runThrottle(); // check throttling --> ignore
runThrottle(); // check throttling --> ignore
runThrottle(); // check throttling --> ignore

// 600 --> 1100
setTimeout(runThrottle, 600); // setTimeout 600 --> call --> turn off flag throttle
setTimeout(runThrottle, 700); // check throttling --> ignore
setTimeout(runThrottle, 800); // check throttling --> ignore
setTimeout(runThrottle, 900); // check throttling --> ignore
setTimeout(runThrottle, 1000); // check throttling --> ignore
setTimeout(runThrottle, 1100); // check throttling --> ignore
