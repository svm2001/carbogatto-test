export default function smoothScrolling() {
    const anchors = document.querySelectorAll('[data-smooth-scrolling*="#"]')

    if (!anchors.length) return

    document.addEventListener('click', event => {
        const el = event.target

        if (el.closest('[data-smooth-scrolling*="#"]')) {
            event.preventDefault()
            const anchor = el.closest('[data-smooth-scrolling*="#"]')

            const blockID = anchor
                .getAttribute('data-smooth-scrolling')
                .substr(1)

            if(window.innerWidth <= 1200) {
                document
                    .querySelector(`[data-smooth-scrolling="${blockID}"]`)
                    .scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
            }
        }
    })
}
