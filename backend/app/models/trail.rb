class Trail < ActiveRecord::Base
  has_many :activities, dependent: :destroy
  has_many :species, dependent: :destroy

  scope :filter_by_state, -> (state) {
    where("lower(state) LIKE ?", "%#{state.downcase}%")
  }

  scope :filter_by_lat_lng, -> (lat, lng) {
    where("lat BETWEEN ? AND ?", lat - 0.001, lat + 0.001)
    .where("lng BETWEEN ? AND ?", lng - 0.001, lng + 0.001)
  }
end
