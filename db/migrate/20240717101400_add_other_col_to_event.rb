class AddOtherColToEvent < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :start, :date
    add_column :events, :end, :date
    remove_column :events, :date, :date
    add_column :events, :title, :string
    remove_column :events, :recurrence, :boolean
    add_column :events, :recurrence, :string
  end
end
