// mock function

const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test("함수 호출은 3번 입니다.", () => {
  console.log(mockFn.mock.results);
  expect(mockFn.mock.calls.length).toBe(3);
});
test("10에서 1 증가한 11이 반환 됩니다.", () => {
  expect(mockFn.mock.results[0].value).toBe(11);
});
test("20에서 1 증가한 21이 반환 됩니다.", () => {
  expect(mockFn.mock.results[1].value).toBe(21);
});
test("30에서 1 증가한 31이 반환 됩니다.", () => {
  expect(mockFn.mock.results[2].value).toBe(31);
});
