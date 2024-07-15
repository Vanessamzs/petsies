class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.string :treatment_type
      t.string :event_type
      t.boolean :recurrence
      t.date :date
      t.text :details
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
