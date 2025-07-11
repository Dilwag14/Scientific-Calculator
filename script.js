const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const val = e.target.innerText;

        if (val === "AC") {
            string = "";
            input.value = "0";
        } else if (val === "=") {
            try {
                string = string.replace(/π/g, Math.PI);
                string = string.replace(/√/g, "Math.sqrt");
                string = string.replace(/log/g, "Math.log10");
                string = string.replace(/ln/g, "Math.log");
                string = string.replace(/sin/g, "Math.sin");
                string = string.replace(/cos/g, "Math.cos");
                string = string.replace(/tan/g, "Math.tan");
                string = string.replace(/\^/g, "**");

                input.value = eval(string);
                string = input.value;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else {
            if (input.value === "0" && val !== ".") {
                string = val;
            } else {
                string += val;
            }
            input.value = string;
        }
    });
});
