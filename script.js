let digits = document.querySelectorAll(".digit")
let display = document.querySelector(".display")

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (digit.textContent === "C") {
            display.textContent = ""
        }

        else if (digit.textContent === "⌫") {
            display.textContent = display.textContent.slice(0, -1)
        }

        else if (digit.textContent === "=") {

            try {
                let expression = display.textContent.replace(/x/g, "*");
                display.textContent = eval(expression).toFixed(6);
            }

            catch {
                display.textContent = "Error"
                setTimeout(() => {
                    display.textContent = ""
                }, 2000);
            }
        }
        
        else {
            display.textContent += digit.textContent;
        }
    })
});


