document.getElementById('button').addEventListener('click', addButtons);

function addButtons() {
    let nButtons = document.getElementById('numOfButtons').value;
    // console.log("am intrat in functie" + nButtons);
    for (let i = 0; i < nButtons; ++i) {
        // console.log("it loops " + nButtons);
        document.getElementById('buttonContainer').insertAdjacentHTML("beforeend", '<button type="button" class="button btn btn-warning btn-lg m-2">Button</button>');
    }
    let allButtons = document.querySelectorAll(".button");
    let theLuckyOne = Math.floor(Math.random() * allButtons.length);
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

