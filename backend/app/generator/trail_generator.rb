class TrailGenerator
  def self.save_trails(data)
    data.each do |trail|
    saved_trail =  Trail.find_or_create_by(unique_id: trail["unique_id"]) do |t|
      t.name        = trail["name"]
      t.city        = trail["city"]
      t.state       = trail["state"]
      t.country     = trail["country"]
      t.lat         = trail["lat"]
      t.lng         = trail["lon"]
      t.description = trail["description"]
      t.directions  = trail["directions"]
      t.unique_id   = trail["unique_id"]
    end

      trail["activities"].each do |activity|
        Activity.find_or_create_by(unique_id: activity["unique_id"]) do |a|
          a.trail_id             = saved_trail.id
          a.activity_type_name   = activity["activity_type_name"]
          a.url                  = activity["url"]
          a.activity_description = activity["activity_description"]
          a.length               = activity["length"]
          a.unique_id            = activity["unique_id"]
        end
      end
    end
  end
end
