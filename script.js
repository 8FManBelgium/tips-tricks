const video = document.getElementById('introVideo');
const photoshopButton = document.getElementById('photoshopButton');
const _3dsmaxButton = document.getElementById('3dsmaxButton');
const AIButton = document.getElementById('AIButton');
const windowsButton = document.getElementById('windowsButton');
const lessenButton = document.getElementById('lessenButton');



// Optional: handle click on the photoshop button
if (photoshopButton) {
    photoshopButton.addEventListener('click', () => {
        window.location.href = 'photoshop.html';
    });
}

// Optional: handle click on the 3ds Max button
if (_3dsmaxButton) {
    _3dsmaxButton.addEventListener('click', () => {
        window.location.href = '3dsmax.html';
    });
}

// Optional: handle click on the AI button
if (AIButton) {
    AIButton.addEventListener('click', () => {
        window.location.href = 'AI.html';
    });
}

// Optional: handle click on the Windows 11 button
if (windowsButton) {
    windowsButton.addEventListener('click', () => {
        window.location.href = 'windows.html';
    });
}

// Optional: handle click on the Lessen button
if (lessenButton) {
    lessenButton.addEventListener('click', () => {
        window.location.href = 'stemmen.html';
    });
}