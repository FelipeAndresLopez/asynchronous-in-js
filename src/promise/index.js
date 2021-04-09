const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('😊');
    } else {
      reject('😥');
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err))


const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('😀')
      }, 2000)
    } else {
      const error = new Error('🤨');
      reject(error);
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2])
  .then(response => console.log(response))
  .catch(err => console.log(err));