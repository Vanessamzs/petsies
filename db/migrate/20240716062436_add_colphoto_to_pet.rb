class AddColphotoToPet < ActiveRecord::Migration[7.1]
  def change
    add_column :pets, :photo_url, :string
  end
end
