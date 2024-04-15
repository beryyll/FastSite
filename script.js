// Получаем все тестимониалы и точки
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

// Функция для скрытия всех тестимониалов
function hideTestimonials() {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
}

// Функция для отображения выбранного тестимониала
function showTestimonial(index) {
    hideTestimonials();
    testimonials[index].style.display = 'block';
}

// Функция для обновления активной точки
function updateActiveDot(index) {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
}

// Функция для переключения тестимониалов по клику на точку
function currentTestimonial(index) {
    showTestimonial(index);
    updateActiveDot(index);
}

// По умолчанию показываем первый тестимониал
currentTestimonial(0);


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Добавьте здесь код для отправки данных формы на сервер
  });

function submitForm() {
    // Отменить действие по умолчанию при отправке формы
    event.preventDefault();
    
    // Вывести сообщение об успешной отправке
    alert("Вы успешно записались!");
}