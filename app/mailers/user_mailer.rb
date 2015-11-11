class UserMailer < ApplicationMailer
  default from: "notifications@example.com"

  def timeless_email(message)
    @message = message
    @url  = 'http://localhost:3000'
    mail(to: ENV['gmail_username'], subject: 'Timeless Laser Client Message')
  end

  def user_email(message)
    @message = message
    @url  = 'http://localhost:3000'
    mail(to: @message.email, subject: 'Timeless Laser Confirmation')
  end

end
