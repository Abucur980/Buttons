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
    allButtons.forEach((btn, ini)=> {
        btn.addEventListener('click', (e) => {
            console.log(e.target + " " + ini);
            if (ini === theLuckyOne) {
                allButtons[ini].classList.remove('btn-warning');
                allButtons[ini].classList.add('btn-success');
            } else {
                allButtons[ini].classList.add('btn-danger');
                setTimeout(()=>{
                    allButtons[ini].classList.remove('btn-danger');
                }, 350);
            }
        });
    });
}

