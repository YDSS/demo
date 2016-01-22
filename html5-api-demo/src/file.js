let $file =  document.getElementById('file');
let $output = document.getElementById('output');

function init() {
    $file.addEventListener('change', handleChange, false);
}

function handleChange(ev) {
    let files = $file.files[0];
    let reader = new FileReader();
    let fileType = files.name.match(/\.(\w+)$/)[1];

    if (/(png|jpe?g)/.test(fileType)) {
        reader.readAsDataURL(files);
    }
    else {
        reader.readAsText(files, 'utf-8');
    }

    reader.onerror = err => {
        console.log(err.message);
    }

    reader.onprogress = ev => {
        console.log('on progress...\n');
        if (ev.lengthComputable) {
            console.log(`progress: ${Math.round(ev.loaded / ev.total) * 100}%`); 
        }
    }

    reader.onload = () => {
        $output.textContent = reader.result; 
    }
}

init();
