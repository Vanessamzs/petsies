class Changecoltouserpet < ActiveRecord::Migration[7.1]
  def change
    remove_column :user_pets, :owner
  end
end
