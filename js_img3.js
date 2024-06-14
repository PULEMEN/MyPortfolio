        // Создайте массив с URL-адресами картинок
        const images2 = [
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
        const randomIndex2 = Math.floor(Math.random() * images2.length);

        // Получите ссылку на элемент <img>
        const imageElement2 = document.getElementById('img3');
        


        // Установите начальную картинку
        imageElement2.src = images2[randomIndex2];

        // Функция для смены картинки при клике
        function changeImage() {
            randomIndex2 = (randomIndex2 + 1) % images2.length;
            imageElement2.src = images2[randomIndex2];
        }