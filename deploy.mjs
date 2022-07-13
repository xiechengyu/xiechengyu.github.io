await $`rm -rf leetcode`

await $`git clone git@github.com:xiechengyu/leetcode.git`

await $`node build.js`

await $`npm run build`

await $`cd dist`

await $`git init`

await $`git add -A`

try {
  await $`git commit -m 'deploy'`
} catch (error) {
  echo(error)
}

await $`git push -f git@github.com:xiechengyu/xiechengyu.github.io.git master`

await $`cd -`

await $`git pull`

await $`git add .`

const time = new Date()

await $`git commit -m 'update ${time}'`

await $`git push origin main`