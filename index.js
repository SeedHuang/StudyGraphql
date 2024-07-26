const koa = require('koa');
const app = new koa();
const mount = require('koa-mount');
const { graphqlHTTP } = require('koa-graphql');

app.use(
    graphqlHTTP({
        schema: require('./schema')
    })
);

app.listen(3000, ()=>{
    console.log('It is listening on PORT:3000')
});