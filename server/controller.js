const fs = require('fs');

class Controller {
    static async getmd(ctx) {
        const {md} = ctx.request.query;
        var data = fs.readFileSync(`./server/md/${md}`);
        ctx.response.type = 'text';
        ctx.response.body = data;
        ctx.status = 200;
    }
}

module.exports = Controller;