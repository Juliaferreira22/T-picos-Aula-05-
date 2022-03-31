function percorrer() {
     let count = 0
     do {
     let para = document.createElement('p');
    para.textContent = count+ 1;
     document.body.appendChild(para);
     count ++;
    } while (count < 10);
    }
    function mostrarTexto(el) {
     var display = document.getElementById(el).style.display;
     if(display == "none")
    document.getElementById(el).style.display = 'block';
     else
     document.getElementById(el).style.display = 'none';
    }
    