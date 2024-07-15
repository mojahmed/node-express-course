
const auth = (req, res, next) => {
    if (req.cookies.name) {
        req.user = req.cookies.name;
        next();
    } else {
        res.status(401).json({ success: false, message: "Unauthorized" });
    }
};

module.exports = auth;
