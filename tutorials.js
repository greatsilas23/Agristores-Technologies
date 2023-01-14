module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequalize.define("tutorial", {
        title: {
            type: Sequlize.STRING
        },
        description: {
            type: Sequalize.String
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })
    return Tutorial
}