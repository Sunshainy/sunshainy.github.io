# sunshainy.github.io
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Простой шаблон страницы</title>
    <style>
        /* CSS стили */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f9;
            color: #333;
            line-height: 1.6;
        }

        header {
            background-color: #4a90e2;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }

        main {
            max-width: 800px;
            margin: 20px auto;
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        h1, h2 {
            color: #4a90e2;
        }

        button {
            padding: 10px 20px;
            background-color: #4a90e2;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #357abd;
        }

        #output {
            margin-top: 20px;
            padding: 15px;
            background-color: #eef5ff;
            border-radius: 5px;
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <h1>Добро пожаловать на простую страницу</h1>
    </header>

    <main>
        <h2>Пример интерактивности</h2>
        <p>Эта страница демонстрирует базовую структуру HTML, стили CSS и простой JavaScript.</p>
        
        <button id="myButton">Нажмите меня</button>
        
        <div id="output">
            <p>Кнопка была нажата! Текущее время: <span id="time"></span></p>
        </div>
    </main>

    <script>
        // JavaScript код
        document.getElementById('myButton').addEventListener('click', function() {
            const output = document.getElementById('output');
            const timeSpan = document.getElementById('time');
            
            output.style.display = 'block';
            timeSpan.textContent = new Date().toLocaleTimeString();
        });
    </script>
</body>
</html>
