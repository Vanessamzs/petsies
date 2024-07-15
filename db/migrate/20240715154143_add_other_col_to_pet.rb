class AddOtherColToPet < ActiveRecord::Migration[7.1]
  def change
    add_column :pets, :animal_type, :string
  end
end
