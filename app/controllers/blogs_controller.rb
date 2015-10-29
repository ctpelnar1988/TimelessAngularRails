class BlogsController < ApplicationController

  before_action :confirm_logged_in, :except => [:login]

  def login
    redirect_to(:action => 'login', :controller => 'users')
  end

  def index
  end

  def show_month
    @month_year = params[:month_year]
    @year = params[:year]
  end

  def show_category
    @category = params[:category]
  end

  def show_page
    @date = params[:date]
  end


end
