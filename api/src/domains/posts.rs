use super::Id;
use failure::Error;

pub type PostId = Id<Post>;

#[derive(Debug, Clone)]
pub struct Post {
    pub id: PostId,
    pub title: String,
    pub body: String,
    pub published: bool,
}

impl Post {
    // pub fn create(title: String, body: String) -> Self {
    //     Self {
    //         id: Default::default(),
    //         title: title,
    //         body: body,
    //         published: false,
    //     }
    // }
}

pub trait PostRepository {
    fn find_by_id(&self, post_id: PostId) -> Result<Post, Error>;
    fn list(&self) -> Result<Vec<Post>, Error>;
    fn insert(&self, post: &Post) -> Result<(), Error>;
    fn update(&self, post: &Post) -> Result<(), Error>;
    fn delete(&self, post: &Post) -> Result<(), Error>;
}
