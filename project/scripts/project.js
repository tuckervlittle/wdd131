const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.getElementById('currentyear').textContent = year;

  const lastModified = new Date(document.lastModified);
  document.getElementById('lastmodified').textContent = lastModified.toLocaleString();
});

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('open');
  document.querySelector('#navigation').classList.toggle('open');
  hambutton.classList.toggle('open');
});

const machines = [
  {
    brand: "Melco",
    name: "EMT 16x",
    needles: 16,
    speed: "1500spm",
    sewDims: "16.1\" x 15.5\"",
    capDims: "14.1\" x 3.25\"",
    width: "28.5\"",
    height: "35.8\"",
    depth: "30.7\"",
    weight: "210.5lbs"
  },
  {
    brand: "Tajima",
    name: "TMEZ-5C",
    needles: 15,
    speed: "1200spm",
    sewDims: "14.4\" x 20\"",
    capDims: "14.1\" x 2.9\"",
    width: "47.4\"",
    height: "38.5\"",
    depth: "30.3\"",
    weight: "209.4lbs"
  },
  {
    brand: "Happy",
    name: "HCU2-1501",
    needles: 15,
    speed: "1500spm",
    sewDims: "23.6\" x 15.7\"",
    capDims: "14.1\" x 3.1\"",
    width: "34\"",
    height: "40\"",
    depth: "31\"",
    weight: "218lbs"
  },
  {
    brand: "Ricoma",
    name: "MT-1501-7S",
    needles: 15,
    speed: "1200spm",
    sewDims: "19.7\" x 14.2\"",
    capDims: "14.1\" x 2.9\"",
    width: "32.7\"",
    height: "30.7\"",
    depth: "30.3\"",
    weight: "319.7lbs"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const selectMachine = document.getElementById('machine');

  if (selectMachine) {
    machines.forEach(item => {
      if (item.brand !== "Melco") {
        const option = document.createElement('option');
        option.value = item.brand;
        option.textContent = item.brand;
        selectMachine.appendChild(option);
      }
    });
  }
});

document.addEventListener("click", function () {
  const specList = document.getElementById('specs');
  specList.replaceChildren()

  const name = document.createElement("p");
  const needles = document.createElement("span");
  needles.classList.add('label');
  needles.innerHTML = `Needles:`;
  const needlesSpec = document.createElement("span");
  needlesSpec.classList.add('value');
  const speed = document.createElement("span");
  speed.classList.add('label');
  speed.innerHTML = `Speed:`;
  const speedSpec = document.createElement("span");
  speedSpec.classList.add('value');
  const sewDims = document.createElement("span");
  sewDims.classList.add('label');
  sewDims.innerHTML = `Flat Sewing Dimensions:`;
  const sewDimsSpec = document.createElement("span");
  sewDimsSpec.classList.add('value');
  const capDims = document.createElement("span");
  capDims.classList.add('label');
  capDims.innerHTML = `Cap Sewing Dimensions:`;
  const capDimsSpec = document.createElement("span");
  capDimsSpec.classList.add('value');
  const width = document.createElement("span");
  width.classList.add('label');
  width.innerHTML = `Width:`;
  const widthSpec = document.createElement("span");
  widthSpec.classList.add('value');
  const height = document.createElement("span");
  height.classList.add('label');
  height.innerHTML = `Height:`;
  const heightSpec = document.createElement("span");
  heightSpec.classList.add('value');
  const depth = document.createElement("span");
  depth.classList.add('label');
  depth.innerHTML = `Depth:`;
  const depthSpec = document.createElement("span");
  depthSpec.classList.add('value');
  const weight = document.createElement("span");
  weight.classList.add('label');
  weight.innerHTML = `Weight:`;
  const weightSpec = document.createElement("span");
  weightSpec.classList.add('value');

  const selected = document.getElementById("machine").value;
  machines.forEach(item => {
    if (item.brand === selected) {
      name.textContent = item.name;
      needlesSpec.innerHTML = `${item.needles}`;
      speedSpec.innerHTML = `${item.speed}`;
      sewDimsSpec.innerHTML = `${item.sewDims}`;
      capDimsSpec.innerHTML = `${item.capDims}`;
      widthSpec.innerHTML = `${item.width}`;
      heightSpec.innerHTML = `${item.height}`;
      depthSpec.innerHTML = `${item.depth}`;
      weightSpec.innerHTML = `${item.weight}`;
      specList.appendChild(name);
      specList.appendChild(needles);
      specList.appendChild(needlesSpec);
      specList.appendChild(speed);
      specList.appendChild(speedSpec)
      specList.appendChild(sewDims);
      specList.appendChild(sewDimsSpec);
      specList.appendChild(capDims);
      specList.appendChild(capDimsSpec);
      specList.appendChild(width);
      specList.appendChild(widthSpec);
      specList.appendChild(height);
      specList.appendChild(heightSpec);
      specList.appendChild(depth);
      specList.appendChild(depthSpec);
      specList.appendChild(weight);
      specList.appendChild(weightSpec);
    }
 })
});