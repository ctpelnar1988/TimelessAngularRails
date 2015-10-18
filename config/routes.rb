Rails.application.routes.draw do
  resources :messages

  # Pages Controller
  root 'pages#index'
  get '/about' => 'pages#about'
  get '/procedures' => 'pages#procedures'
  get '/for_men' => 'pages#for_men'
  get '/vip' => 'pages#vip'
  get '/international' => 'pages#international'
  get '/media' => 'pages#media'
  get '/gallery' => 'pages#gallery'
  get '/location' => 'pages#location'


  # Messages Controller
  get '/contact' => 'messages#new'
  post 'message_sent' => 'messages#create'
  get '/message_sent' => 'messages#show'

  # Blogs Controller
  get '/blogs_home' => 'blogs#index'
  get '/october_2015' => 'blogs#october_2015'
  get '/september_2015' => 'blogs#september_2015'
  get '/august_2015' => 'blogs#august_2015'
  get '/july_2015' => 'blogs#july_2015'
  get '/june_2015' => 'blogs#june_2015'
  get '/may_2015' => 'blogs#may_2015'

  get '/october_2014' => 'blogs#october_2014'
  get '/september_2014' => 'blogs#september_2014'
  get '/august_2014' => 'blogs#august_2014'
  get '/july_2014' => 'blogs#july_2014'
  get '/june_2014' => 'blogs#june_2014'
  get '/may_2014' => 'blogs#may_2014'


end
