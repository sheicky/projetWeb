const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get posts
router.get('/', async (req, res) => { 
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});


//Delete posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://simporesheick:D97St6qbf8DsYMfx@cluster0.1ivmd18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true
        
    });

    return client.db('zododb').collection('zodocollection');
}


module.exports = router;
