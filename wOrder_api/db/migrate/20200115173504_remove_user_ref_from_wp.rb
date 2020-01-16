class RemoveUserRefFromWp < ActiveRecord::Migration[6.0]
  def change
    remove_column :words, :user_id
    remove_column :poems, :user_id
  end
end
