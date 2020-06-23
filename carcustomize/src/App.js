import React from 'react';


function App() {
  let turbo = {
    horsepower: 800,
    speed: 80,
    torque: 0,
  };
  
  let muffler = {
    horsepower: 50,
    speed: 10,
    torque: 100,
  };
  
  let car = {
    name: "Mazda 3",
    gear: [turbo, muffler],
    speed: 200,
    horsepower: 500,
    torque: 1500,
    currentGear() {
      return {
        horsepower: this.horsepower,
        speed: this.speed,
        torque: this.torque,
      };
    },
    newGear() {
      const statAdder = {};
      this.gear.forEach((item) => {
        for (let property in item) {
          if (statAdder[property]) {
            statAdder[property] += item[property];
          } else {
            statAdder[property] = item[property];
          }
        }
      });
      return statAdder;
    },
    combineGear() {
      let gearStats = {};
      let items = [];
      let gearArray = [this.newGear(), this.currentGear()];
      gearArray.forEach((item) => {
        for (let property in item) {
          if (gearStats[property]) {
            gearStats[property] += item[property];
          } else {
            gearStats[property] = item[property];
          }
        }
      });
      for (var key in gearStats) {
          let itemObj = {};
          if (gearStats.hasOwnProperty(key)) {
              itemObj[key] = gearStats[key]
              items.push(itemObj)
          }
      }
      console.log(items)
      let newItems = items.map(function(item) {
        console.log(item)
        for(let property in item) {
        return <p>{property}: {item[property]}</p>
        }
      })
  
      return newItems
     }
    }
  
  return (
    <div className="App">
      {car.combineGear()}
    </div>
  );
}

export default App;
