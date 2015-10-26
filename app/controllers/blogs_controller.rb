class BlogsController < ApplicationController



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
