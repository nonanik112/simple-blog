module Authors
  class PostsController < AuthorsController
    before_action :set_post, only: [:edit, :update, :destroy]

    # GET /posts
    # GET /posts.json
    def index
      @posts = current_author.posts
    end

    # GET /posts/new
    def new
      @posts = current_author.posts.build
    end

    # GET /posts/1/edit
    def edit
      @element = @post.elements.build
    end

    # POST /posts
    def create
      @posts = current_author.posts.build(post_params)

        if @post.save
          redirect_to edit_post_path(@post)
        else
          broadcast_errors @posts, post_params
        end
      end

    # PATCH/PUT /posts/1
    def update
        if @post.update(post_params)
            redirect_to edit_post_path(@post)
        else
            broadcast_errors @post, post_params
        end
      end

    # DELETE /posts/1
    def destroy
      @post.destroy
       redirect_to elements_url, notice: 'Post was successfully destroyed.'
      end


    private
      # Use callbacks to share common setup or constraints between actions.
      def set_post
        @post = current_author.posts.friendly.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def post_params
        params.require(:post).permit(:title, :description, :header_image)
      end
    end
  end
