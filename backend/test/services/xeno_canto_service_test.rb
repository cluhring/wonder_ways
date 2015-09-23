require "test_helper"

class XenoCantoServiceTest < ActiveSupport::TestCase
  attr_reader :service

  def setup
    @service = XenoCantoService.new
  end

  test "#recordings" do
    VCR.use_cassette("xeno_canto_service_recordings") do
      recordings = service.recordings(15, -96, 15.2, -90)
      first_recording = recordings.first

      assert_equal "216519", first_recording["id"]
      assert_equal "Columbina", first_recording["gen"]
      assert_equal 8, recordings.length
    end
  end

  test "recordings around Denver" do
    VCR.use_cassette("xeno_canto_service_den_recordings") do
      recordings = service.recordings(39.7, -105.1, 39.9, -104.9)
      assert_equal 0, recordings.length
    end
  end

  test "recording by species" do
    VCR.use_cassette("xeno_canto_service_species_recordings") do
      recording = service.species_recording("troglodytes troglodytes")
      assert_equal "http://www.xeno-canto.org/233278/download", recording
    end
  end

  test "recording by species when not found" do
    VCR.use_cassette("xeno_canto_service_fake_species_recordings") do
      recording = service.species_recording("fake bird")
      assert_equal "not found", recording
    end
  end
end
