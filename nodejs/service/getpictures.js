const list = require("./pictureslist");

let initLength = 6;

function getpictures(gid, pages) {
  let mult = parseInt(pages);
  let res = JSON.parse(JSON.stringify(list.find(item => item.gid === parseInt(gid))));
  res.pic = res.pic.slice((mult - 1) * initLength, mult * initLength)
  return res
}
module.exports = getpictures;