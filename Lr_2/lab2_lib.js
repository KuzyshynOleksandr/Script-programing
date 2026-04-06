function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];
    if (!classes.includes(cls)) {
        classes.push(cls);
        obj.className = classes.join(' ');
    }
}

function arraySort(arr) {
    return [...arr].sort();
}
