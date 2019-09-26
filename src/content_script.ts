import { HoangioComponentFactory } from './lib/hoangio';

if (window.location.href.includes("deanza.edu")) {
    try {
        document
            .querySelectorAll(`a[href*="/directory/user.html?u="]`)
            .forEach((el, key) => {
                const { render } = HoangioComponentFactory(el.textContent, "De Anza College", el);
                render();
            })
    } catch (error) {
        console.error(error);
        alert("Hoangio failed to render.")
    }
}
else if (window.location.href.includes("foothill.edu")) {
    try {
        document
            .querySelectorAll(`a[href*="/directory/directory.html?name="]`)
            .forEach((el, key) => {
                const { render } = HoangioComponentFactory(el.textContent, "Foothill College", el);
                render();
            });
    }
    catch (error) {
        console.error(error);
        alert("Hoangio failed to render.")
    }
}