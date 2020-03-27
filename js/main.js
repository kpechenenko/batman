$(document).ready(function () {
    // Сохраняем все табс айтемы.
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function(event) {
        // Отменяем все то, что происходит при стандартном действии.
        event.preventDefault();
        let activeContent = $(this).attr('href');
        // Отключаем класс
        $('.visible').toggleClass('visible');
        // Добавляем к другому элементу
        $(activeContent).toggleClass('visible');
        // Тоже самое с оранжевым цветом
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    });
});