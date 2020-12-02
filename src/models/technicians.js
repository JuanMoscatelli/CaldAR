module.exports = mongoose => {
    const technicians = mongoose.model (
        "technicians",
        mongoose.Schema(
            {
                id_technicians: Number,      
                rol: String,
                email: String,
                fullname: String,
                phone: Number,
                address: String,
                boilers: [],
                capabilities: [],
                hour_rate: Number,
                daily_capacity: Number
            }
        )
    )
    return technicians
};