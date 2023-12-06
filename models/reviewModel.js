module.exports = (sequelize, DataTypes)=>{
    const Review = sequelize.define("review",{
        rating:{
            type:DataTypes.INTIGER
        },
        description:{
            type:DataTypes.TEXT
        }
    })

    return Review;
}