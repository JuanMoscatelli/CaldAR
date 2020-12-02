module.exports = mongoose => {
    const boilerTypes = mongoose.model(
        "boilerTypes",
        mongoose.Schema(
            {
                id_boiler_type: Number,
                id_building: Number,
                description: String,
                skills: String,
                stock: Number,
            },
            { timestamps: true},
        )
    )
    return boilerTypes
};