require "test_helper"

class ApiCombinerTest < ActiveSupport::TestCase
  def test_it_returns_species_for_lat_lng
    trail = Trail.create(id: 1,
                         name: "Indian Falls Trail (Alabama)",
                         city: "Fort Payne",
                         state: "Alabama",
                         country: "United States",
                         lat: 35,
                         lng: -100,
                         description: nil,
                         directions: "DE SOTO STATE PARK&lt;br /&gt;&lt;br ",
                         created_at: "2015-04-07 20:14:51",
                         updated_at: "2015-04-07 20:14:51",
                         unique_id: 6039)
    VCR.use_cassette("api_combiner_recording") do
      ApiCombiner.get_species(trail.id)

      assert_equal 20, Species.count
      assert Species.first.common_name
      assert Species.first.kingdom
    end
  end
end
