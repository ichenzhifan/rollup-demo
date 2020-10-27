const say = (name) => `Hi ${name}`;
const request = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then(resolve, reject);
  });
};

export { say, request };
