const os = require("os");
//info about current user

const user = os.userInfo();
console.log(user);

// method returns the system uptime on seconds

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.totalmem(),
};

console.log(currentOs);
