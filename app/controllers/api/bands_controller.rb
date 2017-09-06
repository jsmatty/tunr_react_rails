class Api::BandsController < ApplicationController
  before_action :authenticate_user!


  def index
    @user = current_user
    @bands = Band.all 
    render json: {
    user: @user,
    bands: @bands
    }
  end

  def create
    @band = Band.find(params[:id])
    @songs = @band.songs.all
    render json: {
      band: @band,
      songs: @songs
    }
  end

  def show
    @band = Band.new band_params

    if @band.save
      render json: @band
    else
      render json: {
        message: 'Error when creating Band'
      }
    end
  end

  def update
     @band = Band.find params[:id]

    if @band.update(band_params)
      render json: @band
    else
      render json: {
        message: 'Error when updating Band'
      }
    end
  end

  def destroy 
     @band = Band.find(params[:id])
    @band.destroy

    render json: {
      message: 'Band successfully destroyed'
    }
  end

   private
  def band_params
    params.require(:band).permit(:name, :photo_url, :nationality)
  end           
end
