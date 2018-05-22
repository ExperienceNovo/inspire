module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },

    ssl: function(req, res) {
        res.send('7ZmHFyhY2p7lF_P4fWLzfd4PCnbKgch7gJXAFeAmsgo.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI');
    },
    
};