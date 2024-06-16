import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButon";

import PostsPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
    return ( 
        <div>
            <BackButton text="Go Back" link="/"/>
            <PostsTable/>
            <PostsPagination/>
        </div>
     );
}
 
export default PostsPage;