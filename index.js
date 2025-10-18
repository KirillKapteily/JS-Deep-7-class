import {context} from "./context";
console.log(context);

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL('./l.hbs', window.location.href)
    fetch(url)
        .then(res => res.text())
        .then(hbsText => {
            const template = Handlebars.compile(hbsText);
            const colection = {
                titleCardName: 'Apps',
                textCardName: 'Firefox',
                imgCardName: './firefox.svg',
                imgCardAlt: 'firefox-ya'
            };
            const html = template(colection);
            document.getElementById('result').innerHTML = html;
        }).catch(err => console.error('Помилка завантаження шаблону:', err));
});
