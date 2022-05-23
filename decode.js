
function decode(text){
    if(text===''){
      alert('put some text');
      return;
    }
    text = window.atob(text);

    decodedstr = "";
    const key = parseInt(text[0]);
      for (let i = 1; i < text.length; i++) {
        if(text[i]==='.'){
          decodedstr+= ' ';
          continue;
        }
        let asciivalue = (text.charCodeAt(i)+key);
        newchar = String.fromCharCode(text.charCodeAt(i)-key);

        decodedstr+=newchar;
      }
      console.log(decodedstr)
      return decodedstr;
}

const decode_btn = document.getElementById('decode-button');
const input_text_field = document.getElementById('input-text-decode');
const output_container = document.getElementById('decoded-text-container');
decode_btn.addEventListener('click',()=>{
    const inputText = input_text_field.value;
    var decoded_text = decode(inputText);
   
    if(decoded_text){
    output_container.innerText= decoded_text;
    output_container.style.display='block'
    }
})
input_text_field.addEventListener('focus',()=>{
  input_text_field.value="";
  output_container.style.display='none';
})