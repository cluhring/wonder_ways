Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :trails, defaults: { format: 'json' }
      get "/search" => "trails#search", defaults: { format: 'json'}
    end
  end


end
