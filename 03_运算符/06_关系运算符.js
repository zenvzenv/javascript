/*
*  关系运算符
*   >
*   <
*   >=
*   <=
*
* 注意：
*   - 当对非数值进行关系运算时，它会先将前转换为数值然后再比较
*   - 当关系运算符的两端是两个字符串，它不会将字符串转换为数值，而是逐位的比较字符的 Unicode 编码，利用这个特点可以对字符串按照字符排序
*   - 注意两个字符串格式的数字时一定要进行类型转换
*/
let result = 10 > 5
result = 5 > 5
result = 5 < '10' // 5 < 10 - true
result = '1' > false // 1 > 0 - true
result = "a" < "b" // true
result = "z" < "f" // false
result = "abc" < "b"//true
result = "12" < "1"//true
console.log(result)

let num = 10
// result = 5 < num < 10 // 错误写法
result = 5 < num && num < 10
console.log(result)

