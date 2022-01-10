import * as Scroll from 'react-scroll';
const scroller = Scroll.scroller;

export const scrollToEle = (elementName: string) => {
    scroller.scrollTo(elementName, {
        duration: 500,
        delay: 100,
        smooth: true,
        // containerId: 'ContainerElementID',
        // offset: 50, // Scrolls to element + 50 pixels down the page
    })
}
