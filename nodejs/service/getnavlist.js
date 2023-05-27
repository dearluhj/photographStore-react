const list = require("./pictureslist");

function getnavlist() {
  return list.map(item => ({
    gid: item.gid,
    name: item.name
  })) || []
}

module.exports = getnavlist