// This function expects RGB as separate characters.
function rgbToHex(r, g, b) {
  // Convert each color component to a hexadecimal string
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  };

  // Combine the hex strings for red, green, and blue
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

// This function expects an RGB string rgb(#,#,#)
function rgbStringToHex(rgbString) {
  // Extract the numeric values for red, green, and blue using regex
  const [_, r, g, b] = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

  // Convert each color component to a hexadecimal string
  const toHex = (c) => {
    const hex = parseInt(c).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  };

  // Combine the hex strings for red, green, and blue
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const result = rgbStringToHex(element.innerHTML);
        element.innerHTML = result;
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const result = rgbStringToHex(element.innerHTML);
        element.innerHTML = result;
    }
});

*/