export function tabs({
                         tabParentSelector,
                         tabHeaderSelector,
                         tabHeaderActiveClass,
                         tabItemSelector,
                         tabItemActiveClass,
                         event}) {
    const tabParent = document.querySelector(tabParentSelector);
    const tabHeaders = document.querySelectorAll(tabHeaderSelector);
    const tabItems = document.querySelectorAll(tabItemSelector);
    tabParent.addEventListener(event, (e) => {
        if (e.target && e.target.closest(tabHeaderSelector)) {
            tabHeaders.forEach((tabHeader, i) => {
                if (e.target === tabHeader || e.target.closest(tabHeaderSelector) === tabHeader) {
                    if (tabHeaderActiveClass) {
                        tabHeaders[i].classList.toggle(tabHeaderActiveClass);
                        tabHeaders.forEach(tabItem => {
                            tabItem.classList.remove(tabHeaderActiveClass);
                        })
                        tabHeaders[i].classList.add(tabHeaderActiveClass);
                    }
                    if(tabItemActiveClass) {
                        tabItems.forEach(tabItem => {
                            tabItem.classList.remove(tabItemActiveClass);
                        });
                        tabItems[i].classList.add(tabItemActiveClass);
                    }
                }
            });
        }
    });
}
export default tabs;
