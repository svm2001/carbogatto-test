import lazyLoad from './modules/lazyload'
import preloader from 'preloader-js';
import smoothScrolling from "@/assets/scripts/modules/smoothScrolling.js";

export default function main() {
    lazyLoad()
    preloader.show()
    setTimeout(() => {
        preloader.hide()
    }, 1000)
    smoothScrolling()
}

