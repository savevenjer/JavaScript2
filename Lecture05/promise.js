function promiseTimeout(ms) {
    return new Promise((reslove, reject) => {
        setTimeout(reslove,ms);
    });
}

promiseTimeout(2000)
  .then(() =>{
    console.log("Done!!");
    return promiseTimeout(1000);
  })
  .then(() =>{
    console.log("Also done!!");
    return promise.reslove(42);
  })
  .then((result) =>{
    console.log(result);
  })
  .catch(() => {
    console.log("Error!");
  }) ;