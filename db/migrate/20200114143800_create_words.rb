class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :title
      t.string :synonym

      t.timestamps
    end
  end
end
