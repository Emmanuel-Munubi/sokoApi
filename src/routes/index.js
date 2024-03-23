const userRoute = require("./userRoute");

export const home =
  ("/",
  (req, res) => {
    res.send("Hello, World!");
  });

module.exports = {
  userRoute,
  home,
};
