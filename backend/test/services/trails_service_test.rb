require "test_helper"

class TrailsServiceTest < ActiveSupport::TestCase
  attr_reader :service

  def setup
    @service = TrailsService.new
  end

  test "#trails" do
    VCR.use_cassette("trails_service_api") do
      all_trails   = service.get_all_trails(1)
      trails       = all_trails.flatten
      first_trail  = trails.first

      assert_equal 51, trails.count
      assert_equal "Talladega", first_trail["city"]
      assert_equal "Alabama", first_trail["state"]
      assert_equal "Cheaha State Park", first_trail["name"]
      assert_equal 28, first_trail["unique_id"]
      assert_equal 33.49189, first_trail["lat"]
      assert_equal -85.81065, first_trail["lon"]
      assert_equal "mountain biking",
                   first_trail["activities"].first["activity_type_name"]
      assert_equal "http://www.singletracks.com/item.php?c=1&i=51",
                   first_trail["activities"].first["url"]
      assert_equal 6.0, first_trail["activities"].first["length"]
    end
  end

  test "#trails activities" do
    VCR.use_cassette("trails_service_api_activities") do
      all_trails   = service.get_all_trails(1)
      trails       = all_trails.flatten
      second_trail = trails.second
      trail_activities = second_trail["activities"]

      assert_equal 1, trail_activities.count
      assert_equal "camping", trail_activities.first["activity_type_name"]
    end
  end

  test "#trails loops through by state" do
    VCR.use_cassette("trails_service_api") do
      all_trails   = service.get_all_trails(1)
      trails       = all_trails.flatten
      first_trail  = trails.first
      second_trail = trails.second
      last_trail   = trails.last
      trail_activities = second_trail["activities"]

      assert_equal "Alabama", first_trail["state"]
      assert_equal "Alaska",  second_trail["state"]
      assert_equal "Wyoming", last_trail["state"]
    end
  end

  test "#trails limit argument determines the number of records returned" do
    VCR.use_cassette("trails_service_api_limit_2") do
      all_trails   = service.get_all_trails(2)
      trails       = all_trails.flatten

      assert_equal 102, trails.count
    end
  end
end
