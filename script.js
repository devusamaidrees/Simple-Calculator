let string=""
let temp
let i="1"
let buttons=document.querySelectorAll(".btn")
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if (e.target.innerHTML=="=") {
            let lastindex=string.length-1
            if(string[lastindex] == "²")
            {
                string = string.slice(0,-1);
                document.querySelector('.input_text').value = string;
                string=string*string
            }
            else if(string[lastindex] == "³")
                {
                    string = string.slice(0,-1);
                    document.querySelector('.input_text').value = string;
                    string=string*string*string
                }
                for(let arr=0;arr<string.length-1;arr++){
                    if(string[arr]=="x") {
                        string=string.replaceAll("x","*");
                    }
                    else if (string[arr]=="÷") {
                        string=string.replaceAll("÷","/")
                    }
                }
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
            string = string.slice(0,-1);
            document.querySelector('.input_text').value = string;
            i="1"
        }        
        else if (e.target.innerHTML=="x²") {
            if(i=="1"){
            string=string+"²"
            document.querySelector('.input_text').value=string
            i="0"
        }
        }
        else if (e.target.innerHTML=="x³") {
            if(i=="1")
            {
            string=string+"³"
            document.querySelector('.input_text').value=string
            i="0"
            }
    }
        else if (e.target.innerHTML=="x") {
            if (i=="0") {
                string=temp
            }
            else{
        string=string+"x"
        document.querySelector('.input_text').value=string
            }
        }
        else if (e.target.innerHTML=="÷") {
            if (i=="0") {
                string=temp
            }
            else{
            string=string+"÷"
            document.querySelector('.input_text').value=string
            }
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
