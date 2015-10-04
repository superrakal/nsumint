class StickerSerializer < ActiveModel::Serializer
  attributes :id, :image, :url

  def url
    @object.image.url
  end

end
