// Task 1

function shiftDays(day, k) {
  if (typeof day === "string" && day.length == 3 && k > 0 && k < 500) {
    const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const indexOfDay = daysInWeek.indexOf(day);

    k = k > 7 ? k % 7 : k;
    k += indexOfDay;

    return daysInWeek.find((currElem, index) => {
      if (index === k) {
        return currElem;
      }
    });
  } else {
    console.log("Invalid Argument Passed");
    return 0;
  }
}

// Task 2
function isBalanced(str) {
  const uniqueChars = new Set(str);
  for (let char of uniqueChars) {
    if (
      (char.match(/[a-z]/) && !str.includes(char.toUpperCase())) ||
      (char.match(/[A-Z]/) && !str.includes(char.toLowerCase()))
    ) {
      return false;
    }
  }
  return true;
}

function makeCombinations(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 2; j <= str.length; j++) {
      const substring = str.substring(i, j);
      arr.push(substring);
    }
  }
  return arr;
}

function solution(str) {
  let minFragment = "";
  if (isBalanced(str)) {
    minFragment = str;
  } else {
    const possibleCombinations = makeCombinations(str);
    possibleCombinations.forEach((combination) => {
      if (isBalanced(combination) && combination.length > minFragment.length) {
        minFragment = combination;
      }
    });
  }
  minFragment = minFragment.length > 0 ? minFragment : -1;
  return minFragment;
}

// console.log(solution("azABaabza"));
// console.log(solution("TacoCat"));
// console.log(solution("AcZCbaBz"));
// console.log(solution("abcdefghijklmnopqrstuvwxyz"));
