const Progetto = artifacts.require("Progetto")
module.exports = function(deployer) {
  deployer.deploy(Progetto);
};
