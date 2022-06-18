const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/peopleDB", {
  useNewUrlParser: true,
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

const cherry = new Fruit({
  name: "Cherry",
  ratings: 4,
});

cherry.save();

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

Fruit.insertMany([fruit, orange, banana, guava], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
  name: "John",
  age: 37,
  favouriteFruit: cherry,
});

people.save();

// People.insertMany([{ people }], function (err) {});

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

// People.deleteMany({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("yayy");
//   }
// });

// People.deleteMany(
//   { _id: "62acc379615b88e05e97ba09" },
//   // [{ _id: "62acc02a0c24ba1202ae522c" }],
//   // [{ _id: "62acc0f8637bb5dd0a7fa558" }],
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("yayy");
//     }
//   }
// );

// People.deleteOne({ name: "John" }, function (err) {});

// fruit.save();
