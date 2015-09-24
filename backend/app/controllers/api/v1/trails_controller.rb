class Api::V1::TrailsController < ApplicationController
  respond_to :json

  def index
    @trails = Trail.paginate(page: params[:page], per_page: 30)

    respond_with @trails
  end

  def show
    @trail = Trail.find(params[:id])

    respond_with @trail
  end

  def search
    if params[:state]
      @trails = Trail.filter_by_state(params[:state])
    elsif params[:lat] && params[:lng]
      @trails = Trail.filter_by_lat_lng(params[:lat].to_f, params[:lng].to_f)
    end
    respond_with @trails
  end
end
