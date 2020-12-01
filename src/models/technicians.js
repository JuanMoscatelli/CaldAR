module.exports = mongoose => {
    const technicians = mongoose.model (
        "technicians",
        mongoose.Schema(
            {
                id_technician: Number,      
                rol: String,
                email: String,
                fullname: String,
                phone: Number,
                address: String,
                boiler: [],
                capabilities: [],
                hour_rate: Number,
                daily_capacity: Number
            }
        )
    )
    return technicians
};