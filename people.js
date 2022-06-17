const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/peopleDB", {
  useNewUrlParser: true,
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
  name: "John",
  age: 37,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name please"],
  },
  ratings: {
    type: Number,
    min: 1,
    max: 10,
  },
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  ratings: 10,
});

const orange = new Fruit({
  name: "Orange",
  ratings: 10,
});

const banana = new Fruit({
  name: "Banana",
  ratings: 10,
});

const guava = new Fruit({
  name: "Guava",
  ratings: 10,
});

// Fruit.insertMany([orange, banana, guava], function (err) {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("Success");
//   }
// });

// people.save();

//read data

People.find(function (err, fruits) {
  console.log(fruits);
  // if (err) {
  //   console.log(err);
  // } else {
  //   mongoose.connection.close();
  //   fruits.forEach(function (element) {
  //     console.log(element.name);
  //   });
  // }
});

// Fruit.deleteMany({ name: "Apple" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successsss");
//   }
// });

People.deleteMany({ name: "John" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("yayy");
  }
});

// fruit.save();
