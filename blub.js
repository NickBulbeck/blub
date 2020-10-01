const asyncFunction = (callback) => {
  let blub = setTimeout(function() {
    console.log("Running callback: ", callback());
    return callback();
  },3000);
}

async function saveGame(callback) {
  setTimeout(function() {
    callback();
  },1000);
}




module.exports.asyncFunction = asyncFunction;
module.exports.saveGame = saveGame;