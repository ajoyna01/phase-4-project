class ParkSerializer < ActiveModel::Serializer
  attributes :id, :fullName, :url, :img, :has_visited
end
