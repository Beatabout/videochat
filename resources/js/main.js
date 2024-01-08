import './bootstrap';

'use strict';

let callBtn = $('#callBtn');

let pc;
let sendTo = callBtn.data('user');
let localStream;

const localVideo = document.querySelector('#localVideo');
const remoteVideo = document.querySelector('#remoteVideo');

const mediaConst = {
    video: true
}

function getConn(){
    if(!pc){
        pc = new RTCPeerConnection();
    }
}

async function getCams(){
    let mediaStream;
    try{
        if(!pc){
            await getConn();
        }
        mediaStream = await navigator.mediaDevices.getUserMedia(mediaConst);
        localVideo.srcObject = mediaStream;
        localStream = mediaStream;

        localVideo.style.transform = 'scaleX(-1)';

        localStream.getTracks().forEach(track => {
            pc.addTrack(track, localStream);
        });

    }catch(err){
        console.log(err);
    }
}

$('#callBtn').on('click', () => {
    getCams();
});


Echo.channel('your-channel')
    .listen('StartVideoChat', (data) => {
        switch (data.type) {
            case 'incomingCall':
                handleIncomingCall(data);
                break;
            case 'callAccepted':
                handleCallAccepted(data);
                break;
        }
    });

function handleIncomingCall(data) {
    // Виконати дії для вхідного виклику
    console.log('Incoming Call from user ' + data.from);
}

function handleCallAccepted(data) {
    // Виконати дії для прийнятого виклику
    console.log('Call accepted by user ' + data.to);
}


// function send(type, data, sendTo){
//     ajax({
//         url: '/send',
//         method: 'POST',
//         data: {
//             type,
//             data,
//             sendTo
//         }
//     });
// }