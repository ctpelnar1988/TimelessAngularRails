class MessagesController < ApplicationController

  def new
    @message = Message.new
  end

  def create
  @message = Message.new(message_params)
    if @message.save
      UserMailer.timeless_email(@message).deliver_now
      UserMailer.user_email(@message).deliver_now
      redirect_to '/message_sent'
    else
      render 'new'
    end
  end

  def show
  end

    private
  def message_params
    return params.require(:message).permit(:name, :email, :phone_number, :user_message)
  end


end
