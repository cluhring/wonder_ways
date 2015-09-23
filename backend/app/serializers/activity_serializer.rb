class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :activity_type_name, :url, :activity_description
end
