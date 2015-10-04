class UserSerializer < ActiveModel::Serializer
  attributes :id, :my_sex, :user_sex, :my_faculty_id, :status, :socket_id, :user_socket_id, :nickname
  has_many :user_faculties
end
