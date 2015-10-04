module Api
  module V1
    class StickersController < ApplicationController

      respond_to :json

      def index
        @stickers = Sticker.all
        respond_with @stickers
      end

      def show
        @sticker = Sticker.find params[:id]
        respond_with @sticker
      end
    end
  end
end
