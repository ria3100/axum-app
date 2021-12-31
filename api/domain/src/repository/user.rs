use async_trait::async_trait;

use crate::model::user::{NewUser, User};

#[async_trait]
pub trait UserRepository {
    async fn find(&self, uid: &String) -> anyhow::Result<Option<User>>;
    async fn insert(&self, source: NewUser) -> anyhow::Result<()>;
}
