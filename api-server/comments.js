const clone = require('clone')
const posts = require('./posts')

let db = {}

const defaultData = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  "8tu4bsun805n8un48ve89": {
    id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  },
  "994tuq4ut84ut8v4t8wun89g": {
    id: '994tuq4ut84ut8v4t8wun89g',
    parentId: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468166872700,
    body: 'Hi there! I am a COMMENT II.',
    author: 'Kabir',
    voteScore: 1,
    deleted: false,
    parentDeleted: false
  },
  "10tu4bsun805n8un48ve89": {
    id: '8tu4bsun805n8un48ve89',
    parentId: "7ni6ok3ym7mf1p33lnez",
    timestamp: 1469479767800,
    body: 'Comments. Are. Cool II',
    author: 'Saleh',
    voteScore: 3,
    deleted: false,
    parentDeleted: false
  },
  "1094tuq4ut84ut8v4t8wun89g": {
    id: '1094tuq4ut84ut8v4t8wun89g',
    parentId: "8ni6ok3ym7mf1p33lnez",
    timestamp: 1468166872900,
    body: 'Hi there! I am a COMMENT III',
    author: 'Jennifer',
    voteScore: 16,
    deleted: false,
    parentDeleted: false
  },
  "9tu4bsun805n8un48ve89": {
    id: '9tu4bsun805n8un48ve89',
    parentId: "9ni6ok3ym7mf1p33lnez",
    timestamp: 1469479767910,
    body: 'Comments. Are. Cool III',
    author: 'Jennifer',
    voteScore: -15,
    deleted: false,
    parentDeleted: false
  },
  "1194tuq4ut84ut8v4t8wun89g": {
    id: '1194tuq4ut84ut8v4t8wun89g',
    parentId: "10ni6ok3ym7mf1p33lnez",
    timestamp: 1468166872950,
    body: 'Hi there! I am a COMMENT IV',
    author: 'Kaode',
    voteScore: 60,
    deleted: false,
    parentDeleted: false
  },
  "10tu4bsun805n8un48ve89": {
    id: '10tu4bsun805n8un48ve89',
    parentId: "10ni6ok3ym7mf1p33lnez",
    timestamp: 1469479767980,
    body: 'Comments. Are. Cool IV',
    author: 'Nwoke',
    voteScore: 5,
    deleted: false,
    parentDeleted: false
  }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByParent (token, parentId) {
  return new Promise((res) => {
    let comments = getData(token)
    let keys = Object.keys(comments)
    filtered_keys = keys.filter(key => comments[key].parentId === parentId && !comments[key].deleted)
    res(filtered_keys.map(key => comments[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const comments = getData(token)
    res(
      comments[id].deleted || comments[id].parentDeleted
        ? {}
        : comments[id]
      )
  })
}

function add (token, comment) {
  return new Promise((res) => {
    let comments = getData(token)

    comments[comment.id] = {
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }

    posts.incrementCommentCounter(token, comment.parentId, 1)
    res(comments[comment.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let comments = getData(token)
    comment = comments[id]
    switch(option) {
        case "upVote":
            comment.voteScore = comment.voteScore + 1
            break
        case "downVote":
            comment.voteScore = comment.voteScore - 1
            break
        default:
            console.log(`comments.vote received incorrect parameter: ${option}`)
    }
    res(comment)
  })
}

function disableByParent (token, post) {
    return new Promise((res) => {
        let comments = getData(token)
        keys = Object.keys(comments)
        filtered_keys = keys.filter(key => comments[key].parentId === post.id)
        filtered_keys.forEach(key => comments[key].parentDeleted = true)
        res(post)
    })
}

function disable (token, id) {
    return new Promise((res) => {
      let comments = getData(token)
      comments[id].deleted = true
      posts.incrementCommentCounter(token, comments[id].parentId, -1)
      res(comments[id])
    })
}

function edit (token, id, comment) {
    return new Promise((res) => {
        let comments = getData(token)
        for (prop in comment) {
            comments[id][prop] = comment[prop]
        }
        res(comments[id])
    })
}

module.exports = {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit
}
