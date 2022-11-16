const ISSERVER = typeof window === "undefined"; // Prevents defined error

// This will hold all the different japanese values for the keyboard keys
function japaneseInputs(parent) {
  var keyChar;

  //! Special
  // `
  if (parent.keyCode === 192) {
    parent.preventDefault();
    keyChar = "ろ";
    document.getElementById("searchIpt").value += keyChar;
  }
  // -
  if (parent.keyCode === 189) {
    parent.preventDefault();
    keyChar = "ほ";
    document.getElementById("searchIpt").value += keyChar;
  }
  // =
  if (parent.keyCode === 187) {
    parent.preventDefault();
    keyChar = "へ";
    document.getElementById("searchIpt").value += keyChar;
  }
  // [
  if (parent.keyCode === 219) {
    parent.preventDefault();
    keyChar = "゛";
    document.getElementById("searchIpt").value += keyChar;
  }
  // ]
  if (parent.keyCode === 221) {
    parent.preventDefault();
    keyChar = "゜";
    document.getElementById("searchIpt").value += keyChar;
  }
  // ]
  if (parent.keyCode === 220) {
    parent.preventDefault();
    keyChar = "む";
    document.getElementById("searchIpt").value += keyChar;
  }
  // ]
  if (parent.keyCode === 222) {
    parent.preventDefault();
    keyChar = "け";
    document.getElementById("searchIpt").value += keyChar;
  }
  // ;
  if (parent.keyCode === 186) {
    parent.preventDefault();
    keyChar = "れ";
    document.getElementById("searchIpt").value += keyChar;
  }
  // ,
  if (parent.keyCode === 188) {
    parent.preventDefault();
    keyChar = "ね";
    document.getElementById("searchIpt").value += keyChar;
  }
  // .
  if (parent.keyCode === 190) {
    parent.preventDefault();
    keyChar = "る";
    document.getElementById("searchIpt").value += keyChar;
  }
  // /
  if (parent.keyCode === 191) {
    parent.preventDefault();
    keyChar = "め";
    document.getElementById("searchIpt").value += keyChar;
  }

  //! Numbers and Letters
  // 1
  if (parent.keyCode === 49) {
    parent.preventDefault();
    keyChar = "ぬ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // 2
  if (parent.keyCode === 50) {
    parent.preventDefault();
    keyChar = "ふ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // 3
  if (parent.keyCode === 51) {
    parent.preventDefault();
    keyChar = "あ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // A
  if (parent.keyCode === 65) {
    parent.preventDefault();
    keyChar = "ち";
    document.getElementById("searchIpt").value += keyChar;
  }

  // B
  if (parent.keyCode === 66) {
    parent.preventDefault();
    keyChar = "こ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // C
  if (parent.keyCode === 67) {
    parent.preventDefault();
    keyChar = "そ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // D
  if (parent.keyCode === 68) {
    parent.preventDefault();
    keyChar = "し";
    document.getElementById("searchIpt").value += keyChar;
  }

  // E
  if (!parent.shiftKey) {
    if (parent.keyCode === 69) {
      parent.preventDefault();
      keyChar = "い";
      document.getElementById("searchIpt").value += keyChar;
    }
  }

  // F
  if (parent.keyCode === 70) {
    parent.preventDefault();
    keyChar = "い";
    document.getElementById("searchIpt").value += keyChar;
  }

  // G
  if (parent.keyCode === 71) {
    parent.preventDefault();
    keyChar = "き";
    document.getElementById("searchIpt").value += keyChar;
  }

  // H
  if (parent.keyCode === 72) {
    parent.preventDefault();
    keyChar = "く";
    document.getElementById("searchIpt").value += keyChar;
  }

  // I
  if (parent.keyCode === 73) {
    parent.preventDefault();
    keyChar = "に";
    document.getElementById("searchIpt").value += keyChar;
  }

  // J
  if (parent.keyCode === 74) {
    parent.preventDefault();
    keyChar = "ま";
    document.getElementById("searchIpt").value += keyChar;
  }

  // K
  if (parent.keyCode === 75) {
    parent.preventDefault();
    keyChar = "の";
    document.getElementById("searchIpt").value += keyChar;
  }

  // L
  if (parent.keyCode === 76) {
    parent.preventDefault();
    keyChar = "り";
    document.getElementById("searchIpt").value += keyChar;
  }

  // M
  if (parent.keyCode === 77) {
    parent.preventDefault();
    keyChar = "も";
    document.getElementById("searchIpt").value += keyChar;
  }

  // N
  if (parent.keyCode === 78) {
    parent.preventDefault();
    keyChar = "み";
    document.getElementById("searchIpt").value += keyChar;
  }

  // O
  if (parent.keyCode === 79) {
    parent.preventDefault();
    keyChar = "ら";
    document.getElementById("searchIpt").value += keyChar;
  }

  // P
  if (parent.keyCode === 80) {
    parent.preventDefault();
    keyChar = "せ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // Q
  if (parent.keyCode === 81) {
    parent.preventDefault();
    keyChar = "た";
    document.getElementById("searchIpt").value += keyChar;
  }

  // R
  if (parent.keyCode === 81) {
    parent.preventDefault();
    keyChar = "す";
    document.getElementById("searchIpt").value += keyChar;
  }

  // S
  if (parent.keyCode === 82) {
    parent.preventDefault();
    keyChar = "と";
    document.getElementById("searchIpt").value += keyChar;
  }

  // T
  if (parent.keyCode === 83) {
    parent.preventDefault();
    keyChar = "か";
    document.getElementById("searchIpt").value += keyChar;
  }

  // U
  if (parent.keyCode === 84) {
    parent.preventDefault();
    keyChar = "な";
    document.getElementById("searchIpt").value += keyChar;
  }

  // V
  if (parent.keyCode === 85) {
    parent.preventDefault();
    keyChar = "ひ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // W
  if (parent.keyCode === 86) {
    parent.preventDefault();
    keyChar = "て";
    document.getElementById("searchIpt").value += keyChar;
  }

  // X
  if (parent.keyCode === 87) {
    parent.preventDefault();
    keyChar = "さ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // Y
  if (parent.keyCode === 88) {
    parent.preventDefault();
    keyChar = "ん";
    document.getElementById("searchIpt").value += keyChar;
  }

  // Z
  if (parent.keyCode === 89) {
    parent.preventDefault();
    keyChar = "つ";
    document.getElementById("searchIpt").value += keyChar;
  }

  // Shifted
  if (parent.shiftKey) {
    //! Specials
    // -
    if (parent.keyCode === 192) {
      parent.preventDefault();
      keyChar = "ー";
      document.getElementById("searchIpt").value += keyChar;
    }
    // [
    if (parent.keyCode === 219) {
      parent.preventDefault();
      keyChar = "「";
      document.getElementById("searchIpt").value += keyChar;
    }
    // ]
    if (parent.keyCode === 221) {
      parent.preventDefault();
      keyChar = "」";
      document.getElementById("searchIpt").value += keyChar;
    }
    // ,
    if (parent.keyCode === 188) {
      parent.preventDefault();
      keyChar = "、";
      document.getElementById("searchIpt").value += keyChar;
    }
    // .
    if (parent.keyCode === 190) {
      parent.preventDefault();
      keyChar = "。";
      document.getElementById("searchIpt").value += keyChar;
    }
    // /
    if (parent.keyCode === 191) {
      parent.preventDefault();
      keyChar = "・";
      document.getElementById("searchIpt").value += keyChar;
    }

    //! Numbers and Letters
    // 3
    if (parent.keyCode === 51) {
      parent.preventDefault();
      keyChar = "ぁ";
      document.getElementById("searchIpt").value += keyChar;
    }

    // E
    if (parent.keyCode === 69) {
      parent.preventDefault();
      keyChar = "ぃ";
      document.getElementById("searchIpt").value += keyChar;
    }

    // Z
    if (parent.keyCode === 89) {
      parent.preventDefault();
      keyChar = "っ";
      document.getElementById("searchIpt").value += keyChar;
    }
  }
}

// This will cause every search feature to switch to japanese text when called
export default function SearchJPK() {
  if (!ISSERVER) {
    document.getElementById("searchIpt").addEventListener("keydown", (e) => {
      japaneseInputs(e);
    });
  }
}
