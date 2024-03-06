export default function getResponseFromAPI() {
  const p = new Promise((resolve, reject) => {
    resolve('It was successful');
    reject(new Error('It was unsuccesful'));
  });
  return p;
}
