// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add /*: add 키 밸류같을때 생략가능 */,
//   sub: sub,
// }; => commonjs

export { add, sub };
