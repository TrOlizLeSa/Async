import fs from 'fs';

// BEGIN
export function stalker (filepath, interval, callback) {

    let lastCheckTime = Date.now();
  
    const timerId = setInterval(() => {

      fs.stat(filepath, (err, stats) => {

        if (err) {

          clearInterval(timerId);
          callback(err);
          return;
        }
        if (stats.mtimeMs > lastCheckTime) {

          lastCheckTime = stats.mtimeMs;
          callback(null);
        }
      });
    }, interval);
  
    return timerId;
  };

  export default stalker;
// END


