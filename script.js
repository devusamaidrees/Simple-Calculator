let string=""
let temp
let i="1"
let buttons=document.querySelectorAll(".btn")
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if (e.target.innerHTML=="=") {
            string=eval(string)
            document.querySelector('.input_text').value=string
            string=""
            i="1"
        }
       else if (e.target.innerHTML=="AC") {
            string=""
            document.querySelector('.input_text').value=string
            i="1"
        }
        else if (e.target.innerHTML == "Del") {
            string = string.slice(0, -1);
            document.querySelector('.input_text').value = string;
        }
        else if (e.target.innerHTML=="x²") {
            if(i=="1"){
            temp=string
            temp=temp+"²"
            document.querySelector('.input_text').value=temp
            string=string*string
            i="0"
        }
        }
        else if (e.target.innerHTML=="x³") {
            if(i=="1")
            {
            temp=string
            temp=temp+"³"
            document.querySelector('.input_text').value=temp
            string=string*string*string
            i="0"
            }
    }
        else if (e.target.innerHTML=="x") {
            if (i=="0") {
                string=temp
            }
        string=string+"*"
        document.querySelector('.input_text').value=string
        }
        else if (e.target.innerHTML=="÷") {
            if (i=="0") {
                string=temp
            }
            string=string+"/"
            document.querySelector('.input_text').value=string
            }
        else{
            if(i=="1")
            {
        console.log(e.target)
        string=string+e.target.innerHTML
        document.querySelector('.input_text').value=string
        }
    }
    })
})
