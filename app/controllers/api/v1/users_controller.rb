module Api
  module V1
    class UsersController < ApplicationController
      respond_to :json

      before_action :set_user, only: [:update]

      def index
        @users = User.all
        respond_with @users
      end

      def show
        @user = User.find params[:id]
        respond_with @user
      end

      def create
        @user = User.new user_params
        if @user.save
          respond_with @user, status: :created, location: false
        else
          respond_with @user, status: :unprocessable_entity
        end
      end

      def update
        if @user.update user_params
          if params[:user][:user_faculties] == nil
            @user.user_faculties = []
          end
          respond_with @user, status: :updated, location: false
        else
          respond_with @user, status: :unprocessable_entity
        end
      end

      def search_user
        @me = User.find params[:id]
        @users = User.all.where(status: 'searching')
        @users.each do |user|
          @user = User.find(user.id)
          if @user.id != @me.id
            @me.user_faculties.each do |faculty|
              if @user.my_faculty == faculty
                @user.user_faculties.each do |user_faculty|
                  if @me.my_faculty == user_faculty
                    if (@me.user_sex == 'all') || (@me.user_sex == @user.my_sex)
                      if (@user.user_sex == 'all') || (@user.user_sex == @me.my_sex)
                        @user.status = 'chatting'
                        @me.status = 'chatting'
                        @user.user_socket_id = @me.socket_id
                        @me.user_socket_id   = @user.socket_id
                        if (@user.save &&  @me.save)
                          render json: @user, status: 200
                          return
                        end
                      end
                    end
                  end
                end
              end
           end
          end
          @user = nil
        end
        if @user == nil
          render json: @user, status: 205
        end
      end

      def kick_user_from_queue
        @user = User.find_by(socket_id: params[:socket_id])
        if @user.status == 'searching'
          @user.status = 'offline'
          @user.save
        end
        render json: @user, status: 200
      end

      private
        def user_params
          params.require(:user).permit :my_sex, :user_sex, :status, :my_faculty_id, :socket_id, :user_socket_id, :nickname, user_faculties:[:id, :name]
        end

        def set_user
          @user = User.find params[:id]
        end
    end
  end
end

