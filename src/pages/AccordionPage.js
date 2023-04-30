import Accordion from '../components/Accordion';

function AccordionPage(){
    const accordionData = [{
        id:'hdbshdjsnd',
        label:'Should I learn react and Angular both?',
        content:'No, Just learning one of them is enough.No, Just learning one of them is enough.No, Just learning one of them is enough.'
    },{
        id:'hdbshdjsnasasd',
        label:'Should I learn react and Angular both?',
        content:'No, Just learning one of them is enough.No, Just learning one of them is enough.No, Just learning one of them is enough.'
    },{
        id:'hdbshdjsnddds',
        label:'Should I learn react and Angular both?',
        content:'No, Just learning one of them is enough.No, Just learning one of them is enough.No, Just learning one of them is enough.'
    }]
    return <Accordion accordionData={accordionData}/>
};

export default AccordionPage;