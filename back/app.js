const express = require('express');
const cors = require('cors');

const postRouter = require('./routers/post');
const userRouter = require('./routers/user');
const db = require('./models');
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결!!');
  })
  .catch(console.error);

// app.get : 가져오다
// app.post : 생성하다
// app.put : 전체 수정
// app.delete : 제거
// app.patch : 부분 수정
// app.options : 찔러보기
// app.head : 헤더만 가져오기
app.use(
  cors({
    origin: true,
    credentials: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/', (req, res) => {
  res.send('hello apl');
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});
