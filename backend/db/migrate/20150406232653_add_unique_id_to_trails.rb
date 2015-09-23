class AddUniqueIdToTrails < ActiveRecord::Migration
  def change
    add_column :trails, :unique_id, :integer
  end
end
