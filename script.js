const maxEntries = 10;

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" }
];

const newList = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" }
];

function addFreelancer() {
  const name = freelancers[Math.floor(Math.random() * freelancers.length)].name;
  const price =
    freelancers[Math.floor(Math.random() * freelancers.length)].price;
  const occupation =
    freelancers[Math.floor(Math.random() * freelancers.length)].occupation;
  newList.push({ name, price, occupation });
}

function render() {
  const formList = document.querySelector("#form");
  const avgList = document.querySelector("#avg");

  const avgElemnts = (innerHTML = ` Average Price: ${getAverage()}`);

  const formElements = newList.map((freelancer) => {
    const formElement = document.createElement("li");
    formElement.innerHTML = `<h1>${freelancer.name}<h1> <br>
    <h2> Price: ${freelancer.price}<h2> <br>
    <h3> ${freelancer.occupation}<h3>`;
    return formElement;
  });
  formList.replaceChildren(...formElements);
  avgList.replaceChildren(avgElemnts);
}
function getAverage() {
  if (newList.length === 0) {
    return "0";
  } else {
    let total = 0;
    newList.forEach((element) => {
      total += element.price;
    });
    const avg = total / newList.length;
    console.log(avg.toFixed(2));
    return avg.toFixed(2);
  }
}

const addEntryIntervalId = setInterval(() => {
  if (newList.length < maxEntries) {
    addFreelancer();
    render();
    getAverage();
  }
}, 1000);
render();
