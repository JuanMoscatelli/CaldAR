module.exports = mongoose => {
  const Building = mongoose.model(
    "building",
    mongoose.Schema(
      {
        id: Number,
        fullName: String,
        address: String,
        phone: String,
        boilers: [String],
      },
      { timestamps: true }
    )
  )
  return Building
};