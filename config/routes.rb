Rails.application.routes.draw do
  resources :messages

  # Pages Controller:
  root 'pages#index'
  get '/about' => 'pages#about'
  get '/procedures' => 'pages#procedures'
  get '/for_men' => 'pages#for_men'
  get '/vip' => 'pages#vip'
  get '/international' => 'pages#international'
  get '/media' => 'pages#media'
  get '/gallery' => 'pages#gallery'
  get '/location' => 'pages#location'


  # Messages Controller:
  get '/contact' => 'messages#new'
  post 'message_sent' => 'messages#create'
  get '/message_sent' => 'messages#show'


  # Blogs Controller:
  get '/blogs_home' => 'blogs#index'
  get '/blog_month_archive' => 'blogs#show_month'
  get '/blog_category_archive' => 'blogs#show_category'
  get '/blog_page' => 'blogs#show_page'

  end