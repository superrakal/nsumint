module Api
  module V1
    class FacultiesController < ApplicationController
      respond_to :json

      def index
        @faculties = Faculty.all.order(name: :asc)
        respond_with @faculties
      end

      def show
        @faculty = Faculty.find params[:id]
        respond_with @faculty
      end
    end
  end
end

