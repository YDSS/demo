let $output = document.getElementById('output');

function init() {
    let nums = [12, 32, 56, 23, 19, 200, 34345, 123, 12345, 675];

    let worker = new Worker('./workder.bundle.js');

    worker.postMessage({
        raw: nums
    });

    worker.onmessage = ev => {
        let cooked = ev.data.cooked;
        $output.textContent = JSON.stringify(cooked);        
    }

    worker.onerror = err => {
        console.log(err);
    }
}

init();
