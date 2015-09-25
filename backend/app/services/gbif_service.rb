class GbifService
  attr_reader :connection, :genus

  def initialize
    @connection = Faraday.new(url: "http://api.gbif.org/v1/occurrence/")
  end

  def species(lat, long)
    parse(connection
      .get("search?decimalLatitude=#{lat - 0.01},#{lat + 0.01}&\
      decimalLongitude=#{long - 0.01},#{long + 0.01}"))
  end

  private

  def parse(response)
    JSON.parse(response.body)["results"]
  end
end
