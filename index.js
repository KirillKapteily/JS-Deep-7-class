document.addEventListener('DOMContentLoaded', () => {
    fetch("l.hbs")
        .then(res => res.text())
        .then(hbsText => {
            const template = Handlebars.compile(hbsText);
            const colection = { apps: [{ titileCardName: 'Apps', textCardName: 'Firefox', imgCardName: './firefox.svg', imgCardAlt: 'firefox-ya' }] };
            const html = template(colection);
            document.getElementById('result').innerHTML = html;
        });
})
