require "test_helper"

class EolServiceTest < ActiveSupport::TestCase
  attr_reader :service

  def setup
    @service = EolService.new
  end

  test "#page_id" do
    VCR.use_cassette("eol_service_page_recordings") do
      page_id = service.page_id("Sideroxylon", "foetidissimum")

      assert_equal 1150165, page_id
    end
  end

  test "#image(page_id)" do
    VCR.use_cassette("eol_service_image_recordings") do
      image_url = service.image(1150165)

      assert_equal "http://media.eol.org/content/2013/02/26/04/10055_orig.jpg",
                   image_url
    end
  end

  test "#image_from_species(genus, species)" do
    VCR.use_cassette("eol_service_image_from_species_recordings") do
      image_url = service.image_from_species("Sideroxylon", "foetidissimum")

      assert_equal "http://media.eol.org/content/2013/02/26/04/10055_orig.jpg",
                   image_url
    end
  end

  test "#image_from_species(genus, species) with no image" do
    VCR.use_cassette("eol_service_no_image_from_species_recordings") do
      image_url = service.image_from_species("Monojoubertia", "microphylla")

      assert_nil image_url
    end
  end
end
