class Band < ApplicationRecord
  has_many :songs, dependent: :destroy
end
