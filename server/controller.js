const fs = require('fs');

class Controller {
    static async getmd(ctx) {
        const {md} = ctx.request.query;
        var data = fs.readFileSync(`./md/${md}`);
        console.log(data);
    }
}

module.exports = Controller;