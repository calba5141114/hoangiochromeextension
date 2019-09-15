import { HoangioButton } from './lib/hoangio';

if (window.location.href.includes("deanza.edu")) {
    document
        .querySelectorAll(`a[href*="/directory/user.html?u="]`)
        .forEach((el, key) => {
            console.log(key);
            HoangioButton(el.textContent, "De Anza College", el);
        })
}
else if (window.location.href.includes("foothill.edu")) {
    document
        .querySelectorAll(`a[href*="/directory/directory.html?name="]`)
        .forEach((el, key) => {
            console.log(key);
            HoangioButton(el.textContent, "Foothill College", el);
        })
}