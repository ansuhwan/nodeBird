const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');

const postRouter = require('./routers/post');
const postsRouter = require('./routers/posts');
const userRouter = require('./routers/user');
const db = require('./models');
const passportConfig = require('./passport');
const dotenv = require('dotenv');
dotenv.config();
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
passportConfig();

app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//   res.send('hello express');
// });

// app.get('/', (req, res) => {
//   res.send('hello apl');
// });

// app.get('/posts', (req, res) => {
//   res.json([
//     { id: 1, content: 'hello' },
//     { id: 2, content: 'hello2' },
//     { id: 3, content: 'hello3' },
//   ]);
// });

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

// app.use((err, req, res, next) => {

// })

app.listen(3065, () => {
  console.log('서버 실행 중');
});
