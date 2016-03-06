import 'index.css';

// fetch的第一个参数是URI路径，第二个参数则是生成Request的配置，
// 而如果直接传给fetch一个request对象，其实只有URI是可配置的，
// 因为其他的配置如headers都是readonly，不能直接从Request处配置
let request = new Request('./style.css');

request.method = 'POST'; // Uncaught TypeError: Cannot set property method of #<Request> which has only a getter

fetch(request).then(response => response.text())
    .then(text => {
        console.log(text);
    });
