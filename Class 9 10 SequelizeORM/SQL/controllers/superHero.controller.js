const SuperHero = require("../models/superHero");
const connection = require("../connection");
const sequelize = require("sequelize");

async function createTable() {
  await connection.sync({ force: true });
  console.log("table Created");
}

// table doesn't exist then create first

// createTable();

async function createSuperHero() {
  SuperHero.create({
    id: 1,
    name: "IronMan",
    power: 10,
    comics: "Marcel",
  });
}
// createSuperHero();
async function BulkCreateSuperHero() {
  SuperHero.bulkCreate([
    {
      id: 5,
      name: "Wanda",
      power: 45,
      comics: "ss",
    },
    {
      id: 6,
      name: "Spider",
      power: 42,
      comics: "ss",
    },
  ]);
}

// BulkCreateSuperHero();

async function findSuperHeros() {
  const superheros = await SuperHero.findAll();
  console.log(JSON.stringify(superheros));
}
// findSuperHeros();

async function findSuperHero() {
  const MarvelHeros = await SuperHero.findAll({
    // where: {
    //   comics: "Marvel",
    // },
    attribute: [[sequelize.fn("SUM", sequelize.col("power")), "power"]],
    // attributes: ["name", ["power", "strength"]],
  });
  console.log(JSON.stringify(MarvelHeros));
}
// findSuperHero();
async function excludeCol() {
  const MarvelHeros = await SuperHero.findAll({
    // where: {
    //   comics: "Marvel",
    // },

    attributes: { exclude: ["power"] },

    // attributes: ["name", ["power", "strength"]],
  });
  console.log(JSON.stringify(MarvelHeros));
}

// excludeCol();

async function findSuperPowerHero() {
  const MarvelHeros = await SuperHero.findAll({
    where: {
      [sequelize.Op.or]: {
        power: {
          [sequelize.Op.gte]: 45,
        },
        comics: {
          [sequelize.Op.eq]: "Marvel",
        },
      },
    },
  });
  console.log(JSON.stringify(MarvelHeros));
}

// findSuperPowerHero();

//===========update

async function addPower() {
  SuperHero.update(
    {
      power: 70,
    },
    {
      where: {
        comics: "DC",
      },
    }
  );
}
// addPower();
////==============delete

async function deleteRows() {
  SuperHero.destroy({
    where: {
      comics: "DC",
    },
  });
  console.log("delete");
}

// deleteRows();

///GROUPBY

async function getHerosGroup() {
  const superHero = await SuperHero.findAll({
    group: "comics",
  });
  console.log(JSON.stringify(superHero));
}
// getHerosGroup();
async function sortHerosGroup() {
  const superHero = await SuperHero.findAll({
    order: [["power", "DESC"]],
  });
  console.log(JSON.stringify(superHero));
}
sortHerosGroup();
