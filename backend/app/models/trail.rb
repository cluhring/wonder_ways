class Trail < ActiveRecord::Base
  has_many :activities
  has_many :species

  scope :filter_by_state, -> (state) {
    where("lower(state) LIKE ?", "%#{state.downcase}%")
  }

  scope :filter_by_lat_lng, -> (lat, lng) {
    where("lat BETWEEN ? AND ?", lat - 0.1, lat + 0.1)
    .where("lng BETWEEN ? AND ?", lng - 0.1, lng + 0.1)
  }
end
