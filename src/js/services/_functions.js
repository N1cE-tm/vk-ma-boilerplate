import {store} from "../../index";
import {config} from "../../config";

export const smoothScrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 30) {
        return;
    }

    if (c > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

export const restoreScrollPosition = () => {
    let scrolls = store.getState().vkui.componentScroll;

    Object.keys(scrolls).forEach((component) => {
        let componentData = scrolls[component];

        let element = document.getElementById(component);

        if (element) {
            element = element.getElementsByClassName("HorizontalScroll__in")[0];

            element.scrollLeft = componentData.x;
            element.scrollTop = componentData.y;
        }
    });
};

export const routerUrl2State = (url) => {
    const {hash} = url;
    const _url = {path: hash.substr(2)};
    const _SVP = config.routes.find(el =>  el.pretty === _url.path) || _url;
    const SVP = _SVP.path.split('/');
    const activeStory = SVP[0] || config.startStory;
    const activeView = SVP[1] || config.startView;
    const activePanel = SVP[2] || config.startPanel;

    return {
        activeStory,
        activeView,
        activePanel
    }
}

export const routerState2Url = (activeStory, activeView, activePanel) => {
    const _url = {pretty: [activeStory, activeView, activePanel].join('/')};
    const _SVP = config.routes.find(el =>  el.path === _url.pretty) || _url;

    return ['#',  _SVP.pretty].join('/');
}