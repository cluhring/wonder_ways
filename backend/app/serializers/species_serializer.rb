class SpeciesSerializer < ActiveModel::Serializer
  attributes :id,
             :kingdom,
             :scientific_name,
             :common_name,
             :photo_url,
             :clip_url,
             :lat,
             :lng
end
