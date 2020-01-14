module.exports = {
    index: function(req, res) {
        res.view({title: 'Home',currentUser: req.user});
    },
    ssl: function(req, res) {
        res.send('CG9C0gYgdnC0hVRgH-XjHxyn40mHVqXUg907rc9E6_Q.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI');
    },
};