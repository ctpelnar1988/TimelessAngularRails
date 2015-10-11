Rails.application.routes.draw do
  resources :messages

  # Pages Controller
  get '/' => 'pages#index'
  get '/about' => 'pages#about'

  get '/for_men' => 'pages#for_men'
  get '/vip' => 'pages#vip'
  get '/international' => 'pages#international'
  get '/media' => 'pages#media'
  get '/gallery' => 'pages#gallery'



  # Messages Controller
  get '/contact' => 'messages#index'
end
