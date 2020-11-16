console.log('heyyy')
const windowWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const horizontalWindows = 5;
const verticalWindows = 5;

function createGrid(hWin, vWin) {
  for (var i = 0; i < vWin; i += 1) {
    console.log('h', i);
    createRow(i)
    for (var j = 0; j < hWin; j += 1) {
      console.log('v', j);
      createWindowEl(i, j)
    }
  }
}

// createGrid(horizontalWindows, verticalWindows);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createRow(rowNum) {
  var row = document.createElement("div");
  const height = windowHeight / verticalWindows;
  const width = windowWidth / horizontalWindows;
  row.id = `row-${rowNum}`;
  row.style.width = `100vw`;
  // row.style.display = 'block';
  row.style.height = `20vh`;
  // row.style.boxSizing = 'border-box';
  document.getElementById("main").appendChild(row);
}

function handleClick(e) {
  console.log('CLICK', e.target)
  const imgs = document.getElementsByClassName('bg');
  for (let img of imgs) {
    // console.log('link', link);
    img.classList.toggle('clicked');
  }
  // container.classList.add('clicked');
  // e.target.classList.add('clicked')
}

// div.addEventListener("click", handleClick);


function createWindowEl(rowNum, colNum) {
  var div = document.createElement("div");
  const width = 100 / horizontalWindows;
  // const height = windowHeight / verticalWindows;
  console.log('width', width)
  div.id = `window-${colNum}`;
  div.style.width = `${width}vw`;
  // div.style.height = `100%`;
  // div.style.height = '100%';
  // div.style.display = 'inline-block';
  // div.style.boxSizing = 'border-box';
  div.style.background = getRandomColor();
  // div.style.color = "white";
  div.innerHTML = "Hello";
  div.classList.add('baseDiv')

  div.addEventListener("click", handleClick);


  document.getElementById(`row-${rowNum}`).appendChild(div);
}

const nav = document.getElementById('nav');
nav.addEventListener('mouseover', changeDefOver);
// nav.addEventListener('mouseenter', changeDefOver);
nav.addEventListener('mouseout', changeDefOut);
nav.addEventListener("click", handleClick);
const links = document.getElementsByClassName('link');

function changeDefOver(e) {
  // console.log('over event', links, e)
  // const links = document.getElementsByClassName('link');
  nav.classList.add('shake');
  for (let link of links) {
    // console.log('link', link);
    link.classList.toggle('opacity-toggle');
  }
  // links.forEach((l) => {
  //   l.classList.toggle('opacity-toggle');
  // })
}

function changeDefOut(e) {
  // setTimeout(() => {
    // nav.classList.remove('shake');
  // }, 2000)
  // nav.classList.remove('shake');
  for (let link of links) {
    console.log('link', link);
    link.classList.toggle('opacity-toggle');
  }
  // console.log('out event', e)
  // const links = document.getElementsByClassName('link');
  // links.forEach((l) => {
  //   l.classList.toggle('opacity-toggle');
  // })
  // e.target.classList.toggle('opacity-toggle');
}
// function handleHover(e) {
//   console.log('hover', e)
//   const links = document.getElementsByClassName('link')
//   links.forEach((link) => {
//     link.classList.add('fadeIn');
//   })
// }
// nav.addEventListener('hover', handleHover);

// console.log(width, height);