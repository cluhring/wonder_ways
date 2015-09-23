class XenoCantoService
  attr_reader :connection

  def initialize
    @connection = Faraday.new(url:
      "http://www.xeno-canto.org/api/2")
  end

  def recordings(min_lat, min_long, max_lat, max_long)
    parse(connection
      .get("recordings?query=box:#{min_lat},#{min_long},#{max_lat},#{max_long}"))
  end

  def species_recording(species)
    species_parse(connection
      .get("recordings?query=#{species}"))
  end

  private

  def parse(response)
    JSON.parse(response.body)["recordings"]
  end

  def species_parse(response)
    body = JSON.parse(response.body)
    if body["numRecordings"] == "0"
      "not found"
    else
      body["recordings"][0]["file"]
    end
  end
end
