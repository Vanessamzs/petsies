class CreatePets < ActiveRecord::Migration[7.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.date :birth_date
      t.float :weight

      t.timestamps
    end
  end
end
