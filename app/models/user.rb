class User
  include Mongoid::Document
  include Mongoid::Timestamps

  field :my_sex
  field :user_sex
  field :socket_id
  field :user_socket_id
  field :status, default: 'created'
  field :nickname, default: ' '

  belongs_to :my_faculty, class_name: 'Faculty'
  embeds_many :user_faculties, class_name: 'Faculty'
end
