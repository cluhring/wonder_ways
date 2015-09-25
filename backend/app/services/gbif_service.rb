class GbifService
  attr_reader :connection, :genus

  def initialize
    @connection = Faraday.new(url: "http://api.gbif.org/v1/occurrence/")
  end

  def species(lat, long)
    parse(connection
      .get("search?decimalLatitude=#{lat - 0.001},#{lat + 0.001}&\
      decimalLongitude=#{long - 0.001},#{long + 0.001}"))
  end

  private

  def parse(response)
    JSON.parse(response.body)["results"]
  end
end
