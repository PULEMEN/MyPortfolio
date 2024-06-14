        // Создайте массив с URL-адресами картинок
        const images3 = [
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
        const randomIndex3 = Math.floor(Math.random() * images3.length);

        // Получите ссылку на элемент <img>
        const imageElement3 = document.getElementById('img4');
        


        // Установите начальную картинку
        imageElement3.src = images3[randomIndex3];

        // Функция для смены картинки при клике
        function changeImage() {
            randomIndex3 = (randomIndex3 + 1) % images3.length;
            imageElement3.src = images3[randomIndex3];
        }