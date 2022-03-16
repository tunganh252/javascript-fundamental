function trigger() {
  console.log("Tada!");
}

/**
 * @description khi chạy hàm debounce nó sẽ trigger 1 function sau 1 khoảng thời gian được truyền vào,
nhưng nếu trong khoảng đó hàm debounce lại gọi tiếp thì nó sẽ clear trigger cũ
----> Thường dùng cho các trường hợp search, nhằm hạn chế call server liên tục khi user gõ tìm kiếm....
 * @param {Function} callback
 * @param {Number} wait
 * @returns Function
*/
function debounce(callback, wait) {
  let timeoutId;

  return function () {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(callback, wait);
  };
}

const runDebounce = debounce(trigger, 500);

runDebounce();
runDebounce();
runDebounce();
runDebounce();
runDebounce();
runDebounce();
