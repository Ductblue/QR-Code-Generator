const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const genBtn=document.getElementById('generateBtn');
const downBtn=document.getElementById('downloadBtn');

const qrCont=document.querySelector('.qr-body');

let s=sizes.value;
genBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmpty();
});

sizes.addEventListener('change',(e)=>{
    s=e.target.value;
    isEmpty();
});

downBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr=img.getAttribute('src');
        downBtn.setAttribute("href",imgAtrr);
    }
    // else{
    //     downBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    // }
});

function isEmpty(){
    if(qrText.value.length>0){generateQRCode();}
    else{
        alert("Enter the text or URL to generate the QR code");
    }
}

function generateQRCode(){
    qrCont.innerHTML = "";
    const size = parseInt(sizes.value); // Get and convert from dropdown directly
    new QRCode(qrCont, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000"
    });
}
