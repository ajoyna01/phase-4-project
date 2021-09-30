class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :fullName
      t.string :url
      t.string :img
      t.boolean :has_visited

      t.timestamps
    end
  end
end
