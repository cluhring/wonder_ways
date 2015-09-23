require "test_helper"

class TrailTest < ActiveSupport::TestCase
  def setup
    Trail.create(name: "howdy hike",
                 city: "Denver",
                 state: "CO",
                 country: "United States",
                 lat: 10.1,
                 lng: -103.12,
                 description: "A darn good time",
                 directions: "take a right")
    Trail.create(name: "sunny bike",
                 city: "Denver",
                 state: "WA",
                 country: "United States",
                 lat: 10.2,
                 lng: -103.1,
                 description: "A darn good time",
                 directions: "take a right")
    Trail.create(name: "nature bike",
                 city: "Seatle",
                 state: "WA",
                 country: "United States",
                 lat: 3.323,
                 lng: -99.23,
                 description: "A darn good time",
                 directions: "take a right")
  end

  test "filters by state" do
    searched_trails = Trail.filter_by_state("CO")
    assert_equal "howdy hike", searched_trails.first.name
    assert_equal 1, searched_trails.count
  end

  test "filter by lat and long" do
    searched_trails = Trail.filter_by_lat_lng(10.1, -103.1)
    assert_equal "howdy hike", searched_trails.first.name
    assert_equal 2, searched_trails.count
  end
end
