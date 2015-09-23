class AddScientificNameToSpecies < ActiveRecord::Migration
  def change
    add_column :species, :scientific_name, :string
  end
end
