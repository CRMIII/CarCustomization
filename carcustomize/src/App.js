import React from "react";

// after market parts
const turbo = {
  horsepower: 800,
  speed: 80,
  torque: 0,
};

const muffler = {
  horsepower: 50,
  speed: 10,
  torque: 100,
};

// The following cars could probably be more built more reusably using ES6
// classes. Essentially you could make a base Car class and then do something
// like this:
//
// const Mazda3 = new Car('Mazda3', { speed: 200, horsepower: 500, torque: 1500 })
// const Camry = new Car('Camry', { speed: 220, horsepower: 470, torque: 1420 })
const Mazda3 = {
  name: "Mazda 3",
  oemSpecifications: {
    speed: 200,
    horsepower: 500,
    torque: 1500,
  },
  aftermarketParts: [turbo, muffler],
  getSpecificationsWithAftermarketParts() {
    return this.aftermarketParts.reduce((acc, part) => ({
      speed: acc.speed + part.speed,
      horsepower: acc.horsepower + part.horsepower,
      torque: acc.torque + part.torque,
    }), this.oemSpecifications);
  },
};

const Camry = {
  name: "Camry",
  oemSpecifications: {
    speed: 220,
    horsepower: 470,
    torque: 1420,
  },
  aftermarketParts: [turbo],
  getSpecificationsWithAftermarketParts() {
    return this.aftermarketParts.reduce((acc, part) => ({
      speed: acc.speed + part.speed,
      horsepower: acc.horsepower + part.horsepower,
      torque: acc.torque + part.torque,
    }), this.oemSpecifications);
  },
};

function App() {
  const mazda3Specs = Mazda3.getSpecificationsWithAftermarketParts();
  const camrySpecs = Camry.getSpecificationsWithAftermarketParts();

  return (
    <div>
      <h1>Cars</h1>
      {/* Option 1: declaratively and explicitly render each specification     */}
      <h2>Mazda 3</h2>
      <ul>
        <li>horsepower: {mazda3Specs.horsepower}</li>
        <li>speed: {mazda3Specs.speed}</li>
        <li>torque: {mazda3Specs.torque}</li>
      </ul>
      {/* Option 2: loop over keys of car's specifications with aftermarket upgrades */}
      <h2>Camry</h2>
      <ul>
        {Object.keys(camrySpecs).map((specName) => (
          <li>
            {specName}: {camrySpecs[specName]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
