module.exports = {
  renderHome: function(req, res) {
    res.render("index", {
      msg: "This is data being passed into the render method!"
    });
  }
};
