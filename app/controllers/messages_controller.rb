class MessagesController < ApplicationController

  def contact
    @message = Message.new
  end

end
