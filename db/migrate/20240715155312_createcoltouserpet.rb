class Createcoltouserpet < ActiveRecord::Migration[7.1]
  def change
    add_column :user_pets, :owner, :boolean
  end
end
