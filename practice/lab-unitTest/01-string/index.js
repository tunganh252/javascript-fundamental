// Nhập một đoạn string và thống kê số lần xuất hiện của 1 từ trong đoạn string ấy
// vd: "easy game easy" ---? {easy: 2, game: 1}

export function statisticsWords(str) {
  if (!str || str === "") return {};
  let statistics = {};

  str
    .split(" ")
    .filter((x) => x !== "")
    .forEach((x) => {
      if (statistics[x]) statistics[x] += 1;
      else statistics[x] = 1;
    });

  return statistics;
}
console.log(statisticsWords(" Tung  Anh    Tung  "));

export function statisticsWordsV2(str) {
  if (!str || str === "") return {};

  return str
    .split(" ")
    .filter((x) => x !== "")
    .reduce((statistics, word) => {
      statistics[word] = statistics[word]
        ? (statistics[word] += 1)
        : (statistics[word] = 1);

      return statistics;
    }, {});
}
console.log(statisticsWordsV2(" Tung  Anh    Tung  "));
