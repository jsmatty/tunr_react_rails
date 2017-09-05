Rails.application.routes.draw do
  #resources :api do
  namespace :api do
    resources :artists do
      resources :songs, only: [:index, :show]
    end
  end
 end


