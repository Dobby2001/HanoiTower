// To print a new disk
function printDisk(n){
  //console.log("");
  var div;
  var varWidth = 0.2;
  //console.log("varWidth" + " = " + varWidth);
  for(let i = 1; i<= n; i++) {
    // Create a new div
    div = document.createElement('div');
    // Print the i-th number
    div.innerHTML = i;
    // Add class
    div.classList.add("disk");
    // Add id
    div.id = "Disk" + i;
    // Insert div
    document.getElementById('DiskA').appendChild(div);

    // To increase width of div
    varWidth += 0.4;
    document.getElementById("Disk" + i).style.width = varWidth + "cm";
    //console.log("varWidth" + i + " = " + varWidth);
  }
  return varWidth;
}
// classList: https://www.delftstack.com/it/howto/javascript/javascript-add-class/#:~:text=Se%20vuoi%20aggiungere%20una%20classe%20a%20un%20dato,per%20farlo%20%C3%A8%20ottenerlo%20usando%20il%20suo%20id.

// Podition of disk
function positionDisk(n, varHeight){
  //document.getElementById("DiskA").style.bottom = -(n * varHeight + 0.3) + "cm";
}

// To print the base of Towers of Hanoi
function baseTowers(n, varWidth) {
  //console.log("varWidth = " + varWidth);
  varWidth = varWidth * 3 + 1.5;
  //console.log("varWidth = " + varWidth);

  document.getElementById("Base").style.width = varWidth + "cm";
}

function heightTowers(n, varWidth, varHeight){
  const nTowers = 3;
  for(let i = 1; i <= nTowers; i++){
    document.getElementById("heightDisks" + i).style.width = (varWidth + 0.3) + "cm";
    document.getElementById("Height" + i).style.height = (n * varHeight + 0.3) + "cm";
    document.getElementById("Height" + i).style.width = 0.4 + "cm";
    document.getElementById("Height" + i).innerHTML = "" + i;
  }
}

function drawTowers(){
  let n = document.getElementById("HanoiNumber").value;
  let varHeight = 0.6;
  var varWidth;

  varWidth = printDisk(n);
  //console.log("varWidth = " + varWidth);
  positionDisk(n, varHeight)
  heightTowers(n, varWidth, varHeight);
  baseTowers(n, varWidth);
}



//---------------------------------------------------------------
// To solve Tower of Hanoi
var move = 1;
function hanoi(){
  let n = document.getElementById("HanoiNumber").value;
  let fromRod = 'A';
  let toRod = 'C';
  let usingRod = 'B';

  towerOfHanoi(n, fromRod, toRod, usingRod);
  
  //for(let i = 1; i<=n; i++){
  //  widthRemove = deleteHanoiDisk(i);
  //  printDisks(i, 'B', widthRemove);
  //}
}

function towerOfHanoi(n, fromRod, toRod, usingRod){
  let widthRemove;

  if (n==1) {
    printMove(n, fromRod, toRod);
    widthRemove = deleteHanoiDisk(n);
    printDisks(n, toRod, widthRemove);
    move++;
    console.log(move);
    return
  }
  towerOfHanoi(n-1, fromRod, usingRod, toRod);
  console.log(move);
  printMove(n, fromRod, toRod);
  widthRemove = deleteHanoiDisk(n);
  printDisks(n, toRod, widthRemove);
  move++;
  towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

// To print the exact move
function printMove(n, fromRod, toRod){
  var p = document.createElement('p');
  
  p.innerHTML = "- Move " + move + ":\t Move disk " + n + " from " + fromRod + " to " + toRod + ".";
  console.log(p.innerHTML);
  document.getElementById('Solution').appendChild(p);
}

function deleteHanoiDisk(n){
  // Remove child
  var deleteChild = document.getElementById("Disk" + n);
  var widthRemove = deleteChild.style.width.valueOf();
  console.log(widthRemove);
  deleteChild.remove();

  return widthRemove;
}

function printDisks(n, toRod, varWidth){
  console.log(varWidth);
  var div;
  // Create a new div
  div = document.createElement('div');
  // Add class
  div.classList.add("disk");
  // Add id
  div.id = "Disk" + n;
  // Insert div
  console.log(div.id);
  console.log("Disk" + toRod);

  // Print the i-th number
  const textNode = document.createTextNode(n);
  div.appendChild(textNode);
  
  // Node before
  const blockDisks = document.getElementById("Disk" + toRod);
  blockDisks.insertBefore(div, blockDisks.children[0]);
  
  // To increase width of div
  document.getElementById("Disk" + n).style.width = varWidth;
  console.log("varWidth" + n + " = " + varWidth);

  //return varWidth;
}

// TODO: Correggi algoritmo
// TODO: Elimina i console.log
