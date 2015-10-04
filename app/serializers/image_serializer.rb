class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image, :url, :created_at

  def url
    @object.image.url
  end

end
