module Readers
class HomeController < ReadersController
  def def index
    @posts = Post.published.most_recently_published
  end   
end
end