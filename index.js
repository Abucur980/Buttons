document.getElementById('button').addEventListener('click', addButtons);

function addButtons() {
    // get the value from input
    let nButtons = document.getElementById('numOfButtons').value;
    // hide start button after it was clicked and make input readonly to avoid further editing
    this.style.display = 'none';
    document.getElementById('numOfButtons').setAttribute('readonly', 'true');
    // generate n buttons
    for (let i = 0; i < nButtons; ++i) {
        document.getElementById('buttonContainer').insertAdjacentHTML("beforeend", '<button type="button" class="button btn btn-warning btn-lg m-2">Button</button>');
    }
    // get all buttons with the class button
    var allButtons = document.querySelectorAll(".button");
    // generate the index for the lucky button
    let theLuckyOne = Math.floor(Math.random() * allButtons.length);
    // loop through the buttons and find the lucky one
    allButtons.forEach((btn, i)=> {
        btn.addEventListener('click', () => {
            if (i === theLuckyOne) {
                allButtons[i].textContent = "Correct!";
                allButtons[i].classList.remove('btn-warning');
                allButtons[i].classList.add('btn-success');
            } else {
                allButtons[i].classList.add('btn-danger');
                allButtons[i].textContent = "Wrong!";
                setTimeout(()=>{
                    allButtons[i].textContent = "Button";
                    allButtons[i].classList.remove('btn-danger');
                }, 350);
            }
        });
    });
}

