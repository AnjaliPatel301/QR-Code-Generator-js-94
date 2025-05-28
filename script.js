const qrButton=document.querySelector('#qr-button');
const qrInput=document.querySelector('#qr-input');
const qrImage=document.querySelector('#qr-image');

qrButton.addEventListener('click',function(){
    const qrinputType = qrInput.value;
    console.log(qrinputType)
    if(! qrinputType){
        alert('Please enter your valid URL');
        return;
    }
    else{
qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinputType}`;
qrImage.alt= `QR Code for ${qrinputType}`

    }
})