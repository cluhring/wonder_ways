module ApiCombiner
  def self.get_species(trail_id)
    trail = Trail.find(trail_id)

    add_gbif_species(trail.id, trail.lat, trail.lng)
    add_xeno_canto_species(trail.id, trail.lat, trail.lng)
  end

  def self.add_gbif_species(trail_id, lat, lng)
    xeno_canto = XenoCantoService.new
    gbif = GbifService.new
    eol = EolService.new
    gbif_species = gbif.species(lat, lng)
    gbif_species.each do |species|
      if species["species"]
        genus, spec = species["species"].split(" ")
        img = eol.image_from_species(genus, spec)
        img_web = img.slice!(/^[https:]+/)

        Species.create(
          trail_id: trail_id,
          kingdom: species["kingdom"],
          scientific_name: species["species"].capitalize,
          common_name: species["vernacularName"],
          photo_url: img_web,
          clip_url: xeno_canto.species_recording(species["species"]).slice!(/^[https:]+/),
          lat: species["decimalLatitude"],
          lng: species["decimalLongitude"])
      end
    end
  end

  def self.add_xeno_canto_species(trail_id, lat, lng)
    xeno_canto = XenoCantoService.new
    eol = EolService.new

    xeno_canto_species = xeno_canto.recordings(lat - 0.001, lng - 0.001,
                                               lat + 0.001, lng + 0.001)
    xeno_canto_species.each do |species|
      if species["id"]
        img = eol.image_from_species(species["gen"], species["sp"])
        img_url = img.slice!(/^[https:]+/)

        Species.create(
          trail_id: trail_id,
          kingdom: "Animalia",
          scientific_name: "#{species['gen']} #{species['sp']}",
          common_name: species["en"],
          photo_url: img_url,
          clip_url: species["file"].slice!(/^[https:]+/),
          lat: species["lat"],
          lng: species["lng"])
      end
    end
  end
end
