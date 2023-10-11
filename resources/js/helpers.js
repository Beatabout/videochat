export const getPermissions = () => {
    return new Promise((resolve, reject) => {
      // Перевірка наявності mediaDevices в навігаторі
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Запит дозволу на доступ до відео та аудіо
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {
            resolve(stream);
          })
          .catch((err) => {
            alert('Дозвіл на доступ до камери або мікрофона не надано.');
            reject(err);
          });
      } else {
        reject(new Error("getUserMedia is not supported in this browser"));
      }
    });
  };