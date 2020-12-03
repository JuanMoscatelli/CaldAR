module.exports = mongoose => {
  const ConstructionCompany = mongoose.model(
    "construction-company",
    mongoose.Schema(
      {
        id_company: Number,
        cuit: Number,
        email: String,
        buildings: [Number],
        fiscal_address: String,
        user: [Number],
      },
    )
  )
  return ConstructionCompany
};