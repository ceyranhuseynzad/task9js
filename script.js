let ttl = document.querySelector(".title");
let athr = document.querySelector(".author");
let clr = document.querySelector(".color");

let btn = document.querySelector("button");
let table = document.querySelector("table");
let inputRadio = document.querySelectorAll("input[name='type']");
let dltBtn = document.querySelector(".delete")
let edtBtn = document.querySelector(".edit")

const data = {
    ttl1: "",
    athr1: "",
    typ1: "",

};

btn.addEventListener("click", () => {

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    inputRadio.forEach(element => {
        if (element.checked) {
            td3.innerText = element.value;
        }
    });
    if (data.ttl1 == ttl.value && data.ttl1 == ttl.value) {
        alert("Xanalari doldur");
    } else {

        if (ttl.value.trim() && athr.value.trim()) {
            data.ttl1 = ttl.value
            data.athr1 = athr.value
            td1.innerText = ttl.value;
            td2.innerText = athr.value;




            table.appendChild(tr);
            tr.append(td1, td2, td3)
            let btns = document.createElement("div")
            btns.style.display = "flex"
            btns.style.alignItems = "center"
            btns.style.gap="10px"
            tr.append(btns)

            let dltBtn = document.createElement("button");
            dltBtn.innerText = "Delete";
            dltBtn.addEventListener("click", () => {
                tr.remove();
                console.log("delete");
            });
            btns.appendChild(dltBtn);
            let edtBtn = document.createElement("button");
            edtBtn.innerText = "Edit";
            edtBtn.addEventListener("click", () => {
                td1.innerHTML = `<div class="blok1"><input type="text" class="input1" value="${td1.innerText}"><button class="save1">save</button></div>`;
                td2.innerHTML = `<div class="blok1"><input type="text" class="input2" value="${td2.innerText}"><button class="save2">save</button></div>`;
                td3.innerHTML = `
                <div class="blok2"><input type="radio" name="type" checked value="Psychology">
<label for="psychology">Psychology</label></div>
<div class="blok2"> <input type="radio" name="type" value="Drama">
<label for="drama">Drama</label></div>
<div class="blok2"><input type="radio" name="type" value="Motivation">
<label for="motivation">Motivation</label></div>  
<div class="blok3"><button class="save3">save</button></div>
`;
                let blok1 = document.querySelectorAll(".blok1")
                blok1.forEach(element => {
                    element.style.display = "flex"
                    element.style.alignItems = "center"
                })
                let blok2 = document.querySelectorAll(".blok2")
                blok2.forEach(element => {
                    element.style.display = "flex"
                    element.style.alignItems = "center"
                })
                let savebtn1 = document.querySelector(".save1");
                let savebtn2 = document.querySelector(".save2");
                let savebtn3 = document.querySelector(".save3");
                let input11 = document.querySelector(".input1");
                let input12 = document.querySelector(".input2");


                savebtn1.addEventListener("click", () => {
                    td1.innerText = input11.value;
                });

                savebtn2.addEventListener("click", () => {
                    td2.innerText = input12.value;
                });
                savebtn3.addEventListener("click", () => {
                    let radiobtns = document.querySelectorAll("input[name='type']")
                    radiobtns.forEach(element => {
                        if (element.checked) {
                            td3.innerText = element.value;
                        }
                    });
                });
            });

            btns.appendChild(edtBtn);
            ttl.value = "";
            athr.value = "";

        }
    }




    if (clr.value.trim()) {
        let clr1 = clr.value;
        console.log(clr1);
        tr.style.backgroundColor = clr1;
    }
    clr.value = ""
});