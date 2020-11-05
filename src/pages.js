const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");
module.exports = {

    index(request, response) {

        return response.render('index')
    },
    async orphanage(request, response) {
        const id = request.query.id;

        try {
            const db = await Database;
            const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);


            return response.render('orphanage', { orphanage: orphanage[0] })

        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")

        }
    },

    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages");
            return res.render("orphanages", { orphanages });
        } catch (error) {
            console.log(error);
            return res.send("Erro no banco de dados");
        }
    },


    createOrphanage(request, response) {
        return response.render('create-orphanage')
    }

}