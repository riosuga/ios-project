//Rio Suga Catra Pratama
//41817110155

export async function verifyLogin({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'riosuga' && password === 'sayario02') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
