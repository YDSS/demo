function isSupportHidden() {
    return typeof (document.hidden || document.msHidden
                   || document.webkitHidden) !== 'undefined';
}

function init() {
    if (isSupportHidden()) {
        document.addEventListener('visibilitychange', handleVisibility, false);
    }
}

function handleVisibility() {
    let $output = document.getElementById('output');

    if (document.hidden || document.msHidden || document.webkitHidden) {
        $output.textContent = 'hidden';
        console.log('hidden');
    }
    else {
        $output.textContent = 'visible';
        console.log('visible');
    }
    console.log('visibilityState: ' + document.visibilityState);
}

init();
