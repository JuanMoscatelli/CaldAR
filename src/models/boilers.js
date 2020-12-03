module.exports = mongoose => {
  const Boiler = mongoose.model(
    "boiler",
    mongoose.Schema(
      {
        id_boiler: Number,
        description: String,
        type: Number,
        maintance_rate: String,
        hour_maintaince_cost: Number,
        hour_eventual_cost: Number,
      },
    )
  )
  return Boiler
};