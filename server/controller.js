
module.export = {
    movie: async (req,res) => {
        const db = req.app.get('db')
        const { id } =  req.params
        const movie = await db.select_movie([id])
        res.status(200).send(movie)
    }
}