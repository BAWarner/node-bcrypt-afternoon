
var dragonTreasure = async (req, res) => {
    var db = req.app.get('db');

    var treasure = await db.get_dragon_treasure(1);

    res
    .status(200)
    .send(treasure);

}

var getUserTreasure = async (req, res) => {
    var db = req.app.get('db');
    let { user } = req.session;
    var treasure = await db.get_user_treasure( user.id );

    res
    .status(200)
    .send(treasure);
}

module.exports = {
    dragonTreasure,
    getUserTreasure
}