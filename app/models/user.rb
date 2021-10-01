class User < ApplicationRecord
  has_many :entries
  has_many :parks, through: :entries

  validates :username, presence: true, uniqueness: true
  validates :email, uniqueness: true
end
