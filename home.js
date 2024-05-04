document.addEventListener('DOMContentLoaded', function() {
    var timeOfDay = new Date().getHours();
    var greeting = '';
    if (timeOfDay < 12) {
        greeting = 'Morning';
    } else if (timeOfDay < 18) {
        greeting = 'Afternoon';
    } else {
        greeting = 'Evening';
    }
    document.getElementById('HariIni').innerText = greeting;

    function updateTime() {
        var now = new Date();
        var dateStr = now.toDateString();
        var timeStr = now.toLocaleTimeString();
        document.getElementById('Time').innerText = dateStr + ' ' + timeStr;
    }
    updateTime(); // Initial call
    setInterval(updateTime, 1000);
});
