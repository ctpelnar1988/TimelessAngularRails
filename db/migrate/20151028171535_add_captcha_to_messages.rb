class AddCaptchaToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :captcha, :string
  end
end
