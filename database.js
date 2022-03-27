const fs = require("fs");
const flatted = require('flatted')

const save = function (filename, data) {
  fs.writeFileSync(`./${filename}.json`, flatted.stringify(data));
};

const load = function (filename) {
  return JSON.parse(fs.readFileSync(`./${filename}.json`, "utf8"));
};

const insert = (filename, object) => {
const objects = load(filename)
  save(filename, objects.concat(object))
}

const remove = (filename, index) => {
  const objects = load(filename)
save(filename,objects.splice(index,1))
}

const findByName = (filename, name) => {
  const objects = load(filename)

  return objects.find(o => o.name === name)
}

module.exports = { save, load, insert, remove, findByName };
