class User < ApplicationRecord
    has_secure_password
    has_many :words
    has_many :poems
end
