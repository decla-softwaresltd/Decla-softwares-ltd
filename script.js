(function () {
    var pages = document.querySelectorAll('.page'), links = document.querySelectorAll('nav a');
    function show() {
        var id = (location.hash || '#home').slice(1);
        if (!document.getElementById(id)) id = 'home';
        pages.forEach(function (p) { p.classList.toggle('on', p.id === id) });
        links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + id) });
        window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', show); show();
    document.getElementById('y').textContent = new Date().getFullYear();
    document.getElementById('f').addEventListener('submit', function (ev) {
        ev.preventDefault();
        var b = 'Name: ' + n.value + '\nEmail: ' + e.value + '\nService: ' + s.value + '\n\n' + m.value;
        location.href = 'mailto:declasoftwaresltd@gmail.com?subject=' + encodeURIComponent('Website enquiry: ' + s.value) + '&body=' + encodeURIComponent(b);
        document.getElementById('ok').textContent = 'Opening your email app. If nothing opens, email us directly at declasoftwaresltd@gmail.com.';
    });
})();