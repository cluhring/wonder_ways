require "test_helper"

class GbifServiceTest < ActiveSupport::TestCase
  attr_reader :service

  def setup
    @service = GbifService.new
  end

  test "#species" do
    VCR.use_cassette("gbif_service_species_recordings") do
      species = service.species(35.1, -95.9)

      assert_equal "Petrochelidon pyrrhonota", species[0]["species"]
    end
  end
end
