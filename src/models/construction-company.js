module.exports = mongoose => {
    const constructionCompany = mongoose.model(
        "constructionCompany",
        mongoose.Schema(
            {
                id_company: Number,
                cuit: Number,
                email: String,
                id_building: Number,
                fiscal_address: String,
                id_user: Number,
            },
            {timestamps: true},
        )
    )
    return constructionCompany
};