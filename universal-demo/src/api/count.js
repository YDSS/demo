import express from 'express';

const router = express.Router();
// 记录传递的值，本来应该放在数据库里，这里简化
let count = 0;

// 获取当前计数
router.get('/count', (req, res) => {
    res.type('application/json');
    res.send({
        count
    });
});

// 计数+1
router.post('/count', (req, res) => {
    count++;
    res.type('application/json');
    res.send({
        count
    });
});

export {router};
