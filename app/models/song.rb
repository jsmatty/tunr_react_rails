class Song < ApplicationRecord
  belongs_to :artist, :band
end
