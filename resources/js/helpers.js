export const getPermissions = async () => {
  if (!navigator.mediaDevices) {
      navigator.mediaDevices = {};
  }

  if (!navigator.mediaDevices.getUserMedia) {
      const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      if (!getUserMedia) {
          throw new Error("getUserMedia is not implemented in this browser");
      }

      navigator.mediaDevices.getUserMedia = constraints =>
          new Promise((resolve, reject) => getUserMedia.call(navigator, constraints, resolve, reject));
  }

  try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      return stream;
  } catch (err) {
      throw err;
  }
};
// export const getPermissions = () => {
//     // Older browsers might not implement mediaDevices at all, so we set an empty object first
//     if (navigator.mediaDevices === undefined) {
//         navigator.mediaDevices = {};
//     }

//     // Some browsers partially implement mediaDevices. We can't just assign an object
//     // with getUserMedia as it would overwrite existing properties.
//     // Here, we will just add the getUserMedia property if it's missing.
//     if (navigator.mediaDevices.getUserMedia === undefined) {
//         navigator.mediaDevices.getUserMedia = function(constraints) {
//             // First get ahold of the legacy getUserMedia, if present
//             const getUserMedia =
//                 navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

//             // Some browsers just don't implement it - return a rejected promise with an error
//             // to keep a consistent interface
//             if (!getUserMedia) {
//                 return Promise.reject(
//                     new Error("getUserMedia is not implemented in this browser")
//                 );
//             }

//             // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
//             return new Promise((resolve, reject) => {
//                 getUserMedia.call(navigator, constraints, resolve, reject);
//             });
//         };
//     }
//     navigator.mediaDevices.getUserMedia =
//         navigator.mediaDevices.getUserMedia ||
//         navigator.webkitGetUserMedia ||
//         navigator.mozGetUserMedia;

//     return new Promise((resolve, reject) => {
//         navigator.mediaDevices
//             .getUserMedia({ video: true, audio: true })
//             .then(stream => {
//                 resolve(stream);
//             })
//             .catch(err => {
//                 reject(err);
//                 //   throw new Error(`Unable to fetch stream ${err}`);
//             });
//     });
// };