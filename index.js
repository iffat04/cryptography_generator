//encode code
function encode(text){
    if(text===''){
      alert('Please Add some text');
      return;
    }
    let key = Math.floor((Math.random() * 4) + 1);
 
    encodedstr = key.toString();
    
      for (let i = 0; i < text.length; i++) {
        if(text[i]===' '){
          encodedstr+= '.';
          continue;
        }
        var asciivalue = (text.charCodeAt(i)+key);
        if(asciivalue>126){
          asciivalue= (asciivalue%126)+32;
        }
        var newchar = String.fromCharCode(asciivalue);
        encodedstr+= newchar;       
      }
      encodedstr = window.btoa(encodedstr);
      return encodedstr;
}
//..........//
const encode_btn = document.getElementById('encode-button');
const input_text_field = document.getElementById('input-text-encode');
const output_container = document.getElementById('encoded-text-container');
const copy_text_btn = document.getElementById('copy-text');

encode_btn.addEventListener('click',()=>{
    const inputText = input_text_field.value;
    var encoded_text = encode(inputText);
    if(encoded_text){
    output_container.innerText= encoded_text;
    output_container.style.display='block';
    copy_text_btn.style.display='block';
    }

})

input_text_field.addEventListener('focus',()=>{
  copy_text_btn.innerText='Copy Encoded Message';
  output_container.style.display='none';
  copy_text_btn.style.display='none';
  input_text_field.value ='';

})

//copy text to clipboard code
copy_text_btn.addEventListener('click',()=>{
  const copied_text = output_container.innerText;
  input_text_field.value ='';
  navigator.clipboard.writeText(copied_text);
  copy_text_btn.innerText='copied';
  //alert("Copied the text: " + copied_text);
})

