# Команды

Установка `npm i && npm run dev`
Разработка `npm run dev`
Форматирования кода `npm run format`
Для продакшена `npm run build`
Просмотр билда `npm run preview`

Алиас `@` - `./dev`

## Версии

-   Vite - ^4.4.5
-   NPM - > 9.7.2
-   node - > 20.4.0

## Предустановленные библиотеки

| Библиотека | Версия |  Документация |
| ------ | ------ | ------ |
| animejs | ^3.2.1 | https://animejs.com/documentation/ |
| axios | ^1.6.0 | https://axios-http.com/ru/docs/api_intro |
| imask | ^7.1.3 | https://imask.js.org/ |
| lightgallery | ^2.7.2 | https://www.lightgalleryjs.com/docs/getting-started/ |
| normalize.css | ^8.0.1 | https://github.com/necolas/normalize.css/ |
| nouislider | ^15.7.1 | https://refreshless.com/nouislider/ |
| scroll-lock | ^2.1.5 | https://github.com/FL3NKEY/scroll-lock |
| simplebar | ^6.2.5 | https://github.com/Grsmto/simplebar/tree/master/packages/simplebar |
| resize-observer-polyfill | ^1.5.1 | https://github.com/juggle/resize-observer |
| swiper | ^10.3.1 | https://swiperjs.com/swiper-api |
| vanilla-lazyload | ^17.8.4 | https://github.com/verlok/vanilla-lazyload |

## Скрипты

-   counter
-   customScrollbar
-   lazyload
-   modal
-   modalGallery
-   phoneMask
-   range
-   select
-   smoothScrolling
-   validate

## UI элементы

-   bread-crumbs
-   btn
-   checkbox
-   counter
-   input
-   radio
-   range
-   select
-   textarea
-   title

## Папки

Корневой папкой для разработки является `dev`
Папкой для продакшеня является `build`

Папка `public` нужна для хранения статичных файлов и папок. Vite переносить данные в этой папке без изменений. Чтобы получить путь до содержимого папки, нужно прописать путь вида `/images/image.png` в стилях и `./images/image.png`

Папка `assets` содержит все, что нужно для разработки - компоненты, иконки, шаблоны страниц, скрипты, стили и ui элементы

## Дефолтные страницы

В сборке зарегистрированы страницы для ссылок на другие страницы `index.html`, страница для ui kit `ui-kit.html` и страницей для компонентов `components.html`

## Как создать новую страницу?

Страница создается в корне папки `dev` по шаблону уже созданной по умолчанию страници `home.html`, а также в папке `pages` создается папка с таким же наименованием, что и новая страница. Новая папка наполняется файлами `new-page.pug`, `new-page.scss` и `new-page.js`. Наполнять и подключать данные файлы нужно в соответствие с базовой страницей `home.html`. После этого нужно в файле `vite.config.js` в опции `build.rollupOptions.input` добавить страницу. Осталось только перезапустить сборку командой `npm run dev`