module.exports = mongoose => {
  const BoilerTypes = mongoose.model(
    "boiler-type",
    mongoose.Schema(
      {
        id_boiler_type: Number,
        id_Buildings: Number,
        description: String,
        skills: String,
        stock: Number,
      },
    )
  )
  return BoilerTypes
};