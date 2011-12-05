class Mynote < ActiveRecord::Base
  attr_accessible :title, :content
  
  def to_json(options = {})
    super(options.merge(:only=> [:id, :title, :content]))
  end
end
