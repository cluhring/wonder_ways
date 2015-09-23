class SpeciesGenerator
  def self.save_species
    all_trails = Trail.all.offset(1000).limit(3)
    all_trails.each do |trail|
      ApiCombiner.get_species(trail.id)
    end
  end
end
