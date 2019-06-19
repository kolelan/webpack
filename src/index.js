import _ from 'lodash';
function Menu(options) {
    var elem;

    function getElem() {
        if (!elem) render();
        return elem;
    }

    function render() {
        var html = options.template({
            title: options.title
        });

        elem = document.createElement('div');
        elem.innerHTML = html;
        elem = elem.firstElementChild;

        elem.onmousedown = function() {
            return false;
        }

        elem.onclick = function(event) {
            if (event.target.closest('.title')) {
                toggle();
            }
        }
    }

    function renderItems() {
        if (elem.querySelector('ul')) return;

        var listHtml = options.listTemplate({
            items: options.items
        });
        elem.insertAdjacentHTML("beforeEnd", listHtml);
    }

    function open() {
        renderItems();
        elem.classList.add('open');
    };

    function close() {
        elem.classList.remove('open');
    };

    function toggle() {
        if (elem.classList.contains('open')) close();
        else open();
    };

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
}
var menu = new Menu({
    title: "Сладости",
    // передаём также шаблоны
    template: _.template(document.getElementById('menu-template').innerHTML),
    listTemplate: _.template(document.getElementById('menu-list-template').innerHTML),
    items: [
        "Торт",
        "Пончик",
        "Пирожное",
        "Шоколадка",
        "Мороженое"
    ]
});

document.body.appendChild(menu.getElem());