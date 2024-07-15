class CreateUserPets < ActiveRecord::Migration[7.1]
  def change
    create_table :user_pets do |t|
      t.string :owner
      t.references :user, null: false, foreign_key: true
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
