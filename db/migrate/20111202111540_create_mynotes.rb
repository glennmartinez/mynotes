class CreateMynotes < ActiveRecord::Migration
  def change
    create_table :mynotes do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
