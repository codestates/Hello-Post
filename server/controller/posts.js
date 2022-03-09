console.log('✔ postsController called!');
// postsController

const {
  readRollPaper,
  createMessage,
  readAllMessage,
  deleteMessage,
} = require('../data/postData');

module.exports = {
  // 메시지 작성
  write: (req, res) => {
    console.log('✔ write called!');
    const { content, writer } = req.body;

    createMessage({ content, writer });
  },

  // 메시지 삭제
  delete: (req, res) => {},

  // 롤링페이퍼 조회
  read: (req, res) => {
    console.log('✔ read called!');
    const { uid } = req.params;
    readRollPaper({ uid });
  },

  // 개별 메시지 클릭 시 전체 메시지 목록 조회
  readAll: (req, res) => {},
};
