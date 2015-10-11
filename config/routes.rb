Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :faculties, only: [:index, :show]
      resources :stickers, only: [:index, :show]
      resources :users, only: [:index, :show, :create, :update]
      resources :images, only: [:show, :create, :destroy]
      post 'users/search_user'
    end
  end

  get '/user/kick_user_from_queue', to: 'api/v1/users#kick_user_from_queue'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'welcome#index'
  get 'ios', to: 'welcome#ios'
end
