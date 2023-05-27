const list = require("./pictureslist");

function getpicturedetail(pid) {
  let val;

  list.some(item => item.pic.some(item => val = (item.pid === pid) && item.url));

  return val
}
module.exports = getpicturedetail;