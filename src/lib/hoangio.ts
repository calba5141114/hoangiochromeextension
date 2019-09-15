/**
 * 
 * @param name - Name of Professor
 * @param school - Name of School
 * @param data - JSON data
 */
function HoangioOverlay(name: String, school: String, data: any): HTMLElement {
    const container = document.createElement("div")
    container.setAttribute("class", "hoangio-overlay")
    container.style.display = "block"
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener('click', (_) => {
        container.style.display = "none";
    });
    container.appendChild(button)
    return container;
}

/**
 * 
 * @param name - Name of professor
 * @param school - Name of School
 */
export function HoangioButton(name: String, school: String, sibling: Element): void {
    const button = document.createElement("button");
    button.setAttribute("class", "hoangio-button")
    button.innerText = "Hoangio";
    button.addEventListener('click', (_) => {
        const overlay = HoangioOverlay(name, school, {});
        sibling.parentNode.appendChild(overlay);
    })
    sibling.parentNode.appendChild(button);
}