import { statisticsWords, statisticsWordsV2 } from "./index";

// Nhập một đoạn string và thống kê số lần xuất hiện của 1 từ trong đoạn string ấy
// vd: "easy game easy" ---? {easy: 2, game: 1}

describe("statisticsWords()", () => {
  test("should return empty object in case string is empty", () => {
    expect(statisticsWords("")).toEqual({});
  });
  test("should return correct statistics when str doesn'n have redunant spaces", () => {
    expect(statisticsWords("Tung Anh Tung")).toEqual({
      Tung: 2,
      Anh: 1,
    });
  });

  test("should return correct statistics when str have redunant spaces", () => {
    expect(statisticsWords("Tung   Anh    Tung ")).toEqual({
      Tung: 2,
      Anh: 1,
    });
  });
});

describe("statisticsWordsV2()", () => {
  test("should return empty object in case string is empty", () => {
    expect(statisticsWordsV2("")).toEqual({});
  });
  test("should return correct statistics when str doesn'n have redunant spaces", () => {
    expect(statisticsWordsV2("Tung Anh Tung")).toEqual({
      Tung: 2,
      Anh: 1,
    });
  });

  test("should return correct statistics when str have redunant spaces", () => {
    expect(statisticsWordsV2("Tung   Anh    Tung ")).toEqual({
      Tung: 2,
      Anh: 1,
    });
  });
});
