module Api
  module V1
    class ImagesController < ApplicationController

      respond_to :json

      def show
        @image = Image.find params[:id]
        respond_with @image
      end

      def create
        @image = Image.new image_params
        if @image.save
          respond_with @image, status: :created, location: false
        else
          respond_with @image, status: :unprocessable_entity
        end
      end

      def destroy
        @image = Image.find params[:id]
        @image.destroy
        render json: {}, status: :no_content
      end

      private
        def image_params
          params.require(:image).permit :image
        end
    end
  end
end
