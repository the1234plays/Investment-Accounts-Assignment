// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");
let maxOut = document.getElementById("output2");
let minOut = document.getElementById("output3");

// Global Variable
let accounts = [];
for (let n = 1; n <= 200; n++) {
  accounts.push(Math.random() * 5000)
}
let maxAmount = 5000; // account values should be b/t 0 and max

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive

  outputEl.innerHTML = "Count Range";

  let count = 0;

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] > 2000 && accounts[i] < 4000) {
      count++
    }
  }
  outputEl.innerHTML = count
}


function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.

  outputEl.innerHTML = "Generous Donor";
  let count = 0;

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {



      accounts[i] += 500;
      count += 500;

    }
  }
  outputEl.innerHTML = count

}




function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.

  outputEl.innerHTML = "Hacker Attack";
  count = 0;
  for (let i = 0; i < accounts.length; i++) {

    accounts[i] -= percentage = 5 / 100 * 100;
    count -= percentage = 5 / 100 * 100;
  }
  outputEl.innerHTML = count;
}


function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.
  let total = 0;
  for (var i = 0; i < accounts.length; i++) {
    total += accounts[i];
  }
  let avg = total / accounts.length;

  outputEl.innerHTML = avg
  maxOut.innerHTML = Math.max(...accounts);
  minOut.innerHTML = Math.min(...accounts);

}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.

  outputEl.innerHTML = "Add Account";

  let promptThing = prompt("how much would you like to add?");
  accounts.splice(accounts.length, 1, promptThing);
  outputEl.innerHTML = "";
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.

  outputEl.innerHTML = "Remove Low Accounts";
  let count = 0;

  for (let i = 0; i < accounts.length; i++) {
    while (accounts[i] < 500) {
      accounts.splice(i, 1)
      count++

    }
  }
  outputEl.innerHTML = count

}


function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.

  outputEl.innerHTML = "Robin Hood";

  let count = 0;
  let total = 0;

  for (var i = 0; i < accounts.length; i++) {
    total += accounts[i];

    if (accounts[i] > 4000) {



      accounts[i] -= 400;
      var tot = accounts[i]

      // accounts[i] < 1000
      //   let amount = tot / accounts.length ;
      //   accounts[i] += amount
      //   count++


    } else if (accounts[i] < 1000) {
      let amount = tot / accounts.length;
      accounts[i] += amount;
      count = amount;
      total++


    } else {
      
    }


  }

  outputEl.innerHTML = count
  output2.innerHTML = total
}







