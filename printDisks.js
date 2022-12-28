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
  document.getElementById("DiskA").style.bottom = -(n * varHeight + 0.3) + "cm";
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
