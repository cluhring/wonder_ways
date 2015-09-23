class CreateActivities < ActiveRecord::Migration
  def change
    create_table   :activities do |t|
      t.references :trail, index: true
      t.string     :activity_type_name
      t.string     :url
      t.string     :activity_description
      t.integer    :length

      t.timestamps null: false
    end
    add_foreign_key :activities, :trails
  end
end
