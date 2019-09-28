import * as Hammer from 'hammerjs';

/**
 * 
 * @param name - Name of Professor
 * @param school - Name of School
 * @param data - JSON data
 */
const OverlayFactory = (name: String, school: String, data: any, sibling: Element): any => ({
    render: (): HTMLElement => {
        const container = document.createElement("div")
        container.setAttribute("class", "hoangio-overlay")
        container.style.display = "block"
        // Hammer JS touch functionality 
        const hammer = new Hammer(container);
        hammer.on('tap', ev => container.style.display = "none");
        return container;
    }
});

/**
 * 
 * @param name - Name of professor
 * @param school - Name of School
 */
export const HoangioComponentFactory = (name: string, school: String, sibling: Element): any => ({
    render: () => {
        const button = document.createElement("button");
        button.setAttribute("class", "hoangio-button")
        button.innerText = "Hoangio";
        const overlay = OverlayFactory(name, school, {}, sibling);
        button.addEventListener('click', (_) => sibling.parentNode.appendChild(overlay.render()))
        sibling.parentNode.appendChild(button);
    }
});
