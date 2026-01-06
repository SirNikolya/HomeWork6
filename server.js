const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end(`
      <h1>Николай</h1>
      <a href="/contact">Контакты</a>
    `);
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end(`
      <p>email: sirnikolya228@gmail.com</p>
      <a href="/">Домой</a>
    `);
    } else if (req.url === "/api/info") {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.statusCode = 200;
  
  res.end(JSON.stringify({
      "serverName": "MyPC",
      "version": "1.0.0",
      "status": "working"
    }));
    } else {
    res.statusCode = 404;
    res.end(`
      <h1>404: Страница не найдена</h1>
      <img src="https://avatars.mds.yandex.net/i?id=d2837834043b3ed6384449d0a4d80253_l-9102364-images-thumbs&n=13" alt="Ошибка 404 - такой страницы нет">
    `);
    }
});

server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});