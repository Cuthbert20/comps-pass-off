
module.exports = {
    login: async (req,res) => {
        const db = req.app.get('db')
        const { username, user_password } = req.body
        const user = await db.user_login({username, user_password})
        const loggedUser = user[0]
        res.status(200).send(loggedUser)
    },
    movie: async (req,res) => {
        const db = req.app.get('db')
        const movies = await db.select_movie()

        res.status(200).send(movies)
    }
}