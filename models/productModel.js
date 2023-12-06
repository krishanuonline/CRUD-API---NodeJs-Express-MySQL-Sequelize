module.exports = (sequelize, DataTypes)=>{
    const Product = sequelize.define("product",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.INTIGER
        },
        description:{
            type:DataTypes.TEXT
        },
        published:{
            type:DataTypes.BOOLEAN
        }
    })

    return Product;
}