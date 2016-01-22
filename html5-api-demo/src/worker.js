self.onmessage = ev => {
    let raw = ev.data.raw;

    self.postMessage({
        cooked: raw.sort((a, b) => a - b)
    });
}
