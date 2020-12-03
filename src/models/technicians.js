module.exports = mongoose => {
  const Technician = mongoose.model(
    "technician",
    mongoose.Schema(
      {
        id_technician: Number,
        rol: String,
        email: String,
        fullname: String,
        phone: Number,
        address: String,
        boiler: [String],
        capabilities: String,
        hour_rate: Number,
        daily_capacity: Number,
      },
    )
  )
  return Technician
};