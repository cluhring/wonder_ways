class CreateSpecies < ActiveRecord::Migration
  def change
    create_table :species do |t|
      t.references :trail
      t.string :kingdom
      t.string :common_name
      t.string :photo_url
      t.string :clip_url
      t.decimal :lat, precision: 10, scale: 6
      t.decimal :lng, precision: 10, scale: 6

      t.timestamps null: false
    end
  end
end
