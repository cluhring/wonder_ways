class AddUniqueIdToActivities < ActiveRecord::Migration
  def change
    add_column :activities, :unique_id, :string
  end
end
