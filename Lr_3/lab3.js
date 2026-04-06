function runTask6() {
    let now = new Date();
    let formattedDate = formatDate(now);
    
    document.getElementById('task6Result').innerHTML = "Результат: " + formattedDate;
}