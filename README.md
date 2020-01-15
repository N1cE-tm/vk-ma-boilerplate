# VK Mini App Boilerplate
**Стартовый кит для создания сервиса на платформе VK Mini Apps.**

Основан на [iSa1vatore/vk-mini-app-boilerplate](https://github.com/iSa1vatore/vk-mini-app-boilerplate)

Чтобы понимать, что здесь происходит вы должны знать что такое VK Mini Apps,  ReactJS и React Redux.

[Документация по VK Mini Apps](https://vk.com/dev/vk_apps_docs)

[Документация по ReactJS](https://ru.reactjs.org/docs/getting-started.html)

[Документация по React Redux](https://rajdee.gitbooks.io/redux-in-russian/content/)

## Установка:
`git clone git://github.com/nN1cE-tm/vk-ma-boilerplate.git <folder name>`

Перейдите в созданную папку и выполните команды: `npm install` и `npm start`, последняя запустит сервер для разработки на `localhost:10888`

Отлично, теперь перед нами демонстративное приложение, можно править код и все изменения сразу будут видны на нашем сервере при помощи "Hot Reloading".

## KIT:
#### Что реализовано:
- Обновлены зависимости (библиотеки до более свежих версий)
- Поддержка темы нативного клиента
- Поддержка iOS swipe back для панелей
- Обработка хардверной кнопки "назад" для Android
- Сохранение позиции скролла для панелей и элементов
- Scroll To Top при нажатии на иконку в Epic`e
- Получение токена пользователя
- Запросы к API ВКонтакте
- Сохранение данных в форме при смене панели
- Роутер с hash в url и поддержкой pretty url
- Загрузка из url

#### Роутер:
Действия которые роутер может выполнить:
- `setStory(story, initial_panel)` - Устанавливает активную Story у Epic'a, View и активную панель.
- `setPage(view, panel)` - Устанавливает активный View и Panel
- `goBack(from)` - Совершает действие назад, будь то закрытие модального окна, переход на прошлую панель, закрытие попапа и т.п;
- `openPopout(popout)` -  Открывает поппап.
- `closePopout()` - Закрывает поппап.
- `openModal(id)` - Открывает модальную страницу по её ID.
- `closeModal()` - Закрывает модальную страницу или открывает прошлую страницу.

Примеры того как это все работает смотрите в исходниках ¯\_(ツ)_/¯, там все просто.

#### Сохранение позиции скролла:
Для сохранения позиции горизонтального скоролла нужно:

- Указать ID для элемента HorizontalScroll
```javascript
<HorizontalScroll id="EXAMPLE_TABS_LIST">
...
</HorizontalScroll>
```
- Сохранить позицию при демонтировании
```javascript
componentWillUnmount() {
    const {setScrollPositionByID} = this.props;

    setScrollPositionByID("EXAMPLE_TABS_LIST");
}
```
- Восстановить позицию при монтировании
```javascript
componentDidMount() {
    restoreScrollPosition();
}
```
Пример находится в файле: [`/src/js/panels/more/base.js`](https://github.com/N1cE-tm/vk-ma-boilerplate/blob/master/src/js/panels/more/base.js)
#### Важно:
В файле [`config.js`](https://github.com/N1cE-tm/vk-ma-boilerplate/blob/master/src/config.js#L4-L6) на первых строках указывается стартовая панель приложения:
```javascript
export const routerConfig = {
    startStory: 'home',
    startView: 'home',
    startPanel: 'base'
};
```
В данном случае это значит, что приложение запустится с:

`activeStory: home`

`activeView: home`

`activePanel: base`

Как вы поняли значение ID у Root и стартового View должны совпадать.

В проекте есть 2 файла: "App" и "AppWithoutEpic", первый идет с навигационной панелью Epic, второй без, он подойдет для простых приложений.
```javascript
import App from './App';
```
По умолчанию для примера выбран вариант с Epic навигацией.

В файле [`config.js`](https://github.com/N1cE-tm/vk-ma-boilerplate/blob/master/src/config.js#L2) нужно заменить значение константы `appID` на ID вашего приложения