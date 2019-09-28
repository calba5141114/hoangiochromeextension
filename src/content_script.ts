import { HoangioComponentFactory } from './lib/hoangio';

// ternary for de anza
(window.location.href.includes("deanza.edu")) ? (() => {
    document
            .querySelectorAll(`a[href*="/directory/user.html?u="]`)
            .forEach((el, key) => {
                const { render } = HoangioComponentFactory(el.textContent, "De Anza College", el);
                render();
            })
})() : null;

// ternary for foothill
(window.location.href.includes("foothill.edu")) ? (() => {
        document
            .querySelectorAll(`a[href*="/directory/directory.html?name="]`)
            .forEach((el, key) => {
                const { render } = HoangioComponentFactory(el.textContent, "Foothill College", el);
                render();
            });
})() : null;