const fs = require("fs");
const path = require("path")
// const wirteLeetcodeJson =  fs.readFileSync('./wirteLeetcode.json');
// const wirteLeetcode = JSON.parse(wirteLeetcodeJson.toString()).leetcodeDir
// const shouldWrite =  leetcodeDir.filter((item)=>!wirteLeetcode.includes(item))
// console.log(shouldWrite)
// fs.writeFileSync('./wirteLeetcode.json', JSON.stringify({ leetcodeDir }))
console.time("leetcode");
const leetcodeDir = fs.readdirSync('./leetcode');
const mdPath = './src/learn/leetcode题解.md';
const writeStream = fs.createWriteStream(mdPath);
const origin = fs.readFileSync('./leetcode.md').toString();
writeStream.write(origin);
leetcodeDir.forEach((v) => {
  if (/js$/.test(v)) {
    const data = fs.readFileSync(path.join("./leetcode", v)).toString()
    writeStream.write('\n```js\n' + data + '\n```\n\n')
  }
})
writeStream.end()

writeStream.on('finish', () => {
  console.timeEnd("leetcode")
})

