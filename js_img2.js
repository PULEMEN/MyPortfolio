        // Создайте массив с URL-адресами картинок
        const images = [
            'img/Калькулятор.png',
            'img/клад (1).png',
            'img/корова.png',
            'img/кухня.png',
            'img/пирог.png',
            'img/поезд.png',
            'img/Регистр.png',
            'img/светофор.png',
            'img/собака.png', 
            'img/Шахмоты.png', 
            'img/чек.png',
            'img/фреланс.png',
        ];

        // Получите случайный индекс картинки при загрузке страницы
        const randomIndex = Math.floor(Math.random() * images.length);

        // Получите ссылку на элемент <img>
        const imageElement = document.getElementById('img2');
        


        // Установите начальную картинку
        imageElement.src = images[randomIndex];

        // Функция для смены картинки при клике
        function changeImage() {
            randomIndex = (randomIndex + 1) % images.length;
            imageElement.src = images[randomIndex];
        }