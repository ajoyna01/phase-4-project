class User < ApplicationRecord
  has_secure_password
  
  validates :username, presence: true
  validates :username, uniqueness: true

  has_many :entries
  has_many :parks, through: :entries
end
