class EntrySerializer < ActiveModel::Serializer
  attributes :id, :notes
  has_one :park
  has_one :user
end
