function setTime(time) {
    const input = document.getElementById('date');
    input.value = new Date(Number.parseInt(time));
}

fetch('https://test3.shabbarlabs.com/api/time').then(res=>res.text).then(text=>setTime);