class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :user_message
      t.timestamps null: false
    end
  end
end
