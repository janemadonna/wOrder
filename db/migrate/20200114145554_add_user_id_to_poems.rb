class AddUserIdToPoems < ActiveRecord::Migration[6.0]
  def change
    add_column :poems, :user_id, :integer
  end
end
