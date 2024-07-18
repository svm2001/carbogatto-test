import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import debounce from 'lodash.debounce'
import tabs from "./tabs.js";

export default function slider () {
    gsap.registerPlugin(ScrollTrigger);
    const slider = document.querySelector('.slider');

    if(slider) {
        let navBtns = slider.querySelectorAll('.slider__nav-item'),
            resetBtn = document.querySelector('.back'),
            elements = document.querySelectorAll('.slider__slides-item'),
            mainClass = 'main',
            activeClass = 'active',
            inactiveClass = 'inactive',
            eventClick = 'click'
        if(window.innerWidth > 1200) {
            let horizontalSection = document.querySelector('.horizontal'),
                counter = 0,
                elementWidth = elements[counter].offsetWidth,

                isTagsEquals = () => {
                    if(elements[counter].hasAttribute('data-year')) {
                        const currentYear = elements[counter].getAttribute('data-year')
                        navBtns.forEach(btn => {
                            btn.classList.remove(activeClass)
                            btn.getAttribute('data-date') === currentYear
                                ? btn.classList.add(activeClass)
                                : btn.classList.remove(activeClass)
                        })
                    }
                },

                handleWheelScroll = debounce((e) => {
                    const deltaY = e.deltaY;
                    if (deltaY > 0) {
                        counter++;
                        const targetElement = elements[counter];
                        targetElement.previousElementSibling.classList.add(inactiveClass)
                        targetElement.classList.add(mainClass)
                        if (counter > elements.length - 1) counter = elements.length - 1
                    } else if (deltaY < 0) {
                        counter--;
                        const targetElement = elements[counter];
                        if(counter >= 0) setTimeout(() => {
                            targetElement.classList.remove(inactiveClass)
                            targetElement.nextElementSibling.classList.remove(mainClass)
                        }, 700)
                        if (counter < 0) counter = 0
                    }
                    const scrollX = -1 * counter * elementWidth;
                    setTimeout(() => {
                        gsap.to('.horizontal', {
                            x: scrollX,
                            duration: .7
                        });
                    }, 700),
                        isTagsEquals()
                }, 200)

            isTagsEquals()

            horizontalSection.addEventListener('wheel', handleWheelScroll);

            resetBtn.addEventListener(eventClick, () => {
                gsap.to('.horizontal', {
                    x: 0,
                    duration: .7
                });

                counter = 0

                navBtns.forEach(btn => {
                    btn.classList.remove(activeClass)
                })

                navBtns[0].classList.add(activeClass)
                elements.forEach(element => {
                    element.classList.remove(mainClass)
                    element.classList.remove(inactiveClass)
                })
            })
        } else {
            navBtns[0].classList.add(activeClass)

            document.querySelectorAll('.slider__slides-item--separator').forEach(item => {
                item.remove()
            })

            tabs({
                tabParentSelector: '.section',
                tabHeaderSelector: '.slider__nav-item',
                tabHeaderActiveClass: activeClass,
                event: eventClick
            })

            const cards = gsap.utils.toArray(".slider__slides-item");

            cards.forEach((card, index) => {
                const tween = gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: () => `33% 0%`,
                        end: () => `top top`,
                        scrub: true,
                        invalidateOnRefresh: true
                    },
                    ease: "none",
                    opacity: () => 0
                });

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                });
            });

            resetBtn.addEventListener(eventClick, () => {
                navBtns.forEach(btn => {
                    btn.classList.remove(activeClass)
                })
                navBtns[0].classList.add(activeClass)
            })
        }
    }
}