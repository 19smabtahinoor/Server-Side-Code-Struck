
//get
const getPosts = (req,res) => {
    res.send({
        id:1,
        post:'This is a post by Abtahi Noor'
    })
}

//post 
const createPost = (req,res) => {
    res.send('Post created')
}
module.exports = { getPosts, createPost}