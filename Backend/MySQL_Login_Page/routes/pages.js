const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
router.get('/',authController.isLoggedIn, (req, res) => {
    res.sendFile("Ridesathi.html", { root: './public/index' })
});
router.get('/register', (req, res) => {
    res.sendFile("Ridesathi.html", { root: './public/index' })
});
router.get('/login', (req, res) => {
    res.sendFile("login.html", { root: './public/' })
});

router
router.get('/profile', authController.isLoggedIn, (req, res) => {
    console.log("Reached")
    console.log(req.user)
    if (req.user) {
        res.sendFile("profile.html", { root: './public/' })
    } else {
        res.sendFile("login.html", { root: './public/' });
    }
})
module.exports = router;