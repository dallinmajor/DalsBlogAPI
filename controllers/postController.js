var Post = require('../models/post');

module.exports = {
    findAll: (req, res) => {
        Post
            .find({})
            .then(post => res.json(post))
            .catch(err => res.status(402).json(err));
    },
    findById: (req, res) => {
        Post
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    create: (req, res) => {
        Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    update: (req, res) => {
        Post
            .findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(402).json(err));

    },
    remove: (req, res) => {
        Post
            .findByIdAndDelete(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(res.send('Deleted!'))
            .catch(err => res.status(402).json(err));
    }
}