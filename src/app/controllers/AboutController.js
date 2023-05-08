const Post = require('../models/Post');
const QnA = require('../models/QnA');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class AboutController {

    // [GET] /about
    index(req, res, next) {
        res.render('user/about', {
            title: "Về chúng tôi |",
            student: req.session.username,
        });
    }

    // [GET] /about/tran-hoang-yen-nhi
    tranhoangyennhi(req, res, next) {
        Post.find({}).sort({ createdAt: 'desc' })
            .then(posts => {
                if (req.session.thyn) {
                    QnA.find({}).sort({ createdAt: 'desc' })
                        .then(qna =>
                            res.render('members/tranhoangyennhi', {
                                layout: false,
                                loggedIn: true,
                                posts: multipleMongooseToObject(posts),
                                qna: multipleMongooseToObject(qna),
                            })
                        )
                        .catch(next);
                }
                else {
                    res.render('members/tranhoangyennhi', {
                        layout: false,
                        posts: multipleMongooseToObject(posts),
                    });
                }
            })
            .catch(next);
    }

    // [POST] /about/tran-hoang-yen-nhi/login
    logIn(req, res, next) {
        req.session.thyn = true;
        res.redirect('/about/tran-hoang-yen-nhi');
    }

    // [GET] /about/tran-hoang-yen-nhi/logout
    logOut(req, res, next) {
        delete req.session.thyn;
        res.redirect('/about/tran-hoang-yen-nhi');
    }

    // [POST] /about/tran-hoang-yen-nhi/post
    newPost(req, res, next) {
        const newPost = new Post({
            image: req.body.image,
            quotes: req.body.quotes,
        });
        newPost.save()
            .then(() => res.redirect('/about/tran-hoang-yen-nhi'))
            .catch(next);
    }

    // [POST] /about/tran-hoang-yen-nhi/ask
    ask(req, res, next) {
        const newQuestion = new QnA({
            name: req.body.name,
            email: req.body.email,
            question: req.body.question,
        });
        newQuestion.save()
            .then(() => res.redirect('/about/tran-hoang-yen-nhi'))
            .catch(next);
    }
    
    // [GET] /about/le-duc-trong
    leductrong(req, res, next) {
        res.render('members/leductrong', { layout: false });
    }

    // [GET] /about/le-duy-duc
    leduyduc(req, res, next) {
        res.render('members/leduyduc', { layout: false });
    }

    // [GET] /about/le-phu-nhan
    lephunhan(req, res, next) {
        res.render('members/lephunhan', { layout: false });
    }

    // [GET] /about/luu-anh-dung
    luuanhdung(req, res, next) {
        res.render('members/luuanhdung', { layout: false });
    }
}

module.exports = new AboutController;