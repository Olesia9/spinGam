var resultWrapper = document.querySelector('#winModal'); //пременная модального окна
var resultWrapper2 = document.querySelector('#winModal2');
var wheel = document.querySelector('.spinchik'); //переменная, крутящегося колеса
var btnSpin = document.querySelector('.spinner-button');
var overlay = document.querySelector('.overlay');

function goUrl() {document.location.href ="./send.html";}

function spin() {
    var kek = document.querySelector('.number-frame');//переменная для отсчета количества оставшихся кликов по кнопке
    var count = 1;
    if (!wheel.classList.contains('rotated')) { //проверка на не содержание элемента
        wheel.classList.add('spin'); //добавили класс "spin" - стили к нему указаны в ./css/core.css
        wheel.classList.add('rotated');//добавили класс "rotated" - стили к нему указаны в ./css/core.css
        btnSpin.style.backgroundImage = "url('./img/button-wait.png')"; //смена картинки на кнопке во время прокрутки
        btnSpin.style.cursor = "not-allowed";
        setTimeout(function () { //определяем, что произойдет после клика
            overlay.style.display = "block";
            btnSpin.style.backgroundImage = "url('./img/button.png')"; //смена картинки на кнопке после прокрутки
            resultWrapper.style.display = "block"; //обеспечиваем появление модального окна
            btnSpin.style.cursor = "pointer";
            kek.innerHTML = "X " + count; //выводим цифирку с оставшимся количеством кликов (в нашем случае эта цифра - "1", т.к. это мы указали в переменной в стр.65 "var count = 1")
            wheel.classList.remove('spin'); //удаляем класс "spin", чтобы ещё раз крутануть колесо
            wheel.style.transform = "rotate(1986deg)" //определяем градус вращения
            startConfetti();
        }, 6000); //через какой промежуток времени от клика по кнопке произойдет прекращение выполнения функции
    } else {
        btnSpin.style.backgroundImage = "url('./img/button-wait.png')"; //смена картинки на кнопке во время прокрутки
        wheel.classList.add('spinS'); //добавили класс "spinS" - стили к нему указаны в ./css/core.css
        btnSpin.style.cursor = "not-allowed";
        count--; //вычитаем из переменной "count" единичку
        stopConfetti();
        setTimeout(function () { //определяем, что произойдет при клике
            startConfetti();
            overlay.style.display = "block";
            btnSpin.style.backgroundImage = "url(./img/button-getprize.png)"; //смена картинки на кнопке после прокрутки
            btnSpin.style.cursor = "pointer";
            resultWrapper2.style.display = "block"; //обеспечиваем появление модального окна
            kek.innerHTML = "X " + count; //даже, если функции мы дали значение переменной, оно тут же будет переписано, если этой же переменной присвоить значение внутри рекурсивной функции
        }, 6000); //через какой промежуток времени от клика по кнопке произойдет прекращение выполнения функции

        if(count === 0) {
            btnSpin.style.cursor = "pointer";
            // btnSpin.addEventListener('click', goUrl)
            btnSpin.onclick = function(){
                goUrl();
                // Confetti();
            }
        }
    }
}

document.querySelector('.n-spinner').addEventListener('click', spin)