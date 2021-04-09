const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('😀')
      }, 3000);
    } else {
      reject(new Error('😥'))
    }
  })
}

const testDoSomethingAsync = async () => {
  const something = await doSomethingAsync();
  console.log(something)
}

console.log('before')
testDoSomethingAsync();
console.log('after')

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}


console.log('before 1')
anotherFunction();
console.log('after 1')