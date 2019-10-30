import * as Hammer from 'hammerjs';

const SOLRQueryGenerator = (name: String, school: String) => `https://search-production.ratemyprofessors.com/solr/rmp/select/?solrformat=true&rows=2000&wt=json&json.wrf=noCB&callback=noCB&q=${name}&qf=teacherfirstname_t%5E2000+teacherlastname_t%5E2000+teacherfullname_t%5E2000+teacherfullname_autosuggest&bf=pow(total_number_of_ratings_i%2C2.1)&sort=score+desc&defType=edismax&siteName=rmp&rows=2000&group=off&group.field=content_type_s&group.limit=2000&fq=schoolname_t%3A%22De+Anza+College%22`;

/**
 * 
 * @param name - Name of Professor
 * @param school - Name of School
 * @param data - JSON data
 */
const OverlayFactory = (name: String, school: String, data: any, sibling: Element): any => {
    
    const retrieve_scores = () => {

    }

    return {
        render: (): HTMLElement => {
            console.log(name, school, data);
            const container = document.createElement("div")
            container.setAttribute("class", "hoangio-overlay")
            container.style.display = "block"
            // Hammer JS touch functionality 
            const hammer = new Hammer(container);
            hammer.on('tap', ev => container.style.display = "none");
            return container;
        }
    }
};

/**
 * 
 * @param name - Name of professor
 * @param school - Name of School
 */
export const HoangioComponentFactory = (name: string, school: String, sibling: Element): any => ({
    render: () : void => {
        const button = document.createElement("button");
        button.setAttribute("class", "hoangio-button")
        button.innerText = "Hoangio";
        const overlay = OverlayFactory(name, school, {}, sibling);
        button.addEventListener('click', (_) => sibling.parentNode.appendChild(overlay.render()))
        sibling.parentNode.appendChild(button);
    }
});
