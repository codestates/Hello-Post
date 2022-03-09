// const Post = require('../models/post');
// const Message = require('../models/message');
const db = require('../models');
const { User, Post, Message } = db;
// Sequelize가 제공하는 쿼리로 db의 posts 관련 데이터를 조회, 생성

module.exports = {
  // sequelize의 findByPk 함수 사용
  readRollPaper: async req => {
    console.log(req.uid);
    const message = await Message.findAll({
      where: { post_id: req.uid },
    });
    // const post = await Post.findOne({
    //   where: { id: 1 },
    // });

    // const findMessage = message.map(el => el.dataValues);
    // const total_message = findMessage.length;
    // console.log(findMessage);
    // console.log(total_message);
  },

  // create
  createMessage: async req => {
    console.log(req.content, req.writer);
    await Message.create({
      content: req.content,
      writer: req.writer,
    });

    // console.log(req.body.content);
    // 마지막 message 가져오기
    // const message = await Message.findOne({
    //   order: [['post_id', 'DESC']],
    // });

    // res.json({ pid: req.body.owner_id, mid: message.id });
  },

  // findAll
  readAllMessage: (req, res) => {},

  // desrtroy
  deleteMessage: (req, res) => {},
};
