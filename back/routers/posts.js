const express = require('express');

const { Post, User, Image, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // limit 과 offset으로 원하는 구간을 잘라 가져오는게 가능하다
  // limit가 10 이거 offset이 100이라면 101 ~ 110 까지 가져온다
  // 단점 중간에 값이 추가 되거나 삭제 되면  20 ~ 11를 가쟈오다 21 번째가 생기면 11 ~ 2 를 가져와 중복의 문제가 있다
  try {
    const posts = await Post.findAll({
      // where: { id: lastId },
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
      ],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
