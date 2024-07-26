const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Comment {
        id: Int
        avatar: String
        name: String
        isTop: Boolean
        content: String
        publishDate: String
        commentNum: Int
        praiseNum: Int
    }

    type Query {
        comment: [Comment]
    }
`);

schema.getQueryType().getFields().comment.resolve = () => {
    return [{
        id: 1,
        avatar: 'it is empty',
        name: 'huangchunhua',
        isTop: true,
        content: 'happy',
        publishDate: 'Today',
        commentNum: 10,
        praseNum: 5
     }]
};

module.exports = schema;