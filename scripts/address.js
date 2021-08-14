let button = document.querySelectorAll("button");
for (let j = 0; j < button.length; j++) {
    button[j].addEventListener("click", function (e) {
        e.preventDefault();
        let inputs = document.querySelectorAll("input");
        let isinputFilled = true;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == "") {
                isinputFilled = false;
            }
        }

        let select = document.querySelectorAll("select");
        let isSelectFilled = true;
        for (let i = 0; i < select.length; i++) {
            if (select[i].value == "") {
                isSelectFilled = false;
            }
        }

        if (isSelectFilled && isinputFilled) {
            window.location.href = "debit.html";
        } else {
            alert("Please fill all spaces");
        }
    });
}